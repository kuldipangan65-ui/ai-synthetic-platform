import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${hover ? 'hover:shadow-md transition-shadow cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  );
}
