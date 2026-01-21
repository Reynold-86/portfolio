import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioCard, Section, SectionHeading, CTAButton } from '../components';
import { portfolio } from '../content';

export function PortfolioPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Web Development', 'Graphic Design'];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Check out my recent projects and see the quality I deliver
          </p>
        </div>
      </Section>

      {/* Filter Section */}
      <Section>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map(item => (
            <PortfolioCard
              key={item.id}
              item={item}
              onViewDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </Section>

      {/* Modal/Detailed View */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-slate-800 rounded-lg max-w-3xl w-full my-8 shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-white text-2xl"
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
                <h3 className="text-sm font-semibold text-blue-400 mb-2">The Challenge</h3>
                <p className="text-slate-300">{selectedItem.problem}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">The Solution</h3>
                <p className="text-slate-300">{selectedItem.solution}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">Results</h3>
                <p className="text-slate-300 text-lg font-semibold text-green-400">
                  ✓ {selectedItem.result}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
                >
                  Request Something Similar
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <Section className="bg-slate-800">
        <SectionHeading title="By The Numbers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: '25+', label: 'Projects Delivered' },
            { number: '50+', label: 'Satisfied Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-blue-400">{stat.number}</div>
              <div className="text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Impressed? Let's work together</h2>
          <p className="text-xl text-blue-100">
            See something you like? Get in touch to discuss your project.
          </p>
          <CTAButton
            onClick={() => navigate('/contact')}
            className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50"
          >
            Start Your Project
          </CTAButton>
        </div>
      </Section>
    </div>
  );
}
