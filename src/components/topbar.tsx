'use client';

import Link from 'next/link';

export function Topbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          AI Synthetic Platform
        </Link>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
