import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-wide pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="bg-bone rounded-2xl inline-block p-4">
              <img src="/logo.png" alt="LeaveRx" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-6 text-bone/70 text-[15px] leading-relaxed max-w-xs">
              Physician-signed FMLA certifications, delivered online. Quiet, private, federally recognized.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-bone/50 border border-bone/20 rounded-full px-3 py-1.5">HIPAA</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-bone/50 border border-bone/20 rounded-full px-3 py-1.5">SOC 2</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-bone/50 border border-bone/20 rounded-full px-3 py-1.5">256-bit TLS</span>
            </div>
          </div>

          <Col title="Product" links={[
            ['How it works', '/#how'],
            ['Qualifying conditions', '/#conditions'],
            ['Pricing', '/#pricing'],
            ['Start evaluation', '/intake'],
          ]} />
          <Col title="Portals" links={[
            ['Patient portal', '/portal'],
            ['Clinician portal', '/clinician'],
          ]} />
          <Col title="Company" links={[
            ['Contact', 'mailto:support@leaverx.co'],
            ['Privacy', '/legal/privacy'],
            ['Terms', '/legal/terms'],
            ['HIPAA', '/legal/hipaa'],
            ['Refund', '/legal/refund'],
          ]} />
        </div>

        <div className="mt-20 pt-8 border-t border-bone/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-[11px] text-bone/50 max-w-3xl leading-relaxed">
            LeaveRx is a HIPAA-compliant telehealth platform. Physicians on LeaveRx make independent clinical decisions. Certification is not guaranteed and depends on the documented clinical evidence of each case. If your condition cannot be certified, you receive a full refund.
          </p>
          <p className="text-[11px] text-bone/50">© {new Date().getFullYear()} LeaveRx, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-bone/50 font-semibold">{title}</h4>
      <ul className="mt-5 space-y-3 text-[14px]">
        {links.map(([l, h]) => (
          <li key={l}>
            <Link href={h} className="text-bone/85 hover:text-bone link-underline">{l}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
