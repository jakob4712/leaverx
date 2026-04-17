import Link from 'next/link';
import { useRouter } from 'next/router';

const HIDDEN = ['/intake', '/checkout', '/portal', '/clinician'];

export default function MobileStickyBar() {
  const router = useRouter();
  if (HIDDEN.some((r) => router.pathname.startsWith(r))) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-paper border-t border-rule px-4 py-3 md:hidden">
      <div className="flex gap-2">
        <Link
          href="#tool-01"
          className="flex-1 text-center border border-ink text-ink font-mono text-[11px] uppercase tracking-spec py-3 rounded-sm hover:bg-ink hover:text-paper transition-colors"
        >
          Check Eligibility
        </Link>
        <Link
          href="/intake"
          className="flex-1 text-center bg-bureau text-paper font-mono text-[11px] uppercase tracking-spec py-3 rounded-sm hover:bg-bureau-deep transition-colors"
        >
          Get Certified · $149
        </Link>
      </div>
    </div>
  );
}
