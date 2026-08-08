import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard, Section, CTAButton } from '../components';
import { projects } from '../content';

export function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Web Development', 'Graphic Design'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-grid py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white"><span className="text-gradient">Projects</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A selection of things I've built and designed
          </p>
        </div>
      </Section>

      {/* Filter Section */}
      <Section>
        <div className="flex justify-center gap-3 mb-12 flex-wrap glass rounded-full p-2 w-fit mx-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-gradient text-white shadow-glow-blue'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(item => (
            <ProjectCard
              key={item.id}
              item={item}
              onViewDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </Section>

      {/* Modal/Detailed View */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="glass-strong rounded-2xl max-w-3xl w-full my-8 shadow-glass animate-fade-in">
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full glass text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-1">Category</h3>
                <p className="text-white">{selectedItem.category}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">Description</h3>
                <p className="text-slate-300">{selectedItem.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">The Problem</h3>
                <p className="text-slate-300">{selectedItem.problem}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">My Solution</h3>
                <p className="text-slate-300">{selectedItem.solution}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600/15 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                {selectedItem.link && selectedItem.link !== '#' && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-brand-gradient text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 font-bold text-center"
                  >
                    View Live
                  </a>
                )}
                {selectedItem.github && selectedItem.github !== '#' && (
                  <a
                    href={selectedItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 glass border border-white/10 text-white rounded-lg hover:border-white/30 transition-all font-bold text-center"
                  >
                    View Code
                  </a>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 glass border border-white/10 text-white rounded-lg hover:border-white/30 transition-all font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient shadow-glow-blue px-8 py-16 text-center space-y-6">
          <div className="bg-blob w-72 h-72 -top-10 -left-10 bg-white/10" />
          <div className="bg-blob w-72 h-72 -bottom-10 -right-10 bg-white/10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold text-white">Like what you see?</h2>
            <p className="text-xl text-blue-50">
              Let's talk about how I could bring this kind of work to your team.
            </p>
            <CTAButton onClick={() => navigate('/contact')} variant="white" className="px-8 py-4 text-lg">
              Get In Touch
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
