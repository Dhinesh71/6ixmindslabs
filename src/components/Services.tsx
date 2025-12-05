import { Code2, Brain, Cpu, ArrowRight } from 'lucide-react';
import PixelCard from './PixelCard';

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
          <p className="text-lg md:text-xl text-muted text-gray-700 max-w-3xl mx-auto">
            We handle the full stack — from frontend UX to cloud infrastructure, AI models to
            physical hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <PixelCard key={idx} variant="pink" className="service-card">
              <div className="service-content">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="service-cta border-4 border-gray-500 rounded-[2.5rem]" aria-label={service.cta}>
                  <span>{service.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
