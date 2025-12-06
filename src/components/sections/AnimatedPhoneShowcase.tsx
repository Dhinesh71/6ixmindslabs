import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedPhoneUI } from '../AnimatedPhoneUI';
import { Container } from '../layout/Container';

export function AnimatedPhoneShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            variants={textVariants}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 rounded-full border border-purple-100">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Interactive UI
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
            variants={textVariants}
          >
            Beautiful animated{' '}
            <span
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              interfaces
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Smooth animations and interactive elements that bring your mobile app
            to life with modern design patterns.
          </motion.p>
        </motion.div>

        {/* Phone UI Grid */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Left Phone */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50, scale: 0.9 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <AnimatedPhoneUI variant="left" delay={0} />
          </motion.div>

          {/* Right Phone */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50, scale: 0.9 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <AnimatedPhoneUI variant="right" delay={0.2} />
          </motion.div>
        </motion.div>

        {/* Features Below */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {[
            {
              title: 'Smooth Animations',
              description: 'Fluid transitions and micro-interactions',
              icon: '✨',
            },
            {
              title: 'Responsive Design',
              description: 'Perfect on all screen sizes',
              icon: '📱',
            },
            {
              title: 'Accessibility',
              description: 'Respects reduced motion preferences',
              icon: '♿',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              variants={textVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }
              }
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
