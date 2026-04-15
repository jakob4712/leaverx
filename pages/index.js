import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Icon } from '@/components/Icon';

const STEPS = [
  { n: '01', icon: 'doc', t: 'Share your situation', d: 'Complete a guided intake about your condition, work, and leave dates. Designed by physicians to capture only what is clinically necessary — 5 to 7 minutes.' },
  { n: '02', icon: 'shield', t: 'Upload supporting records', d: 'Office notes, imaging, surgical reports, or prior provider letters. Encrypted end-to-end. Optional but strengthens certification.' },
  { n: '03', icon: 'stethoscope', t: 'Licensed physician review', d: 'A U.S. board-certified physician reviews your case, evaluates clinical evidence, and completes DOL Form WH-380.' },
  { n: '04', icon: 'check', t: 'Certification delivered', d: 'Download your signed FMLA certification. Submit directly to HR. Employer-ready, federally recognized, legally binding.' },
];

const REASONS = [
  { icon: 'clock', t: '24-hour turnaround', d: 'Most certifications are completed within a single business day. Expedited option delivers same day.' },
  { icon: 'shield', t: 'HIPAA-compliant by design', d: 'End-to-end encryption, audited access controls, and a records policy that only retains what’s required.' },
  { icon: 'stethoscope', t: 'Board-certified physicians', d: 'U.S.-licensed MDs and DOs in internal medicine, family medicine, and psychiatry — not nurse practitioners overseas.' },
  { icon: 'doc', t: 'Federal DOL Form WH-380', d: 'We complete the exact form your employer is required by law to accept. No substitutes. No ambiguity.' },
  { icon: 'heart', t: 'Full refund guarantee', d: 'If the physician cannot clinically certify your condition, you pay nothing. No fine print.' },
  { icon: 'lock', t: 'Never shared with your employer', d: 'Your medical details stay with us. Your employer only receives the completed certification form.' },
];

const CONDITIONS = {
  physical: ['Post-surgical recovery', 'Chronic spinal conditions', 'Cardiac recovery', 'Oncology treatment', 'Pregnancy complications', 'Severe injuries & fractures', 'Autoimmune disorders', 'Diabetes complications', 'Respiratory conditions', 'Chronic migraines'],
  mental: ['Major depressive disorder', 'Generalized anxiety', 'PTSD & acute trauma', 'Bipolar disorder', 'Panic disorder', 'Burnout & adjustment disorder', 'Substance-use treatment'],
  family: ['Spouse with serious condition', 'Child with serious condition', 'Parent requiring care'],
};

const PLANS = [
  { name: 'Standard', price: '149', unit: 'one-time', d: 'Physician review and DOL Form WH-380. 24–48 hour turnaround.', popular: false },
  { name: 'Expedited', price: '199', unit: 'one-time', d: 'Priority physician review. Same-day certification delivery.', popular: true },
  { name: 'Family leave', price: '149', unit: 'one-time', d: 'Form WH-380-F to care for a spouse, child, or parent.', popular: false },
  { name: 'Recertification', price: '99', unit: 'one-time', d: 'Updated certification when HR requests follow-up documentation.', popular: false },
];

const TESTIMONIALS = [
  { q: 'My surgeon couldn’t see me for three weeks. LeaveRx had my FMLA form signed in eighteen hours. HR accepted it without a single follow-up question.', a: 'K.M.', r: 'Logistics · Houston, TX' },
  { q: 'I was struggling with severe anxiety and the idea of sitting in a waiting room was unbearable. LeaveRx let me get the documentation I needed from home, with dignity.', a: 'S.R.', r: 'Software · Chicago, IL' },
  { q: 'Recertification used to mean another two weeks of chasing my PCP. LeaveRx turned it around in a day. It genuinely protected my job.', a: 'J.P.', r: 'Finance · Atlanta, GA' },
];

