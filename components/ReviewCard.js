import { Star, ShieldCheck } from 'lucide-react';

export default function ReviewCard({ quote, name, role, state, date, initials }) {
  return (
    <figure className="card flex flex-col h-full">
      <div className="flex gap-1 text-navy">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-navy" />
        ))}
      </div>
      <blockquote className="mt-5 font-display italic text-[18px] text-ink leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-mist flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-navy-soft flex items-center justify-center text-navy-deep font-semibold text-sm">
          {initials}
        </div>
        <div className="flex-1">
          <div className="text-[14px] font-semibold text-ink">{name}</div>
          <div className="text-[12px] text-fog">
            {role} · {state}
          </div>
        </div>
        <span className="pill-sm flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" /> Verified
        </span>
      </figcaption>
    </figure>
  );
}
