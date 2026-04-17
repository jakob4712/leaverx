import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-mist">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-mist">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left py-6 flex items-start justify-between gap-6"
            >
              <span className="font-display text-[19px] md:text-[22px] text-ink pr-4">
                {f.q}
              </span>
              <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-mist flex items-center justify-center text-navy">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="text-slate text-[15.5px] leading-relaxed pb-7 max-w-3xl">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
