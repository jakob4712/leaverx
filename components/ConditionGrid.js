import Link from 'next/link';
import { CONDITIONS } from '@/lib/conditions';
import * as Icons from 'lucide-react';

export default function ConditionGrid() {
  return (
    <section className="container-x py-24">
      <div className="max-w-3xl">
        <div className="eyebrow">Qualifying Conditions</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
          Over 100 million Americans qualify. Do you?
        </h2>
        <p className="mt-6 text-slate text-[17px] leading-relaxed">
          FMLA and paid leave programs cover any serious health condition — yours or a family member&apos;s. The most common qualifying conditions include:
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CONDITIONS.map((c) => {
          const Icon = Icons[c.icon] || Icons.Heart;
          return (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              className="card card-hover block"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-soft flex items-center justify-center text-navy mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-display text-[18px] text-ink leading-tight">{c.name}</div>
              <div className="mt-2 text-[13px] text-fog leading-relaxed">{c.tagline}</div>
            </Link>
          );
        })}
      </div>

      <div className="mt-14 text-center max-w-2xl mx-auto">
        <p className="text-slate text-[16px]">
          Don&apos;t see your condition? Almost any serious health condition may qualify. Take the pre-qualification quiz to find out.
        </p>
        <Link href="/quiz" className="btn-secondary mt-6 inline-flex">
          Check My Eligibility →
        </Link>
      </div>
    </section>
  );
}
