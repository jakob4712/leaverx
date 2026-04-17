import Link from 'next/link';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-paper/95 backdrop-blur border-t border-rule z-30 px-4 py-3">
      <Link href="#tool-01" className="btn-bureau w-full justify-center">
        Check My Eligibility →
      </Link>
    </div>
  );
}
