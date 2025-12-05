import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from '../motion/CTAButton';
import { Scene3D } from '../3d/Scene3D';
import { FloatingSphere } from '../3d/FloatingSphere';
import { Container } from '../layout/Container';

export function HeroFinal() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
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

          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scene3D className="w-full h-full" enableControls>
              <FloatingSphere color="#8A3FFC" speed={1} radius={1.2} distort={0.3} />
              <FloatingSphere color="#FF5CA3" speed={0.8} radius={0.6} distort={0.5} />
            </Scene3D>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
