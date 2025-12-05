import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from '../motion/CTAButton';
import { Container } from '../layout/Container';

interface PhoneMockupProps {
  position: 'left' | 'right';
  delay: number;
  shouldReduceMotion: boolean;
}

function PhoneMockup({ position, delay, shouldReduceMotion }: PhoneMockupProps) {
  const isLeft = position === 'left';

  return (
    <motion.div
      className={`absolute ${
        isLeft ? 'left-[15%] top-[20%] z-10' : 'right-[10%] top-[35%] z-20'
      }`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        ...(shouldReduceMotion
          ? {}
          : {
              y: [0, -3, 0],
            }),
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        ...(shouldReduceMotion
          ? {}
          : {
              y: {
                duration: 7,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: delay + 0.6,
              },
            }),
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px]">
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-3xl z-10 flex items-center justify-center">
              <div className="w-12 h-1 bg-gray-700 rounded-full mt-2"></div>
            </div>

            <div className="flex-1 flex flex-col pt-10 px-5">
              {isLeft ? (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 bg-gray-800 rounded w-20"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-pink rounded-full"></div>
                    </div>
                    <div className="h-8 bg-gradient-to-r from-brand-purple to-brand-pink rounded-xl w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-2.5 bg-brand-purple rounded w-16"></div>
                        <div className="h-2 bg-gray-300 rounded w-12"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded w-20"></div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-2.5 bg-brand-purple rounded w-16"></div>
                        <div className="h-2 bg-gray-300 rounded w-12"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded w-20"></div>
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-2.5 bg-gray-400 rounded w-16"></div>
                        <div className="h-2 bg-gray-300 rounded w-12"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>

                  <div className="mt-4 pb-6">
                    <div className="h-12 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-pink rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="w-16 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 bg-gray-800 rounded w-24"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-pink to-purple-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-800 rounded w-32"></div>
                      <div className="h-6 bg-gradient-to-r from-brand-pink to-purple-500 rounded-lg w-24"></div>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${
                          i % 2 === 0
                            ? 'bg-gradient-to-br from-brand-purple to-purple-500'
                            : 'bg-gradient-to-br from-brand-pink to-pink-400'
                        } rounded-full flex-shrink-0`}></div>
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="h-2 bg-gray-700 rounded w-20"></div>
                            <div className="h-2 bg-gray-400 rounded w-10"></div>
                          </div>
                          <div className="h-1.5 bg-gray-300 rounded w-16"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
    <section className="relative bg-white pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col items-start justify-center text-left gap-6 md:gap-8"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <motion.h1
              className="text-heading-1 font-extrabold leading-tight tracking-tight"
              custom={0}
              variants={fadeUpVariants}
            >
              <span className="block mb-2">We build </span>
              <span
                className="bg-gradient-to-r from-brand-purple via-purple-600 to-brand-pink bg-clip-text text-transparent inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                production-ready
              </span>
              <span className="block mt-2 text-text-primary">
                web, AI & IoT products
              </span>
            </motion.h1>

            <motion.p
              className="text-body-lg text-gray-600 max-w-xl font-medium leading-relaxed"
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
                className="flex items-center justify-center gap-3 text-sm md:text-base uppercase tracking-wide shadow-xl shadow-purple-500/20 min-h-tap px-6 md:px-8 py-4"
              >
                <span>Book a 15-min call</span>
                <ArrowRight size={20} />
              </CTAButton>
              <CTAButton
                onClick={scrollToPortfolio}
                variant="secondary"
                className="flex items-center justify-center gap-3 text-sm md:text-base uppercase tracking-wide min-h-tap px-6 md:px-8 py-4"
              >
                <span>View projects</span>
              </CTAButton>
            </motion.div>
          </motion.div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <PhoneMockup position="left" delay={0.4} shouldReduceMotion={shouldReduceMotion} />
            <PhoneMockup position="right" delay={0.6} shouldReduceMotion={shouldReduceMotion} />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <motion.div
                className="absolute w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              />
              <motion.div
                className="absolute w-64 h-64 bg-pink-300/15 rounded-full blur-3xl"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{
                  duration: 7,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: 3.5,
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
