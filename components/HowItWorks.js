const STEPS = [
  {
    n: '01',
    title: 'Free Pre-Qualification',
    d: 'Take our 2-minute quiz to see which programs you\'re eligible for. No payment required, no commitment.',
  },
  {
    n: '02',
    title: 'Secure Intake',
    d: 'Tell us about your condition, your employer, and your situation. HIPAA-compliant, confidential from your employer.',
  },
  {
    n: '03',
    title: 'Doctor Consultation',
    d: 'Board-certified physician licensed in your state reviews your case via video or phone. Typically 15–20 minutes.',
  },
  {
    n: '04',
    title: 'Paperwork Delivered',
    d: 'Completed FMLA form (WH-380-E), paid leave certification, and any additional program paperwork delivered within 24 hours. Submit to HR — your leave starts.',
  },
];

export default function HowItWorks() {
  return (
    <section className="container-x py-24">
      <div className="max-w-3xl">
        <div className="eyebrow">How It Works</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
          Four steps. Approved in 24 hours.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((s) => (
          <div key={s.n}>
            <div className="w-14 h-14 rounded-full bg-terracotta-soft flex items-center justify-center font-display text-terracotta text-[20px] font-semibold">
              {s.n}
            </div>
            <h3 className="font-display text-xl text-ink mt-6">{s.title}</h3>
            <p className="mt-3 text-[14.5px] text-slate leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
