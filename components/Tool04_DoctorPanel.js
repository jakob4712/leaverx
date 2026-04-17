import { ShieldCheck } from 'lucide-react';

const DOCTORS = [
  {
    name: 'Dr. Maya Patel, MD',
    specialty: 'Internal Medicine',
    years: 12,
    states: ['CA', 'NY', 'TX', 'FL', 'IL', 'PA'],
    boards: ['ABIM', 'ACP'],
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&h=480&fit=crop&q=80',
  },
  {
    name: 'Dr. James Whitfield, DO',
    specialty: 'Family Medicine',
    years: 18,
    states: ['FL', 'GA', 'NC', 'SC', 'TN', 'AL'],
    boards: ['AOBFP'],
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=480&h=480&fit=crop&q=80',
  },
  {
    name: 'Dr. Renée Solis, MD',
    specialty: 'Psychiatry',
    years: 9,
    states: ['CA', 'OR', 'WA', 'NV', 'AZ', 'CO'],
    boards: ['ABPN'],
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=480&h=480&fit=crop&q=80',
  },
  {
    name: 'Dr. David Okonkwo, MD',
    specialty: 'Internal Medicine',
    years: 15,
    states: ['IL', 'OH', 'MI', 'IN', 'WI', 'MN'],
    boards: ['ABIM'],
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=480&h=480&fit=crop&q=80',
  },
  {
    name: 'Dr. Sarah Lindgren, MD',
    specialty: 'Family Medicine',
    years: 11,
    states: ['NJ', 'PA', 'MA', 'CT', 'NY', 'VT'],
    boards: ['ABFM'],
    photo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=480&h=480&fit=crop&q=80',
  },
  {
    name: 'Dr. Marcus Reyes, MD',
    specialty: 'Internal Medicine',
    years: 14,
    states: ['TX', 'NM', 'OK', 'AR', 'LA', 'MS'],
    boards: ['ABIM'],
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=480&h=480&fit=crop&q=80',
  },
];

export default function Tool04() {
  return (
    <section id="tool-04" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 04 / Medical Board</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Board-certified physicians. Licensed nationally.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          Every physician on the LeaveRx panel maintains active board certifications, carries malpractice insurance, and is licensed in every state they evaluate.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((d, i) => (
            <article
              key={d.name}
              className={`card-paper p-6 ${i % 5 === 1 ? 'md:translate-y-4' : i % 5 === 3 ? 'md:translate-y-6' : ''}`}
            >
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.photo}
                  alt={d.name}
                  className="w-16 h-16 rounded-sm object-cover border border-rule"
                />
                <div>
                  <div className="font-body font-semibold text-[16px] text-ink">{d.name}</div>
                  <div className="text-[13px] text-graphite mt-0.5">
                    {d.specialty} · {d.years} years
                  </div>
                </div>
              </div>
              <div className="mt-5 hairline" />
              <div className="mt-4 spec">Licensed</div>
              <div className="mt-2 num text-[12px] text-ink">{d.states.join(', ')}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {d.boards.map((b) => (
                  <span key={b} className="pill-bureau">{b}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 spec text-stamp">
                <ShieldCheck className="w-3 h-3" /> Verified
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 spec text-ash">
          // TODO: Replace Unsplash placeholders with real clinician photos and credentials.
        </p>
      </div>
    </section>
  );
}
