import { useNavigate } from 'react-router-dom';
import { CTAButton, Section, SectionHeading } from '../components';
import { trustMarkers, stats } from '../content';

export function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              I build websites and designs that help <span className="text-blue-400">businesses grow</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Fast, affordable, and modern digital solutions for startups, SMEs, and entrepreneurs in Zimbabwe and beyond.
            </p>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {trustMarkers.map((marker, idx) => (
              <span key={idx} className="flex items-center space-x-1">
                <span>✓</span>
                <span>{marker}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton onClick={handleGetStarted} variant="primary" className="px-8 py-4 text-lg">
              Get a Quote
            </CTAButton>
            <CTAButton onClick={handleViewWork} variant="outline" className="px-8 py-4 text-lg">
              View My Work
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Services Preview */}
      <Section>
        <SectionHeading
          title="What I Do"
          subtitle="Expert services to elevate your digital presence"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="text-2xl font-bold text-white">Web Development</h3>
            <p className="text-slate-300">
              Beautiful, responsive websites and web applications built with modern technology. From simple business sites to complex custom apps.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="text-blue-300 hover:text-blue-200 font-semibold mt-4"
            >
              Learn More →
            </button>
          </div>
          <div className="space-y-4 p-8 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
            <p className="text-slate-300">
              Professional branding, logos, social media graphics, and UI designs that make your business stand out and communicate effectively.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="text-purple-300 hover:text-purple-200 font-semibold mt-4"
            >
              Learn More →
            </button>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-slate-800">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real solutions for real businesses"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                <span className="text-5xl">📱</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 font-semibold mb-2">Featured Project</div>
                <h4 className="font-bold text-white mb-2">Project {item}</h4>
                <p className="text-slate-400 text-sm mb-4">Professional solution delivering real business results.</p>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton onClick={() => navigate('/portfolio')} variant="secondary">
            View All Projects
          </CTAButton>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton onClick={handleGetStarted} className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
