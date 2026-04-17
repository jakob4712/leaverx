import { Lock, Stethoscope, BadgeCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="bg-navy-soft">
      <div className="container-x py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow text-navy-deep">Risk Reversal</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
            Approved or your money back.
          </h2>
          <p className="mt-6 text-slate text-[17px] leading-relaxed">
            If our doctor determines you don&apos;t qualify for any protected leave program, you don&apos;t pay. Full refund, no questions asked. We only succeed when you do.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Pillar icon={Lock} title="HIPAA-Compliant" sub="Confidential from your employer" />
          <Pillar icon={Stethoscope} title="Board-Certified Physicians" sub="Licensed in all 50 states" />
          <Pillar icon={BadgeCheck} title="100% Money-Back Guarantee" sub="No questions asked" />
        </div>
      </div>
    </section>
  );
}

function Pillar({ icon: Icon, title, sub }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-navy shadow-soft">
        <Icon className="w-5 h-5" />
      </div>
      <div className="mt-4 font-display text-[17px] text-ink">{title}</div>
      <div className="mt-1 text-[13.5px] text-slate">{sub}</div>
    </div>
  );
}
