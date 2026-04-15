import Stripe from 'stripe';

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: '2024-06-20' });
}

export const PRICES = {
  standard: { amount: 14900, label: 'FMLA Certification — Standard' },
  expedited: { amount: 19900, label: 'FMLA Certification — Expedited' },
  family: { amount: 14900, label: 'Family Member FMLA Certification' },
  recert: { amount: 9900, label: 'FMLA Recertification' },
};
