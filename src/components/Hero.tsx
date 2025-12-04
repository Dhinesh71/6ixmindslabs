import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-accent-3/20 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-accent-1 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
                Engineering-First
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
              We build production-ready web, AI & IoT products for startups
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Fast prototypes, reliable launches — from prototype to production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-accent-1 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-2 transition-all hover:shadow-xl hover:shadow-accent-3/50 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm"
              >
                <span>Book a 15-min scoping call</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="group border-2 border-text-primary text-text-primary px-8 py-4 rounded-lg font-semibold hover:bg-text-primary hover:text-white transition-all flex items-center justify-center space-x-2 uppercase tracking-wide text-sm"
              >
                <span>View flagship demo</span>
              </button>
            </div>
          </div>

          <div ref={heroRef} className="relative h-[400px] md:h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-3/10 to-accent-1/10 rounded-2xl"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                <div className={`absolute inset-0 flex items-center justify-center space-x-8 ${!prefersReducedMotion && 'animate-float'}`}>
                  <div className="relative">
                    <div className="w-24 h-32 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg shadow-2xl transform -rotate-6 opacity-90"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-1 rounded-full animate-pulse"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-32 h-40 bg-gradient-to-br from-text-primary to-muted rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="w-28 h-32 bg-white rounded-lg flex items-center justify-center">
                        <div className="space-y-2 w-20">
                          <div className="h-2 bg-accent-1 rounded animate-pulse"></div>
                          <div className="h-2 bg-accent-2 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-2 bg-accent-3 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-2 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>

                  <div className="relative">
                    <div className="w-20 h-28 bg-gradient-to-br from-accent-2 to-accent-3 rounded-lg shadow-2xl transform rotate-6 opacity-90"></div>
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-accent-3 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>

                {!prefersReducedMotion && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-1 rounded-full animate-particle"></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent-2 rounded-full animate-particle" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent-3 rounded-full animate-particle" style={{ animationDelay: '2s' }}></div>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-xs text-muted italic">
                3D interactive demo coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(40px, -40px) scale(0.5); opacity: 0; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-float,
          .animate-particle {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
