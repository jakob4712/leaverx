import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import QuizProgress from '@/components/QuizProgress';
import QuizStep from '@/components/QuizStep';
import ResultsCard from '@/components/ResultsCard';
import { CONDITIONS } from '@/lib/conditions';
import { ALL_STATES, getState } from '@/lib/states';

const STEPS = [
  {
    key: 'leaveFor',
    question: 'Who is the leave for?',
    options: [
      { value: 'self', label: 'Myself' },
      { value: 'spouse', label: 'My spouse or partner' },
      { value: 'child', label: 'My child' },
      { value: 'parent', label: 'My parent' },
    ],
  },
  {
    key: 'hours',
    question: 'How many hours per week do you work?',
    options: [
      { value: '30+', label: '30 or more hours per week' },
      { value: '<30', label: 'Less than 30 hours per week' },
      { value: 'unsure', label: 'I\'m not sure' },
    ],
  },
  {
    key: 'tenure',
    question: 'How long have you worked for your current employer?',
    options: [
      { value: '12+', label: '12 months or more' },
      { value: '6-12', label: '6 to 12 months' },
      { value: '<6', label: 'Less than 6 months' },
    ],
  },
  {
    key: 'employerSize',
    question: 'How many employees does your employer have?',
    options: [
      { value: '50+', label: '50 or more' },
      { value: '<50', label: 'Less than 50' },
      { value: 'unsure', label: 'I\'m not sure' },
    ],
  },
  {
    key: 'state',
    question: 'What state do you live in?',
    sub: 'This determines which state-level paid leave and disability programs apply to you.',
    type: 'select',
  },
  {
    key: 'conditions',
    question: 'What condition are you seeking leave for?',
    sub: 'Select all that apply. Don\'t see your condition? Pick "Other" — almost any serious health condition may qualify.',
    multi: true,
    options: [
      ...CONDITIONS.map((c) => ({ value: c.slug, label: c.name })),
      { value: 'other', label: 'Other / not listed' },
    ],
  },
  {
    key: 'duration',
    question: 'How long have you been dealing with this condition?',
    options: [
      { value: 'chronic', label: 'Ongoing or chronic' },
      { value: 'new', label: 'New diagnosis' },
      { value: 'flares', label: 'Recurring flares' },
    ],
  },
  {
    key: 'leaveType',
    question: 'What kind of leave do you need?',
    options: [
      { value: 'continuous', label: 'A continuous block (e.g., 6 weeks off in a row)' },
      { value: 'intermittent', label: 'Intermittent — flares, treatment, or appointments' },
      { value: 'reduced', label: 'A reduced schedule (e.g., 4 days a week)' },
      { value: 'unsure', label: 'I\'m not sure yet' },
    ],
  },
  {
    key: 'hr',
    question: 'Have you talked to your employer\'s HR yet?',
    options: [
      { value: 'yes', label: 'Yes, they know I\'m planning leave' },
      { value: 'no', label: 'No, not yet' },
      { value: 'planning', label: 'I\'m planning to soon' },
    ],
  },
  {
    key: 'doctor',
    question: 'Are you currently seeing a doctor for this condition?',
    options: [
      { value: 'regularly', label: 'Yes, regularly' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'no', label: 'Not yet' },
    ],
  },
  {
    key: 'email',
    question: 'Where should we send your results?',
    sub: 'We\'ll email you a copy of your eligibility summary so you can refer back to it. We never share your email.',
    type: 'email',
  },
];

const TOTAL = STEPS.length + 1;

const PFL_STATES = ['california', 'new-york', 'new-jersey', 'washington', 'colorado', 'oregon', 'massachusetts', 'connecticut', 'district-of-columbia', 'rhode-island'];
const SDI_STATES = ['california', 'new-york', 'new-jersey', 'hawaii', 'rhode-island'];

