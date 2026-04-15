import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LeaveRx — FMLA Certification Online | Physician-Signed DOL Form WH-380</title>
        <meta name="description" content="Get your FMLA paperwork signed by a licensed physician online. No office visit. 24-hour turnaround. $149 flat fee. Full refund if not certified." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LeaveRx — Medical Leave Certified. No Office Visit Needed." />
        <meta property="og:description" content="FMLA certification online by licensed physicians. Same-day available. $149." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
