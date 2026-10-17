import { useNavigate } from 'react-router-dom';
import { Section, SectionHeading, CTAButton } from '../components';
import { personalInfo, values } from '../content';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-grid py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About <span className="text-gradient">Me</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>
      </Section>

      {/* Profile Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass gradient-border rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Hello, I'm Reynold</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                I'm a web developer and graphic designer based in Zimbabwe, with a background in
                Information Technology. I enjoy building things end-to-end — from the visual design
                to the working code behind it.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                I've built several personal and academic projects covering full-stack web development,
                databases, and UI/UX design, and I'm looking for an opportunity to bring that same
                energy to a team.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether it's writing clean, maintainable code or designing something that communicates
                clearly, I care about doing the work well and learning from people around me.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="about-portrait">
              <img src="/portfolio-portrait.jpg" alt="Portrait of Reynold" />
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeading title="What I Believe In" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="flex gap-4 p-6 glass gradient-border rounded-xl hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
              <span className="text-4xl flex-shrink-0">{value.icon}</span>
              <div>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient shadow-glow-blue px-8 py-16 text-center space-y-6">
          <div className="bg-blob w-72 h-72 -top-10 -left-10 bg-white/10" />
          <div className="bg-blob w-72 h-72 -bottom-10 -right-10 bg-white/10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold text-white">Let's talk about opportunities</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              If my background sounds like a fit for your team, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton onClick={() => navigate('/contact')} variant="white" className="px-8 py-4 text-lg">
                Get In Touch
              </CTAButton>
              <CTAButton onClick={() => navigate('/projects')} variant="ghost" className="px-8 py-4 text-lg">
                View My Work
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
