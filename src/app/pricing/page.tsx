import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';
import { Topbar } from '@/components/topbar';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      '5 conversations per month',
      'Access to 3 characters',
      'Basic session history',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For serious users',
    features: [
      'Unlimited conversations',
      'Access to all characters',
      'Advanced analytics',
      'Priority support',
      'Session recordings',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Custom characters',
      'API access',
      'Dedicated support',
      'Admin dashboard',
      'SSO integration',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Topbar />
      <PageShell>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''}
              >
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
                  <p className="text-sm text-gray-600">/month</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <span className="mr-3 text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full rounded-md px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}>
                  Get Started
                </button>
              </Card>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
