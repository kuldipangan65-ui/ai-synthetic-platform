import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';
import { UsersTable } from '@/components/users-table';
import { StatGrid } from '@/components/stat-grid';

const users = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    joinDate: '2024-01-01',
    status: 'active' as const,
    conversations: 24,
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    joinDate: '2024-01-05',
    status: 'active' as const,
    conversations: 12,
  },
  {
    id: '3',
    name: 'Carol White',
    email: 'carol@example.com',
    joinDate: '2024-01-10',
    status: 'inactive' as const,
    conversations: 3,
  },
];

export default function AdminPage() {
  return (
    <PageShell
      title="Admin Dashboard"
      description="Platform administration and user management."
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Statistics</h2>
          <StatGrid stats={[
            { label: 'Total Users', value: '1,234' },
            { label: 'Active Sessions', value: '89' },
            { label: 'Total Conversations', value: '5,678' },
            { label: 'Premium Users', value: '234' },
          ]} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
          <Card>
            <UsersTable users={users} />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              System Health
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">API Response Time</span>
                <span className="text-sm font-semibold text-green-600">124ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database Status</span>
                <span className="text-sm font-semibold text-green-600">Healthy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Error Rate</span>
                <span className="text-sm font-semibold text-green-600">0.01%</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">12 new users registered</p>
              <p className="text-gray-600">145 conversations completed</p>
              <p className="text-gray-600">3 premium upgrades</p>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
