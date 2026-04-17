import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function QuizProgress({ step, total, onBack }) {
  const pct = Math.min(100, Math.round((step / total) * 100));
  return (
    <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm border-b border-mist">
      <div className="container-x flex items-center gap-4 h-16">
        {step > 0 ? (
          <button
            onClick={onBack}
            className="text-slate hover:text-navy flex items-center gap-1.5 text-[14px]"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <Link href="/" className="text-slate hover:text-navy flex items-center gap-1.5 text-[14px]">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        )}
        <div className="flex-1">
          <div className="h-1.5 bg-mist rounded-full overflow-hidden">
            <div
              className="h-full bg-navy transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <div className="text-[13px] text-fog tabular-nums">
          {Math.min(step + 1, total)} / {total}
        </div>
      </div>
    </div>
  );
}
