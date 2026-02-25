import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceCard, Section, SectionHeading, CTAButton } from '../components';
import { services } from '../content';

export function ServicesPage() {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState(null);

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Services & Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive web development and graphic design services tailored to your business needs
          </p>
        </div>
      </Section>

      {/* Web Development Services */}
      <Section>
        <SectionHeading
          title="🌐 Web Development"
          subtitle="Build your online presence with modern, responsive websites and web applications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services[0]?.items?.map((item, idx) => (
            <ServiceCard key={idx} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      {/* Graphic Design Services */}
      <Section className="bg-slate-800">
        <SectionHeading
          title="🎨 Graphic Design"
          subtitle="Creative visual solutions to make your brand unforgettable"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services[1]?.items?.map((item, idx) => (
            <ServiceCard key={idx} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <SectionHeading title="How I Work" subtitle="My proven process for delivering exceptional results" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '01', title: 'Discover', desc: 'Understand your goals, target audience, and requirements' },
            { num: '02', title: 'Design', desc: 'Create mockups, wireframes, and get your approval' },
            { num: '03', title: 'Develop', desc: 'Build with clean code, best practices, and modern tools' },
            { num: '04', title: 'Launch', desc: 'Deploy, test thoroughly, and ensure everything runs smoothly' },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">{step.num}</div>
              <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology Stack */}
      <Section className="bg-slate-800">
        <SectionHeading title="Technology & Tools" subtitle="Cutting-edge tech to build your future" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { category: 'Frontend', tools: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
            { category: 'Backend', tools: ['Python', 'Django', 'PHP', 'Node.js'] },
            { category: 'Database', tools: ['MySQL', 'PostgreSQL', 'MongoDB'] },
            { category: 'Design', tools: ['Figma', 'Photoshop', 'Illustrator', 'Adobe XD'] },
          ].map((tech, idx) => (
            <div key={idx} className="bg-slate-700 p-6 rounded-lg">
              <h4 className="font-bold text-blue-400 mb-4">{tech.category}</h4>
              <ul className="space-y-2">
                {tech.tools.map((tool, tidx) => (
                  <li key={tidx} className="text-slate-300 text-sm flex items-center">
                    <span className="mr-2">→</span> {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Me */}
      <Section>
        <SectionHeading title="Why Choose Me?" subtitle="What sets me apart" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: '⚡', title: 'Fast Delivery', desc: 'Quality work delivered on time, every time' },
            { icon: '💰', title: 'Affordable Pricing', desc: 'Professional quality without breaking the bank' },
            { icon: '📱', title: 'Mobile-First', desc: 'Every project optimized for all devices' },
            { icon: '🔒', title: 'Secure & Reliable', desc: 'Best practices for security and performance' },
            { icon: '🎯', title: 'Results-Focused', desc: 'Every solution designed to drive business growth' },
            { icon: '💬', title: 'Great Communication', desc: 'Regular updates and transparent collaboration' },
          ].map((feature, idx) => (
            <div key={idx} className="flex space-x-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all">
              <div className="text-4xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Let's discuss your project</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to get started? Let's talk about how I can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-bold transition-all"
            >
              Get a Free Consultation
            </button>

          </div>
        </div>
      </Section>
    </div>
  );
}