const FAQS = [
  { q: 'Is this legitimate? Will my employer actually accept it?', a: 'Yes. DOL Form WH-380 is the federal standard required by the U.S. Department of Labor. When signed by a licensed physician, your employer is legally obligated to accept it under 29 CFR § 825.306.' },
  { q: 'Do I qualify for FMLA leave in the first place?', a: 'You generally qualify if you have worked for a covered employer for at least 12 months, have logged at least 1,250 hours in the past year, and your employer has 50 or more employees within a 75-mile radius of your worksite.' },
  { q: 'What if the physician cannot certify my condition?', a: 'You receive an immediate, full refund. No deductions, no questions, no documentation required on your end.' },
  { q: 'How does the physician review actually work?', a: 'A U.S. board-certified physician reviews your intake responses, medical records, and clinical history. They then complete, attest to, and e-sign the DOL Form WH-380 based on established FMLA criteria.' },
  { q: 'Is my medical information shared with my employer?', a: 'Never. Your employer receives only the completed certification form. Your symptoms, diagnosis details, and records remain between you and the reviewing physician.' },
  { q: 'Can I use this for intermittent or reduced-schedule leave?', a: 'Yes. Our physicians regularly document continuous, intermittent, and reduced-schedule leave arrangements based on clinical appropriateness.' },
  { q: 'How long is an FMLA certification valid?', a: 'Certifications are valid for the duration of the leave specified by your physician. Employers may request recertification every 30 days in limited circumstances.' },
  { q: 'Do I need to have existing medical records to qualify?', a: 'Existing records are not strictly required, but they meaningfully improve both speed and likelihood of certification. Without records, a brief clinical follow-up may be required.' },
];

