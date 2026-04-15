import { useState } from 'react';
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
    <div className="min-h-screen bg-warm-gray">
      <Nav />
      <div className="container-x py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-navy">Clinician Portal</h1>
            <p className="mt-1 text-navy/70">Dr. A. Reyes, MD · Licensed: CA, TX, NY, FL, IL</p>
          </div>
          <span className="chip !bg-accent-green/10 !text-accent-green">{QUEUE.length} pending</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="space-y-3 lg:col-span-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy/60">Review queue</h2>
            {QUEUE.map(c => (
              <button key={c.id} onClick={()=>setSelected(c)} className={`w-full text-left card transition ${selected?.id===c.id?'ring-2 ring-soft-blue':''}`}>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-navy">{c.id}</div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${c.priority==='Expedited'?'bg-accent-green/10 text-accent-green':'bg-navy/5 text-navy/60'}`}>{c.priority}</span>
                </div>
                <div className="text-sm text-navy/70 mt-1">{c.patient} · {c.type}</div>
                <div className="text-sm text-navy mt-1">{c.condition}</div>
                <div className="text-xs text-navy/50 mt-2">Submitted {c.submitted}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            {!selected ? (
              <div className="card h-full flex items-center justify-center text-navy/50">Select a case to review</div>
            ) : (
              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">{selected.id}</h2>
                    <div className="text-navy/70">{selected.patient} · {selected.type}</div>
                  </div>
                  <span className="chip">{selected.priority}</span>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <Info l="Condition" v={selected.condition} />
                  <Info l="Onset" v="2026-02-20" />
                  <Info l="Leave start" v="2026-04-20" />
                  <Info l="Leave end (est.)" v="2026-07-13" />
                  <Info l="Employer" v="Acme Logistics Inc." />
                  <Info l="Work impact" v="Unable to perform essential job duties; restricted lifting, sitting > 30 min" />
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wider">Uploaded records</h3>
                  <ul className="mt-2 space-y-1 text-sm text-soft-blue">
                    <li>• post-op-summary.pdf</li>
                    <li>• mri-lumbar-2026-03.pdf</li>
                    <li>• surgeon-letter.pdf</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wider">Complete WH-380</h3>
                  <div className="mt-3 grid gap-3">
                    <div className="flex gap-3">
                      {['certify','deny'].map(d => (
                        <button key={d} onClick={()=>setDecision(d)} className={`flex-1 py-3 rounded-lg border-2 font-semibold capitalize ${decision===d?(d==='certify'?'border-accent-green bg-accent-green/5 text-accent-green':'border-red-500 bg-red-50 text-red-600'):'border-navy/10 text-navy/70'}`}>
                          {d==='certify'?'Certify':'Unable to certify'}
                        </button>
                      ))}
                    </div>
                    <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={5} placeholder="Clinical notes, duration of incapacity, frequency of flare-ups, essential functions affected..." className="rounded-lg border border-navy/15 px-4 py-3" />
                    <div className="flex items-center gap-3">
                      <label className="flex-1 flex items-center gap-3 p-3 rounded-lg border border-navy/10">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-navy">I attest this certification is based on my clinical review.</span>
                      </label>
                    </div>
                    <button className="btn-primary w-full">E-sign & submit certification</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Info({ l, v }) {
  return (
    <div className="p-4 rounded-lg bg-warm-gray">
      <div className="text-xs font-semibold uppercase tracking-wider text-navy/50">{l}</div>
      <div className="text-navy mt-1">{v}</div>
    </div>
  );
}
