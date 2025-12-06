import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from './layout/Container';

export function NavigationFinal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'portfolio' },
    { label: 'Team', id: 'team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-14 md:h-[72px]">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group min-h-tap"
            aria-label="6ixminds Labs home"
          >
            <motion.div
              className="w-9 h-9 rounded-lg overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.jpg"
                alt="6ixminds Labs logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="text-base md:text-lg font-bold text-text-primary">
              6ixminds Labs
            </span>
          </button>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-primary hover:text-brand-purple transition-colors font-medium text-base min-h-tap px-2"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-purple text-white px-5 py-2 rounded-md font-semibold hover:bg-brand-pink transition-all shadow-lg shadow-purple-500/20 text-sm min-h-tap"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.05, boxShadow: '0 12px 24px rgba(138, 63, 252, 0.3)' }
              }
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2 min-h-tap min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </Container>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Container>
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-text-primary hover:text-brand-purple hover:bg-gray-50 transition-all font-medium py-3 px-4 rounded-lg text-body-md min-h-tap"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-brand-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-pink transition-all text-body-md min-h-tap text-center"
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
            </div>
          </Container>
        </motion.div>
      )}
    </nav>
  );
}