function evaluate(answers) {
  const state = answers.state ? getState(answers.state) : null;
  const fmlaEligible =
    answers.tenure === '12+' && answers.hours === '30+' && answers.employerSize === '50+';
  const fmlaMaybe =
    answers.employerSize === 'unsure' || answers.hours === 'unsure' || answers.tenure === '12+';
  const pfl = state && PFL_STATES.includes(state.slug);
  const sdi = state && SDI_STATES.includes(state.slug);

  const results = [];
  results.push({
    name: 'FMLA — Family & Medical Leave Act',
    status: fmlaEligible ? 'yes' : fmlaMaybe ? 'maybe' : 'no',
    note: fmlaEligible
      ? 'Up to 12 weeks of job-protected federal leave. Your employer is legally required to hold your position.'
      : fmlaMaybe
      ? 'Possibly eligible — depends on your employer size and hours worked over the last 12 months. Our doctor will confirm during your evaluation.'
      : 'Federal FMLA requires 12 months of employment, 1,250+ hours, and 50+ employees within 75 miles. Other programs may still apply.',
  });

  results.push({
    name: pfl ? `Paid Family Leave (${state.name})` : 'Paid Family Leave',
    status: pfl ? 'yes' : 'no',
    note: pfl
      ? `${state.name} runs a state paid family leave program with wage replacement during your leave.`
      : 'Your state does not currently offer a public paid family leave program. Federal FMLA is unpaid; check whether your employer offers paid leave benefits.',
  });

  results.push({
    name: sdi ? `State Disability (${state.name})` : 'Short-Term Disability',
    status: sdi ? 'yes' : 'maybe',
    note: sdi
      ? `${state.name} provides public state disability insurance for your own illness or injury. We complete the medical certification.`
      : 'Most employers offer short-term disability insurance. Our doctor can complete your insurer\'s Attending Physician\'s Statement.',
  });

  results.push({
    name: 'ADA Workplace Accommodations',
    status: 'yes',
    note: 'The ADA covers nearly all U.S. employees. Reasonable accommodations may include remote work, reduced schedule, time off for treatment, or modified duties — without taking leave.',
  });

  if (answers.leaveType === 'intermittent') {
    results.push({
      name: 'Intermittent FMLA',
      status: fmlaEligible ? 'yes' : 'maybe',
      note: 'Intermittent leave lets you take FMLA in separate blocks across the year — for flare-ups, treatment, or appointments. Same 12 weeks, distributed over time.',
    });
  }

  return results;
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const showResults = step === STEPS.length;

  // Persist quiz state
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('leaverx_quiz') : null;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.answers) setAnswers(parsed.answers);
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('leaverx_quiz', JSON.stringify({ answers }));
    }
  }, [answers]);

  const current = STEPS[step];

  const setAnswer = (key, value) => setAnswers((a) => ({ ...a, [key]: value }));

  const advance = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      submit();
    }
  };

  async function submit() {
    setSubmitting(true);
    const computed = evaluate(answers);
    setResults(computed);
    try {
      await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, results: computed }),
      });
    } catch {}
    setStep(STEPS.length);
    setSubmitting(false);
    window.scrollTo(0, 0);
  }

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Head>
        <title>Free Pre-Qualification Quiz — LeaveRx</title>
        <meta name="description" content="Take our 2-minute pre-qualification quiz to see which protected leave programs you qualify for — FMLA, paid family leave, state disability, and ADA." />
      </Head>
      <div className="min-h-screen bg-cream text-ink">
        <QuizProgress step={step} total={TOTAL} onBack={back} />

        {showResults && results ? (
          <ResultsCard results={results} email={answers.email} />
        ) : current.type === 'select' ? (
          <StateSelect
            value={answers.state}
            onChange={(v) => {
              setAnswer('state', v);
              setTimeout(advance, 200);
            }}
          />
        ) : current.type === 'email' ? (
          <EmailCapture
            value={answers.email || ''}
            onChange={(v) => setAnswer('email', v)}
            onSubmit={advance}
            submitting={submitting}
          />
        ) : current.multi ? (
          <MultiStep
            current={current}
            value={answers[current.key] || []}
            onToggle={(v) => {
              const cur = answers[current.key] || [];
              setAnswer(current.key, cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
            }}
            onContinue={advance}
            disabled={(answers[current.key] || []).length === 0}
          />
        ) : (
          <QuizStep
            question={current.question}
            sub={current.sub}
            options={current.options}
            value={answers[current.key]}
            onSelect={(v) => {
              setAnswer(current.key, v);
              setTimeout(advance, 200);
            }}
          />
        )}
      </div>
    </>
  );
}

function MultiStep({ current, value, onToggle, onContinue, disabled }) {
  return (
    <div>
      <QuizStep
        question={current.question}
        sub={current.sub}
        options={current.options}
        value={value}
        onSelect={onToggle}
        multi
      />
      <div className="container-narrow pb-16">
        <button
          onClick={onContinue}
          disabled={disabled}
          className="btn-primary btn-lg w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function StateSelect({ value, onChange }) {
  return (
    <div className="container-narrow py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
        What state do you live in?
      </h1>
      <p className="mt-4 text-slate text-[16px]">
        This determines which state-level paid leave and disability programs apply to you.
      </p>
      <div className="mt-10">
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="field-input text-[17px]"
        >
          <option value="">Select your state…</option>
          {ALL_STATES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function EmailCapture({ value, onChange, onSubmit, submitting }) {
  const [touched, setTouched] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return (
    <div className="container-narrow py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
        Where should we send your results?
      </h1>
      <p className="mt-4 text-slate text-[16px] leading-relaxed">
        We&apos;ll email a copy of your eligibility summary so you can refer back to it. We never share your email.
      </p>
      <form
        className="mt-10 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setTouched(true);
          if (valid) onSubmit();
        }}
      >
        <input
          type="email"
          required
          autoFocus
          placeholder="you@example.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          className="field-input text-[17px]"
        />
        {touched && !valid && <div className="text-[13px] text-alert">Please enter a valid email.</div>}
        <button
          type="submit"
          disabled={!valid || submitting}
          className="btn-primary btn-lg w-full justify-center disabled:opacity-40"
        >
          {submitting ? 'Calculating…' : 'See My Results →'}
        </button>
        <p className="text-[12px] text-fog text-center">
          By continuing you agree to our{' '}
          <Link href="/legal/privacy" className="link-soft">
            privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
