import { motion, useReducedMotion } from 'framer-motion';
import { CircularTeamGallery } from './CircularTeamGallery';

export function TeamEnhanced() {
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
    <section
      id="team"
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm border border-purple-100">
            <span className="text-sm font-semibold text-[#8A3FFC] uppercase tracking-wide">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary mb-6">
            Engineers who{' '}
            <span
              className="bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ship
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced engineers from diverse backgrounds, now building for
            ambitious startups.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CircularTeamGallery members={team} />
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] rounded-2xl p-8 md:p-12 text-center text-white mt-16 shadow-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need specialized expertise?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            We bring in vetted domain experts (blockchain, hardware, security) as
            needed.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#8A3FFC] px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all uppercase tracking-wide text-sm"
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
    </section>
  );
}
