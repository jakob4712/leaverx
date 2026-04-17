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
      <Head><title>Clinician Portal — LeaveRx</title></Head>
      <Nav />
      <div className="container-x py-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="spec text-bureau">Clinician Portal</div>
            <h1 className="mt-3 font-body font-semibold text-[24px] text-ink">Dr. A. Reyes, MD</h1>
            <p className="num text-[12px] text-ash mt-1">Licensed: CA, TX, NY, FL, IL</p>
          </div>
          <span className="pill-stamp">{QUEUE.length} pending</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="space-y-3 lg:col-span-1">
            <div className="spec">Review Queue</div>
            {QUEUE.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`w-full text-left card-paper p-5 transition ${selected?.id === c.id ? 'border-bureau ring-1 ring-bureau' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="num text-[13px] text-bureau">{c.id}</div>
                  <span className={c.priority === 'Expedited' ? 'pill-stamp' : 'pill-bureau'}>{c.priority}</span>
                </div>
                <div className="text-[13px] text-graphite mt-2">{c.patient} · {c.type}</div>
                <div className="text-[14px] text-ink mt-1">{c.condition}</div>
                <div className="num text-[11px] text-ash mt-2">Submitted {c.submitted}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            {!selected ? (
              <div className="card-paper p-12 text-center text-ash min-h-[400px] flex items-center justify-center">
                Select a case to review
              </div>
            ) : (
              <div className="card-paper p-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="num text-[13px] text-bureau">{selected.id}</div>
                    <div className="font-body font-semibold text-[20px] text-ink mt-1">{selected.patient}</div>
                    <div className="text-[13px] text-graphite mt-1">{selected.type}</div>
                  </div>
                  <span className="pill-bureau">{selected.priority}</span>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <Info l="Condition" v={selected.condition} />
                  <Info l="Onset" v="2026-02-20" />
                  <Info l="Leave start" v="2026-04-20" />
                  <Info l="Leave end (est.)" v="2026-07-13" />
                  <Info l="Employer" v="Acme Logistics Inc." />
                  <Info l="Work impact" v="Restricted lifting; sitting > 30 min" />
                </div>

                <div className="mt-6">
                  <div className="spec">Uploaded Records</div>
                  <ul className="mt-2 num text-[13px] text-bureau space-y-1">
                    <li>· post-op-summary.pdf</li>
                    <li>· mri-lumbar-2026-03.pdf</li>
                    <li>· surgeon-letter.pdf</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="spec">Complete WH-380</div>
                  <div className="mt-3 grid gap-3">
                    <div className="flex gap-3">
                      {['certify', 'deny'].map((d) => (
                        <button
                          key={d}
                          onClick={() => setDecision(d)}
                          className={`flex-1 py-3 rounded-sm border font-mono uppercase tracking-spec text-[12px] ${
                            decision === d
                              ? d === 'certify' ? 'border-stamp bg-stamp-soft text-stamp' : 'border-alarm bg-alarm-soft text-alarm'
                              : 'border-rule text-ash'
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
                      placeholder="Clinical notes, duration of incapacity, frequency of flare-ups..."
                      className="input-shelf"
                    />
                    <label className="flex items-center gap-3 p-3 rounded-sm border border-rule">
                      <input type="checkbox" className="w-4 h-4 accent-bureau" />
                      <span className="text-[13.5px] text-graphite">
                        I attest this certification is based on my clinical review.
                      </span>
                    </label>
                    <button className="btn-bureau w-full justify-center">E-sign & submit</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Info({ l, v }) {
  return (
    <div className="p-4 rounded-sm bg-shelf border border-rule">
      <div className="spec">{l}</div>
      <div className="text-ink mt-1 text-[14px]">{v}</div>
    </div>
  );
}
