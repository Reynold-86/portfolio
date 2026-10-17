import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactForm, Section, SectionHeading, CopyButton, AccordionItem } from '../components';
import { personalInfo } from '../content';

const faqs = [
  {
    q: 'How quickly do you respond?',
    a: 'I aim to respond to all messages within 24 hours.'
  },
  {
    q: 'Are you open to relocation?',
    a: "Yes, I'm open to discussing remote, hybrid, or relocation opportunities depending on the role."
  },
  {
    q: 'Are you available for internships?',
    a: "Yes! I'm open to internships as well as full-time and contract roles."
  },
  {
    q: 'Can I see more of your work?',
    a: 'Absolutely — check out the Projects page, or reach out and I can share more examples directly.'
  },
];

export function ContactPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleFormSubmit = (formData) => {
    // In a real application, you would send this to a backend service
    console.log('Form submitted:', formData);

    const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Reason: ${formData.reason || 'Not specified'}
Message: ${formData.message}
    `.trim();

    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact&body=${encodeURIComponent(emailContent)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1500);
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-grid py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have an opportunity in mind? I'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Contact Info Cards */}
          <div className="glass gradient-border rounded-xl p-8 hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-accent-light hover:text-white break-all">
              {personalInfo.email}
            </a>
            <div className="mt-3">
              <CopyButton value={personalInfo.email} label="Copy email" />
            </div>
          </div>

          <div className="glass gradient-border rounded-xl p-8 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <a href={`tel:${personalInfo.phone}`} className="text-accent-light hover:text-white">
              {personalInfo.phone}
            </a>
            <div className="mt-3">
              <CopyButton value={personalInfo.phone} label="Copy number" />
            </div>
          </div>

          <div className="glass gradient-border rounded-xl p-8 hover:-translate-y-1 hover:shadow-glow-purple transition-all duration-300">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-white"
            >
              Connect with me
            </a>
          </div>

          <div className="glass gradient-border rounded-xl p-8 hover:-translate-y-1 hover:shadow-glow-cyan transition-all duration-300">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-slate-300">{personalInfo.location}</p>
            <p className="text-slate-400 text-sm mt-2">Open to remote & relocation</p>
          </div>
        </div>
      </Section>

      {/* Main Contact Form Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Send me a Message" center={true} />

          {submitted ? (
            <div className="glass border border-accent/30 rounded-xl p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-accent mb-2">Message Sent!</h3>
              <p className="text-slate-300 mb-6">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  navigate('/');
                }}
                className="px-6 py-2 bg-accent-dark text-white rounded-lg hover:bg-accent transition-all"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <div className="glass gradient-border p-8 rounded-xl">
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          )}
        </div>
      </Section>

      {/* Social Links */}
      <Section>
        <SectionHeading title="Connect With Me" subtitle="Find me on other platforms" />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: '💼', label: 'LinkedIn', url: personalInfo.linkedin },
            { icon: '🐙', label: 'GitHub', url: personalInfo.github },
            { icon: '🎨', label: 'Behance', url: personalInfo.behance },
            { icon: '💬', label: 'WhatsApp', url: `https://wa.me/${personalInfo.whatsapp}` },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass gradient-border text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-sm"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="font-semibold">{social.label}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeading title="Quick FAQ" subtitle="Common questions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
