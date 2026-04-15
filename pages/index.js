import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const STEPS = [
  { n: 1, t: 'Tell Us About Your Situation', d: 'Complete a secure intake form about your medical condition and leave needs (5–7 min).' },
  { n: 2, t: 'Upload Documentation', d: 'Provide any existing medical records, doctor’s notes, or diagnosis documentation.' },
  { n: 3, t: 'Physician Review', d: 'A licensed physician reviews your case and completes DOL Form WH-380.' },
  { n: 4, t: 'Get Your Certification', d: 'Receive your signed FMLA certification form, ready to submit to your employer.' },
];

const PHYSICAL = ['Post-surgical recovery','Chronic back pain / spinal conditions','Heart conditions / cardiac recovery','Cancer treatment','Pregnancy and prenatal complications','Severe injuries / fractures','Autoimmune disorders (lupus, MS, RA)','Diabetes complications','Respiratory conditions (COPD, severe asthma)','Migraines / chronic headaches'];
const MENTAL = ['Major depression','Generalized anxiety disorder','PTSD / trauma','Bipolar disorder','Panic disorder','Burnout / adjustment disorder','Substance abuse treatment'];
const FAMILY = ['Caring for spouse with serious health condition','Caring for child with serious health condition','Caring for parent with serious health condition'];

const PLANS = [
  { name: 'Standard FMLA Certification', price: '$149', d: 'Physician review + signed DOL Form WH-380. 24–48 hour turnaround.', popular: true },
  { name: 'Expedited (Same-Day)', price: '$199', d: 'Priority review, certification delivered same day.' },
  { name: 'Family Member FMLA', price: '$149', d: 'Form WH-380-F for caring for a family member.' },
  { name: 'Recertification', price: '$99', d: 'If your employer requests an updated certification.' },
];

const TESTIMONIALS = [
  { q: 'I needed FMLA for my back surgery recovery. My doctor couldn’t see me for 3 weeks. LeaveRx had my form signed in 18 hours.', a: 'K.M., Houston TX' },
  { q: 'Going through a rough patch with depression and anxiety. Couldn’t face going to a doctor’s office. LeaveRx made it possible to get the documentation I needed from home.', a: 'S.R., Chicago IL' },
  { q: 'My HR department kept asking for additional documentation. LeaveRx handled the recertification in one day. Lifesaver.', a: 'J.P., Atlanta GA' },
];

