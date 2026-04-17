import Link from 'next/link';
import { Check, HelpCircle, X, ArrowRight } from 'lucide-react';

const STATUS = {
  yes: { Icon: Check, color: 'text-approved', bg: 'bg-approved/10', label: 'You qualify' },
  maybe: { Icon: HelpCircle, color: 'text-pending', bg: 'bg-pending/10', label: 'You may qualify' },
  no: { Icon: X, color: 'text-fog', bg: 'bg-mist', label: 'Not eligible' },
};

export default function ResultsCard({ results, email }) {
  const qualifying = results.filter((r) => r.status === 'yes');
  return (
    <div className="container-narrow py-12 md:py-20">
      <div className="text-center">
        <div className="eyebrow">Your Pre-Qualification Results</div>
        <h1 className="mt-4 font-display text-3xl md:text-5xl text-ink text-balance">
          You qualify for <span className="text-navy">{qualifying.length}</span> protection
          {qualifying.length === 1 ? '' : 's'}.
        </h1>
        <p className="mt-4 text-slate text-[16px] max-w-xl mx-auto leading-relaxed">
          Based on your answers, here&apos;s what our doctors can certify for you in a single
          telehealth evaluation. Final approval is at the discretion of the reviewing physician.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {results.map((r) => {
          const s = STATUS[r.status];
          return (
            <div key={r.name} className={`card flex items-start gap-4 ${r.status === 'no' ? 'opacity-60' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${s.bg} ${s.color}`}>
                <s.Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-display text-[18px] text-ink">{r.name}</div>
                  <span className={`text-[11px] font-semibold uppercase tracking-eyebrow ${s.color}`}>
                    {s.label}
                  </span>
                </div>
                <div className="mt-1.5 text-[14px] text-slate leading-relaxed">{r.note}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-navy-soft rounded-xl p-7 text-center">
        <h3 className="font-display text-2xl text-ink">Ready to get certified?</h3>
        <p className="mt-3 text-slate text-[15px] max-w-md mx-auto">
          A board-certified physician licensed in your state reviews your case. Approved within 24 hours, or full refund.
        </p>
        <Link href="/intake" className="btn-primary btn-lg mt-6 inline-flex">
          Get Certified Now — $149 <ArrowRight className="w-4 h-4" />
        </Link>
        {email && (
          <p className="mt-4 text-[12px] text-fog">
            We&apos;ll email a copy of your results to <strong>{email}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
