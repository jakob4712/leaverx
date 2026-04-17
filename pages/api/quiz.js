import { supabaseAdmin } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { answers = {}, results = [] } = req.body || {};
  const email = answers.email;

  if (!email) return res.status(400).json({ error: 'Missing email' });

  const admin = supabaseAdmin();
  if (admin) {
    try {
      // Upsert lead as a patient (patients table already supports email-only).
      const { data: patient } = await admin
        .from('patients')
        .upsert({ email }, { onConflict: 'email' })
        .select()
        .single();

      // Persist quiz responses on intake_responses for re-use during checkout.
      await admin.from('intake_responses').insert({
        patient_id: patient?.id,
        responses_json: { source: 'quiz', answers, results },
      });
    } catch (e) {
      console.error('quiz persist failed', e);
    }
  }

  // TODO: send results email via transactional email provider.
  return res.status(200).json({ ok: true });
}
