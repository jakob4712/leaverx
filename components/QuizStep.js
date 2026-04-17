import { Check } from 'lucide-react';

export default function QuizStep({ question, sub, options, value, onSelect, multi = false }) {
  const isSelected = (v) => (multi ? (value || []).includes(v) : value === v);
  return (
    <div className="container-narrow py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
        {question}
      </h1>
      {sub && <p className="mt-4 text-slate text-[16px] leading-relaxed">{sub}</p>}

      <div className="mt-10 grid gap-3">
        {options.map((opt) => {
          const selected = isSelected(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`text-left p-5 rounded-xl border-2 transition flex items-start gap-4 ${
                selected
                  ? 'border-navy bg-navy-soft'
                  : 'border-mist bg-paper hover:border-navy/50'
              }`}
            >
              <div
                className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selected ? 'bg-navy border-navy text-white' : 'border-mist'
                }`}
              >
                {selected && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <div className="font-medium text-ink text-[16px]">{opt.label}</div>
                {opt.sub && <div className="mt-0.5 text-[13.5px] text-fog">{opt.sub}</div>}
              </div>
            </button>
          );
        })}
      </div>

      {multi && (
        <p className="mt-6 text-[13px] text-fog">
          Select all that apply, then click Continue below.
        </p>
      )}
    </div>
  );
}
