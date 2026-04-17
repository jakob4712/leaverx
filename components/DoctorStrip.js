const DOCTORS = [
  {
    name: 'Dr. Maya Patel',
    specialty: 'Internal Medicine',
    years: 12,
    states: 'CA, NY, TX, +7 states',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Dr. James Whitfield',
    specialty: 'Family Medicine',
    years: 18,
    states: 'FL, GA, NC, +8 states',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Dr. Renee Solis',
    specialty: 'Psychiatry',
    years: 9,
    states: 'CA, OR, WA, +6 states',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Dr. David Okonkwo',
    specialty: 'Internal Medicine',
    years: 15,
    states: 'IL, OH, MI, +5 states',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Dr. Sarah Lindgren',
    specialty: 'Family Medicine',
    years: 11,
    states: 'NJ, PA, MA, +9 states',
    photo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&q=80',
  },
];

export default function DoctorStrip() {
  return (
    <section className="bg-cream py-20">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Meet Your Medical Team</div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink text-balance">
            Board-certified physicians. Licensed in your state.
          </h2>
        </div>
        {/* TODO: Replace with real clinician photos */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-8">
          {DOCTORS.map((d) => (
            <div key={d.name} className="text-center">
              <div className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-paper shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-display text-[16px] text-ink">{d.name}</div>
              <div className="text-[12.5px] text-slate mt-1">
                {d.specialty} • {d.years} yrs
              </div>
              <div className="text-[11.5px] text-fog mt-1">Licensed in {d.states}</div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-slate text-[15px] max-w-2xl mx-auto leading-relaxed">
          All physicians are board-certified, licensed in the state they evaluate, and have experience working with FMLA, paid leave, and ADA accommodations.
        </p>
      </div>
    </section>
  );
}
