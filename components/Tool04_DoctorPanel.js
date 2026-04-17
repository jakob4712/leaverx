// TODO: Replace panel placeholders with real clinician photos, names, and credentials.
const PANEL = [
  { specialty: 'Internal Medicine', exp: '10+ years', boards: ['ABIM', 'NPI Verified'] },
  { specialty: 'Family Medicine', exp: '15+ years', boards: ['ABFM', 'NPI Verified'] },
  { specialty: 'Psychiatry', exp: '8+ years', boards: ['ABPN', 'NPI Verified'] },
  { specialty: 'Internal Medicine', exp: '12+ years', boards: ['ABIM', 'NPI Verified'] },
  { specialty: 'Family Medicine', exp: '11+ years', boards: ['ABFM', 'NPI Verified'] },
  { specialty: 'Psychiatry', exp: '9+ years', boards: ['ABPN', 'NPI Verified'] },
];

export default function Tool04() {
  return (
    <section id="tool-04" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 04 / Medical Board</div>
        <h2 className="mt-3 text-ink leading-tight text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          A panel of board-certified physicians. Not a single doctor.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          You&apos;re not talking to an algorithm. Every physician on the LeaveRx panel is board-certified, NPI-verified, carries malpractice insurance, and is licensed in the states they evaluate. We match your case to the most appropriate physician based on your state and condition.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PANEL.map((p, i) => (
            <article
              key={i}
              className={`card-paper p-6 ${i % 5 === 1 ? 'lg:translate-y-4' : i % 5 === 3 ? 'lg:translate-y-6' : ''}`}
            >
              <div className="aspect-[4/5] bg-shelf border border-rule rounded-sm flex items-center justify-center mb-5">
                <div className="text-center">
                  <div className="spec text-fog">Physician</div>
                  <div className="spec text-fog mt-0.5">Portrait</div>
                  <div className="spec text-fog mt-0.5">Pending</div>
                </div>
              </div>
              <div className="font-body font-semibold text-ink text-[16px]">
                Board-Certified Physician
              </div>
              <div className="text-[13px] text-graphite mt-1">
                {p.specialty} · {p.exp}
              </div>
              <div className="mt-5 hairline" />
              <div className="mt-4 spec">Licensed</div>
              <div className="mt-1 text-[13.5px] text-ink">Multi-state panel</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.boards.map((b) => (
                  <span key={b} className="pill-bureau">{b}</span>
                ))}
              </div>
              <div className="mt-5 spec text-stamp inline-flex items-center gap-1.5">
                ✓ Credentialed
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 spec text-ash">
          // TODO: Replace panel placeholders with real clinician photos, names, and credentials.
        </p>
      </div>
    </section>
  );
}
