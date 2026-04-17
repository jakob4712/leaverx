import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROGRAMS } from '@/lib/programs';

export default function ProgramGrid() {
  return (
    <section className="bg-paper border-y border-mist">
      <div className="container-x py-24">
        <div className="max-w-3xl">
          <div className="eyebrow">One Evaluation. Every Program.</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
            Identify every protection you qualify for.
          </h2>
          <p className="mt-6 text-slate text-[17px] leading-relaxed">
            Most employees qualify for multiple programs at once. A single consultation with our doctor identifies your full eligibility — federal, state, and employer-provided.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="card card-hover flex flex-col group"
            >
              <div className="flex items-start justify-between">
                <span className="pill-sm">{p.badge}</span>
                <ArrowUpRight className="w-4 h-4 text-fog group-hover:text-navy transition" />
              </div>
              <h3 className="font-display text-[20px] text-ink mt-5 leading-tight">
                {p.shortName}
              </h3>
              <ul className="mt-4 space-y-2 text-[13.5px] text-slate flex-1">
                {p.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="leading-snug">
                    • {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p className="text-[20px] md:text-[22px] font-display text-ink text-balance">
            <span className="font-semibold">82% of LeaveRx patients</span> qualify for multiple protections simultaneously.
          </p>
          <Link href="/quiz" className="btn-primary mt-6 inline-flex">
            Check What I Qualify For — Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
