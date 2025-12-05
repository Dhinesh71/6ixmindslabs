import { Linkedin, Github, Mail } from 'lucide-react';
import TextType from './TextType';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square bg-gradient-to-br from-accent-3/30 to-accent-1/30 flex items-center justify-center relative overflow-hidden">
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-6' : ''
          }`}
        >
          {name.charAt(0)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-1">{name}</h3>
        <p className="text-accent-1 font-semibold mb-3">
          <TextType
            text={[role]}
            typingSpeed={65}
            pauseDuration={1600}
            loop={false}
            showCursor={false}
            className="feature-typed"
          />
        </p>
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
    </div>
  );
}

export function Team() {
  const team: TeamMemberProps[] = [
    {
      name: "Dhinesh V",
      role: "Full-Stack Developer",
      bio: "Developer focused on building scalable web applications using MERN stack. Handles end-to-end architecture, backend APIs, and UI engineering.",
      expertise: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "System Architecture",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/dhinesh-v-690289292/",
        github: "https://github.com/Dhinesh71",
        email: "dhineshjk17@gmail.com",
      },
    },
    {
      name: "Dileep V",
      role: "Embedded Systems Trainee",
      bio: "Beginner-level embedded engineer learning microcontroller programming and IoT fundamentals. Supports hardware testing and prototype development.",
      expertise: ["C Programming", "Arduino", "Basic Electronics"],
      social: {
        linkedin: "#",
        github: "#",
        email: "dileep@6ixminds.com",
      },
    },
    {
      name: "Sathish S",
      role: "Digital Marketing & Video Production",
      bio: "Creates marketing assets, manages brand visuals, and produces videos for campaigns and promotions.",
      expertise: ["Video Editing", "Branding", "Social Media Marketing"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sathish@6ixminds.com",
      },
    },
    {
      name: "Anandh M",
      role: "IoT & Embedded Engineer",
      bio: "Works on IoT solutions, embedded firmware, and hardware integration. Focuses on microcontrollers and sensor-based systems.",
      expertise: ["ESP32", "IoT Systems", "Embedded C", "Sensors"],
      social: {
        linkedin: "#",
        github: "#",
        email: "anandh@6ixminds.com",
      },
    },
    {
      name: "Nithish Kumar B",
      role: "Embedded Systems Trainee",
      bio: "Learning embedded development with a focus on microcontrollers and circuit-level troubleshooting.",
      expertise: ["C Programming", "Arduino", "Circuit Basics"],
      social: {
        linkedin: "#",
        github: "#",
        email: "nithish@6ixminds.com",
      },
    },
    {
      name: "Prabhakar M",
      role: "Digital Marketing & Embedded Support",
      bio: "Works across marketing and hardware support. Assists in IoT prototyping and manages campaign execution.",
      expertise: ["Digital Marketing", "IoT Basics", "Embedded Support"],
      social: {
        linkedin: "#",
        github: "#",
        email: "prabhakar@6ixminds.com",
      },
    },
  ];


  return (
    <section id="team" className="bg-ui-muted-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

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
