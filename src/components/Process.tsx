import { Lightbulb, Code, Rocket, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

function ProcessStep({ number, icon, title, description, isActive }: ProcessStepProps) {
  return (
    <div className={`relative transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'bg-gradient-to-br from-accent-1 to-accent-2 text-white scale-110 shadow-xl shadow-accent-3/50'
              : 'bg-gray-200 text-muted'
          }`}
        >
          {icon}
        </div>

        <div
          className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${
            isActive
              ? 'bg-accent-1 text-white scale-100'
              : 'bg-gray-300 text-gray-500 scale-90'
          }`}
        >
          {number}
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-muted max-w-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      icon: <Lightbulb size={32} />,
      title: 'Discovery',
      description: 'Free 15-min scoping call to understand your goals, constraints, and timeline.',
    },
    {
      number: '02',
      icon: <Code size={32} />,
      title: 'Build',
      description: 'Iterative development with weekly demos and continuous feedback loops.',
    },
    {
      number: '03',
      icon: <Rocket size={32} />,
      title: 'Launch',
      description: 'Deployment, monitoring, and handoff with full documentation and training.',
    },
    {
      number: '04',
      icon: <TrendingUp size={32} />,
      title: 'Scale',
      description: 'Optional ongoing support, optimization, and feature expansion.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
          }, 3000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="process" ref={sectionRef} className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-3/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
            From idea to production in weeks
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Our proven process ensures transparency, speed, and quality at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-accent-1 to-accent-2 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} isActive={activeStep === index} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? 'bg-accent-1 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
