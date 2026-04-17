import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const STEPS = ['Leave Type', 'Personal Info', 'Employer', 'Medical', 'Records', 'Payment'];

export default function Intake() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    leaveType: 'self',
    plan: 'standard',
    name: '', email: '', dob: '', phone: '', address: '',
    employer: '', hrContact: '', leaveStart: '', leaveEnd: '',
    condition: '', symptoms: '', onsetDate: '', priorTreatment: '', workImpact: '',
    records: [],
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  async function submit() {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.url) window.location.href = json.url;
      else setError(json.error || 'Unable to start checkout. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Medical Leave Intake — LeaveRx</title>
      </Head>
      <div className="bg-cream min-h-screen text-ink">
        <Nav />
        <div className="container-narrow py-12">
          <div className="text-center">
            <div className="eyebrow">Medical Leave Intake</div>
            <h1 className="mt-3 font-display text-3xl md:text-4xl text-ink">
              Tell us about your situation.
            </h1>
            <p className="mt-3 text-slate text-[15.5px]">
              Takes about 5–7 minutes. Your information is HIPAA-protected and never shared with your employer.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-1.5 rounded-full ${i <= step ? 'bg-navy' : 'bg-mist'}`}
                />
                <div
                  className={`mt-2 text-[11px] font-semibold uppercase tracking-eyebrow text-center ${
                    i === step ? 'text-navy' : 'text-fog'
                  }`}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card p-6 md:p-8">
            {step === 0 && (
              <div>
                <h2 className="font-display text-xl text-ink">Who is the leave for?</h2>
                <div className="mt-5 grid md:grid-cols-2 gap-4">
                  {[
                    { v: 'self', t: 'My own medical condition', d: 'DOL Form WH-380-E' },
                    { v: 'family', t: 'Caring for a family member', d: 'DOL Form WH-380-F' },
                  ].map((o) => (
                    <Choice
                      key={o.v}
                      selected={data.leaveType === o.v}
                      onClick={() => set('leaveType', o.v)}
                      title={o.t}
                      sub={o.d}
                    />
                  ))}
                </div>
                <h3 className="mt-8 font-display text-lg text-ink">Turnaround</h3>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  {[
                    { v: 'standard', t: 'Standard — $149', d: '24–48 hour turnaround' },
                    { v: 'expedited', t: 'Expedited — $199', d: 'Same-day turnaround' },
                  ].map((o) => (
                    <Choice
                      key={o.v}
                      selected={data.plan === o.v}
                      onClick={() => set('plan', o.v)}
                      title={o.t}
                      sub={o.d}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <Fields
                title="Personal information"
                fields={[
                  ['name', 'Full legal name', 'text'],
                  ['email', 'Email', 'email'],
                  ['dob', 'Date of birth', 'date'],
                  ['phone', 'Phone', 'tel'],
                  ['address', 'Home address', 'text'],
                ]}
                data={data}
                set={set}
              />
            )}

            {step === 2 && (
              <Fields
                title="Employer information"
                fields={[
                  ['employer', 'Employer / company name', 'text'],
                  ['hrContact', 'HR contact (name or email)', 'text'],
                  ['leaveStart', 'Leave start date', 'date'],
                  ['leaveEnd', 'Expected leave end date', 'date'],
                ]}
                data={data}
                set={set}
              />
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-display text-xl text-ink">Medical condition</h2>
                <Input label="Primary condition or diagnosis" v={data.condition} on={(v) => set('condition', v)} />
                <Textarea label="Symptoms you're experiencing" v={data.symptoms} on={(v) => set('symptoms', v)} />
                <Input label="When did symptoms begin?" type="date" v={data.onsetDate} on={(v) => set('onsetDate', v)} />
                <Textarea label="Prior treatment or providers seen" v={data.priorTreatment} on={(v) => set('priorTreatment', v)} />
                <Textarea label="How does this impact your ability to work?" v={data.workImpact} on={(v) => set('workImpact', v)} />
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="font-display text-xl text-ink">Upload supporting records</h2>
                <p className="mt-2 text-[14.5px] text-slate">
                  Optional but strongly recommended. Office notes, imaging, diagnosis letters, prescriptions, or prior doctor&apos;s notes.
                </p>
                <label className="mt-5 block border-2 border-dashed border-mist rounded-xl p-10 text-center cursor-pointer hover:border-navy transition">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) =>
                      set(
                        'records',
                        Array.from(e.target.files || []).map((f) => f.name)
                      )
                    }
                  />
                  <div className="font-medium text-ink">Click to upload</div>
                  <div className="text-xs text-fog mt-1">PDF, JPG, PNG up to 25MB each</div>
                  {data.records.length > 0 && (
                    <div className="mt-4 text-sm text-approved font-semibold">
                      {data.records.length} file(s) selected
                    </div>
                  )}
                </label>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="font-display text-xl text-ink">Review & payment</h2>
                <div className="mt-5 space-y-3 text-[14.5px]">
                  <Row label="Leave type" v={data.leaveType === 'self' ? 'Own condition (WH-380-E)' : 'Family member (WH-380-F)'} />
                  <Row label="Plan" v={data.plan === 'expedited' ? 'Expedited — $199' : 'Standard — $149'} />
                  <Row label="Name" v={data.name} />
                  <Row label="Employer" v={data.employer} />
                  <Row label="Leave start" v={data.leaveStart} />
                  <Row label="Condition" v={data.condition} />
                </div>
                <div className="mt-6 p-4 rounded-lg bg-navy-soft text-[13.5px] text-navy-deep">
                  Your $149 evaluation covers <strong>every program you qualify for</strong> — FMLA, paid family leave, short-term disability, and ADA accommodations.
                </div>
                <p className="mt-4 text-xs text-fog leading-relaxed">
                  By continuing, you agree to our Terms of Service and HIPAA Notice. You will be redirected to Stripe to complete payment. If the physician cannot certify your condition, you receive a full refund.
                </p>
                {error && <div className="mt-4 text-sm text-alert">{error}</div>}
                <button onClick={submit} disabled={submitting} className="btn-primary mt-6 w-full justify-center">
                  {submitting ? 'Starting checkout…' : `Pay ${data.plan === 'expedited' ? '$199' : '$149'} & submit`}
                </button>
                <div className="mt-4 flex items-center justify-center gap-3 text-[12px] text-fog flex-wrap">
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> HIPAA secure</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> 256-bit encryption</span>
                  <span>·</span>
                  <span>100% money-back guarantee</span>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={back}
                disabled={step === 0}
                className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < STEPS.length - 1 && (
                <button onClick={next} className="btn-primary">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function Choice({ selected, onClick, title, sub }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-xl border-2 transition ${
        selected ? 'border-navy bg-navy-soft' : 'border-mist bg-paper hover:border-navy/50'
      }`}
    >
      <div className="font-medium text-ink">{title}</div>
      <div className="text-[13.5px] text-slate mt-1">{sub}</div>
    </button>
  );
}

function Fields({ title, fields, data, set }) {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      {fields.map(([k, l, t]) => (
        <Input key={k} label={l} type={t} v={data[k]} on={(v) => set(k, v)} />
      ))}
    </div>
  );
}

function Input({ label, type = 'text', v, on }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input type={type} value={v} onChange={(e) => on(e.target.value)} className="field-input" />
    </label>
  );
}
function Textarea({ label, v, on }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <textarea value={v} onChange={(e) => on(e.target.value)} rows={4} className="field-input" />
    </label>
  );
}
function Row({ label, v }) {
  return (
    <div className="flex justify-between gap-4 border-b border-mist pb-2">
      <span className="text-fog">{label}</span>
      <span className="text-ink font-medium text-right">{v || '—'}</span>
    </div>
  );
}
