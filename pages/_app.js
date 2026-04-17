import '@/styles/globals.css';
import Head from 'next/head';
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetBrains.variable}`}>
      <Head>
        <title>LeaveRx — Eligibility Check & FMLA Certification</title>
        <meta
          name="description"
          content="See every protection you qualify for: FMLA, paid family leave, short-term disability, ADA accommodations. Live eligibility check, no account required."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LeaveRx — Eligibility Check & FMLA Certification" />
        <meta
          property="og:description"
          content="Live eligibility check for FMLA, paid family leave, state disability, and ADA. Approved in 24 hours by a board-certified physician."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#FAFAF7" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
