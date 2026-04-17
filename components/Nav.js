import Link from 'next/link';
import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-rule">
        <div className="container-x flex items-center justify-between h-16">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-2 text-ink"
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>

          <Link href="/" className="font-body font-semibold text-[18px] tracking-tight text-ink">
            LeaveRx
          </Link>

          <Link href="/intake" className="btn-bureau">
            Get Certified — $149
          </Link>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
