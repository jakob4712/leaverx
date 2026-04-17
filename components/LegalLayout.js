export default function LegalLayout({ title, updated, children }) {
  return (
    <article className="container-narrow py-16">
      <div className="spec text-bureau">Legal</div>
      <h1 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
        {title}
      </h1>
      <div className="num text-[12px] text-ash mt-2">Last updated: {updated}</div>
      <div className="hairline mt-6" />
      <div className="prose-legal mt-8 space-y-5 text-graphite text-[15.5px] leading-relaxed [&_h2]:font-body [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:text-[18px] [&_h2]:mt-8 [&_h2]:mb-2">
        {children}
      </div>
    </article>
  );
}
