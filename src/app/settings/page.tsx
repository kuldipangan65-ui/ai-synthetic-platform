import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Configure your account preferences and notifications."
    >
      <div className="max-w-2xl space-y-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-notifications"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label htmlFor="email-notifications" className="ml-3 block text-sm text-gray-700">
                Email notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sms-notifications"
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label htmlFor="sms-notifications" className="ml-3 block text-sm text-gray-700">
                SMS notifications
              </label>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Privacy
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="session-history"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label htmlFor="session-history" className="ml-3 block text-sm text-gray-700">
                Save session history
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="analytics"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label htmlFor="analytics" className="ml-3 block text-sm text-gray-700">
                Allow analytics tracking
              </label>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Danger Zone
          </h3>
          <button className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </Card>
      </div>
    </PageShell>
  );
}
