import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const STEPS = ['Leave Type','Personal Info','Employer','Medical','Records','Payment'];

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

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

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
    } catch (e) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-warm-gray min-h-screen">
      <Nav />
      <div className="container-x py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">FMLA Certification Intake</h1>
        <p className="mt-2 text-navy/70">Takes about 5–7 minutes. Your information is encrypted and HIPAA-protected.</p>

        {/* Progress */}
        <div className="mt-8 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex-1">
              <div className={`h-1.5 rounded-full ${i <= step ? 'bg-accent-green' : 'bg-navy/10'}`} />
              <div className={`mt-2 text-[11px] font-semibold ${i === step ? 'text-navy' : 'text-navy/40'}`}>{s}</div>
            </div>
          ))}
        </div>

        <div className="card mt-8">
          {step === 0 && (
            <div>
              <h2 className="font-bold text-xl text-navy">Who is the leave for?</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {[
                  { v: 'self', t: 'My own medical condition', d: 'DOL Form WH-380-E' },
                  { v: 'family', t: 'Caring for a family member', d: 'DOL Form WH-380-F' },
                ].map(o => (
                  <button key={o.v} onClick={() => set('leaveType', o.v)} className={`text-left p-5 rounded-xl border-2 transition ${data.leaveType === o.v ? 'border-accent-green bg-accent-green/5' : 'border-navy/10 hover:border-navy/30'}`}>
                    <div className="font-bold text-navy">{o.t}</div>
                    <div className="text-sm text-navy/60 mt-1">{o.d}</div>
                  </button>
                ))}
              </div>
              <h3 className="mt-8 font-bold text-navy">Turnaround</h3>
              <div className="mt-3 grid md:grid-cols-2 gap-4">
                {[
                  { v: 'standard', t: 'Standard — $149', d: '24–48 hour turnaround' },
                  { v: 'expedited', t: 'Expedited — $199', d: 'Same-day turnaround' },
                ].map(o => (
                  <button key={o.v} onClick={() => set('plan', o.v)} className={`text-left p-5 rounded-xl border-2 transition ${data.plan === o.v ? 'border-accent-green bg-accent-green/5' : 'border-navy/10 hover:border-navy/30'}`}>
                    <div className="font-bold text-navy">{o.t}</div>
                    <div className="text-sm text-navy/60 mt-1">{o.d}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <Fields title="Personal information" fields={[
              ['name','Full legal name','text'],
              ['email','Email','email'],
              ['dob','Date of birth','date'],
              ['phone','Phone','tel'],
              ['address','Home address','text'],
            ]} data={data} set={set} />
          )}

          {step === 2 && (
            <Fields title="Employer information" fields={[
              ['employer','Employer / company name','text'],
              ['hrContact','HR contact (name or email)','text'],
              ['leaveStart','Leave start date','date'],
              ['leaveEnd','Expected leave end date','date'],
            ]} data={data} set={set} />
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-bold text-xl text-navy">Medical condition</h2>
              <Input label="Primary condition / diagnosis" v={data.condition} on={v=>set('condition',v)} />
              <Textarea label="Symptoms you're experiencing" v={data.symptoms} on={v=>set('symptoms',v)} />
              <Input label="When did symptoms begin?" type="date" v={data.onsetDate} on={v=>set('onsetDate',v)} />
              <Textarea label="Prior treatment or providers seen" v={data.priorTreatment} on={v=>set('priorTreatment',v)} />
              <Textarea label="How does this impact your ability to work?" v={data.workImpact} on={v=>set('workImpact',v)} />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-bold text-xl text-navy">Upload supporting records</h2>
              <p className="mt-2 text-sm text-navy/70">Optional but strongly recommended. Office notes, imaging, diagnosis letters, prescriptions, or prior doctor's notes.</p>
              <label className="mt-5 block border-2 border-dashed border-navy/20 rounded-xl p-10 text-center cursor-pointer hover:border-soft-blue transition">
                <input type="file" multiple className="hidden" onChange={e => set('records', Array.from(e.target.files || []).map(f => f.name))} />
                <div className="font-semibold text-navy">Click to upload</div>
                <div className="text-xs text-navy/60 mt-1">PDF, JPG, PNG up to 25MB each</div>
                {data.records.length > 0 && (
                  <div className="mt-4 text-sm text-accent-green font-semibold">{data.records.length} file(s) selected</div>
                )}
              </label>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="font-bold text-xl text-navy">Review & payment</h2>
              <div className="mt-5 space-y-3 text-sm">
                <Row label="Leave type" v={data.leaveType === 'self' ? 'Own condition (WH-380-E)' : 'Family member (WH-380-F)'} />
                <Row label="Plan" v={data.plan === 'expedited' ? 'Expedited — $199' : 'Standard — $149'} />
                <Row label="Name" v={data.name} />
                <Row label="Employer" v={data.employer} />
                <Row label="Leave start" v={data.leaveStart} />
                <Row label="Condition" v={data.condition} />
              </div>
              <p className="mt-6 text-xs text-navy/60 leading-relaxed">
                By continuing, you agree to our Terms of Service and HIPAA Notice. You will be redirected to Stripe to complete payment. If the physician cannot certify your condition, you receive a full refund.
              </p>
              {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
              <button onClick={submit} disabled={submitting} className="btn-primary mt-6 w-full">
                {submitting ? 'Starting checkout…' : `Pay ${data.plan === 'expedited' ? '$199' : '$149'} & submit`}
              </button>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button onClick={back} disabled={step === 0} className="btn-secondary disabled:opacity-30">Back</button>
            {step < STEPS.length - 1 && <button onClick={next} className="btn-primary">Continue</button>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Fields({ title, fields, data, set }) {
  return (
    <div className="space-y-5">
      <h2 className="font-bold text-xl text-navy">{title}</h2>
      {fields.map(([k,l,t]) => <Input key={k} label={l} type={t} v={data[k]} on={v=>set(k,v)} />)}
    </div>
  );
}

function Input({ label, type='text', v, on }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <input type={type} value={v} onChange={e=>on(e.target.value)} className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-3 focus:outline-none focus:border-soft-blue" />
    </label>
  );
}
function Textarea({ label, v, on }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <textarea value={v} onChange={e=>on(e.target.value)} rows={4} className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-3 focus:outline-none focus:border-soft-blue" />
    </label>
  );
}
function Row({ label, v }) {
  return (
    <div className="flex justify-between gap-4 border-b border-navy/5 pb-2">
      <span className="text-navy/60">{label}</span>
      <span className="text-navy font-semibold text-right">{v || '—'}</span>
    </div>
  );
}
