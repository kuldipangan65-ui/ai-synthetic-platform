import { ReactNode } from 'react';

interface SectionTitleProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ children, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl font-bold text-gray-900">{children || title}</h2>
      {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}
