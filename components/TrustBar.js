export default function TrustBar() {
  return (
    <section className="bg-ink text-white">
      <div className="container-x py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13.5px]">
        <div className="flex items-center gap-3">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-approved opacity-60 dot-pulse" />
            <span className="relative rounded-full bg-approved w-2.5 h-2.5" />
          </span>
          <span className="font-medium">
            Doctors available now <span className="text-white/60">• 8 appointments remaining today</span>
          </span>
        </div>
        <div className="text-white/70">
          Average time from intake to approval: <span className="text-white font-medium">18 hours</span>
        </div>
      </div>
    </section>
  );
}
