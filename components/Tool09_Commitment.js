import Link from 'next/link';

export default function Tool09() {
  return (
    <section id="tool-09" className="bg-bureau text-paper">
      <div className="container-x py-24 md:py-32 text-center">
        <div className="spec text-paper/70">Begin Here</div>
        <h2
          className="mt-6 display-italic text-paper text-balance"
          style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Your job is protected.<br />
          Make sure your paperwork says so.
        </h2>
        <p className="mt-8 text-paper/85 text-[17px] leading-relaxed max-w-2xl mx-auto">
          Protected leave isn&apos;t a favor your employer grants you. It&apos;s a legal right you&apos;ve earned by being an employee under federal and state law. We just help you claim it — with one $149 evaluation, every program you qualify for, full refund if not approved.
        </p>
        <Link href="/intake" className="btn-paper-on-bureau mt-10">
          Begin My Evaluation →
        </Link>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {['$149 flat', '24-hr turnaround', 'HIPAA secure', 'Board-certified MDs', 'Refund if not approved'].map(
            (t) => (
              <span key={t} className="pill bg-bureau-deep text-paper border border-paper/20">
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
