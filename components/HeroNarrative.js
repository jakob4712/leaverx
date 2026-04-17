import Link from 'next/link';

export default function HeroNarrative() {
  return (
    <section className="relative bg-paper border-b border-rule">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* LEFT — narrative */}
          <div className="md:col-span-7">
            <div className="spec">Protected leave · Physician-certified · $149 flat</div>

            <h1
              className="mt-6 text-ink leading-[1.05] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.25rem)', fontWeight: 600 }}
            >
              Your job is{' '}
              <em className="display-italic text-bureau">protected</em>{' '}
              by more laws than you know.
            </h1>

            <p className="mt-8 text-graphite text-lg md:text-xl leading-relaxed max-w-2xl">
              If you&apos;re dealing with a serious health condition, caring for family, or recovering from childbirth — federal and state law entitles you to protected time off. Most employees qualify for three or more programs at once. A board-certified physician reviews your case in 24 hours and prepares every document your employer needs.
            </p>

            <div className="mt-10 flex items-center gap-3 flex-wrap">
              <Link href="#tool-01" className="btn-bureau-lg">
                Check My Eligibility →
              </Link>
              <Link href="/intake" className="btn-ghost !border !border-ink !text-ink hover:!bg-ink hover:!text-paper !px-8 !py-5 !text-[13px]">
                Begin Evaluation · $149
              </Link>
            </div>
          </div>

          {/* RIGHT — trust stack */}
          <div className="md:col-span-5 md:pl-10 md:border-l md:border-rule">
            <div className="spec">Who reviews your case</div>
            <div className="mt-3 display-italic text-ink text-[22px] leading-snug">
              A board-certified physician licensed in your state.
            </div>
            <p className="mt-3 text-[14.5px] text-graphite leading-relaxed">
              Every evaluation includes a clinical review, a physician-signed federal FMLA form, and any state-program certifications you qualify for.
            </p>

            <div className="mt-8 pt-6 border-t border-rule space-y-4">
              <TrustRow label="Credentialing" value="Board-certified · NPI verified" />
              <TrustRow label="Privacy" value="HIPAA · 256-bit encryption" />
              <TrustRow label="Turnaround" value="24 hours · Most same day" />
              <TrustRow label="Guarantee" value="Full refund if not approved" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className="spec">{label}</div>
      <div className="text-[14px] text-ink text-right">{value}</div>
    </div>
  );
}
