import Link from 'next/link';
import { X } from 'lucide-react';

const ITEMS = [
  { n: '01', label: 'Eligibility Calculator', href: '/#tool-01' },
  { n: '02', label: 'State-Program Matrix', href: '/#tool-02' },
  { n: '03', label: 'Process Timeline', href: '/#tool-03' },
  { n: '04', label: 'Medical Board', href: '/#tool-04' },
  { n: '05', label: 'Conditions', href: '/#tool-05' },
  { n: '06', label: 'Privacy', href: '/#tool-06' },
  { n: '07', label: 'Protection Scenarios', href: '/#tool-07' },
  { n: '08', label: 'Your Documents', href: '/#tool-08' },
  { n: '09', label: 'Begin Evaluation', href: '/intake' },
];

export default function MenuOverlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-paper z-50 overflow-y-auto">
      <div className="container-x h-16 flex items-center justify-between border-b border-rule">
        <span className="spec">Menu</span>
        <button onClick={onClose} aria-label="Close" className="spec text-ink flex items-center gap-1">
          Close <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <nav className="container-x py-10 md:py-16">
        {ITEMS.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            onClick={onClose}
            className="group flex items-baseline gap-6 border-b border-rule py-6 hover:border-bureau"
          >
            <span className="spec text-fog w-10 flex-shrink-0">{it.n}</span>
            <span
              className="font-body font-semibold text-ink group-hover:text-bureau transition-colors leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}
            >
              {it.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
