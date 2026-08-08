import { useNavigate } from 'react-router-dom';
import { CTAButton, Section, SectionHeading } from '../components';
import { strengths, projects, personalInfo, targetRoles } from '../content';

const whatIDo = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Building responsive websites and web applications with React, Python/Django, and PHP.',
    tint: 'from-blue-500/20 to-blue-500/5',
    ring: 'group-hover:shadow-glow-blue',
    link: 'text-blue-300 hover:text-blue-200',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Designing branding, UI mockups, and social media graphics that communicate clearly.',
    tint: 'from-purple-500/20 to-purple-500/5',
    ring: 'group-hover:shadow-glow-purple',
    link: 'text-purple-300 hover:text-purple-200',
  },
  {
    icon: '🖥️',
    title: 'IT Support',
    desc: 'Troubleshooting hardware and software issues, managing networks, and keeping systems running.',
    tint: 'from-teal-500/20 to-teal-500/5',
    ring: 'group-hover:shadow-glow-cyan',
    link: 'text-teal-300 hover:text-teal-200',
  },
  {
    icon: '📈',
    title: 'Sales & Marketing',
    desc: 'Building customer relationships, running digital campaigns, and turning leads into results.',
    tint: 'from-amber-500/20 to-amber-500/5',
    ring: 'group-hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)]',
    link: 'text-amber-300 hover:text-amber-200',
  },
];

const roleAccents = ['border-blue-500/40 text-blue-300', 'border-purple-500/40 text-purple-300', 'border-teal-500/40 text-teal-300', 'border-amber-500/40 text-amber-300'];

export function HomePage() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/projects');
  };

  const featured = projects.slice(0, 3);

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-grid py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-gradient">Reynold</span>
            </h1>

            {/* Target Roles */}
            <div className="flex flex-wrap justify-center gap-3">
              {targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-1.5 glass border rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-glow-sm transition-all duration-300 ${roleAccents[idx % roleAccents.length]}`}
                >
                  {role}
                </span>
              ))}
            </div>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-blue-300 font-medium">{personalInfo.tagline}</p>
          </div>

          {/* Strengths */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {strengths.map((item, idx) => (
              <span key={idx} className="flex items-center space-x-1">
                <span className="text-emerald-400">✓</span>
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton onClick={handleViewWork} variant="primary" className="px-8 py-4 text-lg">
              View My Work
            </CTAButton>
            <CTAButton onClick={handleContact} variant="outline" className="px-8 py-4 text-lg">
              Get In Touch
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section>
        <SectionHeading
          title="What I Do"
          subtitle="The areas I bring skills and experience to"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatIDo.map((item, idx) => (
            <div
              key={idx}
              className={`group space-y-4 p-8 rounded-xl glass gradient-border bg-gradient-to-br ${item.tint} transition-all duration-300 hover:-translate-y-1 ${item.ring}`}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
              <button
                onClick={() => navigate('/experience')}
                className={`${item.link} font-semibold mt-4 inline-flex items-center gap-1`}
              >
                See My Skills <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <SectionHeading
          title="Featured Projects"
          subtitle="A few things I've built"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="glass gradient-border rounded-xl overflow-hidden hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onClick={() => navigate('/projects')}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 font-semibold mb-2">{project.category}</div>
                <h4 className="font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <span className="text-blue-400 group-hover:text-blue-300 font-semibold inline-flex items-center gap-1">
                  View Details <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton onClick={() => navigate('/projects')} variant="secondary">
            View All Projects
          </CTAButton>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient shadow-glow-blue px-8 py-16 text-center space-y-6">
          <div className="bg-blob w-72 h-72 -top-10 -left-10 bg-white/10" />
          <div className="bg-blob w-72 h-72 -bottom-10 -right-10 bg-white/10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's work together
            </h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              I'm open to new opportunities. Reach out and let's talk about how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton onClick={handleContact} variant="white" className="px-8 py-4 text-lg">
                Get In Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