const FAQS = [
  { q: 'What is FMLA?', a: 'The Family and Medical Leave Act (FMLA) is a federal law that entitles eligible employees to take up to 12 weeks of unpaid, job-protected leave per year for qualifying medical and family reasons, with continued group health insurance coverage.' },
  { q: 'Do I qualify for FMLA leave?', a: 'You generally qualify if you’ve worked for a covered employer for at least 12 months, have worked at least 1,250 hours over the past 12 months, and your employer has 50+ employees within 75 miles of your worksite.' },
  { q: 'What form does my employer need?', a: 'Most employers require the DOL Form WH-380-E (for your own serious health condition) or WH-380-F (to care for a family member). We complete either form for you.' },
  { q: 'How does the physician review work?', a: 'After you submit your intake and any supporting records, a licensed, board-certified physician reviews your clinical information and completes the FMLA form based on your documented condition.' },
  { q: 'Is this legitimate? Will my employer accept it?', a: 'Yes. DOL Form WH-380 is the federal standard. Employers are legally required to accept a properly completed form signed by any licensed healthcare provider.' },
  { q: 'What if the physician can’t certify my condition?', a: 'If certification is not clinically supported, you receive a full refund. No questions asked.' },
  { q: 'How long is the certification valid?', a: 'FMLA certifications are typically valid for the duration of the specified leave. Employers may request recertification every 30 days in some cases.' },
  { q: 'Can I use this for intermittent FMLA leave?', a: 'Yes. Our physicians can document continuous, intermittent, or reduced-schedule leave as clinically appropriate.' },
  { q: 'Is my medical information private?', a: 'Absolutely. LeaveRx is HIPAA-compliant. Your records are encrypted in transit and at rest, and only shared with the reviewing physician.' },
  { q: 'Do I need existing medical records?', a: 'Records are not strictly required, but they significantly improve the likelihood and speed of certification. If you don’t have records, our physician may request a brief follow-up.' },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-gray via-white to-white" />
        <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <div className="chip mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-green" /> Same-day certifications available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
              Get your FMLA paperwork signed by a doctor. <span className="text-soft-blue">Today.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy/75 leading-relaxed max-w-2xl">
              Need medical leave from work? A licensed physician reviews your case and completes your FMLA certification form — no office visit, no 2-week wait, no $300 copay.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/intake" className="btn-primary">Start — $149</Link>
              <a href="#how" className="btn-secondary">How it works</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy/70">
              {['Board-Certified Physicians','Same-Day Available','HIPAA Compliant','Full Refund if Not Certified'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-green" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-navy/5 bg-warm-gray/60">
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['2,500+','Certifications completed'],['4.8/5','Patient rating'],['24hr','Avg turnaround'],['All 50','States served']].map(([n,l]) => (
            <div key={l}>
              <div className="font-heading font-bold text-3xl md:text-4xl text-navy">{n}</div>
              <div className="text-xs md:text-sm text-navy/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="container-x py-24">
        <div className="max-w-2xl mb-12">
          <div className="chip mb-4">How it works</div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">Four steps. Zero office visits.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(s => (
            <div key={s.n} className="card">
              <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold font-heading">{s.n}</div>
              <h3 className="mt-4 font-bold text-lg text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is FMLA */}
      <section className="bg-navy text-white">
        <div className="container-x py-20 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="chip !bg-white/10 !text-white mb-4">Federal Law</div>
            <h2 className="text-3xl md:text-4xl font-bold">What is FMLA?</h2>
          </div>
          <p className="md:col-span-3 text-white/80 text-lg leading-relaxed">
            The Family and Medical Leave Act (FMLA) entitles eligible employees to take up to <strong className="text-white">12 weeks of unpaid, job-protected leave</strong> per year for qualifying medical conditions. Your employer requires a Certification of Health Care Provider (<strong className="text-white">DOL Form WH-380-E</strong>) signed by a licensed physician. We handle that for you.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="container-x py-24">
        <div className="max-w-2xl mb-12">
          <div className="chip mb-4">Qualifying conditions</div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">If it affects your ability to work, we can likely certify it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-bold text-navy text-lg">Physical Health</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/75">
              {PHYSICAL.map(c => <li key={c} className="flex gap-2"><span className="text-accent-green">•</span>{c}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-navy text-lg">Mental Health</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/75">
              {MENTAL.map(c => <li key={c} className="flex gap-2"><span className="text-accent-green">•</span>{c}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-navy text-lg">Family Member Care <span className="text-xs font-normal text-navy/50">(WH-380-F)</span></h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/75">
              {FAMILY.map(c => <li key={c} className="flex gap-2"><span className="text-accent-green">•</span>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-warm-gray">
        <div className="container-x py-24">
          <div className="max-w-2xl mb-12">
            <div className="chip mb-4">Pricing</div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">Flat fee. No insurance needed.</h2>
            <p className="mt-4 text-navy/70">All plans include full refund if not certified.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANS.map(p => (
              <div key={p.name} className={`card relative ${p.popular ? 'ring-2 ring-accent-green' : ''}`}>
                {p.popular && <div className="absolute -top-3 left-6 text-xs font-bold bg-accent-green text-white px-3 py-1 rounded-full">MOST POPULAR</div>}
                <div className="font-heading font-bold text-3xl text-navy">{p.price}</div>
                <h3 className="mt-1 font-bold text-navy">{p.name}</h3>
                <p className="mt-3 text-sm text-navy/70 leading-relaxed">{p.d}</p>
                <Link href="/intake" className="mt-6 btn-primary w-full text-sm">Start</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="container-x py-24">
        <div className="max-w-2xl mb-10">
          <div className="chip mb-4">Compare</div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">Why people choose LeaveRx.</h2>
        </div>
        <div className="overflow-x-auto card !p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy/10 text-left">
                <th className="p-5"></th>
                <th className="p-5 font-bold text-navy">LeaveRx</th>
                <th className="p-5 font-semibold text-navy/70">Your Doctor’s Office</th>
                <th className="p-5 font-semibold text-navy/70">Urgent Care</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5">
              {[
                ['Price','$149 flat','$150–300 copay','$200–350'],
                ['Time','24–48 hours','2–4 week wait for appt','Same day but in-person'],
                ['Visit','No visit needed','In-person required','In-person required'],
                ['Form completed for you','Yes','Maybe','Rarely'],
                ['Refund if not certified','Full refund','No','No'],
              ].map(row => (
                <tr key={row[0]}>
                  <td className="p-5 font-semibold text-navy">{row[0]}</td>
                  <td className="p-5 text-accent-green font-semibold">{row[1]}</td>
                  <td className="p-5 text-navy/70">{row[2]}</td>
                  <td className="p-5 text-navy/70">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-gray">
        <div className="container-x py-24">
          <div className="max-w-2xl mb-12">
            <div className="chip mb-4">Patient stories</div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">Real people. Real relief.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.a} className="card">
                <div className="text-accent-green font-heading text-4xl leading-none">“</div>
                <p className="text-navy/80 leading-relaxed">{t.q}</p>
                <div className="mt-6 text-sm font-semibold text-navy/60">— {t.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer acceptance */}
      <section className="container-x py-24">
        <div className="card bg-navy text-white !p-10 md:!p-14 !border-0">
          <div className="chip !bg-white/10 !text-white mb-4">Employer acceptance</div>
          <h2 className="text-2xl md:text-4xl font-bold max-w-3xl">Your employer is legally required to accept a properly completed WH-380.</h2>
          <p className="mt-5 text-white/80 max-w-3xl leading-relaxed">
            DOL Form WH-380 is the standard federal form required by the Department of Labor. When signed by a licensed physician, it is legally valid documentation for FMLA leave. Your employer is required by law to accept a properly completed WH-380 form from any licensed healthcare provider.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-x pb-24">
        <div className="max-w-2xl mb-10">
          <div className="chip mb-4">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">Questions answered.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {FAQS.map(f => (
            <details key={f.q} className="card group">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-bold text-navy">{f.q}</span>
                <span className="text-soft-blue font-heading text-xl group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-navy/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-2 text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">Ready to get the documentation you need?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">Start your intake now. Most certifications completed within 24 hours.</p>
          <Link href="/intake" className="btn-primary mt-8">Start — $149</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
