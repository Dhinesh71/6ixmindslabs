import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
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
          {/* Left Phone - Tilted Right */}
          <motion.div
            className="absolute left-1/4 top-1/6 -translate-y-1/2 -translate-x-1/2"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, -20, 0],
                    rotateY: -15,
                    rotateZ: -5,
                  }
            }
            transition={{
              x: { duration: 6, ease: 'easeInOut', repeat: Infinity },
              rotateY: { duration: 0 },
              rotateZ: { duration: 0 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-[160px] h-[320px] md:w-[200px] md:h-[400px]">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden relative flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="flex-1 flex flex-col justify-center items-center gap-3 px-4 pt-8">
                    <div className="h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded w-2/3 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg border border-purple-500/20"></div>
                      <div className="h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/20"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="h-8 w-20 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-10 h-0.5 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Tilted Left */}
          <motion.div
            className="absolute right-0 top-1/4 -translate-y-1/2"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 20, 0],
                    rotateY: 15,
                    rotateZ: 5,
                  }
            }
            transition={{
              x: { duration: 6, ease: 'easeInOut', repeat: Infinity },
              rotateY: { duration: 0 },
              rotateZ: { duration: 0 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-[160px] h-[320px] md:w-[200px] md:h-[400px]">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden relative flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="flex-1 flex flex-col justify-center items-center gap-3 px-4 pt-8">
                    <div className="h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded w-2/3 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      <div className="h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg border border-violet-500/20"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/20"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="h-8 w-20 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-10 h-0.5 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background blobs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="absolute -left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

