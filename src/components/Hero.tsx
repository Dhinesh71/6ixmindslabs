import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroPhones from './HeroPhones';
import { CTAButton } from './motion/CTAButton';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative bg-white pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Text Block */}
        <div className="flex-1 flex flex-col items-start justify-center text-left gap-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
          >
            We build production-ready web, AI & IoT products for startups
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-xl"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            custom={0.1}
            variants={fadeUpVariants}
          >
            Fast prototypes, reliable launches — from prototype to production.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            custom={0.2}
            variants={fadeUpVariants}
          >
            <CTAButton onClick={scrollToContact} variant="primary" className="flex items-center justify-center gap-2 text-sm">
              <span>Book a 15-min scoping call</span>
              <ArrowRight size={18} />
            </CTAButton>
            <CTAButton onClick={scrollToPortfolio} variant="secondary" className="flex items-center justify-center gap-2 text-sm">
              <span>View flagship demo</span>
            </CTAButton>
          </motion.div>
        </div>

        {/* Right: Phone Mockups - Two Phones Crossing */}
        <motion.div
          className="flex-1 flex items-center justify-center w-full relative h-[400px] md:h-[480px]"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroPhones />
        </motion.div>
      </div>
    </section>
  );
}

