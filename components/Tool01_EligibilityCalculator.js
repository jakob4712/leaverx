import { useMemo, useState, useDeferredValue } from 'react';
import Link from 'next/link';
import ProgramCard from './ProgramCard';
import StackedBar from './StackedBar';
import DataNumber from './DataNumber';
import { STATES, evaluate, summary, tenureLabel } from '@/lib/eligibilityLogic';

// Illustrative default shown before the user touches any input.
// Based on a typical California employee with a qualifying condition.
const DEFAULT_RESULTS = {
  fmla: {
    status: 'likely',
    why: 'Most full-time employees at companies with 50+ staff qualify. Fill in the form to confirm.',
  },
  pfl: {
    status: 'likely',
    why: 'Available in 11 states + DC. Select your state to see if paid family leave applies.',
  },
  std: {
    status: 'likely',
    why: 'Most employers offer short-term disability; 5 states run their own programs.',
  },
  sdi: {
    status: 'likely',
    why: 'State-run disability insurance in CA, NY, NJ, HI, RI. Select your state to check.',
  },
  ada: {
    status: 'likely',
    why: 'The ADA covers most U.S. employees with qualifying conditions — remote work, reduced hours, modified duties.',
  },
};

const WHO = [
  { v: 'me', l: 'Me' },
  { v: 'spouse', l: 'My spouse' },
  { v: 'child', l: 'My child' },
  { v: 'parent', l: 'My parent' },
];

const EMPLOYER = [
  { v: 'large', l: '50+ employees' },
  { v: 'small', l: 'Under 50' },
  { v: 'unsure', l: 'Not sure' },
];

const CONDITIONS = [
  'Mental health',
  'Chronic pain / physical',
  'Pregnancy / postpartum',
  'Cancer / serious illness',
  'Caregiving for family',
  'Other',
];

