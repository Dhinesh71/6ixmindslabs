import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import './Portfolio.css';
import projects from '../data/projects';

export function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  // projects data moved to `src/data/projects.ts` for easy edits
  const cases = projects;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };


  return (
    <section id="portfolio" className="bg-ui-muted-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
              Flagship Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
            Real products, real impact
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto  text-gray-700">
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
          {cases.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline h-full"
              aria-label={`Open ${caseStudy.title} in a new tab`}
            >
              <SpotlightCard
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer project-card h-full"
                spotlightColor="rgba(0,229,255,0.12)"
                tabIndex={0}
              >
                <div className="project-inner">
                  {caseStudy.image ? (
                    <div className="aspect-video w-full h-48 overflow-hidden bg-gray-100 rounded-t-xl group-hover:scale-105 transition-transform duration-300">
                      <img src={caseStudy.image} alt={caseStudy.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-accent-3/20 to-accent-1/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <ExternalLink size={32} className="text-accent-1" />
                    </div>
                  )}

                  <div className="p-6">
                    <span className="inline-block bg-accent-3/30 text-accent-1 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-1 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-muted mb-4 line-clamp-3 text-text-primary">{caseStudy.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
