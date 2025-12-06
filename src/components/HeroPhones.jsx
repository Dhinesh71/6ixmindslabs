import { motion, useReducedMotion } from 'framer-motion';
import './HeroPhones.css';

export default function HeroPhones() {
  const shouldReduceMotion = useReducedMotion();

  const leftPhoneVariants = {
    animate: {
      y: shouldReduceMotion ? 0 : [0, -28, 0],
      rotateZ: shouldReduceMotion ? 0 : [0, 1.5, 0],
      scale: shouldReduceMotion ? 1 : [1, 1.02, 1],
    },
  };

  const rightPhoneVariants = {
    animate: {
      y: shouldReduceMotion ? 0 : [0, 28, 0],
      rotateZ: shouldReduceMotion ? 0 : [0, -1.5, 0],
      scale: shouldReduceMotion ? 1 : [1, 0.98, 1],
    },
  };

  const transitionConfig = {
    duration: 4.2,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <div className="hero-phones-container">
      <div className="phones-wrapper">
        <motion.div
          className="phone-mockup phone-left"
          variants={leftPhoneVariants}
          animate="animate"
          transition={transitionConfig}
        >
          <img
            src="/phone-left.png"
            alt="App interface left view"
            className="phone-image"
            loading="eager"
          />
        </motion.div>

        <motion.div
          className="phone-mockup phone-right"
          variants={rightPhoneVariants}
          animate="animate"
          transition={transitionConfig}
        >
          <img
            src="/phone-right.png"
            alt="App interface right view"
            className="phone-image"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
}
