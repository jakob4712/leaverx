import Link from 'next/link';

const TOOLS = [
  ['Eligibility Check', '/#tool-01'],
  ['Program Matrix', '/#tool-02'],
  ['Conditions Explorer', '/#tool-05'],
  ['Document Preview', '/#tool-08'],
  ['Medical Board', '/#tool-04'],
];

const PROGRAMS = [
  ['FMLA', '/programs/fmla'],
  ['Paid Family Leave', '/programs/paid-family-leave'],
  ['Short-Term Disability', '/programs/short-term-disability'],
  ['State Disability', '/programs/state-disability'],
  ['ADA Accommodations', '/programs/ada-accommodations'],
];

const LEGAL = [
  ['Terms', '/legal/terms'],
  ['Privacy Policy', '/legal/privacy'],
  ['HIPAA Notice', '/legal/hipaa'],
  ['Refund Policy', '/legal/refund'],
  ['Employer Verification', '/verify'],
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-rule">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-semibold text-[20px] text-ink">LeaveRx</div>
            <p className="mt-4 text-graphite text-[15px] leading-relaxed max-w-xs">
              A telehealth platform for protected leave certification.
            </p>
            <p className="mt-6 spec">Operated by Evolution Technology LLC.</p>
          </div>
          <Col title="Tools" links={TOOLS} />
          <Col title="Programs" links={PROGRAMS} />
          <Col title="Legal" links={LEGAL} />
        </div>

        <div className="mt-16 pt-8 border-t border-rule">
          <div className="spec">© 2026 Evolution Technology LLC · LeaveRx</div>
          <p className="mt-6 text-[12.5px] text-ash leading-relaxed max-w-3xl">
            <span className="text-graphite font-semibold">Not legal advice.</span> LeaveRx connects patients with licensed physicians for medical evaluations related to protected leave programs. Approval is at the sole discretion of the consulting physician. FMLA eligibility requires that both employee and employer meet federal criteria. State leave program eligibility varies.
          </p>
          <p className="mt-4 text-[12.5px] text-graphite font-semibold">
            In a mental health crisis? Call or text 988.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }) {
  return (
    <div className="md:col-span-2">
      <div className="spec">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map(([l, h]) => (
          <li key={l}>
            <Link href={h} className="text-graphite hover:text-ink text-[14px] transition">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
