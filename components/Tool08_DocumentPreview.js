import { useState } from 'react';
import { Check } from 'lucide-react';

const TABS = [
  { id: 'fmla', label: 'FMLA Form (WH-380-E)' },
  { id: 'pfl', label: 'Paid Leave Certification' },
  { id: 'ada', label: 'ADA Accommodation Letter' },
  { id: 'std', label: 'STD Claim Support' },
];

export default function Tool08() {
  const [tab, setTab] = useState('fmla');

  return (
    <section id="tool-08" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 08 / Your Documents</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          What lands in your inbox.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          Every document is pre-filled to meet federal and state compliance requirements. You don&apos;t fill anything out — you download, and your HR gets what they need.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-rule">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 spec border-b-2 -mb-px transition-colors ${
                tab === t.id ? 'border-bureau text-bureau' : 'border-transparent text-ash hover:text-graphite'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-8 items-start">
          {/* Document preview */}
          <div className="lg:col-span-2">
            <div className="bg-cardstock border border-rule rounded-sm shadow-paperlift p-8 md:p-10 relative">
              <div className="absolute top-3 right-4 spec text-ash">
                Sample · Yours will be state-specific
              </div>
              {tab === 'fmla' && <FmlaForm />}
              {tab === 'pfl' && <PflCert />}
              {tab === 'ada' && <AdaLetter />}
              {tab === 'std' && <StdClaim />}
            </div>
          </div>

          {/* Side panel */}
          <aside>
            <div className="card-paper p-6">
              <div className="spec">Included With Every Approval</div>
              <ul className="mt-5 space-y-3 text-[14px] text-ink">
                {[
                  'Physician-signed federal FMLA form',
                  'State paid leave certification (where applicable)',
                  'ADA accommodation support letter',
                  'Short-term disability claim documentation',
                  'Employer communication template',
                  'Renewal reminder 60 days before recertification',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-stamp flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ----- Document mockups (stylized; not pixel-perfect federal forms) ----- */

function FormHeader({ title, subtitle, agency, formNo }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div className="spec text-graphite">{agency}</div>
        <div className="spec text-graphite">Form {formNo}</div>
      </div>
      <div className="mt-2 hairline-bold" />
      <h3 className="mt-4 font-body font-bold text-[18px] text-ink">{title}</h3>
      <div className="mt-1 text-[13px] text-graphite">{subtitle}</div>
      <div className="mt-4 hairline" />
    </div>
  );
}

function FormRow({ label, value, half = false }) {
  return (
    <div className={half ? 'col-span-1' : 'col-span-2'}>
      <div className="spec mb-1">{label}</div>
      <div className="border-b border-rule pb-1 num text-[13px] text-ink">{value}</div>
    </div>
  );
}

function FmlaForm() {
  return (
    <div>
      <FormHeader
        agency="U.S. Department of Labor"
        formNo="WH-380-E"
        title="Certification of Health Care Provider for Employee's Serious Health Condition"
        subtitle="Family and Medical Leave Act"
      />
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
        <FormRow label="Section I — Employee Information" value="" />
        <FormRow label="Employee name" value="[Your name]" half />
        <FormRow label="Employer" value="[Your employer]" half />
        <FormRow label="Section II — Health Care Provider" value="" />
        <FormRow label="Provider name" value="Dr. Maya Patel, MD — LeaveRx Medical Group" half />
        <FormRow label="License" value="CA #A87412 · ABIM" half />
        <FormRow label="Section III — Medical Facts" value="" />
        <FormRow label="Approximate date condition began" value="2026-02-04" half />
        <FormRow label="Probable duration" value="~12 weeks" half />
        <FormRow
          label="Description of condition"
          value="Major depressive disorder; symptoms substantially limit ability to perform essential job functions."
        />
        <FormRow label="Section IV — Amount of Leave Needed" value="" />
        <FormRow label="Continuous leave?" value="Yes" half />
        <FormRow label="Estimated start" value="2026-05-12" half />
      </div>
      <div className="mt-8 hairline" />
      <div className="mt-4 grid grid-cols-2 gap-6 items-end">
        <div>
          <div className="spec mb-1">Provider signature</div>
          <div className="display-italic text-[22px] text-bureau">M. Patel, MD</div>
        </div>
        <div className="text-right">
          <div className="spec mb-1">Date signed</div>
          <div className="num text-[13px] text-ink">2026-05-08</div>
        </div>
      </div>
    </div>
  );
}

function PflCert() {
  return (
    <div>
      <FormHeader
        agency="State of California — EDD"
        formNo="DE 2501F"
        title="Paid Family Leave Claim — Medical Certification"
        subtitle="Confidential medical certification"
      />
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
        <FormRow label="Claimant" value="[Your name]" half />
        <FormRow label="Relationship" value="Self" half />
        <FormRow label="Diagnosis" value="Postpartum care — bonding & recovery" />
        <FormRow label="Disability period — start" value="2026-05-12" half />
        <FormRow label="Disability period — end" value="2026-07-07" half />
        <FormRow
          label="Provider attestation"
          value="Patient is unable to perform essential job functions during the certified period."
        />
      </div>
      <div className="mt-8 hairline" />
      <div className="mt-4 spec text-bureau">
        Wage replacement rate: 60–90% · Maximum weeks: 8
      </div>
    </div>
  );
}

function AdaLetter() {
  return (
    <div>
      <FormHeader
        agency="LeaveRx Medical Group"
        formNo="ADA-AC-25"
        title="Accommodation Recommendation Letter"
        subtitle="Americans with Disabilities Act — Reasonable Accommodation"
      />
      <div className="mt-6 text-[14px] text-ink leading-relaxed">
        <p>To Whom It May Concern,</p>
        <p className="mt-3">
          I am writing on behalf of my patient, <span className="num">[Your Name]</span>, who is under my
          medical care. Based on the clinical evaluation conducted on{' '}
          <span className="num">2026-05-08</span>, I am recommending the following reasonable
          accommodations under the ADA:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>Remote / hybrid work, 3 days per week minimum</li>
          <li>Flexible start time within a 2-hour window</li>
          <li>Reduced overtime expectations during active treatment</li>
        </ul>
        <p className="mt-4">
          These accommodations are medically necessary and expected to be ongoing for at least 6 months. Please contact our compliance team with any questions.
        </p>
      </div>
      <div className="mt-8 hairline" />
      <div className="mt-4 grid grid-cols-2 gap-6 items-end">
        <div>
          <div className="spec mb-1">Provider</div>
          <div className="display-italic text-[20px] text-bureau">Dr. Maya Patel, MD</div>
          <div className="spec mt-1">CA #A87412 · ABIM Internal Medicine</div>
        </div>
        <div className="text-right num text-[13px] text-ink">2026-05-08</div>
      </div>
    </div>
  );
}

function StdClaim() {
  return (
    <div>
      <FormHeader
        agency="LeaveRx Medical Group"
        formNo="APS-STD"
        title="Attending Physician Statement — Short-Term Disability"
        subtitle="Insurance carrier claim documentation"
      />
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
        <FormRow label="Claimant" value="[Your name]" half />
        <FormRow label="Carrier" value="[Your STD insurer]" half />
        <FormRow label="Primary diagnosis (ICD-10)" value="F33.1 — Major depressive disorder, recurrent, moderate" />
        <FormRow label="First date unable to work" value="2026-05-12" half />
        <FormRow label="Estimated return-to-work" value="2026-08-04" half />
        <FormRow
          label="Functional limitations"
          value="Unable to sustain concentration > 90 minutes; requires reduced cognitive load and flexible scheduling."
        />
        <FormRow
          label="Treatment plan"
          value="Combination pharmacotherapy and weekly psychotherapy; reassessment at 4 and 8 weeks."
        />
      </div>
      <div className="mt-8 hairline" />
      <div className="mt-4 spec text-stamp">Submit directly to your STD carrier with your claim form.</div>
    </div>
  );
}
