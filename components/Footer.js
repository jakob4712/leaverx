import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="mb-4 bg-white rounded-xl inline-block p-3">
            <img src="/logo.png" alt="LeaveRx" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Medical leave certified. No office visit needed.
          </p>
          <p className="text-white/60 text-xs mt-4">support@leaverx.co</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Product</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/#how">How it works</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/#conditions">Qualifying conditions</a></li>
            <li><Link href="/intake">Start intake</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Portals</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/portal">Patient portal</Link></li>
            <li><Link href="/clinician">Clinician portal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms">Terms of Service</Link></li>
            <li><Link href="/legal/hipaa">HIPAA Notice</Link></li>
            <li><Link href="/legal/refund">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/60 leading-relaxed">
          LeaveRx is a HIPAA-compliant telehealth platform. Certification decisions are made by licensed physicians based on clinical evidence. Certification is not guaranteed. © {new Date().getFullYear()} LeaveRx.
        </div>
      </div>
    </footer>
  );
}
