import { getStripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase';

export const config = { api: { bodyParser: false } };

async function buffer(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const stripe = getStripe();
  if (!stripe) return res.status(200).json({ ok: true });

  const sig = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, secret);
  } catch (e) {
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const admin = supabaseAdmin();
    if (admin) {
      const certId = session.metadata?.certification_id;
      if (certId) {
        await admin.from('certifications').update({ status: 'pending_review' }).eq('id', certId);
      }
      await admin.from('payments').insert({
        certification_id: certId || null,
        amount: session.amount_total,
        stripe_payment_id: session.payment_intent,
        status: 'paid',
      });
    }
  }

  res.status(200).json({ received: true });
}
