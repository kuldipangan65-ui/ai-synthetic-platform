import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function Hero({ 
  title = 'AI Synthetic Platform', 
  subtitle = 'Consent-based AI synthetic media platform for real-time character interactions',
  primaryAction = { label: 'Get Started', href: '/register' },
  secondaryAction = { label: 'View Pricing', href: '/pricing' }
}: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          {subtitle}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href={primaryAction.href}
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
