import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from './motion/CTAButton';
import { usePointerParallax } from '../hooks/usePointerParallax';
import Lottie from 'lottie-react';
import { Suspense, lazy } from 'react';
import heroAccent from '../../public/lottie/hero-accent.json';

const SplineScene = lazy(() =>
  import('./SplineScene').then((mod) => ({ default: mod.SplineScene }))
);

export function HeroEnhanced() {
  const shouldReduceMotion = useReducedMotion();
  const { ref: parallaxRef, transform } = usePointerParallax({
    maxTiltX: 8,
    maxTiltY: 8,
    speed: 0.5,
  });

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
        duration: 0.6,
        delay,
        ease: [0.22, 0.9, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const USE_SPLINE = false;
  const SPLINE_SCENE_URL = 'https://prod.spline.design/PLACEHOLDER-HERO-SCENE-URL';

  return (
    <section
      id="hero"
      className="relative bg-white pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      {!shouldReduceMotion && (
        <div className="absolute top-24 right-20 w-20 h-20 opacity-30 pointer-events-none">
          <Lottie animationData={heroAccent} loop autoplay />
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center text-left gap-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
          >
            <span className="block mb-2">We build </span>
            <span
              className="bg-gradient-to-r from-[#8A3FFC] via-purple-600 to-[#FF5CA3] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              production-ready
            </span>
            <span className="block mt-2 text-gray-900">
              web, AI & IoT products for startups
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xl font-medium"
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
            <CTAButton
              onClick={scrollToContact}
              variant="primary"
              className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide shadow-lg shadow-purple-500/20"
            >
              <span>Book a 15-min scoping call</span>
              <ArrowRight size={18} />
            </CTAButton>
            <CTAButton
              onClick={scrollToPortfolio}
              variant="secondary"
              className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
            >
              <span>View flagship demo</span>
            </CTAButton>
          </motion.div>
        </div>

        <motion.div
          ref={parallaxRef as React.RefObject<HTMLDivElement>}
          className="flex-1 flex items-center justify-center w-full relative h-[450px] md:h-[550px]"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={!shouldReduceMotion ? { transform } : undefined}
        >
          {USE_SPLINE ? (
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
                </div>
              }
            >
              <SplineScene
                sceneUrl={SPLINE_SCENE_URL}
                className="w-full h-full"
                fallback={
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-600">Loading 3D scene...</p>
                  </div>
                }
              />
            </Suspense>
          ) : (
            <>
              <PhoneMockup
                position="left"
                delay={0.4}
                shouldReduceMotion={shouldReduceMotion}
              />
              <PhoneMockup
                position="right"
                delay={0.5}
                shouldReduceMotion={shouldReduceMotion}
              />
            </>
          )}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <motion.div
              className="absolute -left-20 w-56 h-56 bg-purple-300/20 rounded-full blur-3xl"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-20 w-56 h-56 bg-pink-300/15 rounded-full blur-3xl"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
              transition={{
                duration: 9,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PhoneMockupProps {
  position: 'left' | 'right';
  delay: number;
  shouldReduceMotion: boolean;
}

function PhoneMockup({ position, delay, shouldReduceMotion }: PhoneMockupProps) {
  const isLeft = position === 'left';
  const gradient = isLeft
    ? 'from-purple-500 via-violet-500 to-indigo-500'
    : 'from-violet-500 via-purple-500 to-pink-500';

  return (
    <motion.div
      className={`absolute ${
        isLeft ? 'left-1/4 -translate-x-1/2' : 'right-0'
      } top-1/4-translate-y-1/2`}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        ...(shouldReduceMotion
          ? {}
          : {
              x: isLeft ? [0, -15, 0] : [0, 15, 0],
              rotateY: isLeft ? -12 : 12,
              rotateZ: isLeft ? -4 : 4,
            }),
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        x: {
          duration: 7,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px]">
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl flex items-center justify-center hover:shadow-purple-500/20 hover:shadow-3xl transition-shadow duration-300">
          <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

            <div className="flex-1 flex flex-col justify-center items-center gap-3 px-5 pt-10">
              <div className="h-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6 mb-3"></div>

              <div className="grid grid-cols-2 gap-3 w-full mb-4">
                <div className="h-20 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl border-2 border-purple-500/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full"></div>
                </div>
                <div className="h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border-2 border-indigo-500/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 w-full flex justify-center">
                <div
                  className={`h-10 w-24 bg-gradient-to-r ${gradient} rounded-xl shadow-lg flex items-center justify-center`}
                >
                  <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
