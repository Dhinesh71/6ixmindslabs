import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <span className="text-xl font-bold">6ixminds Labs</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Engineering-first shop for Full-Stack, AI, and IoT solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-1 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-1 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-1 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:hello@6ixminds.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-1 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Full-Stack Web
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  IoT Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@6ixminds.com" className="hover:text-white transition-colors">
                  hello@6ixminds.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-500 text-xs">Toronto, Canada</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} 6ixminds Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-3 h-3 bg-accent-1 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-accent-2 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-accent-3 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-accent-1 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-accent-1 to-accent-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
