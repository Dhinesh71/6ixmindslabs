import { Code2, Brain, Cpu, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import serviceIcon from '../../public/lottie/service-icon.json';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  cta,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  if (shouldReduceMotion) {
    return (
      <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 cursor-pointer h-full">
        <div className="relative z-10">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#8A3FFC] to-[#FF5CA3] rounded-xl flex items-center justify-center text-white shadow-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {title}
              </h3>
              <p className="text-muted">{description}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#8A3FFC] rounded-full mt-2"></div>
                <span className="text-text-primary">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="flex items-center space-x-2 text-[#8A3FFC] font-semibold hover:text-[#FF5CA3] transition-colors">
            <span className="uppercase tracking-wide text-sm">{cta}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 cursor-pointer h-full overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow:
          '0 18px 40px rgba(138, 63, 252, 0.08), 0 28px 60px rgba(138, 63, 252, 0.10)',
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 rounded-2xl"
        initial={false}
        animate={{
          background: isHovered
            ? 'linear-gradient(to bottom right, rgba(138, 63, 252, 0.03), rgba(255, 92, 163, 0.05))'
            : 'linear-gradient(to bottom right, rgba(138, 63, 252, 0), rgba(255, 92, 163, 0))',
        }}
        transition={{ duration: 0.28 }}
      />

      <div className="relative z-10">
        <div className="flex items-start space-x-4 mb-6">
          <motion.div
            className="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#8A3FFC] to-[#FF5CA3] rounded-xl flex items-center justify-center text-white shadow-lg"
            whileHover={{
              scale: 1.08,
              rotate: 6,
              boxShadow:
                '0 8px 20px rgba(138, 63, 252, 0.3), 0 12px 30px rgba(255, 92, 163, 0.2)',
            }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {icon}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <Lottie
                  animationData={serviceIcon}
                  loop={false}
                  autoplay
                  style={{ width: 80, height: 80 }}
                />
              </div>
            )}
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {title}
            </h3>
            <p className="text-muted">{description}</p>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
            >
              <div className="flex-shrink-0 w-2 h-2 bg-[#8A3FFC] rounded-full mt-2"></div>
              <span className="text-text-primary">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="group/btn flex items-center space-x-2 text-[#8A3FFC] font-semibold"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.15 }}
        >
          <span className="uppercase tracking-wide text-sm">{cta}</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function ServicesEnhanced() {
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
    <section id="services" className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 rounded-full mb-6 border border-purple-100">
            <span className="text-sm font-semibold text-[#8A3FFC] uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary mb-6">
            End-to-end technical{' '}
            <span
              className="bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              execution
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We handle the full stack — from frontend UX to cloud infrastructure,
            AI models to physical hardware.
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
