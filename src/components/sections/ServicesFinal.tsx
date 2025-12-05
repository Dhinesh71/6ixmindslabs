import { Code2, Brain, Cpu, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, Suspense, lazy } from 'react';
import Lottie from 'lottie-react';
import serviceIcon from '../../../public/lottie/service-icon.json';
import { Section } from '../layout/Section';
import { Scene3D } from '../3d/Scene3D';
import { FloatingSphere } from '../3d/FloatingSphere';

const SpotlightCard = lazy(() => import('../SpotlightCard'));

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
  color: string;
}

function ServiceCard({ icon, title, description, features, cta, color }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Suspense
      fallback={
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full min-h-[400px]" />
      }
    >
      <SpotlightCard
        className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden h-full"
        spotlightColor="rgba(138, 63, 252, 0.08)"
      >
        <motion.div
          className="p-6 md:p-8 h-full flex flex-col"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  y: -8,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }
          }
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-purple to-brand-pink rounded-xl flex items-center justify-center text-white shadow-lg"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.1,
                      rotate: 8,
                      boxShadow: '0 12px 24px rgba(138, 63, 252, 0.3)',
                    }
              }
              transition={{ duration: 0.2 }}
            >
              {icon}
              {isHovered && !shouldReduceMotion && (
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Lottie
                    animationData={serviceIcon}
                    loop={false}
                    autoplay
                    style={{ width: 90, height: 90 }}
                  />
                </div>
              )}
            </motion.div>

            <div className="flex-1 min-w-0">
              <h3 className="text-heading-4 font-bold text-text-primary mb-2 break-words">
                {title}
              </h3>
              <p className="text-body-sm text-gray-600 break-words">{description}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-brand-purple rounded-full mt-2" />
                <span className="text-body-sm text-text-primary break-words">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="flex items-center gap-2 text-brand-purple font-semibold hover:text-brand-pink transition-colors min-h-tap"
            whileHover={shouldReduceMotion ? {} : { x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span className="uppercase tracking-wide text-sm">{cta}</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </SpotlightCard>
    </Suspense>
  );
}

export function ServicesFinal() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: <Code2 size={28} />,
      title: 'Full-Stack Web',
      description: 'Modern, scalable applications',
      features: [
        'React, Next.js, TypeScript frontends',
        'Node.js, Python, Go backends',
        'PostgreSQL, MongoDB, Redis',
        'AWS, Vercel, Docker deployment',
      ],
      cta: 'Get estimate',
      color: '#8A3FFC',
    },
    {
      icon: <Brain size={28} />,
      title: 'AI & ML',
      description: 'Intelligent automation',
      features: [
        'LLM integration (GPT, Claude)',
        'Computer vision & NLP pipelines',
        'RAG & vector search',
        'Fine-tuning & optimization',
      ],
      cta: 'See scope',
      color: '#A13EA8',
    },
    {
      icon: <Cpu size={28} />,
      title: 'IoT Solutions',
      description: 'Connected devices',
      features: [
        'Hardware prototyping',
        'MQTT, WebSocket real-time',
        'Edge ML inference',
        'Cloud dashboards',
      ],
      cta: 'Get estimate',
      color: '#FF5CA3',
    },
  ];

  return (
    <Section id="services" background="white" containerSize="default">
      <div className="relative">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-30 pointer-events-none hidden lg:block">
          <Scene3D className="w-full h-full">
            <FloatingSphere color="#A13EA8" speed={0.7} radius={0.8} distort={0.4} />
          </Scene3D>
        </div>

        <motion.div
          className="text-center mb-12 md:mb-16 relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 rounded-full mb-6 border border-purple-100">
            <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
              What We Do
            </span>
          </div>

          <h2 className="text-heading-2 font-extrabold text-text-primary mb-6">
            End-to-end technical{' '}
            <span
              className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent inline-block"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              execution
            </span>
          </h2>

          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We handle the full stack — from frontend UX to cloud infrastructure,
            AI models to physical hardware.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
