import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const PROGRAMS = [
  { slug: 'fmla', name: 'FMLA' },
  { slug: 'paid-family-leave', name: 'Paid Family Leave' },
  { slug: 'short-term-disability', name: 'Short-Term Disability' },
  { slug: 'state-disability', name: 'State Disability (SDI/TDI)' },
  { slug: 'ada-accommodations', name: 'ADA Accommodations' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-mist">
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-semibold text-ink">Leave</span>
          <span className="font-display text-2xl font-semibold text-navy">Rx</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[14.5px] text-slate font-medium">
          <div
            className="relative"
            onMouseEnter={() => setProgOpen(true)}
            onMouseLeave={() => setProgOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-navy transition py-2">
              Programs <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {progOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-paper border border-mist rounded-xl shadow-lift p-2">
                  {PROGRAMS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/programs/${p.slug}`}
                      className="block px-4 py-3 rounded-lg hover:bg-cream text-ink text-[14.5px]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/conditions/anxiety" className="hover:text-navy transition">
            Conditions
          </Link>
          <Link href="/states/california" className="hover:text-navy transition">
            States
          </Link>
          <Link href="/quiz" className="hover:text-navy transition">
            Pre-Qualify Free
          </Link>
          <Link href="/verify" className="hover:text-navy transition">
            Verify Cert
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/portal" className="text-slate hover:text-navy text-[14px] font-medium">
            Sign in
          </Link>
          <Link href="/quiz" className="btn-primary !py-2.5 !px-5 text-[14px]">
            Get Certified
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          className="lg:hidden text-ink"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-mist bg-cream">
          <div className="container-x py-6 flex flex-col gap-1">
            <div className="text-xs font-semibold uppercase text-fog tracking-eyebrow px-2 pb-2">
              Programs
            </div>
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="px-2 py-3 text-ink"
                onClick={() => setOpen(false)}
              >
                {p.name}
              </Link>
            ))}
            <div className="h-px bg-mist my-2" />
            <Link href="/quiz" className="px-2 py-3 text-ink" onClick={() => setOpen(false)}>
              Pre-Qualify Free
            </Link>
            <Link href="/verify" className="px-2 py-3 text-ink" onClick={() => setOpen(false)}>
              Verify Certification
            </Link>
            <Link href="/portal" className="px-2 py-3 text-ink" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link href="/quiz" className="btn-primary mt-3 justify-center" onClick={() => setOpen(false)}>
              Get Certified
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
