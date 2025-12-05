import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'default' | 'narrow' | 'wide';
  background?: 'white' | 'gray' | 'gradient';
  animate?: boolean;
}

export function Section({
  children,
  id,
  className = '',
  containerSize = 'default',
  background = 'white',
  animate = true,
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gradient-to-b from-gray-50 to-white',
    gradient: 'bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30',
  };

  const content = (
    <section
      id={id}
      className={`relative py-12 md:py-20 lg:py-28 overflow-hidden ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );

  if (!animate || shouldReduceMotion) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
