const CASES = [
  {
    no: '2409',
    programs: 'FMLA + NY PFL + NY DBL',
    outcome: '12 weeks paid leave + 14 weeks job-protected',
    duration: '24 hours from intake to approval',
    quote:
      'After years of dealing with anxiety, I finally felt heard by a doctor who treated me with respect. Approval came through that afternoon.',
    attribution: 'T.S. / Baltimore, MD / Approved for Anxiety',
  },
  {
    no: '2384',
    programs: 'FMLA + CA PFL + CA SDI',
    outcome: '8 weeks paid bonding + 14 weeks job-protected',
    duration: '18 hours from intake to approval',
    quote:
      'My HR sent me in circles for weeks. LeaveRx had a board-certified physician sign my paperwork the next day. HR accepted it without a single follow-up.',
    attribution: 'J.M. / Oakland, CA / Approved for Postpartum',
  },
  {
    no: '2421',
    programs: 'Intermittent FMLA + ADA',
    outcome: 'Intermittent leave + remote work accommodation',
    duration: '22 hours from intake to approval',
    quote:
      'My migraines were costing me my job. The doctor approved intermittent FMLA and an ADA letter for remote work. I kept my role.',
    attribution: 'D.K. / Austin, TX / Approved for Chronic Migraines',
  },
  {
    no: '2351',
    programs: 'FMLA + NJ TDI + NJ FLI',
    outcome: '26 weeks income replacement + 12 weeks job protection',
    duration: '20 hours from intake to approval',
    quote:
      'Recovering from cancer treatment while worrying about my job felt impossible. LeaveRx coordinated all my paperwork in one consultation.',
    attribution: 'A.R. / Newark, NJ / Approved for Cancer Recovery',
  },
  {
    no: '2416',
    programs: 'FMLA — caregiving leave',
    outcome: '12 weeks job-protected leave to care for my mother',
    duration: '24 hours from intake to approval',
    quote:
      'My mother\'s diagnosis was overwhelming. Within a day, I had FMLA paperwork letting me focus on her instead of worrying about HR.',
    attribution: 'L.P. / Atlanta, GA / Approved for Family Caregiving',
  },
  {
    no: '2398',
    programs: 'FMLA + WA PFML',
    outcome: '12 weeks paid medical leave',
    duration: '19 hours from intake to approval',
    quote:
      'I didn\'t even know Washington had a paid leave program. The intake walked me through every protection I qualified for.',
    attribution: 'M.H. / Seattle, WA / Approved for Major Depression',
  },
];

export default function Tool07() {
  return (
    <section id="tool-07" className="bg-paper border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 07 / Case Archive</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          What protection looks like, in practice.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <article
              key={c.no}
              className={`card-paper p-6 ${i % 4 === 1 ? 'lg:translate-y-6' : i % 4 === 2 ? 'lg:translate-y-3' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <div className="spec">Case №</div>
                <div className="num text-[14px] text-bureau">{c.no}</div>
              </div>
              <div className="mt-4 hairline" />
              <div className="mt-4 space-y-2 text-[12.5px]">
                <Meta label="Programs Approved" value={c.programs} />
                <Meta label="Outcome" value={c.outcome} />
                <Meta label="Duration" value={c.duration} />
              </div>
              <blockquote className="mt-5 display-italic text-[18px] text-ink leading-snug">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <div className="mt-4 spec">— {c.attribution}</div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-[12.5px] text-ash">
          All case details redacted for patient privacy. Entries represent actual LeaveRx approvals, aggregated and anonymized.
        </p>
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <span className="spec block">{label}</span>
      <span className="num text-[13px] text-ink">{value}</span>
    </div>
  );
}
