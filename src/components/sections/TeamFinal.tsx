import { motion, useReducedMotion } from 'framer-motion';
import { CircularTeamGallery } from '../CircularTeamGallery';
import { Section } from '../layout/Section';
import { Scene3D } from '../3d/Scene3D';
import { FloatingSphere } from '../3d/FloatingSphere';

export function TeamFinal() {
  const shouldReduceMotion = useReducedMotion();

  const team = [
    {
      name: 'Dhinesh V',
      role: 'Full-Stack Developer',
      bio: 'Developer focused on building scalable web applications using MERN stack. Handles end-to-end architecture, backend APIs, and UI engineering.',
      expertise: ['React', 'Node.js', 'Express', 'MongoDB', 'System Architecture'],
      social: {
        linkedin: 'https://www.linkedin.com/in/dhinesh-v-690289292/',
        github: 'https://github.com/Dhinesh71',
        email: 'dhineshjk17@gmail.com',
      },
    },
    {
      name: 'Dileep V',
      role: 'Embedded Systems Trainee',
      bio: 'Beginner-level embedded engineer learning microcontroller programming and IoT fundamentals. Supports hardware testing and prototype development.',
      expertise: ['C Programming', 'Arduino', 'Basic Electronics'],
      social: { linkedin: '#', github: '#', email: 'dileep@6ixminds.com' },
    },
    {
      name: 'Sathish S',
      role: 'Digital Marketing & Video Production',
      bio: 'Creates marketing assets, manages brand visuals, and produces videos for campaigns and promotions.',
      expertise: ['Video Editing', 'Branding', 'Social Media Marketing'],
      social: { linkedin: '#', github: '#', email: 'sathish@6ixminds.com' },
    },
    {
      name: 'Anandh M',
      role: 'IoT & Embedded Engineer',
      bio: 'Works on IoT solutions, embedded firmware, and hardware integration. Focuses on microcontrollers and sensor-based systems.',
      expertise: ['ESP32', 'IoT Systems', 'Embedded C', 'Sensors'],
      social: { linkedin: '#', github: '#', email: 'anandh@6ixminds.com' },
    },
    {
      name: 'Nithish Kumar B',
      role: 'Embedded Systems Trainee',
      bio: 'Learning embedded development with a focus on microcontrollers and circuit-level troubleshooting.',
      expertise: ['C Programming', 'Arduino', 'Circuit Basics'],
      social: { linkedin: '#', github: '#', email: 'nithish@6ixminds.com' },
    },
    {
      name: 'Prabhakar M',
      role: 'Digital Marketing & Embedded Support',
      bio: 'Works across marketing and hardware support. Assists in IoT prototyping and manages campaign execution.',
      expertise: ['Digital Marketing', 'IoT Basics', 'Embedded Support'],
      social: { linkedin: '#', github: '#', email: 'prabhakar@6ixminds.com' },
    },
  ];

  return (
    <Section id="team" background="white" containerSize="default">
      <div className="relative">
        <div className="absolute top-1/4 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 pointer-events-none hidden xl:block">
          <Scene3D className="w-full h-full">
            <FloatingSphere color="#8A3FFC" speed={0.8} radius={0.9} distort={0.45} />
          </Scene3D>
        </div>

        <motion.div
          className="text-center mb-12 md:mb-16 relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm border border-purple-100">
            <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
              Our Team
            </span>
          </div>

          <h2 className="text-heading-2 font-extrabold text-text-primary mb-6">
            Engineers who{' '}
            <span
              className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent inline-block"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ship
            </span>
          </h2>

          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced engineers from diverse backgrounds, now building for
            ambitious startups.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <CircularTeamGallery members={team} />
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-brand-purple to-brand-pink rounded-2xl p-6 md:p-10 lg:p-12 text-center text-white mt-12 md:mt-16 shadow-2xl relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-heading-3 font-bold mb-4">
            Need specialized expertise?
          </h3>
          <p className="text-body-lg mb-6 opacity-95 leading-relaxed">
            We bring in vetted domain experts (blockchain, hardware, security) as
            needed.
          </p>
          <motion.button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-brand-purple px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-2xl transition-all uppercase tracking-wide text-sm md:text-base min-h-tap"
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  }
            }
            whileTap={{ scale: 0.98 }}
          >
            Discuss your project
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}
