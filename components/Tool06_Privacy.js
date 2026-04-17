import { Lock, ArrowRight } from 'lucide-react';

const PROTECT = [
  'Your medical records',
  'Your symptoms discussion',
  'Your medication history',
  'Your mental health status',
  'Your family situation',
  'Anything you tell the doctor',
];

const RECEIVE = [
  'The FMLA form (WH-380-E) with dates and basic condition description',
  'Nothing else.',
];

export default function Tool06() {
  return (
    <section id="tool-06" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 06 / Privacy</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Your employer doesn&apos;t see what we see.
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Diagram */}
          <div className="card-paper p-8">
            <div className="spec">Data flow</div>
            <div className="mt-6 space-y-6">
              <Node label="You" sub="Patient intake + records" />
              <ArrowDown />
              <Node label="LeaveRx Physician" sub="HIPAA-protected · all PHI stays here" highlight />
              <div className="ml-4 flex items-center gap-2 spec text-bureau">
                <Lock className="w-3 h-3" /> PHI stays here
              </div>
              <ArrowDown />
              <Node label="Your HR" sub="Receives only the certification form" />
            </div>
          </div>

          {/* Lists */}
          <div className="space-y-8">
            <div className="card-paper p-6">
              <div className="spec text-alarm">What we protect</div>
              <ul className="mt-4 space-y-2 text-[15px] text-ink">
                {PROTECT.map((p) => (
                  <li key={p} className="flex items-baseline gap-3">
                    <ArrowRight className="w-3 h-3 text-bureau translate-y-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-paper p-6">
              <div className="spec text-stamp">What your employer receives</div>
              <ul className="mt-4 space-y-2 text-[15px] text-ink">
                {RECEIVE.map((p) => (
                  <li key={p} className="flex items-baseline gap-3">
                    <ArrowRight className="w-3 h-3 text-bureau translate-y-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-graphite text-[15px] max-w-3xl leading-relaxed">
          LeaveRx is a HIPAA-covered entity. Your communications with our physicians are protected under federal medical privacy law. We do not sell, share, or disclose PHI to anyone, ever.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="pill-bureau">HIPAA Covered Entity</span>
          <span className="pill-bureau">SOC 2 Type II</span>
          <span className="pill-bureau">256-bit Encryption</span>
          <span className="pill-bureau">Physician-Patient Privileged</span>
        </div>
      </div>
    </section>
  );
}

function Node({ label, sub, highlight }) {
  return (
    <div
      className={`border rounded-sm p-4 ${
        highlight ? 'border-bureau bg-bureau-soft' : 'border-rule bg-cardstock'
      }`}
    >
      <div className="font-body font-semibold text-[15px] text-ink">{label}</div>
      <div className="text-[13px] text-graphite mt-0.5">{sub}</div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="ml-4 flex items-center gap-2 text-ash">
      <span className="block w-px h-4 bg-rule" />
      <ArrowRight className="w-4 h-4 rotate-90" />
    </div>
  );
}
