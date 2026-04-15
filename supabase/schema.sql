-- LeaveRx Supabase schema
create extension if not exists "pgcrypto";

create table if not exists patients (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  dob date,
  address text,
  phone text,
  created_at timestamptz default now()
);

create table if not exists clinicians (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  credentials text,
  licensed_states text[],
  npi text,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists certifications (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  clinician_id uuid references clinicians(id),
  type text check (type in ('self','family')) default 'self',
  status text default 'pending_payment',
  employer_name text,
  leave_start_date date,
  leave_end_date date,
  condition_summary text,
  form_url text,
  clinical_notes text,
  signed_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id),
  certification_id uuid references certifications(id),
  amount integer,
  stripe_payment_id text,
  status text,
  created_at timestamptz default now()
);

create table if not exists intake_responses (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  certification_id uuid references certifications(id) on delete cascade,
  responses_json jsonb,
  medical_records_urls text[],
  created_at timestamptz default now()
);

alter table patients enable row level security;
alter table certifications enable row level security;
alter table payments enable row level security;
alter table intake_responses enable row level security;

create policy "patients self access" on patients for select using (auth.email() = email);
create policy "certifications self access" on certifications for select using (
  exists (select 1 from patients p where p.id = certifications.patient_id and p.email = auth.email())
);
