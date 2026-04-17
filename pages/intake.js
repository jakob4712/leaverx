import { useState } from 'react';
import Head from 'next/head';
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
      <Nav />
      <div className="container-narrow py-12">
        <div className="spec text-bureau">{`Step ${String(step + 1).padStart(2, '0')} / ${String(STEPS.length).padStart(2, '0')}`}</div>
        <h1 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
          {STEPS[step]}
        </h1>

        <div className="mt-8 grid grid-cols-6 gap-1.5">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-1 ${i <= step ? 'bg-bureau' : 'bg-rule'}`} />
          ))}
        </div>

        <div className="mt-8 card-paper p-6 md:p-8">
          {step === 0 && (
            <div>
              <div className="spec mb-4">Who is the leave for?</div>
              <div className="grid md:grid-cols-2 gap-3">
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
              <div className="spec mt-8 mb-4">Turnaround</div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { v: 'standard', t: 'Standard — $149', d: '24-48 hour turnaround' },
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
              <Input label="Primary condition or diagnosis" v={data.condition} on={(v) => set('condition', v)} />
              <Textarea label="Symptoms you're experiencing" v={data.symptoms} on={(v) => set('symptoms', v)} />
              <Input label="When did symptoms begin?" type="date" v={data.onsetDate} on={(v) => set('onsetDate', v)} />
              <Textarea label="Prior treatment or providers seen" v={data.priorTreatment} on={(v) => set('priorTreatment', v)} />
              <Textarea label="How does this impact your ability to work?" v={data.workImpact} on={(v) => set('workImpact', v)} />
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="spec mb-4">Upload supporting records</div>
              <p className="text-[14.5px] text-graphite leading-relaxed">
                Optional but strongly recommended. Office notes, imaging, diagnosis letters, prescriptions, or prior doctor&apos;s notes.
              </p>
              <label className="mt-5 block border border-dashed border-rule rounded-sm p-10 text-center cursor-pointer hover:border-bureau hover:bg-shelf transition">
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
                <div className="font-body font-medium text-ink">Click to upload</div>
                <div className="num text-xs text-ash mt-1">PDF, JPG, PNG up to 25MB each</div>
                {data.records.length > 0 && (
                  <div className="mt-4 num text-sm text-stamp">
                    {data.records.length} file(s) selected
                  </div>
                )}
              </label>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="spec mb-4">Order summary</div>
              <div className="num text-[14px] text-ink">
                <Row label="Leave type" v={data.leaveType === 'self' ? 'Own condition (WH-380-E)' : 'Family member (WH-380-F)'} />
                <Row label="Plan" v={data.plan === 'expedited' ? 'Expedited — $199' : 'Standard — $149'} />
                <Row label="Name" v={data.name} />
                <Row label="Employer" v={data.employer} />
                <Row label="Leave start" v={data.leaveStart} />
                <Row label="Condition" v={data.condition} />
              </div>
              <div className="mt-6 p-4 bg-bureau-soft border border-bureau-soft rounded-sm">
                <div className="spec text-bureau-deep">Included with this evaluation</div>
                <ul className="mt-2 text-[13.5px] text-bureau-deep leading-relaxed">
                  <li>FMLA form (WH-380-E or WH-380-F)</li>
                  <li>State paid leave certification (if applicable)</li>
                  <li>ADA accommodation letter (if applicable)</li>
                  <li>STD claim support documentation (if applicable)</li>
                </ul>
              </div>
              <p className="mt-6 text-xs text-ash leading-relaxed">
                By continuing, you agree to our Terms of Service and HIPAA Notice. You will be redirected to Stripe to complete payment. If the physician cannot certify your condition, you receive a full refund.
              </p>
              {error && <div className="mt-4 text-sm text-alarm">{error}</div>}
              <button onClick={submit} disabled={submitting} className="btn-bureau mt-6 w-full justify-center">
                {submitting ? 'Starting checkout…' : `Pay ${data.plan === 'expedited' ? '$199' : '$149'} & submit`}
              </button>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button onClick={back} disabled={step === 0} className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed">
              ← Back
            </button>
            {step < STEPS.length - 1 && (
              <button onClick={next} className="btn-bureau">
                Continue →
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Choice({ selected, onClick, title, sub }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-4 rounded-sm border transition ${
        selected ? 'border-bureau bg-bureau-soft' : 'border-rule bg-cardstock hover:border-bureau'
      }`}
    >
      <div className="font-body font-medium text-ink">{title}</div>
      <div className="num text-[12px] text-ash mt-1">{sub}</div>
    </button>
  );
}

function Fields({ fields, data, set }) {
  return (
    <div className="space-y-5">
      {fields.map(([k, l, t]) => (
        <Input key={k} label={l} type={t} v={data[k]} on={(v) => set(k, v)} />
      ))}
    </div>
  );
}

function Input({ label, type = 'text', v, on }) {
  return (
    <label className="block">
      <span className="field-spec">{label}</span>
      <input type={type} value={v} onChange={(e) => on(e.target.value)} className="input-line" />
    </label>
  );
}

function Textarea({ label, v, on }) {
  return (
    <label className="block">
      <span className="field-spec">{label}</span>
      <textarea value={v} onChange={(e) => on(e.target.value)} rows={3} className="input-line resize-none" />
    </label>
  );
}

function Row({ label, v }) {
  return (
    <div className="flex justify-between gap-4 border-b border-rule py-2">
      <span className="text-ash">{label}</span>
      <span className="text-ink text-right">{v || '—'}</span>
    </div>
  );
}
