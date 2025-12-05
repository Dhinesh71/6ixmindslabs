import { Linkedin, Github, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface TeamMemberProps {
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

function TeamMember({ name, role, bio, expertise, social }: TeamMemberProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              transition: { duration: 0.2, ease: 'easeOut' },
            }
      }
    >
      <div className="aspect-square bg-gradient-to-br from-accent-3/30 to-accent-1/30 flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center text-white text-4xl font-bold"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {name.charAt(0)}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-1">{name}</h3>
        <p className="text-accent-1 font-semibold mb-3">{role}</p>
        <p className="text-muted mb-4 text-sm">{bio}</p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wide">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="bg-accent-3/20 text-accent-1 px-2 py-1 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-ui-muted-bg rounded-lg hover:bg-accent-1 hover:text-white transition-all"
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-ui-muted-bg rounded-lg hover:bg-accent-1 hover:text-white transition-all"
              aria-label={`${name} GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="p-2 bg-ui-muted-bg rounded-lg hover:bg-accent-1 hover:text-white transition-all"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  const team: TeamMemberProps[] = [
    {
      name: 'Alex Chen',
      role: 'Lead Engineer',
      bio: 'Full-stack architect with 10+ years building scalable systems. Ex-Amazon, Stanford CS.',
      expertise: ['React', 'Node.js', 'AWS', 'System Design'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex@6ixminds.com',
      },
    },
    {
      name: 'Sarah Kim',
      role: 'AI/ML Engineer',
      bio: 'ML researcher turned practitioner. Specializes in LLMs, computer vision, and edge AI.',
      expertise: ['PyTorch', 'OpenAI', 'CV', 'MLOps'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'sarah@6ixminds.com',
      },
    },
    {
      name: 'Marcus Liu',
      role: 'IoT Specialist',
      bio: 'Hardware hacker and embedded systems expert. Built 50+ IoT prototypes to production.',
      expertise: ['ESP32', 'MQTT', 'TensorFlow Lite', 'PCB'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'marcus@6ixminds.com',
      },
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
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
    <section id="team" className="bg-ui-muted-bg py-20 md:py-32">
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
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
            Engineers who ship
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Senior engineers from top tech companies, now building for ambitious startups.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TeamMember {...member} />
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gradient-to-br from-accent-1 to-accent-2 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need specialized expertise?</h3>
          <p className="text-lg mb-6 opacity-90">
            We bring in vetted domain experts (blockchain, hardware, security) as needed.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-accent-1 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all uppercase tracking-wide text-sm"
          >
            Discuss your project
          </button>
        </div>
      </div>
    </section>
  );
}
