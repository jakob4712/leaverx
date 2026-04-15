import Link from 'next/link';
import { Icon } from './Icon';

export default function Nav() {
  return (
    <>
      <div className="bg-ink text-bone/80 text-[12px]">
        <div className="container-wide py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-2 animate-pulse" />
            <span className="tracking-wide">Same-day FMLA certifications available today</span>
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <a href="mailto:support@leaverx.co" className="hover:text-bone transition">support@leaverx.co</a>
            <span className="text-bone/30">|</span>
            <Link href="/portal" className="hover:text-bone transition">Patient sign in</Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur-xl border-b border-line">
        <div className="container-wide flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="LeaveRx" className="h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium text-ink/75">
            <a href="/#how" className="hover:text-ink transition">How it works</a>
            <a href="/#conditions" className="hover:text-ink transition">Conditions</a>
            <a href="/#privacy" className="hover:text-ink transition">Privacy</a>
            <a href="/#pricing" className="hover:text-ink transition">Pricing</a>
            <a href="/#faq" className="hover:text-ink transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/portal" className="hidden md:inline-block btn-ghost !py-2.5 !px-3 text-[14px]">Sign in</Link>
            <Link href="/intake" className="btn-primary !py-3 !px-5 text-[14px]">
              Start evaluation <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
