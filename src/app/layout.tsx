import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebVitalsPanel } from '@/components/web-vitals-panel';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Synthetic Platform',
  description: 'Consent-based AI synthetic media platform for real-time character interactions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        {process.env.NODE_ENV !== 'production' && <WebVitalsPanel />}
      </body>
    </html>
  );
}
