module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Cache at CDN level for 1 hour, serve stale for 24h while revalidating
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  const GROQ_KEY = process.env.GROQ_KEY;
  const GNEWS_KEY = process.env.GNEWS_KEY;
  if (!GROQ_KEY) return res.status(503).json({ error: 'AI not configured.' });

  const today = new Date().toISOString().slice(0, 10);

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
      ? `Today ${today}. REAL Indian news:\n${realHeadlines}\n\nCreate banking exam digest. JSON only:\n{"date":"${today}","source":"live","headline_topics":[{"title":"...","summary":"exam relevance","tags":["tag"]}],"banking_updates":[{"item":"update"}],"economy_indicators":[{"indicator":"name","value":"val","note":"ctx"}],"one_liners":["fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6+ topics, 5+ banking, 5+ indicators, 10+ one-liners, 5 quiz.`
      : `Today ${today}. Create current affairs digest for SBI PO/RBI Grade B. JSON only:\n{"date":"${today}","source":"ai","headline_topics":[{"title":"...","summary":"2-3 sentences exam-relevant","tags":["tag"]}],"banking_updates":[{"item":"RBI/banking update with facts"}],"economy_indicators":[{"indicator":"Repo Rate","value":"6.50%","note":"context"}],"one_liners":["exam fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6 topics, 6 banking, 6 indicators, 12 one-liners, 5 quiz.`;

    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + GROQ_KEY },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 4096
      })
    });
    const d = await r.json();
    if (d.error) throw new Error(d.error.message);

    const text = d.choices[0].message.content;
    const start = text.indexOf('{'), end = text.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error('Invalid AI response');
    const news = JSON.parse(text.slice(start, end + 1));
    news.source = src;
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
