import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedPhoneUIProps {
  variant?: 'left' | 'right';
  delay?: number;
}

export function AnimatedPhoneUI({ variant = 'left', delay = 0 }: AnimatedPhoneUIProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      // values will be replaced below by computed floatDistance/floatDuration
      y: variant === 'left' ? [0, -20, 0] : [0, 20, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: 0,
      },
    },
  };

  // Responsive adjustments: increase movement and speed on small screens
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const onResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 640);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const floatDistance = isMobile ? 25 : 20; // px
  const floatDuration = isMobile ? 3.5 : 5; // seconds

  // apply computed values
  floatingVariants.animate.y = variant === 'left' ? [0, -floatDistance, 0] : [0, floatDistance, 0];
  floatingVariants.animate.transition.duration = floatDuration;

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  // Left phone UI (dashboard style)
  if (variant === 'left') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        animate={shouldReduceMotion ? {} : 'animate'}
        variants={shouldReduceMotion ? {} : floatingVariants}
        className="relative w-72 h-96"
      >
        {/* Phone frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-3xl z-20" />

            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-3 mt-2">
              <div className="text-xs font-semibold text-gray-800">9:41</div>
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-gray-400 rounded-sm" />
                <div className="w-1 h-3 bg-gray-400 rounded-sm" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4 space-y-4 overflow-hidden">
              {/* Header */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="h-3 w-12 bg-gray-800 rounded" />
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.div
                  className="h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-3/4"
                  animate={shouldReduceMotion ? {} : { opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* List items */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="space-y-1.5"
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: delay + 0.2 + i * 0.1,
                    duration: 0.5,
                  }}
                >
                  <motion.div
                    className="h-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded w-2/3"
                    animate={shouldReduceMotion ? {} : pulseVariants.animate}
                    transition={{ delay: i * 0.15 }}
                  />
                  <div className="h-2 bg-gray-200 rounded w-full" />
                </motion.div>
              ))}
            </div>

            {/* Bottom Button */}
            <motion.div
              className="mx-4 mb-4"
              animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: delay + 0.3,
              }}
            >
              <div className="h-12 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-white/60 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Right phone UI (list style)
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      animate={shouldReduceMotion ? {} : 'animate'}
      variants={shouldReduceMotion ? {} : floatingVariants}
      className="relative w-72 h-96"
    >
      {/* Phone frame */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-3xl z-20" />

          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 mt-2">
            <div className="text-xs font-semibold text-gray-800">9:41</div>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-gray-400 rounded-sm" />
              <div className="w-1 h-3 bg-gray-400 rounded-sm" />
            </div>
          </div>

          {/* Header */}
          <div className="px-5 py-3 space-y-1.5 border-b border-gray-200">
            <motion.div
              className="h-3 bg-gray-800 rounded w-1/2"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.2, duration: 0.5 }}
            />
            <motion.div
              className="h-5 bg-gradient-to-r from-pink-500 to-pink-400 rounded w-3/4"
              animate={shouldReduceMotion ? {} : { opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* List items with avatars */}
          <div className="flex-1 px-4 py-3 space-y-3 overflow-hidden">
            {[
              { color: 'from-pink-500 to-pink-400' },
              { color: 'from-purple-500 to-purple-400' },
              { color: 'from-pink-500 to-pink-400' },
              { color: 'from-purple-500 to-purple-400' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: delay + 0.3 + i * 0.12,
                  duration: 0.5,
                }}
              >
                {/* Avatar */}
                <motion.div
                  className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-full flex-shrink-0`}
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />

                {/* Text lines */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="h-2.5 bg-gray-800 rounded w-24" />
                    <div className="h-2 bg-gray-400 rounded w-8" />
                  </div>
                  <div className="h-2 bg-gray-300 rounded w-16" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating action button */}
          <motion.div
            className="absolute bottom-6 right-6"
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: delay + 0.5,
            }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.15,
                      boxShadow: '0 8px 20px rgba(138, 63, 252, 0.4)',
                    }
              }
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
