import { getStripe, PRICES } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const data = req.body || {};
  const plan = data.plan === 'expedited' ? 'expedited' : 'standard';
  const price = PRICES[plan];

  const admin = supabaseAdmin();
  let certificationId = null;
  if (admin) {
    try {
      const { data: patient } = await admin.from('patients').upsert({
        email: data.email, name: data.name, dob: data.dob || null, phone: data.phone, address: data.address,
      }, { onConflict: 'email' }).select().single();

      const { data: cert } = await admin.from('certifications').insert({
        patient_id: patient?.id,
        type: data.leaveType === 'family' ? 'family' : 'self',
        status: 'pending_payment',
        employer_name: data.employer,
        leave_start_date: data.leaveStart || null,
        leave_end_date: data.leaveEnd || null,
        condition_summary: data.condition,
      }).select().single();
      certificationId = cert?.id;

      await admin.from('intake_responses').insert({
        patient_id: patient?.id,
        certification_id: certificationId,
        responses_json: data,
        medical_records_urls: data.records || [],
      });
    } catch (e) {
      console.error('supabase persist failed', e);
    }
  }

  const stripe = getStripe();
  if (!stripe) {
    return res.status(200).json({ url: `/portal?demo=1&cert=${certificationId || 'demo'}` });
  }

  const origin = req.headers.origin || process.env.NEXT_PUBLIC_SITE_URL || '';
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: data.email,
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: price.amount,
          product_data: { name: price.label, description: 'Physician review + DOL Form WH-380 certification' },
        },
        quantity: 1,
      }],
      metadata: { certification_id: certificationId || '', plan },
      success_url: `${origin}/portal?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/intake`,
    });
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Checkout failed' });
  }
}
