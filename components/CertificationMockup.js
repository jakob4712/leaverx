import { CheckCircle2 } from 'lucide-react';

export default function CertificationMockup() {
  return (
    <div className="bg-paper rounded-xl shadow-lift border border-mist p-5 w-full max-w-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-eyebrow text-fog font-semibold">
            FMLA Certification
          </div>
          <div className="text-[11px] text-slate mt-0.5">DOL Form WH-380-E</div>
        </div>
        <div className="w-9 h-9 rounded-full bg-approved/15 flex items-center justify-center text-approved">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 space-y-2.5 text-[12px] text-slate">
        <Row label="Patient" value="J. Marquez" />
        <Row label="Employer" value="Atlas Logistics, Inc." />
        <Row label="Leave start" value="May 12, 2026" />
        <Row label="Leave end (est.)" value="Aug 04, 2026" />
        <Row label="Schedule type" value="Continuous" />
      </div>

      <div className="mt-4 pt-4 border-t border-mist">
        <div className="text-[10px] text-fog uppercase tracking-eyebrow mb-1">
          Certifying physician
        </div>
        <div className="font-display text-[14px] text-ink italic">Dr. Maya Patel, MD</div>
        <div className="text-[11px] text-fog mt-0.5">CA Lic. #A87412 · Board-Certified IM</div>
      </div>

      <div className="mt-4 text-[11px] text-approved font-medium">
        Filed. Accepted. Protected.
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-fog">{label}</span>
      <span className="text-ink font-medium text-right">{value}</span>
    </div>
  );
}
