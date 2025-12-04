import { Code2, Brain, Cpu, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

function ServiceCard({ icon, title, description, features, cta }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-3/20 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-3/0 to-accent-3/0 group-hover:from-accent-3/5 group-hover:to-accent-1/5 rounded-xl transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start space-x-4 mb-6">
          <div
            className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-6' : ''
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-muted">{description}</p>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 bg-accent-1 rounded-full mt-2"></div>
              <span className="text-text-primary">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="group/btn flex items-center space-x-2 text-accent-1 font-semibold hover:text-accent-2 transition-colors">
          <span className="uppercase tracking-wide text-sm">{cta}</span>
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: 'Full-Stack Web',
      description: 'Modern, scalable web applications',
      features: [
        'React, Next.js, TypeScript frontends',
        'Node.js, Python, Go backends',
        'PostgreSQL, MongoDB, Redis',
        'AWS, Vercel, Docker deployment',
      ],
      cta: 'Get estimate',
    },
    {
      icon: <Brain size={28} />,
      title: 'AI & ML',
      description: 'Intelligent automation & insights',
      features: [
        'LLM integration (GPT, Claude, LLaMA)',
        'Computer vision & NLP pipelines',
        'RAG & vector search (Pinecone, Weaviate)',
        'Fine-tuning & model optimization',
      ],
      cta: 'See scope',
    },
    {
      icon: <Cpu size={28} />,
      title: 'IoT Solutions',
      description: 'Connected devices & edge computing',
      features: [
        'Hardware prototyping (Arduino, ESP32)',
        'MQTT, WebSocket real-time data',
        'Edge ML inference (TensorFlow Lite)',
        'Cloud dashboards & monitoring',
      ],
      cta: 'Get estimate',
    },
  ];

  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-3/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
            End-to-end technical execution
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            We handle the full stack — from frontend UX to cloud infrastructure, AI models to
            physical hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
