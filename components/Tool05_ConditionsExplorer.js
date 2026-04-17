import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'Mental Health', 'Physical', 'Pregnancy', 'Chronic', 'Acute', 'Caregiving'];

const ITEMS = [
  { name: 'Anxiety Disorders', slug: 'anxiety', cat: 'Mental Health', meta: 'All 50 states' },
  { name: 'Depression (Major / Persistent)', slug: 'depression', cat: 'Mental Health', meta: 'All 50 states' },
  { name: 'PTSD', slug: 'ptsd', cat: 'Mental Health', meta: 'All 50 states' },
  { name: 'Bipolar Disorder', slug: 'depression', cat: 'Mental Health', meta: 'All 50 states' },
  { name: 'Chronic Migraines', slug: 'migraines', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Chronic Pain', slug: 'chronic-pain', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Fibromyalgia', slug: 'chronic-pain', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Pregnancy / Postpartum', slug: 'pregnancy', cat: 'Pregnancy', meta: 'All 50 states' },
  { name: 'Cancer (diagnosis, treatment, recovery)', slug: 'cancer', cat: 'Acute', meta: 'All 50 states' },
  { name: 'Autoimmune Disease (Lupus, MS, RA, Crohn\'s)', slug: 'autoimmune', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Diabetes (Type 1, Type 2, Gestational)', slug: 'diabetes', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Asthma / COPD', slug: 'asthma-copd', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Cardiovascular (heart conditions, recovery)', slug: 'cardiovascular', cat: 'Acute', meta: 'All 50 states' },
  { name: 'Epilepsy', slug: 'chronic-pain', cat: 'Chronic', meta: 'All 50 states' },
  { name: 'Serious injury / surgery recovery', slug: 'chronic-pain', cat: 'Acute', meta: 'All 50 states' },
  { name: 'Caring for a family member', slug: 'family-care', cat: 'Caregiving', meta: 'All 50 states' },
];

export default function Tool05() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    return ITEMS.filter((it) => {
      const matchesQ = !q || it.name.toLowerCase().includes(q.toLowerCase());
      const matchesCat = cat === 'All' || it.cat === cat;
      return matchesQ && matchesCat;
    });
  }, [q, cat]);

  return (
    <section id="tool-05" className="bg-paper border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 05 / Conditions</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Does your condition qualify?
        </h2>

        {/* Search */}
        <div className="mt-8 max-w-2xl flex items-center gap-3 border border-rule rounded-sm bg-cardstock px-4 py-3">
          <Search className="w-4 h-4 text-ash" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search your condition..."
            className="bg-transparent outline-none text-[16px] flex-1 placeholder:text-fog"
          />
        </div>

        {/* Category chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-sm border text-[12px] transition ${
                cat === c
                  ? 'bg-bureau text-paper border-bureau'
                  : 'bg-cardstock text-graphite border-rule hover:border-bureau'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="mt-10 grid md:grid-cols-2 gap-x-12">
          {filtered.map((it) => (
            <Link
              key={it.name}
              href={`/conditions/${it.slug}`}
              className="group flex items-baseline justify-between py-4 border-b border-rule hover:bg-shelf transition-colors"
            >
              <span className="text-ink text-[15.5px] group-hover:text-bureau transition-colors">
                {it.name}
              </span>
              <span className="num text-[12px] text-ash group-hover:text-bureau transition-colors">
                {it.meta}
              </span>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-10 text-center text-ash text-[14px]">
            No conditions match your search.
          </div>
        )}

        <p className="mt-10 text-graphite text-[15px]">
          Don&apos;t see your condition? Most serious conditions qualify under physician review.{' '}
          <Link href="#tool-01" className="link-ink">
            Start the eligibility check →
          </Link>
        </p>
      </div>
    </section>
  );
}
