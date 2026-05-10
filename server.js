const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const GROQ_KEY = process.env.GROQ_KEY || '';
const GNEWS_KEY = process.env.GNEWS_KEY || '';

// ── Rate limiting (in-memory, per IP) ──────────────────────────────────────
const rateLimits = {};
function checkRate(ip, max = 80, windowMs = 3600000) {
  const now = Date.now();
  if (!rateLimits[ip] || now - rateLimits[ip].start > windowMs) {
    rateLimits[ip] = { count: 1, start: now };
    return true;
  }
  if (rateLimits[ip].count >= max) return false;
  rateLimits[ip].count++;
  return true;
}
// Clean up rate limit map every hour
setInterval(() => {
  const now = Date.now();
  Object.keys(rateLimits).forEach(ip => {
    if (now - rateLimits[ip].start > 3600000) delete rateLimits[ip];
  });
}, 3600000);

// ── News cache (in-memory, refreshes daily) ────────────────────────────────
const newsCache = {};

function today() { return new Date().toISOString().slice(0, 10); }

async function groqCall(prompt, maxTokens = 4096) {
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + GROQ_KEY },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: maxTokens
    })
  });
  const d = await r.json();
  if (d.error) throw new Error('Groq: ' + d.error.message);
  return d.choices[0].message.content;
}

function parseJSON(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON found in response');
  return JSON.parse(text.slice(start, end + 1));
}

// ── API: Health check ──────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    ai: !!GROQ_KEY,
    news: !!GNEWS_KEY,
    version: '2.0.0',
    uptime: Math.round(process.uptime()) + 's'
  });
});

// ── API: AI proxy ──────────────────────────────────────────────────────────
app.post('/api/ai', async (req, res) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  if (!checkRate(ip)) return res.status(429).json({ error: 'Rate limit exceeded. Try again in an hour.' });
  if (!GROQ_KEY) return res.status(503).json({ error: 'AI not available on this server.' });

  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'Invalid prompt.' });
  if (prompt.length > 8000) return res.status(400).json({ error: 'Prompt too long.' });

  try {
    const text = await groqCall(prompt);
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── API: Current affairs (cached per day) ──────────────────────────────────
app.get('/api/news', async (req, res) => {
  const t = today();
  if (newsCache[t]) return res.json(newsCache[t]);
  if (!GROQ_KEY) return res.status(503).json({ error: 'AI not configured.' });

  try {
    let realHeadlines = '';
    let src = 'ai';

    if (GNEWS_KEY) {
      try {
        const rs = await Promise.all(['business', 'nation'].map(tp =>
          fetch(`https://gnews.io/api/v4/top-headlines?country=in&topic=${tp}&max=6&lang=en&apikey=${GNEWS_KEY}`)
            .then(r => r.json()).catch(() => ({ articles: [] }))
        ));
        const arts = rs.flatMap(r => r.articles || []).filter(a => a.title && a.description);
        if (arts.length) {
          realHeadlines = arts.slice(0, 12).map(a => `• ${a.title} — ${a.description}`).join('\n');
          src = 'live';
        }
      } catch (_) {}
    }

    const prompt = realHeadlines
      ? `Today ${t}. REAL Indian news:\n${realHeadlines}\n\nCreate banking exam digest. JSON only:\n{"date":"${t}","source":"live","headline_topics":[{"title":"...","summary":"exam relevance","tags":["tag"]}],"banking_updates":[{"item":"update"}],"economy_indicators":[{"indicator":"name","value":"val","note":"ctx"}],"one_liners":["fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6+ topics, 5+ banking, 5+ indicators, 10+ one-liners, 5 quiz.`
      : `Today ${t}. Create current affairs digest for SBI PO/RBI Grade B. JSON only:\n{"date":"${t}","source":"ai","headline_topics":[{"title":"...","summary":"2-3 sentences exam-relevant","tags":["tag"]}],"banking_updates":[{"item":"RBI/banking update with facts"}],"economy_indicators":[{"indicator":"Repo Rate","value":"6.50%","note":"context"}],"one_liners":["exam fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6 topics, 6 banking, 6 indicators, 12 one-liners, 5 quiz.`;

    const text = await groqCall(prompt);
    const news = parseJSON(text);
    news.source = src;
    newsCache[t] = news;

    // Keep only last 7 days
    const keys = Object.keys(newsCache).sort();
    if (keys.length > 7) keys.slice(0, keys.length - 7).forEach(k => delete newsCache[k]);

    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Serve SPA for all other routes ────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🏦 BankPrep Pro v2.0 running at http://localhost:${PORT}`);
  console.log(`   AI proxy: ${GROQ_KEY ? '✅ active' : '❌ GROQ_KEY not set'}`);
  console.log(`   Live news: ${GNEWS_KEY ? '✅ active' : '⚠️  using AI-generated news'}`);
  console.log(`\nPress Ctrl+C to stop.\n`);
});
