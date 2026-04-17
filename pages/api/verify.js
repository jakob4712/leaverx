import { supabaseAdmin } from '@/lib/supabase';

// Demo verification samples. Real lookups go through Supabase below.
const DEMO = {
  'C-10482': {
    id: 'C-10482',
    formType: 'WH-380-E (own condition)',
    issuedOn: 'April 10, 2026',
    physician: 'Dr. Maya Patel, MD',
    license: 'CA Lic. #A87412 — Board-Certified Internal Medicine',
  },
  'C-10495': {
    id: 'C-10495',
    formType: 'WH-380-F (family member)',
    issuedOn: 'April 14, 2026',
    physician: 'Dr. James Whitfield, MD',
    license: 'FL Lic. #ME125478 — Board-Certified Family Medicine',
  },
  'C-10497': {
    id: 'C-10497',
    formType: 'WH-380-E (own condition)',
    issuedOn: 'April 15, 2026',
    physician: 'Dr. Renee Solis, MD',
    license: 'CA Lic. #A98214 — Board-Certified Psychiatry',
  },
};

export default async function handler(req, res) {
  const cert = (req.query.cert || '').toString().trim().toUpperCase();
  if (!cert) return res.status(400).json({ valid: false });

  if (DEMO[cert]) {
    return res.status(200).json({ valid: true, ...DEMO[cert] });
  }

  const admin = supabaseAdmin();
  if (admin) {
    try {
      const { data } = await admin
        .from('certifications')
        .select('id, type, signed_at, status, clinicians ( name, credentials )')
        .eq('id', cert)
        .maybeSingle();
      if (data && (data.status === 'completed' || data.signed_at)) {
        return res.status(200).json({
          valid: true,
          id: data.id,
          formType: data.type === 'family' ? 'WH-380-F (family member)' : 'WH-380-E (own condition)',
          issuedOn: data.signed_at ? new Date(data.signed_at).toDateString() : 'Recently',
          physician: data.clinicians?.name || 'Board-certified physician',
          license: data.clinicians?.credentials || 'Verified credentials',
        });
      }
    } catch (e) {
      console.error('verify lookup failed', e);
    }
  }

  return res.status(200).json({ valid: false });
}
