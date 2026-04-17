import Link from 'next/link';
import { X } from 'lucide-react';

const ITEMS = [
  { label: 'Eligibility Check', href: '/#tool-01' },
  { label: 'Program Matrix', href: '/#tool-02' },
  { label: 'Timeline', href: '/#tool-03' },
  { label: 'Medical Board', href: '/#tool-04' },
  { label: 'Conditions', href: '/#tool-05' },
  { label: 'Privacy', href: '/#tool-06' },
  { label: 'Case Archive', href: '/#tool-07' },
  { label: 'Your Documents', href: '/#tool-08' },
  { label: 'Begin Evaluation', href: '/intake' },
];

export default function MenuOverlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-paper z-50 overflow-y-auto">
      <div className="container-x flex items-center justify-between h-16 border-b border-rule">
        <span className="spec">Menu</span>
        <button onClick={onClose} aria-label="Close" className="text-ink">
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="container-x py-12">
        {ITEMS.map((it, i) => (
          <Link
            key={it.label}
            href={it.href}
            onClick={onClose}
            className="block py-6 border-b border-rule group"
          >
            <div className="flex items-baseline justify-between">
              <span className="display-italic text-[44px] md:text-[64px] leading-none text-ink group-hover:text-bureau transition-colors">
                {it.label}
              </span>
              <span className="num text-[12px] text-ash">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
