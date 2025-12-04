import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  tech: string[];
  result: string;
  image: string;
}

function CaseModal({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h3 id="modal-title" className="text-2xl font-bold text-text-primary">
            {caseStudy.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="aspect-video bg-gradient-to-br from-accent-3/20 to-accent-1/20 rounded-xl flex items-center justify-center">
            <p className="text-muted italic">Interactive 3D demo placeholder</p>
          </div>

          <div>
            <span className="inline-block bg-accent-1 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {caseStudy.category}
            </span>
            <p className="text-lg text-text-primary mb-4">{caseStudy.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-primary mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tech.map((item, index) => (
                <span
                  key={index}
                  className="bg-ui-muted-bg px-3 py-1 rounded-lg text-sm text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-accent-3/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-text-primary mb-2">Result</h4>
            <p className="text-text-primary">{caseStudy.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      title: 'Real-time IoT Dashboard',
      category: 'IoT + Web',
      description:
        'Built a real-time monitoring system for 500+ industrial sensors with predictive maintenance alerts.',
      tech: ['React', 'Node.js', 'MQTT', 'PostgreSQL', 'ESP32', 'TensorFlow'],
      result:
        'Reduced equipment downtime by 40% and saved $200K annually in maintenance costs.',
      image: '/case1.jpg',
    },
    {
      title: 'AI-Powered Content Platform',
      category: 'AI + Full-Stack',
      description:
        'Developed an intelligent content generation platform using GPT-4 with custom fine-tuning and RAG pipeline.',
      tech: ['Next.js', 'Python', 'OpenAI', 'Pinecone', 'PostgreSQL', 'Redis'],
      result: 'Processed 10K+ user requests/day with 95% satisfaction and 3x faster content creation.',
      image: '/case2.jpg',
    },
    {
      title: 'Smart Agriculture System',
      category: 'IoT + AI',
      description:
        'Created an edge ML system for crop health monitoring using computer vision on low-power devices.',
      tech: ['TensorFlow Lite', 'Raspberry Pi', 'AWS IoT', 'React Native', 'FastAPI'],
      result: 'Detected plant diseases 2 weeks earlier, increasing crop yield by 25%.',
      image: '/case3.jpg',
    },
  ];

  return (
    <section id="portfolio" className="bg-ui-muted-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
              Flagship Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
            Real products, real impact
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            We measure success by outcomes — faster launches, lower costs, happier users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <div className="aspect-video bg-gradient-to-br from-accent-3/20 to-accent-1/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ExternalLink size={32} className="text-accent-1" />
              </div>

              <div className="p-6">
                <span className="inline-block bg-accent-3/30 text-accent-1 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {caseStudy.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-1 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-muted mb-4 line-clamp-3">{caseStudy.description}</p>
                <button className="text-accent-1 font-semibold text-sm uppercase tracking-wide hover:text-accent-2 transition-colors flex items-center space-x-2">
                  <span>View case study</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCase && <CaseModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />}
    </section>
  );
}
