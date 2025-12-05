import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import TextType from './TextType';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

interface CircularTeamGalleryProps {
  members: TeamMember[];
}

export function CircularTeamGallery({ members }: CircularTeamGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % members.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPositionStyles = (index: number) => {
    const diff = index - activeIndex;
    const totalMembers = members.length;
    const angle = (diff * 360) / totalMembers;
    const radius = shouldReduceMotion ? 0 : 180;

    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const scale = index === activeIndex ? 1.2 : 0.7 + Math.abs(z) / 300;
    const opacity = index === activeIndex ? 1 : 0.4 + Math.abs(z) / 500;

    return {
      transform: shouldReduceMotion
        ? 'none'
        : `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
      opacity,
      zIndex: Math.floor(z),
    };
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full">
      <div className="relative h-[600px] md:h-[700px] perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-full max-w-2xl h-[400px] md:h-[500px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56 cursor-pointer"
                style={getPositionStyles(index)}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                animate={{
                  ...getPositionStyles(index),
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`relative ${
                    index === activeIndex
                      ? 'ring-4 ring-[#8A3FFC] ring-offset-4'
                      : ''
                  } rounded-full transition-all duration-300`}
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center shadow-xl">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#8A3FFC] to-[#FF5CA3] flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <div
          className="relative min-h-[300px]"
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {members[activeIndex].name}
                </h3>
                <p className="text-[#8A3FFC] font-semibold text-lg">
                  <TextType
                    text={[members[activeIndex].role]}
                    typingSpeed={65}
                    pauseDuration={1200}
                    loop={false}
                    showCursor={false}
                    className="inline-block"
                  />
                </p>
              </div>

              <p className="text-gray-600 mb-6 text-center">
                {members[activeIndex].bio}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide text-center">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {members[activeIndex].expertise.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-[#8A3FFC] px-3 py-1.5 rounded-full text-sm border border-purple-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 justify-center">
                {members[activeIndex].social.linkedin && (
                  <a
                    href={members[activeIndex].social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-[#8A3FFC] hover:text-white transition-all"
                    aria-label={`${members[activeIndex].name} LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {members[activeIndex].social.github && (
                  <a
                    href={members[activeIndex].social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-[#8A3FFC] hover:text-white transition-all"
                    aria-label={`${members[activeIndex].name} GitHub`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {members[activeIndex].social.email && (
                  <a
                    href={`mailto:${members[activeIndex].social.email}`}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-[#8A3FFC] hover:text-white transition-all"
                    aria-label={`Email ${members[activeIndex].name}`}
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#8A3FFC] hover:bg-purple-50 transition-all shadow-md"
            aria-label="Previous team member"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <div className="flex gap-2">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'bg-[#8A3FFC] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to team member ${idx + 1}`}
                aria-current={idx === activeIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#8A3FFC] hover:bg-purple-50 transition-all shadow-md"
            aria-label="Next team member"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @media (prefers-reduced-motion: reduce) {
          .perspective-1000 {
            perspective: none;
          }
        }
      `}</style>
    </div>
  );
}
