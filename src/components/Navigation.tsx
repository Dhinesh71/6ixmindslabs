import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
            aria-label="6ixminds Labs home"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="6ixminds Labs logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-bold text-text-primary hidden sm:inline nav-glow">
              6ixminds Labs
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-text-primary hover:text-accent-1 transition-colors font-medium nav-glow"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-text-primary hover:text-accent-1 transition-colors font-medium nav-glow"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-text-primary hover:text-accent-1 transition-colors font-medium nav-glow"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent-1 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-2 transition-all hover:shadow-lg hover:shadow-accent-3/50"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-text-primary nav-glow hover:text-accent-1 transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-text-primary nav-glow hover:text-accent-1 transition-colors font-medium py-2"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-text-primary nav-glow hover:text-accent-1 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full bg-accent-1 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-2 transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
