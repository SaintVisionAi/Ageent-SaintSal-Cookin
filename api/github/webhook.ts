// Example: /pages/api/github/webhook.ts (for Next.js)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const payload = req.body;

  // Basic test
  if (payload.zen) {
    return res.status(200).json({ message: 'Webhook received', zen: payload.zen });
  }

  res.status(400).json({ error: 'Invalid payload' });
}
