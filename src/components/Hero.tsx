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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-2xl">
                {!prefersReducedMotion && (
                  <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                )}

                <div className={`absolute inset-0 flex items-center justify-center ${!prefersReducedMotion && 'animate-float-slow'}`}>
                  <div className="relative">
                    <div className="w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                        <div className="pt-10 px-6 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-blue-500 ${!prefersReducedMotion && 'animate-pulse'}`}></div>
                              <div className={`w-2 h-2 rounded-full bg-cyan-500 ${!prefersReducedMotion && 'animate-pulse'}`} style={{ animationDelay: '0.2s' }}></div>
                              <div className={`w-2 h-2 rounded-full bg-teal-500 ${!prefersReducedMotion && 'animate-pulse'}`} style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg"></div>
                          </div>

                          <div className="space-y-6 flex-1">
                            <div className={`space-y-3 ${!prefersReducedMotion && 'animate-slide-in-1'}`}>
                              <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg w-3/4"></div>
                              <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
                              <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
                            </div>

                            <div className={`grid grid-cols-2 gap-4 ${!prefersReducedMotion && 'animate-slide-in-2'}`}>
                              <div className="h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border-2 border-blue-500/30"></div>
                              <div className="h-24 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl border-2 border-teal-500/30"></div>
                            </div>

                            <div className={`space-y-3 ${!prefersReducedMotion && 'animate-slide-in-3'}`}>
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                                <div className="flex-1 space-y-2">
                                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full"></div>
                                <div className="flex-1 space-y-2">
                                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full"></div>
                                <div className="flex-1 space-y-2">
                                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={`mt-auto mb-4 ${!prefersReducedMotion && 'animate-pulse-slow'}`}>
                            <div className="h-14 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl shadow-lg flex items-center justify-center">
                              <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!prefersReducedMotion && (
                      <>
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl transform rotate-12 animate-float-card-1 opacity-80"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-xl transform -rotate-12 animate-float-card-2 opacity-80"></div>
                        <div className="absolute top-1/3 -right-12 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl shadow-lg transform rotate-45 animate-float-card-3 opacity-70"></div>
                      </>
                    )}
                  </div>
                </div>

                {!prefersReducedMotion && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-particle-flow"></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-particle-flow" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-500 rounded-full animate-particle-flow" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-particle-flow" style={{ animationDelay: '2s' }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes float-card-1 {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(18deg); }
        }

        @keyframes float-card-2 {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-8deg); }
        }

        @keyframes float-card-3 {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-25px) rotate(50deg); }
        }

        @keyframes slide-in-1 {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-2 {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-3 {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes particle-flow {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 0.5; }
          100% { transform: translate(60px, -60px) scale(0.3); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-card-1 {
          animation: float-card-1 6s ease-in-out infinite;
        }

        .animate-float-card-2 {
          animation: float-card-2 7s ease-in-out infinite;
        }

        .animate-float-card-3 {
          animation: float-card-3 5s ease-in-out infinite;
        }

        .animate-slide-in-1 {
          animation: slide-in-1 0.8s ease-out 0.3s both;
        }

        .animate-slide-in-2 {
          animation: slide-in-2 0.8s ease-out 0.6s both;
        }

        .animate-slide-in-3 {
          animation: slide-in-3 0.8s ease-out 0.9s both;
        }

        .animate-particle-flow {
          animation: particle-flow 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-float-slow,
          .animate-float-card-1,
          .animate-float-card-2,
          .animate-float-card-3,
          .animate-slide-in-1,
          .animate-slide-in-2,
          .animate-slide-in-3,
          .animate-particle-flow,
          .animate-pulse-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
