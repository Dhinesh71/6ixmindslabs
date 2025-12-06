import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from '../motion/CTAButton';
import { Container } from '../layout/Container';
import HeroPhones from '../HeroPhones';

export function HeroFinal() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative bg-white pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden min-h-screen sm:min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center mt-2 sm:mt-4 md:mt-6 lg:mt-8">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-60 sm:w-96 h-60 sm:h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-20 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-pink-300/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center w-full">
          <motion.div
            className="flex flex-col items-start justify-center text-left gap-6 md:gap-8"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              custom={0}
              variants={fadeUpVariants}
            >
              <span className="block mb-1 sm:mb-2">We build </span>
              <span
                className="bg-gradient-to-r from-brand-purple via-purple-600 to-brand-pink bg-clip-text text-transparent inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                production-ready
              </span>
              <span className="block mt-1 sm:mt-2 text-text-primary">
                web, AI & IoT products
              </span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl font-medium leading-relaxed"
              custom={0.15}
              variants={fadeUpVariants}
            >
              Fast prototypes, reliable launches — from prototype to production in weeks, not months.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              custom={0.3}
              variants={fadeUpVariants}
            >
              <CTAButton
                onClick={scrollToContact}
                variant="primary"
                className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base uppercase tracking-wide shadow-xl shadow-purple-500/20 min-h-tap px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span>Book a 15-min call</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </CTAButton>
              <CTAButton
                onClick={scrollToPortfolio}
                variant="secondary"
                className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base uppercase tracking-wide min-h-tap px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span>View products</span>
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center w-full h-full"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPhones />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
