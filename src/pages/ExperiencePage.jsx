import { useNavigate } from 'react-router-dom';
import { Section, SectionHeading, CTAButton } from '../components';
import { skillCategories, experience, education } from '../content';

const accentColor = {
  text: 'text-accent-light',
  pill: 'border-accent/30 hover:border-accent-light/60 hover:shadow-glow-sm',
};

export function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-grid py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Experience &amp; <span className="text-gradient">Skills</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My skill set, work history, and education
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeading title="Skills" subtitle="Across the areas I'm open to working in" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            return (
              <div key={group.category} className="glass gradient-border rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className={`text-lg font-bold ${accentColor.text} mb-4 flex items-center gap-2`}>
                  <span>{group.icon}</span>
                  <span>{group.category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium text-slate-200 bg-white/5 border rounded-full px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${accentColor.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Work Experience */}
      <Section>
        <SectionHeading title="Work Experience" />
        {experience.length > 0 ? (
          <div className="space-y-6 max-w-3xl mx-auto">
            {experience.map((job, idx) => (
              <div key={idx} className="glass gradient-border rounded-xl p-6 flex flex-col sm:flex-row gap-4 sm:gap-8 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
                <div className="flex-shrink-0 sm:w-32">
                  <div className="text-sm font-bold text-accent-light">{job.period}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                  <div className="text-slate-400 text-sm mb-2">{job.company}</div>
                  <p className="text-slate-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400 max-w-xl mx-auto glass rounded-xl p-8">
            <p>I'm early in my career and building my professional experience through personal and freelance projects — see my <button onClick={() => navigate('/projects')} className="text-accent-light hover:text-accent font-semibold">Projects page</button> for examples of my work.</p>
          </div>
        )}
      </Section>

      {/* Education */}
      <Section>
        <SectionHeading title="Education" />
        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="glass gradient-border rounded-xl p-6 flex flex-col sm:flex-row gap-4 sm:gap-8 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
              <div className="flex-shrink-0 sm:w-32">
                <div className="text-sm font-bold text-accent-light">{edu.period}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <div className="text-slate-400 text-sm mb-2">{edu.institution}</div>
                <p className="text-slate-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How I Work */}
      <Section>
        <SectionHeading title="How I Work" subtitle="My approach to a project" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '01', title: 'Understand', desc: 'Get clear on the goal, the users, and the constraints' },
            { num: '02', title: 'Design', desc: 'Sketch out the structure, wireframes, or mockups' },
            { num: '03', title: 'Build', desc: 'Write clean, tested code following best practices' },
            { num: '04', title: 'Review', desc: 'Test thoroughly, gather feedback, and refine' },
          ].map((step, idx) => (
            <div key={idx} className="text-center glass gradient-border rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-gradient mb-4">{step.num}</div>
              <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
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
            <h2 className="text-4xl font-bold text-white">Interested in working together?</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              I'd love to hear about the role and how I could contribute.
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
