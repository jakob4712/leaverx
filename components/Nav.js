import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-navy/5">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">L</span>
          </div>
          <span className="font-heading font-bold text-xl text-navy">LeaveRx</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-navy/80">
          <a href="/#how">How it works</a>
          <a href="/#conditions">Conditions</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
          <Link href="/portal">Patient Portal</Link>
        </nav>
        <Link href="/intake" className="btn-primary !px-5 !py-2.5 text-sm">Start — $149</Link>
      </div>
    </header>
  );
}
