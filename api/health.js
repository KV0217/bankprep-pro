module.exports = function handler(req, res) {
  res.json({
    status: 'ok',
    ai: !!process.env.GROQ_KEY,
    news: !!process.env.GNEWS_KEY,
    version: '2.0.0'
  });
};
