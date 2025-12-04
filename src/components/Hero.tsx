import { ArrowRight } from 'lucide-react';

export function Hero() {
  // Scroll helpers
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative bg-white pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Text Block */}
        <div className="flex-1 flex flex-col items-start justify-center text-left gap-8 animate-fadein">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            We build production-ready web, AI & IoT products for startups
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Fast prototypes, reliable launches — from prototype to production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={scrollToContact}
              className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>Book a 15-min scoping call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="group border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>View flagship demo</span>
            </button>
          </div>
        </div>

        {/* Right: Phone Mockups - Two Phones Crossing */}
        <div className="flex-1 flex items-center justify-center w-full relative h-[400px] md:h-[480px]">
          {/* Left Phone - Tilted Right */}
          <div className="absolute left-1/4 top-1/6 -translate-y-1/2 -translate-x-1/2 animate-phone-left">
            <div className="relative w-[160px] h-[320px] md:w-[200px] md:h-[400px]">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden relative flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="flex-1 flex flex-col justify-center items-center gap-3 px-4 pt-8">
                    <div className="h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded w-2/3 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg border border-purple-500/20"></div>
                      <div className="h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/20"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="h-8 w-20 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-10 h-0.5 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone - Tilted Left */}
          <div className="absolute right-0 top-1/4 -translate-y-1/2 animate-phone-right">
            <div className="relative w-[160px] h-[320px] md:w-[200px] md:h-[400px]">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden relative flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="flex-1 flex flex-col justify-center items-center gap-3 px-4 pt-8">
                    <div className="h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded w-2/3 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      <div className="h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg border border-violet-500/20"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/20"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="h-8 w-20 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-10 h-0.5 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background blobs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute -left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-blob1"></div>
            <div className="absolute -right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl animate-blob2"></div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1) both; }
        @keyframes blob1 { 0%,100%{transform:scale(1);} 50%{transform:scale(1.1);} }
        .animate-blob1 { animation: blob1 7s ease-in-out infinite; }
        @keyframes blob2 { 0%,100%{transform:scale(1);} 50%{transform:scale(1.08);} }
        .animate-blob2 { animation: blob2 8s ease-in-out infinite; }
        @keyframes phone-left { 0%,100%{transform:translateX(0) rotateY(-15deg) rotateZ(-5deg);} 50%{transform:translateX(-20px) rotateY(-15deg) rotateZ(-5deg);} }
        .animate-phone-left { animation: phone-left 6s ease-in-out infinite; }
        @keyframes phone-right { 0%,100%{transform:translateX(0) rotateY(15deg) rotateZ(5deg);} 50%{transform:translateX(20px) rotateY(15deg) rotateZ(5deg);} }
        .animate-phone-right { animation: phone-right 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

