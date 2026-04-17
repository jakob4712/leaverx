import Link from 'next/link';
import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-rule">
        <div className="container-x h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setOpen(true)}
              className="spec text-ink hover:text-bureau transition-colors"
            >
              Menu
            </button>
            <Link
              href="/"
              className="font-body font-semibold text-ink text-[20px] tracking-tight"
            >
              LeaveRx
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/#tool-01"
              className="hidden md:inline-flex spec text-graphite hover:text-ink"
            >
              Check Eligibility
            </Link>
            <Link href="/intake" className="btn-bureau !py-2 !px-5">
              Get Certified · $149
            </Link>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
