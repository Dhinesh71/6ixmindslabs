import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const maxWidths = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
  };

  // Mobile-first: base mobile padding, then scale up
  const baseClasses = `${maxWidths[size]} mx-auto px-4 sm:px-6 md:px-8 lg:px-container`;

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
