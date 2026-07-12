import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';

export default function ConversationPage() {
  return (
    <PageShell
      title="Start Conversation"
      description="Select a character and begin your real-time interaction."
    >
      <div className="max-w-3xl">
        <Card>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Character
              </label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                <option>Alex Chen - Product Strategy Consultant</option>
                <option>Jordan Mills - UX Research Lead</option>
                <option>Morgan Lee - Growth Marketing Manager</option>
                <option>Casey Rodriguez - Technical Co-founder</option>
                <option>Riley Thompson - Brand Strategy Director</option>
                <option>Taylor Kim - Sales Strategy Advisor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Conversation Context
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                rows={4}
                placeholder="Describe what you'd like to discuss..."
              />
            </div>

            <button className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Start Conversation
            </button>
          </div>
        </Card>
      </div>

      <div className="mt-12 rounded-lg bg-blue-50 p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900">Demo Mode</h3>
        <p className="mt-2 text-sm text-blue-700">
          This is a conversation workspace stub. In production, this will feature real-time AI chat,
          message history, voice interaction options, and session recording.
        </p>
      </div>
    </PageShell>
  );
}
