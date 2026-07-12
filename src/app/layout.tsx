import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}
