'use client';

import { ReactNode } from 'react';
import { Sidebar } from './sidebar';

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function PageShell({
  children,
  title,
  description,
}: PageShellProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        {title && (
          <div className="border-b border-gray-200 bg-white px-6 py-6 sm:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
          </div>
        )}
        <div className="px-6 py-8 sm:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
