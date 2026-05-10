const fs = require('fs');
const path = require('path');

const files = [
  'shell.html','q.js','q2.js','q3.js','q4.js','q5.js',
  'fc.js','fc2.js','study.js','study2.js','desc_int.js',
  'vocab_gk.js','mock_papers.js','esi_notes.js','gk_bank.js',
  'finance_mgmt.js','quant_tricks.js','model_essays.js',
  'reasoning_guide.js','english_guide.js','mega_content.js',
  'final_push.js','banking_terms_ext.js','di_mega.js',
  'english_rc.js','computer_awareness.js','static_gk.js',
  'vocab_mcq.js','logic.js'
];

fs.mkdirSync('public', { recursive: true });

const missing = files.filter(f => !fs.existsSync(f));
if (missing.length) { console.error('Missing:', missing.join(', ')); process.exit(1); }

const out = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
fs.writeFileSync('public/index.html', out, 'utf8');

const kb = (out.length / 1024).toFixed(1);
console.log(`Built public/index.html — ${kb} KB`);