export default function Tool01() {
  const [who, setWho] = useState('me');
  const [state, setState] = useState('');
  const [hours, setHours] = useState(40);
  const [tenure, setTenure] = useState(18);
  const [employer, setEmployer] = useState('');
  const [conditions, setConditions] = useState([]);

  const inputs = useMemo(
    () => ({ who, state, hours, tenureMonths: tenure, employerSize: employer, conditions }),
    [who, state, hours, tenure, employer, conditions]
  );
  const deferred = useDeferredValue(inputs);
  const hasInputs = !!(state || employer || conditions.length > 0);
  const evaluated = useMemo(() => evaluate(deferred), [deferred]);
  const results = hasInputs ? evaluated : { ...evaluated, ...DEFAULT_RESULTS };
  const sum = useMemo(() => summary(results, deferred), [results, deferred]);

  const toggleCondition = (c) =>
    setConditions((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]));

  return (
    <section id="tool-01" className="bg-paper border-b border-rule">
      <div className="container-x py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — INPUT PANEL */}
          <div>
            <div className="spec text-bureau">
              Live Eligibility Check · Free · No Account Required
            </div>
            <h2 className="mt-5 text-ink leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 600 }}>
              See every <span className="display-italic text-bureau">protection</span>{' '}
              you qualify for.
            </h2>
            <p className="mt-5 text-graphite text-[16.5px] leading-relaxed max-w-xl">
              Adjust the fields below — your eligibility updates as you go. Most employees qualify for 3+ programs at once.
            </p>

            <div className="mt-10 space-y-8">
              {/* Who */}
              <Field label="Who needs leave?">
                <Chips options={WHO} value={who} onChange={setWho} />
              </Field>

              {/* State */}
              <Field label="What state do you work in?">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="input-shelf num text-[15px]"
                >
                  <option value="">Select state…</option>
                  {STATES.map(([abbr, name]) => (
                    <option key={abbr} value={abbr}>
                      {abbr} — {name}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Hours */}
              <Field
                label="How many hours per week?"
                value={`${hours} hr / week`}
              >
                <input
                  type="range"
                  min={0}
                  max={60}
                  step={1}
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value, 10))}
                  className="slider"
                />
                <Ticks marks={[0, 20, 30, 40, 60]} />
              </Field>

              {/* Tenure */}
              <Field
                label="How long at your job?"
                value={tenureLabel(tenure)}
              >
                <input
                  type="range"
                  min={0}
                  max={60}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value, 10))}
                  className="slider"
                />
                <Ticks marks={[0, 6, 12, 24, 60]} format={(m) => (m === 0 ? '0' : `${m}mo`)} />
              </Field>

              {/* Employer size */}
              <Field label="How big is your employer?">
                <Chips options={EMPLOYER} value={employer} onChange={setEmployer} />
              </Field>

              {/* Conditions */}
              <Field label="What kind of condition?">
                <div className="flex flex-wrap gap-2">
                  {CONDITIONS.map((c) => {
                    const on = conditions.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() => toggleCondition(c)}
                        className={`px-3 py-2 rounded-sm border text-[13px] transition ${
                          on
                            ? 'bg-bureau text-paper border-bureau'
                            : 'bg-cardstock text-graphite border-rule hover:border-bureau'
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </Field>
            </div>
          </div>

          {/* RIGHT — LIVE OUTPUT */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="spec text-stamp">
              Your Protections / Updates In Real Time
            </div>

            <div className="mt-5 space-y-3">
              <ProgramCard
                number="01"
                name="FMLA — Family & Medical Leave"
                dataPoint="UP TO 12 WEEKS / UNPAID / JOB-PROTECTED"
                status={results.fmla.status}
                why={results.fmla.why}
                highlight={results.fmla.status === 'eligible'}
              />
              <ProgramCard
                number="02"
                name="Paid Family Leave (State)"
                dataPoint={
                  results.pfl.data
                    ? `${results.pfl.data.replacement[0]}–${results.pfl.data.replacement[1]}% WAGE REPLACEMENT / ${results.pfl.data.weeks} WEEKS`
                    : '60–90% WAGE REPLACEMENT / 8–12 WEEKS'
                }
                status={results.pfl.status}
                why={results.pfl.why}
              />
              <ProgramCard
                number="03"
                name="Short-Term Disability"
                dataPoint={
                  results.std.data
                    ? `${results.std.data.replacement[0]}–${results.std.data.replacement[1]}% WAGE REPLACEMENT / UP TO ${results.std.data.weeks} WEEKS`
                    : '50–70% WAGE REPLACEMENT / UP TO 26 WEEKS'
                }
                status={results.std.status}
                why={results.std.why}
              />
              <ProgramCard
                number="04"
                name="State Disability (SDI / TDI)"
                dataPoint="STATE INCOME REPLACEMENT"
                status={results.sdi.status}
                why={results.sdi.why}
              />
              <ProgramCard
                number="05"
                name="ADA Accommodations"
                dataPoint="REMOTE WORK / REDUCED HOURS / MODIFIED DUTIES"
                status={results.ada.status}
                why={results.ada.why}
              />
            </div>

            {/* Total bar + numbers */}
            <div className="mt-8 card-paper p-6">
              {hasInputs ? (
                <>
                  <div className="spec">Total Protected Time Available</div>
                  <div className="mt-2 flex items-end gap-3">
                    <DataNumber
                      value={sum.totalWeeks}
                      className="text-[56px] leading-none text-ink font-mono"
                    />
                    <span className="num text-[14px] text-ash mb-2">weeks total</span>
                  </div>
                  <div className="mt-5">
                    <StackedBar
                      fmlaWeeks={sum.fmlaWeeks}
                      pflWeeks={sum.pflWeeks}
                      stdWeeks={sum.stdWeeks}
                      max={Math.max(52, sum.totalWeeks + 4)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="spec">
                    Example · California · 12 months tenure · Mental health
                  </div>
                  <div className="mt-3 text-ink text-[18px] leading-snug">
                    Up to <span className="num font-semibold text-bureau">46 weeks</span> of protected time:
                  </div>
                  <div className="mt-5">
                    <StackedBar fmlaWeeks={12} pflWeeks={8} stdWeeks={26} max={52} />
                  </div>
                  <div className="mt-4 text-[12.5px] text-ash italic">
                    Your actual total depends on your specific state, employer, and condition.
                  </div>
                </>
              )}
            </div>

            {/* Income estimate */}
            {hasInputs && (sum.monthlyPfl > 0 || sum.monthlyStd > 0) && (
              <div className="mt-4 card-paper p-6">
                <div className="spec">Estimated Wage Replacement</div>
                <div className="mt-3 space-y-2 text-[14px]">
                  {sum.monthlyPfl > 0 && (
                    <Row
                      l={`${results.pfl.data.name} PFL`}
                      v={`$${sum.monthlyPfl.toLocaleString()} / mo × ${results.pfl.data.weeks} wks`}
                    />
                  )}
                  {sum.monthlyStd > 0 && (
                    <Row
                      l={`${results.std.data?.name || 'State'} disability`}
                      v={`$${sum.monthlyStd.toLocaleString()} / mo × ${results.std.data.weeks} wks`}
                    />
                  )}
                </div>
                <div className="mt-4 pt-4 border-t border-rule flex items-center justify-between">
                  <span className="spec">Estimated total</span>
                  <span className="num text-[24px] text-bureau">
                    <DataNumber value={sum.totalIncome} prefix="$" />
                  </span>
                </div>
                <p className="mt-3 text-[11px] text-ash leading-relaxed">
                  Estimate based on median full-time wage assumptions. Actual replacement depends on your specific wages and program rules.
                </p>
              </div>
            )}

            {/* CTA */}
            <Link href="/intake" className="btn-bureau-lg w-full mt-6 justify-between">
              <span>Get Certified For These Protections</span>
              <span className="num text-[14px]">→ $149</span>
            </Link>
            <p className="mt-3 text-[12.5px] text-ash italic">
              A board-certified doctor will review your case within 24 hours. Approved or 100% refunded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="spec">{label}</label>
        {value && <span className="num text-[12px] text-bureau">{value}</span>}
      </div>
      {children}
    </div>
  );
}

function Chips({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value === o.v;
        return (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`px-4 py-2.5 rounded-sm border text-[14px] transition ${
              on
                ? 'bg-bureau text-paper border-bureau'
                : 'bg-cardstock text-graphite border-rule hover:border-bureau'
            }`}
          >
            {o.l}
          </button>
        );
      })}
    </div>
  );
}

function Ticks({ marks, format = (m) => `${m}` }) {
  return (
    <div className="flex justify-between mt-2 num text-[10px] text-ash">
      {marks.map((m) => (
        <span key={m}>{format(m)}</span>
      ))}
    </div>
  );
}

function Row({ l, v }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-graphite">{l}</span>
      <span className="num text-ink">{v}</span>
    </div>
  );
}
