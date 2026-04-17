import Link from 'next/link';

const SERVICES = [
  ['FMLA', '/programs/fmla'],
  ['Paid Family Leave', '/programs/paid-family-leave'],
  ['Short-Term Disability', '/programs/short-term-disability'],
  ['State Disability (SDI/TDI)', '/programs/state-disability'],
  ['ADA Accommodations', '/programs/ada-accommodations'],
  ['Intermittent Leave', '/programs/fmla#intermittent'],
];

const RESOURCES = [
  ['Pre-Qualification Quiz', '/quiz'],
  ['Patient Portal', '/portal'],
  ['Verify a Certification', '/verify'],
  ['State Leave Laws', '/states/california'],
  ['Conditions That Qualify', '/conditions/anxiety'],
  ['Contact', 'mailto:support@leaverx.co'],
];

const LEGAL = [
  ['Terms', '/legal/terms'],
  ['Privacy', '/legal/privacy'],
  ['HIPAA Notice', '/legal/hipaa'],
  ['Refund Policy', '/legal/refund'],
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-mist text-slate">
      <div className="container-x pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-semibold text-ink">Leave</span>
              <span className="font-display text-2xl font-semibold text-navy">Rx</span>
            </Link>
            <p className="mt-4 text-slate text-[15px] leading-relaxed max-w-xs">
              Protected leave, made simple. Connecting working Americans with board-certified physicians for FMLA, paid leave, and disability certification.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill-sm">HIPAA</span>
              <span className="pill-sm">Board-Certified</span>
              <span className="pill-sm">All 50 States</span>
            </div>
          </div>

          <Col title="Services" links={SERVICES} />
          <Col title="Resources" links={RESOURCES} />
          <Col title="Legal" links={LEGAL} />
        </div>

        <div className="mt-16 pt-8 border-t border-mist">
          <p className="text-[12px] text-fog leading-relaxed max-w-4xl">
            LeaveRx is a telehealth platform that connects patients with licensed physicians for medical evaluations related to protected leave and disability programs. Approval of a leave certification is at the sole discretion of the consulting physician based on your medical condition. LeaveRx does not provide legal advice. FMLA eligibility requires that both the employee and employer meet specific criteria under federal law (29 U.S.C. § 2601 et seq.); not all employees qualify. State paid leave and disability program eligibility varies by state. Always confirm your employer&apos;s policies and applicable state law. If you need legal advice regarding your employment rights, consult a qualified employment attorney.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-between text-[12px] text-fog">
            <span>© {new Date().getFullYear()} Evolution Technology LLC. All rights reserved.</span>
            <span>support@leaverx.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-[12px] uppercase tracking-eyebrow text-fog font-semibold">{title}</h4>
      <ul className="mt-5 space-y-3 text-[14px]">
        {links.map(([l, h]) => (
          <li key={l}>
            <Link href={h} className="text-slate hover:text-navy transition">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
