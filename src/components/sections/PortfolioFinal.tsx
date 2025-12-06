import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Section } from '../layout/Section';
import projects from '../../data/projects';

const PixelCard = lazy(() => import('../PixelCard'));

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  url: string;
  tech: string[];
  videoPreview?: string;
}

function ProjectCard({
  title,
  category,
  description,
  image,
  url,
  tech,
  videoPreview,
}: ProjectCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.03,
    });

    return () => {
      if (tiltRef.current) {
        const instance = (tiltRef.current as any).vanillaTilt;
        if (instance) instance.destroy();
      }
    };
  }, [shouldReduceMotion]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoPreview) {
      setTimeout(() => setShowVideo(true), 300);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false);
  };

  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-2xl shadow-lg h-full min-h-[450px]" />
      }
    >
      <PixelCard
        variant="pink"
        className="h-full service-card cursor-pointer"
      >
        <motion.div
          ref={shouldReduceMotion ? undefined : tiltRef}
          className="h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full no-underline"
            aria-label={`Open ${title} in a new tab`}
          >
            <div className="relative h-full bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
              <div className="relative aspect-video w-full h-48 md:h-52 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                {showVideo && videoPreview ? (
                  <video
                    src={videoPreview}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : image ? (
                  <motion.img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={
                      shouldReduceMotion ? {} : { scale: 1.05 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ExternalLink size={40} className="text-purple-400" />
                  </div>
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  initial={false}
                >
                  <motion.span
                    className="text-white text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    View Project
                  </motion.span>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.span
                  className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-brand-purple px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-3 border border-purple-200"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.12 }}
                >
                  {category}
                </motion.span>

                <h3 className="text-heading-4 font-bold text-text-primary mb-3 hover:text-brand-purple transition-colors break-words">
                  {title}
                </h3>

                <p className="text-body-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tech.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                      +{tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={
                  shouldReduceMotion ? {} : { scale: 1.1, rotate: 15 }
                }
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={18} className="text-brand-purple" />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </PixelCard>
    </Suspense>
  );
}

export function PortfolioFinal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="portfolio" background="gradient" containerSize="default">
      <div className="relative">
        <motion.div
          className="text-center mb-12 md:mb-16 relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm border border-purple-100">
            <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
              Flagship Projects
            </span>
          </div>

          <h2 className="text-heading-2 font-extrabold text-text-primary mb-6">
            Real products,{' '}
            <span
              className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent inline-block"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              real impact
            </span>
          </h2>

          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We measure success by outcomes — faster launches, lower costs,
            happier users.
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
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {projects.map((project, index) => (
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
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
