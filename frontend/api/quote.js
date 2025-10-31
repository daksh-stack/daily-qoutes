// Serverless API function for Vercel
// Endpoint: /api/quote
const handler = async (req, res) => {
  try {
    const r = await fetch('https://zenquotes.io/api/random');
    if (!r.ok) throw new Error(`upstream status ${r.status}`);
    const json = await r.json();
    const item = Array.isArray(json) ? json[0] : json;
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ content: item.q, author: item.a });
  } catch (err) {
    console.error('❌ API function error:', err.message || err);
    return res.status(500).json({ error: 'error fetching' });
  }
};

module.exports = handler;
