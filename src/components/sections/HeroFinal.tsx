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
    <section className="relative bg-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-6 sm:pb-10 md:pb-16 lg:pb-20 overflow-hidden min-h-[calc(100vh-4rem)] sm:min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center">
      {/* Background decoration blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-40">
        <div className="absolute top-4 sm:top-8 md:top-16 lg:top-20 left-2 sm:left-4 md:left-10 w-32 sm:w-48 md:w-80 lg:w-96 h-32 sm:h-48 md:h-80 lg:h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-10 right-2 sm:right-4 md:right-16 lg:right-20 w-40 sm:w-56 md:w-96 lg:w-[500px] h-40 sm:h-56 md:h-96 lg:h-[500px] bg-pink-300/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col items-start justify-center text-left gap-3 sm:gap-4 md:gap-6 lg:gap-8 order-1 lg:order-1"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <motion.h1
              className="text-[2rem] leading-[1.15] sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight"
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
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xl font-medium leading-relaxed"
              custom={0.15}
              variants={fadeUpVariants}
            >
              Fast prototypes, reliable launches — from prototype to production in weeks, not months.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-1 sm:mt-2"
              custom={0.3}
              variants={fadeUpVariants}
            >
              <CTAButton
                onClick={scrollToContact}
                variant="primary"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base uppercase tracking-wide shadow-xl shadow-purple-500/20 min-h-tap px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 font-bold whitespace-nowrap"
              >
                <span className="leading-none">Book a 15-min call</span>
                <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
              </CTAButton>
              <CTAButton
                onClick={scrollToPortfolio}
                variant="secondary"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base uppercase tracking-wide min-h-tap px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 font-bold whitespace-nowrap"
              >
                <span className="leading-none">View products</span>
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mockups */}
          <motion.div
            className="flex items-center justify-center w-full h-full order-2 lg:order-2 min-h-[280px] sm:min-h-[350px] md:min-h-[400px]"
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
