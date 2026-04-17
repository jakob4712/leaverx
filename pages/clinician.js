import { useState } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const QUEUE = [
  { id: 'C-10498', patient: 'Jane D.', type: 'WH-380-E', condition: 'Post-lumbar fusion recovery', submitted: '2026-04-15 08:42', priority: 'Expedited' },
  { id: 'C-10497', patient: 'Marcus T.', type: 'WH-380-E', condition: 'Major depressive disorder', submitted: '2026-04-15 07:12', priority: 'Standard' },
  { id: 'C-10495', patient: 'Lina R.', type: 'WH-380-F', condition: 'Spouse — stage III cancer treatment', submitted: '2026-04-14 22:18', priority: 'Standard' },
];

export default function Clinician() {
  const [selected, setSelected] = useState(null);
  const [decision, setDecision] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <>
      <Head>
        <title>Clinician Portal — LeaveRx</title>
      </Head>
      <div className="bg-cream min-h-screen text-ink">
        <Nav />
        <div className="container-x py-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-3xl text-ink">Clinician Portal</h1>
              <p className="mt-1 text-slate text-[14px]">Dr. A. Reyes, MD · Licensed: CA, TX, NY, FL, IL</p>
            </div>
            <span className="pill bg-approved/15 text-approved">{QUEUE.length} pending</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="space-y-3 lg:col-span-1">
              <h2 className="eyebrow">Review queue</h2>
              {QUEUE.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full text-left card transition ${selected?.id === c.id ? 'border-navy ring-2 ring-navy/20' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-display text-[16px] text-ink">{c.id}</div>
                    <span
                      className={`pill-sm ${
                        c.priority === 'Expedited' ? 'bg-approved/15 text-approved' : 'bg-navy-soft text-navy-deep'
                      }`}
                    >
                      {c.priority}
                    </span>
                  </div>
                  <div className="text-[13.5px] text-slate mt-1">{c.patient} · {c.type}</div>
                  <div className="text-[14px] text-ink mt-1">{c.condition}</div>
                  <div className="text-[12px] text-fog mt-2">Submitted {c.submitted}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2">
              {!selected ? (
                <div className="card h-full flex items-center justify-center text-fog min-h-[400px]">
                  Select a case to review
                </div>
              ) : (
                <div className="card">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h2 className="font-display text-2xl text-ink">{selected.id}</h2>
                      <div className="text-slate text-[14px]">{selected.patient} · {selected.type}</div>
                    </div>
                    <span className="pill">{selected.priority}</span>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-4 text-[14px]">
                    <Info l="Condition" v={selected.condition} />
                    <Info l="Onset" v="2026-02-20" />
                    <Info l="Leave start" v="2026-04-20" />
                    <Info l="Leave end (est.)" v="2026-07-13" />
                    <Info l="Employer" v="Acme Logistics Inc." />
                    <Info l="Work impact" v="Unable to perform essential job duties; restricted lifting, sitting > 30 min" />
                  </div>

                  <div className="mt-6">
                    <h3 className="eyebrow">Uploaded records</h3>
                    <ul className="mt-2 space-y-1 text-[14px] text-navy">
                      <li>• post-op-summary.pdf</li>
                      <li>• mri-lumbar-2026-03.pdf</li>
                      <li>• surgeon-letter.pdf</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="eyebrow">Complete WH-380</h3>
                    <div className="mt-3 grid gap-3">
                      <div className="flex gap-3">
                        {['certify', 'deny'].map((d) => (
                          <button
                            key={d}
                            onClick={() => setDecision(d)}
                            className={`flex-1 py-3 rounded-lg border-2 font-medium capitalize ${
                              decision === d
                                ? d === 'certify'
                                  ? 'border-approved bg-approved/10 text-approved'
                                  : 'border-alert bg-alert/10 text-alert'
                                : 'border-mist text-slate'
                            }`}
                          >
                            {d === 'certify' ? 'Certify' : 'Unable to certify'}
                          </button>
                        ))}
                      </div>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={5}
                        placeholder="Clinical notes, duration of incapacity, frequency of flare-ups, essential functions affected..."
                        className="field-input"
                      />
                      <label className="flex items-center gap-3 p-3 rounded-lg border border-mist">
                        <input type="checkbox" className="w-4 h-4 accent-navy" />
                        <span className="text-[14px] text-slate">
                          I attest this certification is based on my clinical review.
                        </span>
                      </label>
                      <button className="btn-primary w-full justify-center">
                        E-sign & submit certification
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function Info({ l, v }) {
  return (
    <div className="p-4 rounded-lg bg-cream border border-mist">
      <div className="eyebrow">{l}</div>
      <div className="text-ink mt-1 text-[14.5px]">{v}</div>
    </div>
  );
}
