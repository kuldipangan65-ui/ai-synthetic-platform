import { PageShell } from '@/components/page-shell';
import { Card } from '@/components/card';
import { formatDate } from '@/lib/utils';

const sessions = [
  {
    id: '1',
    character: 'Alex Chen',
    date: new Date('2024-01-15'),
    duration: '12 min',
    summary: 'Discussed go-to-market strategy for B2B SaaS',
  },
  {
    id: '2',
    character: 'Jordan Mills',
    date: new Date('2024-01-14'),
    duration: '18 min',
    summary: 'Reviewed user research methodologies',
  },
  {
    id: '3',
    character: 'Casey Rodriguez',
    date: new Date('2024-01-12'),
    duration: '25 min',
    summary: 'Explored AI integration architecture patterns',
  },
];

export default function HistoryPage() {
  return (
    <PageShell
      title="Session History"
      description="Review your past conversations and session summaries."
    >
      <div className="space-y-4">
        {sessions.map((session) => (
          <Card key={session.id} hover>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {session.character}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{session.summary}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {formatDate(session.date)}
                </p>
                <p className="text-sm text-gray-600">{session.duration}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
