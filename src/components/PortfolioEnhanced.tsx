import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import projects from '../data/projects';

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
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.02,
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
    <motion.div
      ref={shouldReduceMotion ? undefined : tiltRef}
      className="group relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full no-underline"
        aria-label={`Open ${title} in a new tab`}
      >
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
          <div className="relative aspect-video w-full h-52 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
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
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ExternalLink size={40} className="text-purple-400" />
              </div>
            )}

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              initial={false}
            >
              <motion.span
                className="text-white text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                initial={{ y: 20, opacity: 0 }}
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                View Project
              </motion.span>
            </motion.div>
          </div>

          <div className="p-6">
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-[#8A3FFC] px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border border-purple-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.12 }}
            >
              {category}
            </motion.span>

            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-[#8A3FFC] transition-colors">
              {title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
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
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink size={18} className="text-[#8A3FFC]" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

export function PortfolioEnhanced() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm border border-purple-100">
            <span className="text-sm font-semibold text-[#8A3FFC] uppercase tracking-wide">
              Flagship Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary mb-6">
            Real products,{' '}
            <span
              className="bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              real impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We measure success by outcomes — faster launches, lower costs,
            happier users.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