export default function Home() {
  return (
    <div className="bg-ink text-bone">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-teal-2/10 blur-3xl" />
        <div className="container-wide relative pt-20 md:pt-28 pb-24 md:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-8">Telehealth FMLA Certification</div>
              <h1 className="display text-5xl md:text-7xl lg:text-[92px] leading-[0.98] text-balance">
                Medical leave,<br />
                <span className="text-bone/35">certified by a doctor.</span><br />
                <span className="italic font-normal">Without the office visit.</span>
              </h1>
              <p className="mt-10 text-lg md:text-xl text-bone/65 leading-relaxed max-w-2xl text-pretty">
                A licensed U.S. physician reviews your case and completes your FMLA Certification of Health Care Provider (DOL Form WH-380) — usually within 24 hours. Private, federally recognized, refunded if we can’t certify.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/intake" className="btn-primary !px-7 !py-4 text-[15px]">
                  Start evaluation — $149 <Icon name="arrow" className="w-4 h-4" />
                </Link>
                <a href="#how" className="btn-secondary !px-7 !py-4 text-[15px]">See how it works</a>
              </div>
              <div className="mt-10 flex items-center gap-3 text-[13px] text-bone/60">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="star" className="w-4 h-4 text-teal" />)}
                </div>
                <span className="font-semibold text-bone">4.8 / 5</span>
                <span className="text-bone/30">·</span>
                <span>2,500+ certifications delivered</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <TrustStat label="Average turnaround" value="under 24h" icon="clock" />
              <TrustStat label="Full refund if not certified" value="100%" icon="shield" />
              <TrustStat label="Licensed in all U.S. states" value="50 / 50" icon="stethoscope" />
              <TrustStat label="HIPAA-compliant platform" value="Encrypted" icon="lock" />
            </div>
          </div>
        </div>
      </section>

      {/* BADGE STRIP */}
      <section className="border-y border-line bg-ink-2">
        <div className="container-wide py-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 text-[12px] uppercase tracking-[0.18em] text-bone/50">
          <span>Board-Certified Physicians</span>
          <span className="hidden sm:block text-bone/20">·</span>
          <span>HIPAA Compliant</span>
          <span className="hidden sm:block text-bone/20">·</span>
          <span>DOL Form WH-380</span>
          <span className="hidden sm:block text-bone/20">·</span>
          <span>Same-Day Available</span>
          <span className="hidden sm:block text-bone/20">·</span>
          <span>All 50 States</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container-wide py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">01 / The Process</div>
            <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">
              Four steps between you<br />and your certification.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10">
            <p className="text-bone/60 text-[17px] leading-relaxed">
              We built LeaveRx to remove every unnecessary step from the FMLA process — without compromising clinical rigor. No waiting rooms, no phone trees, no weeks of back-and-forth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-3xl overflow-hidden border border-line">
          {STEPS.map(s => (
            <div key={s.n} className="bg-ink p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <span className="num-rule">{s.n}</span>
                <Icon name={s.icon} className="w-6 h-6 text-teal" />
              </div>
              <h3 className="display text-xl mt-10">{s.t}</h3>
              <p className="mt-3 text-[15px] text-bone/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section className="bg-ink-2 border-y border-line">
        <div className="container-wide py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow mb-6">02 / Why LeaveRx</div>
              <h2 className="display text-4xl md:text-6xl leading-[1]">Built for real medical legitimacy.</h2>
            </div>
            <p className="md:col-span-5 md:pl-10 text-bone/60 text-[17px] leading-relaxed">
              LeaveRx is not a form-mill. Every certification is a clinical decision made by a licensed U.S. physician, delivered on the federal DOL form your employer is obligated to accept.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map(r => (
              <div key={r.t} className="card card-hover">
                <div className="w-11 h-11 rounded-xl bg-sage flex items-center justify-center text-teal">
                  <Icon name={r.icon} className="w-5 h-5" />
                </div>
                <h3 className="display text-[19px] mt-6">{r.t}</h3>
                <p className="mt-2 text-[14.5px] text-bone/60 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="bg-ink relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal/10 blur-3xl" />
        <div className="container-wide py-28 md:py-36 relative">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-6">
              <div className="eyebrow mb-6">03 / Confidentiality</div>
              <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">
                Your records are yours. <span className="text-bone/35 italic font-normal">Always.</span>
              </h2>
              <p className="mt-8 text-bone/65 text-[17px] leading-relaxed max-w-xl">
                We built LeaveRx with the privacy sensitivity that medical leave deserves. Your employer never sees your symptoms, diagnosis, records, or session notes — only the federally required certification form.
              </p>
              <Link href="/legal/hipaa" className="mt-8 inline-flex items-center gap-2 text-bone link-underline text-[14px]">
                Read our HIPAA Notice <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-6 md:pl-10 space-y-5">
              {[
                ['End-to-end encryption', 'TLS 1.3 in transit. AES-256 at rest. Records accessible only to the reviewing physician.'],
                ['Minimum-necessary data', 'We collect only what is clinically and legally required. Nothing else touches our servers.'],
                ['No employer disclosure', 'HR receives Form WH-380 only. Your medical details never leave our platform.'],
                ['Right to delete', 'You can request deletion of your records at any time, for any reason.'],
              ].map(([t,d]) => (
                <div key={t} className="flex gap-4 pb-5 border-b border-line">
                  <div className="text-teal pt-1"><Icon name="check" className="w-5 h-5" /></div>
                  <div>
                    <h4 className="display text-[17px] text-bone">{t}</h4>
                    <p className="text-bone/55 text-[14px] mt-1 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <section className="bg-ink-2 border-y border-line">
        <div className="container-wide py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow mb-6">04 / Clinical Process</div>
              <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">Reviewed by physicians. Not algorithms.</h2>
            </div>
            <p className="md:col-span-5 md:pl-10 text-bone/60 text-[17px] leading-relaxed">
              Every LeaveRx case is reviewed by a U.S. board-certified physician in internal medicine, family medicine, or psychiatry. No AI-only approvals. No overseas prescribers. No shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3 card bg-ink">
              <div className="eyebrow mb-5">Physician panel</div>
              <h3 className="display text-2xl">Independently licensed. Accountable.</h3>
              <p className="mt-4 text-bone/60 text-[15px] leading-relaxed max-w-lg">
                Our physicians carry active state medical licenses, maintain board certification, and are individually responsible for every case they sign. They are not employees of LeaveRx — they practice independently on the platform.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[['MD & DO', 'Credentials'], ['Board', 'Certified'], ['50', 'States']].map(([a,b]) => (
                  <div key={b} className="pt-4 border-t border-line">
                    <div className="display text-2xl">{a}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-bone/50 mt-1">{b}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 card bg-sage border-sage-2">
              <div className="eyebrow mb-5">What the physician does</div>
              <ul className="space-y-4 text-[14.5px] text-bone/85">
                {[
                  'Reviews your intake and records',
                  'Evaluates against FMLA clinical criteria',
                  'Determines duration and schedule type',
                  'Completes and e-signs DOL Form WH-380',
                  'Attests to clinical accuracy',
                ].map(x => (
                  <li key={x} className="flex gap-3">
                    <span className="text-teal mt-0.5"><Icon name="check" className="w-4 h-4" /></span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section id="conditions" className="container-wide py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">05 / Qualifying Conditions</div>
            <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">
              If it stops you from working, it likely qualifies.
            </h2>
          </div>
          <p className="md:col-span-5 md:pl-10 text-bone/60 text-[17px] leading-relaxed">
            FMLA covers any serious health condition — physical or mental — that prevents you from performing essential job functions. Here are the categories we see most often.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ConditionCard icon="pulse" title="Physical health" sub="Form WH-380-E" items={CONDITIONS.physical} />
          <ConditionCard icon="brain" title="Mental health" sub="Form WH-380-E" items={CONDITIONS.mental} />
          <ConditionCard icon="users" title="Family member care" sub="Form WH-380-F" items={CONDITIONS.family} />
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-ink-2 border-y border-line">
        <div className="container-wide py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow mb-6">06 / The Alternative</div>
              <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">A better option than waiting three weeks.</h2>
            </div>
          </div>
          <div className="rounded-3xl border border-line overflow-hidden bg-ink">
            <div className="grid grid-cols-4 text-[12px] uppercase tracking-[0.18em] text-bone/50 border-b border-line">
              <div className="p-6"></div>
              <div className="p-6 bg-sage text-bone font-semibold">LeaveRx</div>
              <div className="p-6">Your Doctor</div>
              <div className="p-6">Urgent Care</div>
            </div>
            {[
              ['Price', '$149 flat', '$150–$300 + copay', '$200–$350'],
              ['Turnaround', '24 hours', '2–4 weeks for appt', 'Same day, in-person'],
              ['Office visit', 'Not required', 'Required', 'Required'],
              ['Form completed for you', 'Yes', 'Sometimes', 'Rarely'],
              ['Refund if not certified', 'Full refund', 'No', 'No'],
              ['FMLA specialty', 'Yes', 'No', 'No'],
            ].map((row, i) => (
              <div key={row[0]} className={`grid grid-cols-4 text-[14.5px] ${i !== 0 ? 'border-t border-line' : ''}`}>
                <div className="p-6 font-semibold text-bone/75">{row[0]}</div>
                <div className="p-6 bg-sage/40 text-bone font-semibold">{row[1]}</div>
                <div className="p-6 text-bone/55">{row[2]}</div>
                <div className="p-6 text-bone/55">{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container-wide py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">07 / Pricing</div>
            <h2 className="display text-4xl md:text-6xl leading-[1]">One fee. No insurance. No surprises.</h2>
          </div>
          <p className="md:col-span-5 md:pl-10 text-bone/60 text-[17px] leading-relaxed">
            Flat pricing. Full refund if the reviewing physician cannot clinically certify your condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map(p => (
            <div key={p.name} className={`card card-hover relative flex flex-col ${p.popular ? '!bg-bone !text-ink !border-bone' : ''}`}>
              {p.popular && (
                <div className="absolute -top-3 left-7 text-[10px] font-semibold uppercase tracking-[0.2em] bg-teal text-bone px-3 py-1.5 rounded-full">Most chosen</div>
              )}
              <div className={`eyebrow ${p.popular ? '!text-ink/50 before:!bg-ink/30' : ''}`}>{p.name}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="display text-5xl">${p.price}</span>
                <span className={`text-[13px] ${p.popular ? 'text-ink/50' : 'text-bone/50'}`}>/ {p.unit}</span>
              </div>
              <p className={`mt-5 text-[14px] leading-relaxed flex-1 ${p.popular ? 'text-ink/70' : 'text-bone/60'}`}>{p.d}</p>
              <Link href="/intake" className={`mt-8 btn w-full justify-center text-[14px] ${p.popular ? 'bg-ink text-bone hover:bg-teal' : 'bg-bone text-ink hover:bg-teal hover:text-bone'}`}>
                Start evaluation <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink-2 border-y border-line">
        <div className="container-wide py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow mb-6">08 / Patient Stories</div>
              <h2 className="display text-4xl md:text-6xl leading-[1] text-balance">Quiet relief, at the moment it matters.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="card flex flex-col">
                <Icon name="quote" className="w-6 h-6 text-teal" />
                <blockquote className="mt-5 text-[16px] text-bone/80 leading-relaxed flex-1">“{t.q}”</blockquote>
                <figcaption className="mt-8 pt-5 border-t border-line">
                  <div className="display text-[15px]">{t.a}</div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-bone/50 mt-1">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-wide py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-6">09 / FAQ</div>
            <h2 className="display text-4xl md:text-5xl leading-[1]">Everything you need to know.</h2>
            <p className="mt-6 text-bone/60 text-[15px] leading-relaxed">
              Still have questions? Email <a href="mailto:support@leaverx.co" className="underline">support@leaverx.co</a> — we respond within the hour during business hours.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-line">
              {FAQS.map((f, i) => (
                <details key={i} className="group border-b border-line py-7">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="display text-[19px] md:text-[22px] text-bone pr-4">{f.q}</span>
                    <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-bone/20 flex items-center justify-center text-bone group-open:bg-bone group-open:text-ink transition">
                      <Icon name="plus" className="w-4 h-4 group-open:hidden" />
                      <Icon name="minus" className="w-4 h-4 hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="mt-4 text-bone/60 text-[15px] leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-2 border-t border-line">
        <div className="container-wide py-28 md:py-36">
          <div className="rounded-[32px] bg-ink border border-line p-10 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 grain opacity-20" />
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal-2/15 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="eyebrow mb-6">Start today</div>
              <h2 className="display text-4xl md:text-6xl lg:text-7xl leading-[1] text-balance">
                Get your FMLA certification in the time it takes to read this page.
              </h2>
              <p className="mt-8 text-bone/65 text-[17px] leading-relaxed max-w-xl">
                Most cases are certified within 24 hours. Same-day is available. If we can’t certify you, you pay nothing.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/intake" className="btn-primary !px-7 !py-4">
                  Start evaluation — $149 <Icon name="arrow" className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary !px-7 !py-4">See pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TrustStat({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between gap-4 p-5 bg-ink-2 border border-line rounded-2xl hover:border-bone/30 transition">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-teal">
          <Icon name={icon} className="w-5 h-5" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-bone/55">{label}</div>
      </div>
      <div className="display text-[15px]">{value}</div>
    </div>
  );
}

function ConditionCard({ icon, title, sub, items }) {
  return (
    <div className="card card-hover">
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl bg-sage flex items-center justify-center text-teal">
          <Icon name={icon} className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-bone/40 border border-line rounded-full px-2.5 py-1">{sub}</span>
      </div>
      <h3 className="display text-2xl mt-6">{title}</h3>
      <ul className="mt-5 space-y-3 text-[14.5px] text-bone/75">
        {items.map(x => (
          <li key={x} className="flex gap-3 pb-3 border-b border-line last:border-0 last:pb-0">
            <span className="text-teal mt-1"><Icon name="check" className="w-3.5 h-3.5" /></span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
