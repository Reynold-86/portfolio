import { useNavigate } from 'react-router-dom';
import { Section, SectionHeading, CTAButton } from '../components';
import { personalInfo, skills } from '../content';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>
      </Section>

      {/* Profile Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Hello, I'm Reynold</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                I'm a passionate web developer and graphic designer based in Zimbabwe, specializing in creating modern, 
                high-performance digital solutions for businesses of all sizes.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                With a background in Information Technology and hands-on experience building real-world projects, 
                I focus on creating solutions that don't just look good—they deliver measurable results for your business.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether you need a stunning portfolio website, a complex web application, or eye-catching graphic designs, 
                I bring creativity, technical expertise, and a commitment to excellence to every project.
              </p>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl">
              <span className="text-8xl">💻</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Journey Section */}
      <Section className="bg-slate-800">
        <SectionHeading title="My Journey" />
        <div className="space-y-8">
          {[
            {
              year: '2020',
              title: 'Started my tech journey',
              desc: 'Began learning web development and graphic design, eager to build something meaningful.'
            },
            {
              year: '2021',
              title: 'First real project',
              desc: 'Delivered a business website that increased client\'s leads by 45%. This validated my approach.'
            },
            {
              year: '2022',
              title: 'Expanded services',
              desc: 'Started offering graphic design services alongside web development, becoming a one-stop digital solution.'
            },
            {
              year: '2024',
              title: 'Helping businesses scale',
              desc: 'Now working with 50+ satisfied clients across different industries, focusing on conversion and results.'
            },
          ].map((milestone, idx) => (
            <div key={idx} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-blue-400">{milestone.year}</div>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-slate-400">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionHeading title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, idx) => (
                <li key={idx} className="text-slate-300 flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, idx) => (
                <li key={idx} className="text-slate-300 flex items-center">
                  <span className="text-purple-400 mr-2">▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">Tools & Platforms</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, idx) => (
                <li key={idx} className="text-slate-300 flex items-center">
                  <span className="text-pink-400 mr-2">▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-slate-800">
        <SectionHeading title="What I Believe In" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: '🎯', title: 'Results Matter', desc: 'Every project is measured by the impact it has on your business.' },
            { icon: '🤝', title: 'Collaboration', desc: 'Your vision + my expertise = amazing results. Let\'s work together.' },
            { icon: '⚡', title: 'Quality', desc: 'I never compromise on code quality, design, or user experience.' },
            { icon: '🚀', title: 'Innovation', desc: 'Staying updated with latest technologies and best practices.' },
            { icon: '💬', title: 'Communication', desc: 'Regular updates, transparency, and responsiveness throughout the project.' },
            { icon: '🌱', title: 'Growth', desc: 'Your success is my success. I\'m invested in your long-term growth.' },
          ].map((value, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="text-4xl flex-shrink-0">{value.icon}</span>
              <div>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section>
        <SectionHeading title="Achievements" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '25+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '3+', label: 'Years Experience' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-blue-100 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Let's create something amazing together</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Whether you have an idea, a rough concept, or need a complete solution, I'm ready to help bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              onClick={() => navigate('/contact')}
              className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50"
            >
              Start Your Project
            </CTAButton>
            <CTAButton
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 text-lg bg-blue-700 text-white hover:bg-blue-800"
            >
              View My Work
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
