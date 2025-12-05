import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function CTAButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    variant === 'primary'
      ? 'bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md'
      : 'border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-lg font-semibold';

  if (shouldReduceMotion) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={
        disabled
          ? {}
          : {
              y: -6,
              scale: 1.02,
              boxShadow:
                variant === 'primary'
                  ? '0 12px 32px rgba(124, 58, 237, 0.3)'
                  : '0 8px 24px rgba(124, 58, 237, 0.15)',
              transition: { duration: 0.16, ease: 'easeOut' },
            }
      }
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.button>
  );
}
