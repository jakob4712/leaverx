import { useState } from 'react';

const NODES = [
  {
    id: 'd0a',
    label: 'Day 0',
    title: 'Intake begins',
    pos: 0,
    body: 'Complete a 5-7 minute intake — designed by physicians to capture only what matters. No medical records required; describe your condition and how it affects your ability to work.',
    you: 'Fill in intake. Upload any records you already have.',
    we: 'Encrypt your intake and route it to a physician licensed in your state.',
  },
  {
    id: 'd0b',
    label: 'Day 0',
    title: 'Physician reviews case',
    pos: 14,
    body: 'A board-certified physician reads your history, evaluates your condition against federal and state criteria, and makes a clinical determination — typically the same day.',
    you: 'Wait for your evaluation. You may be asked follow-up questions via secure message.',
    we: 'Full clinical review, eligibility determination, and documentation draft.',
  },
  {
    id: 'd1',
    label: 'Day 1',
    title: 'Approval & paperwork delivered',
    pos: 28,
    body: 'You receive the completed federal FMLA form (WH-380-E) plus every state paid leave, disability, and ADA certification you qualify for — all physician-signed.',
    you: 'Download your documents from the secure portal.',
    we: 'Deliver via encrypted portal. Send to HR directly on request.',
  },
  {
    id: 'd3',
    label: 'Day 3',
    title: 'Submit to HR',
    pos: 42,
    body: 'You forward your certifications to HR or your state leave program. Under federal law, HR has 5 business days to respond.',
    you: 'Email HR with your documents attached. Use our employer communication template if helpful.',
    we: 'Stand by if HR has clinical questions — we respond with appropriate documentation.',
  },
  {
    id: 'w2',
    label: 'Week 2',
    title: 'Employer approves leave',
    pos: 56,
    body: 'Most employers respond within 1-2 weeks. They confirm leave dates, benefits coordination, and any accommodations.',
    you: 'Confirm logistics with HR (handoffs, benefits, return date).',
    we: 'If HR disputes eligibility or requests recertification, we support the clinical record.',
  },
  {
    id: 'w3',
    label: 'Week 3',
    title: 'Leave begins',
    pos: 68,
    body: 'Start your protected leave. State paid-leave or disability payments begin depending on your state. Your job is held by federal law.',
    you: 'Focus on what you need.',
    we: 'Track certification expiration. Your PHI stays with us — your employer only sees the certification form.',
  },
  {
    id: 'w12',
    label: 'Week 12',
    title: 'Leave concludes or recertifies',
    pos: 84,
    body: 'Return to work or request recertification if your condition requires continued leave. We send a reminder 60 days before FMLA exhaustion.',
    you: 'Return or trigger recertification from your portal.',
    we: 'Run an updated evaluation for recertification ($149).',
  },
  {
    id: 'w12plus',
    label: 'Week 12+',
    title: 'Long-term protections',
    pos: 98,
    body: 'If your condition is ongoing, you may qualify for ADA accommodations (remote work, reduced hours) or state-specific extended leave — even after FMLA runs out.',
    you: 'Transition into the right ongoing framework with our support.',
    we: 'Issue ADA accommodation letters and state disability certifications as the case evolves.',
  },
];

export default function Tool03() {
  const [active, setActive] = useState('d1');
  const node = NODES.find((n) => n.id === active);

  return (
    <section id="tool-03" className="bg-paper border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 03 / Timeline</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          From intake to approval in 24 hours.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          Click any milestone to see what happens, what you need to do, and what we handle.
        </p>

        {/* Desktop scrubber */}
        <div className="mt-12 hidden md:block">
          <div className="relative h-10">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-rule" />
            {NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                aria-label={`${n.label} — ${n.title}`}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center group"
                style={{ left: `${n.pos}%` }}
              >
                <span
                  className={`block w-3 h-3 rounded-full transition-transform ${
                    active === n.id ? 'bg-bureau scale-150' : 'bg-fog group-hover:bg-bureau group-hover:scale-125'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="relative mt-2 h-8">
            {NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`absolute -translate-x-1/2 spec hover:text-bureau transition-colors ${
                  active === n.id ? 'text-bureau' : ''
                }`}
                style={{ left: `${n.pos}%` }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile chip selector */}
        <div className="mt-8 md:hidden flex flex-wrap gap-2">
          {NODES.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`px-3 py-2 rounded-sm border text-[12px] num transition ${
                active === n.id
                  ? 'bg-bureau text-paper border-bureau'
                  : 'bg-cardstock text-graphite border-rule'
              }`}
            >
              {n.label} · {n.title}
            </button>
          ))}
        </div>

        {/* Detail card */}
        {node && (
          <div className="mt-10 card-paper p-8">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <div className="spec">{node.label}</div>
                <h3 className="mt-2 font-body font-semibold text-[24px] text-ink">{node.title}</h3>
                <p className="mt-4 text-graphite text-[15px] leading-relaxed">{node.body}</p>
              </div>
              <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="spec text-bureau">What you do</div>
                  <p className="mt-2 text-[14.5px] text-ink leading-relaxed">{node.you}</p>
                </div>
                <div>
                  <div className="spec text-stamp">What we handle</div>
                  <p className="mt-2 text-[14.5px] text-ink leading-relaxed">{node.we}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Path comparison */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-cardstock border border-bureau rounded-sm p-6">
            <div className="spec text-bureau">LeaveRx Path</div>
            <div className="mt-4 num text-[14px] text-ink">
              Day 0 → Day 1 → HR approval → Leave starts
            </div>
          </div>
          <div className="bg-shelf border border-rule rounded-sm p-6">
            <div className="spec">Traditional Path</div>
            <div className="mt-4 num text-[13px] text-graphite space-y-1 leading-relaxed">
              <div>Day 0 → Book doctor (2-4 weeks out)</div>
              <div>→ Office visit → Doctor completes paperwork (1-2 weeks)</div>
              <div>→ HR approval → Leave starts</div>
            </div>
          </div>
        </div>
        <div className="mt-4 spec text-stamp">Expected delta: 4-6 weeks faster.</div>
      </div>
    </section>
  );
}
