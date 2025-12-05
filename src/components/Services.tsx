import { Code2, Brain, Cpu, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

function ServiceCard({ icon, title, description, features, cta }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="relative bg-white border-2 border-gray-200 rounded-xl p-8 cursor-pointer h-full">
        <div className="relative z-10">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center text-white">
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

          <button className="flex items-center space-x-2 text-accent-1 font-semibold">
            <span className="uppercase tracking-wide text-sm">{cta}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 cursor-pointer h-full"
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(198, 163, 224, 0.25)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-3/0 to-accent-3/0 rounded-xl"
        initial={false}
        whileHover={{
          background: 'linear-gradient(to bottom right, rgba(198, 163, 224, 0.05), rgba(108, 47, 165, 0.05))',
        }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10">
        <div className="flex items-start space-x-4 mb-6">
          <motion.div
            className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, rotate: 6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {icon}
          </motion.div>
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

        <motion.button
          className="group/btn flex items-center space-x-2 text-accent-1 font-semibold"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.15 }}
        >
          <span className="uppercase tracking-wide text-sm">{cta}</span>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
            <ArrowRight size={16} />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function Services() {
  const shouldReduceMotion = useReducedMotion();

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
