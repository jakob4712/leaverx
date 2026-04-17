import { useState } from 'react';

const NODES = [
  {
    id: 'd0a',
    label: 'Day 0',
    title: 'Intake begins',
    pos: 0,
    body: 'You complete a 5-7 minute intake describing your condition, employer, and leave dates. Designed by physicians to capture only what is clinically necessary.',
    you: 'Fill in intake. Upload any records you have.',
    we: 'Encrypt and route to a state-licensed physician.',
  },
  {
    id: 'd0b',
    label: 'Day 0',
    title: 'Doctor reviews case',
    pos: 4,
    body: 'A board-certified physician licensed in your state reviews your intake, evaluates clinical evidence, and makes a determination — typically within 24 hours.',
    you: 'Nothing — we handle it.',
    we: 'Physician reviews, evaluates against FMLA criteria, and makes a clinical determination.',
  },
  {
    id: 'd1',
    label: 'Day 1',
    title: 'Approval & paperwork delivered',
    pos: 8,
    body: 'You receive the completed FMLA form (WH-380-E) plus any state paid leave or disability certifications you qualify for. All physician-signed.',
    you: 'Download your documents.',
    we: 'Deliver via secure portal. Send to HR on request.',
  },
  {
    id: 'd3',
    label: 'Day 3',
    title: 'Submit to HR',
    pos: 18,
    body: 'You forward your certifications to HR or your state leave program. HR has 5 business days to respond under federal law.',
    you: 'Email HR with your forms attached. Use our employer template.',
    we: 'Stay on standby in case HR has follow-up questions.',
  },
  {
    id: 'w2',
    label: 'Week 2',
    title: 'Employer approves',
    pos: 28,
    body: 'Under FMLA, your employer must respond within 5 business days. They confirm leave dates, accommodations, and any benefits coordination.',
    you: 'Confirm logistics with HR (handoffs, leave balance).',
    we: 'Provide HR a verification link if they need it.',
  },
  {
    id: 'w3',
    label: 'Week 3',
    title: 'Leave begins',
    pos: 38,
    body: 'You begin your protected leave. PFL or SDI payments start (depending on your state). Your job is held under federal law.',
    you: 'Focus on what you need.',
    we: 'Track your certification expiration.',
  },
  {
    id: 'w12',
    label: 'Week 12',
    title: 'Leave ends',
    pos: 70,
    body: 'You return to your job (or an equivalent one) under federal law. Your employer cannot retaliate or change your terms based on protected leave.',
    you: 'Return to work or request recertification.',
    we: 'Offer recertification and ADA-accommodation paperwork if needed.',
  },
  {
    id: 'recert',
    label: 'Week 12+',
    title: 'Recertify if needed',
    pos: 92,
    body: 'For chronic or recurring conditions, employers may request recertification. Same physician, same process — typically faster than the initial certification.',
    you: 'Trigger recertification through the portal.',
    we: 'Run an updated review.',
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

        {/* Timeline */}
        <div className="mt-12 hidden md:block">
          <div className="relative h-[2px] bg-rule">
            {NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 group"
                style={{ left: `${n.pos}%` }}
              >
                <span
                  className={`block w-3 h-3 rounded-full transition ${
                    active === n.id ? 'bg-bureau scale-150' : 'bg-fog group-hover:bg-bureau'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="relative mt-3 h-12">
            {NODES.map((n) => (
              <div
                key={n.id}
                className="absolute -translate-x-1/2 spec text-center"
                style={{ left: `${n.pos}%` }}
              >
                {n.label}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical stepper */}
        <div className="mt-8 md:hidden flex flex-wrap gap-2">
          {NODES.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`px-3 py-2 rounded-sm border text-[12px] num ${
                active === n.id
                  ? 'bg-bureau text-paper border-bureau'
                  : 'bg-cardstock text-graphite border-rule'
              }`}
            >
              {n.label}
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

        {/* Comparison */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-cardstock border border-bureau rounded-sm p-6">
            <div className="spec text-bureau">LeaveRx Path</div>
            <div className="mt-4 num text-[14px] text-ink space-y-2">
              <div>Day 0 → Day 1 → HR approval → Leave starts</div>
            </div>
          </div>
          <div className="bg-shelf border border-rule rounded-sm p-6">
            <div className="spec">Traditional Path</div>
            <div className="mt-4 num text-[13px] text-graphite space-y-2 leading-relaxed">
              <div>Day 0 → Book doctor (2-4 weeks out)</div>
              <div>→ Office visit → Doctor completes paperwork (1-2 weeks)</div>
              <div>→ HR approval → Leave starts</div>
            </div>
          </div>
        </div>
        <div className="mt-4 spec text-stamp">Expected delta: 4–6 weeks faster.</div>
      </div>
    </section>
  );
}
