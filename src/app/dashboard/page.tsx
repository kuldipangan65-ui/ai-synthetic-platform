import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <PageShell
      title="Dashboard"
      description="Welcome back! Here's what's happening with your account."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card hover>
          <h3 className="text-lg font-semibold text-gray-900">Conversations</h3>
          <p className="mt-4 text-4xl font-bold text-blue-600">12</p>
          <p className="mt-2 text-sm text-gray-600">Active conversations</p>
          <Link
            href="/history"
            className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View history →
          </Link>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-900">Characters</h3>
          <p className="mt-4 text-4xl font-bold text-purple-600">6</p>
          <p className="mt-2 text-sm text-gray-600">Available characters</p>
          <Link
            href="/characters"
            className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Browse →
          </Link>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-900">Account Status</h3>
          <p className="mt-4 text-2xl font-bold text-green-600">Free</p>
          <p className="mt-2 text-sm text-gray-600">Limited access</p>
          <Link
            href="/pricing"
            className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Upgrade →
          </Link>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/characters"
            className="rounded-lg border border-blue-200 bg-blue-50 p-6 hover:bg-blue-100 transition-colors"
          >
            <h3 className="font-semibold text-blue-900">Start a Conversation</h3>
            <p className="mt-2 text-sm text-blue-700">Browse characters and begin an interaction</p>
          </Link>
          <Link
            href="/profile"
            className="rounded-lg border border-purple-200 bg-purple-50 p-6 hover:bg-purple-100 transition-colors"
          >
            <h3 className="font-semibold text-purple-900">Update Profile</h3>
            <p className="mt-2 text-sm text-purple-700">Manage your account information</p>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
