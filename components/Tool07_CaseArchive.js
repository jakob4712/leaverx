const SCENARIOS = [
  {
    scenario: 'Anxiety or PTSD requiring time off for treatment.',
    programs: 'FMLA (federal) + state PFL where available + ADA accommodations',
    outcome: 'Up to 12 weeks job-protected leave; partial wage replacement in PFL states',
    condition: 'Generalized anxiety, treatment-resistant depression, PTSD',
    state: 'All states',
  },
  {
    scenario: 'New parent bonding after a child\u2019s arrival.',
    programs: 'FMLA + state PFL + state SDI (where available)',
    outcome: 'Up to 12 weeks federal + 6\u201312 weeks paid state leave (CA, NY, NJ, MA\u2026)',
    condition: 'Pregnancy recovery, postpartum, newborn bonding, adoption',
    state: 'CA, NY, NJ, MA, WA, CO, OR + others',
  },
  {
    scenario: 'Chronic migraines costing work days every month.',
    programs: 'Intermittent FMLA + ADA accommodations',
    outcome: 'Protected intermittent leave + reduced-hour or remote-work accommodation',
    condition: 'Chronic migraines, cluster headaches, treatment-resistant migraine',
    state: 'All states',
  },
  {
    scenario: 'Cancer treatment and recovery.',
    programs: 'FMLA + state disability + ADA',
    outcome: 'Up to 26 weeks partial wage replacement (SDI states) + ongoing ADA support',
    condition: 'Active treatment, post-surgical recovery, long-term remission monitoring',
    state: 'All states; best outcomes in CA, NY, NJ, HI, RI',
  },
  {
    scenario: 'Caring for a seriously ill family member.',
    programs: 'FMLA caregiving leave + state PFL where available',
    outcome: '12 weeks job-protected + partial wage replacement in PFL states',
    condition: 'Serious health condition of spouse, child, or parent',
    state: 'All states; paid in CA, NY, NJ, WA, CT, MA, CO, OR + others',
  },
  {
    scenario: 'Major depressive episode requiring clinical stabilization.',
    programs: 'FMLA + state PFML where available',
    outcome: 'Up to 12 weeks federal + state paid leave in qualifying states',
    condition: 'Major depression, suicidal ideation recovery, medication transitions',
    state: 'WA, MA, CT, CO, OR, CA (all PFML programs are mental-health-inclusive)',
  },
];

export default function Tool07() {
  return (
    <section id="tool-07" className="bg-paper border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 07 / Protection Scenarios</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          What protection looks like, in practice.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-3xl leading-relaxed">
          The scenarios below illustrate how federal, state, and ADA programs typically stack for common situations. Your specific eligibility depends on your state, employer, tenure, and condition — determined during your physician evaluation.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map((s, i) => (
            <article
              key={i}
              className={`card-paper p-6 ${i % 4 === 1 ? 'lg:translate-y-6' : i % 4 === 2 ? 'lg:translate-y-3' : ''}`}
            >
              <div className="spec">Scenario · {s.state}</div>
              <h3 className="mt-3 display-italic text-ink text-[20px] leading-snug">
                {s.scenario}
              </h3>
              <div className="mt-5 hairline" />
              <div className="mt-5 space-y-4">
                <Meta label="Typical Program Stack" value={s.programs} />
                <Meta label="Protection Available" value={s.outcome} />
                <Meta label="Example Condition" value={s.condition} />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-[12.5px] text-ash italic max-w-3xl leading-relaxed">
          Scenarios are illustrative and based on published federal and state program rules. Individual outcomes vary. LeaveRx does not guarantee approval; certification is at the sole discretion of the consulting physician, and employer compliance with FMLA / state leave law is a separate legal process.
        </p>
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="spec mb-1 text-fog">{label}</div>
      <div className="text-[14px] text-ink leading-relaxed">{value}</div>
    </div>
  );
}
