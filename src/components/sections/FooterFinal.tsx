import { Linkedin, Github, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../layout/Container';

export function FooterFinal() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-text-primary text-white py-12 md:py-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-pink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <span className="text-heading-4 font-bold">6ixminds Labs</span>
            </div>
            <p className="text-body-sm text-gray-400 mb-4 leading-relaxed">
              Engineering-first shop for Full-Stack, AI, and IoT solutions.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-brand-purple transition-all min-h-tap min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-brand-purple transition-all min-h-tap min-w-[44px] flex items-center justify-center"
                aria-label="GitHub"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="mailto:6ixmindslabs@gmail.com"
                className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-brand-purple transition-all min-h-tap min-w-[44px] flex items-center justify-center"
                aria-label="Email"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-body-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-body-sm text-gray-400">
              {['Full-Stack Web', 'AI & Machine Learning', 'IoT Solutions'].map(
                (service, idx) => (
                  <li key={idx}>
                    <motion.a
                      href="#services"
                      className="hover:text-white transition-colors inline-block"
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      {service}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-body-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-body-sm text-gray-400">
              {[
                { label: 'About Us', href: '#team' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <motion.a
                    href={item.href}
                    className="hover:text-white transition-colors inline-block"
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-body-lg font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-body-sm text-gray-400">
              <li>
                <a
                  href="mailto:6ixmindslabs@gmail.com"
                  className="hover:text-white transition-colors break-words"
                >
                  6ixmindslabs@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919025873422"
                  className="hover:text-white transition-colors"
                >
                  +919025873422
                </a>
                <br />
                <a
                  href="tel:+919080534488"
                  className="hover:text-white transition-colors"
                >
                  +919080534488
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-500 text-xs">Tamilnadu, India</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} 6ixminds Labs. All rights reserved.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.div
            className="relative w-16 h-16"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 8,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <div className="absolute inset-0">
              <div className="w-3 h-3 bg-brand-purple rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-2 h-2 bg-brand-pink rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-2 h-2 bg-accent-3 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" />
              <div className="w-2 h-2 bg-brand-purple rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-brand-purple to-brand-pink rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
