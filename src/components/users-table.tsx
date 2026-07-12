'use client';

interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'inactive';
  conversations: number;
}

interface UsersTableProps {
  users: User[];
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-900">
              Email
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-900">
              Join Date
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-900">
              Conversations
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-900">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-medium">
                {user.name}
              </td>
              <td className="px-6 py-4 text-gray-600">{user.email}</td>
              <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
              <td className="px-6 py-4 text-gray-600">{user.conversations}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
