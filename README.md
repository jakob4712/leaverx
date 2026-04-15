# LeaveRx

FMLA certification telehealth platform. Next.js Pages Router + Supabase + Stripe + Tailwind, deployable to Vercel.

## Setup

```bash
npm install
cp .env.local.example .env.local
# fill in Supabase + Stripe keys
npm run dev
```

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor to create tables.

## Stripe

Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`. Point webhook to `/api/webhook`.

## Pages

- `/` — landing
- `/intake` — multi-step intake + checkout
- `/portal` — patient portal
- `/clinician` — clinician review queue
- `/legal/*` — privacy, terms, HIPAA, refund

## Deploy

```bash
vercel deploy --prod
```
