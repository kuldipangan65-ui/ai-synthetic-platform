import Link from 'next/link';
import { Topbar } from '@/components/topbar';
import { Hero } from '@/components/hero';
import { SectionTitle } from '@/components/section-title';
import { JourneyPreview } from '@/components/journey-preview';
import { StatGrid } from '@/components/stat-grid';

export default function Home() {
  return (
    <>
      <Topbar />
      <Hero
        title="AI Synthetic Platform"
        subtitle="Engage with AI-powered characters for real-time interactions, user testing, and product demonstrations."
        primaryAction={{ label: 'Get Started', href: '/register' }}
        secondaryAction={{ label: 'Learn more', href: '#features' }}
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Platform Highlights"
            subtitle="Why choose our AI synthetic platform"
            centered
          />
          <div className="mt-12">
            <StatGrid />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="The User Journey"
            subtitle="Follow the complete MVP flow from landing to premium upgrade"
            centered
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <JourneyPreview />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Streamlined Onboarding
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Get users from signup to first conversation in minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Real-time Interactions
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Seamless AI conversations with persistent session history.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Premium Conversion
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Built-in monetization flow for scaling revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionTitle
            title="Ready to Start?"
            subtitle="Join us and explore the future of AI interactions"
            centered
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Sign In <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
