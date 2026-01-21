import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeadForm, Section, SectionHeading } from '../components';
import { personalInfo } from '../content';

export function ContactPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Get plan from localStorage if user came from pricing page
  useState(() => {
    const plan = localStorage.getItem('selectedPlan');
    if (plan) {
      setSelectedPlan(JSON.parse(plan));
      localStorage.removeItem('selectedPlan');
    }
  }, []);

  const handleFormSubmit = (formData) => {
    // In a real application, you would send this to a backend service
    console.log('Form submitted:', formData);

    // Prepare email content
    const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Budget: ${formData.budget}
Message: ${formData.message}
    `.trim();

    // Create mailto link (fallback if no backend)
    const mailtoLink = `mailto:${personalInfo.email}?subject=New Portfolio Inquiry&body=${encodeURIComponent(emailContent)}`;

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      // Optionally open email client or redirect
      window.location.href = mailtoLink;
    }, 1500);
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your project? Let's connect and create something great together.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-white hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-blue-100 hover:text-white">
              {personalInfo.email}
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-8 text-white hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white"
            >
              Chat with me
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-8 text-white hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-purple-100">{personalInfo.location}</p>
            <p className="text-purple-100 text-sm mt-2">Local & Remote Clients</p>
          </div>
        </div>
      </Section>

      {/* Main Contact Form Section */}
      <Section className="bg-slate-800">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Send me a Message" center={true} />

          {submitted ? (
            <div className="bg-green-600/20 border border-green-600 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
              <p className="text-slate-300 mb-6">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  navigate('/');
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600">
              {selectedPlan && (
                <div className="mb-6 p-4 bg-blue-900 border border-blue-600 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    📋 Selected Plan: <span className="font-bold">{selectedPlan.name}</span>
                  </p>
                </div>
              )}
              <LeadForm onSubmit={handleFormSubmit} />
            </div>
          )}
        </div>
      </Section>

      {/* Social Links */}
      <Section>
        <SectionHeading title="Connect With Me" subtitle="Follow or connect on social media" />
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: '🐙', label: 'GitHub', url: personalInfo.github },
            { icon: '💼', label: 'LinkedIn', url: personalInfo.linkedin },
            { icon: '🎨', label: 'Behance', url: personalInfo.behance },
            { icon: '💬', label: 'WhatsApp', url: `https://wa.me/${personalInfo.whatsapp}` },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all transform hover:scale-105"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="font-semibold">{social.label}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-800">
        <SectionHeading title="Quick FAQ" subtitle="Common questions about working with me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'How quickly do you respond?',
              a: 'I aim to respond to all inquiries within 24 hours. For urgent matters, WhatsApp is usually faster.'
            },
            {
              q: 'Do you offer free consultations?',
              a: 'Yes! I offer a free 30-minute consultation to discuss your project, goals, and how I can help.'
            },
            {
              q: 'What\'s your typical project timeline?',
              a: 'Depends on complexity. Starter projects: 5-7 days. Larger projects: 3-4 weeks. We discuss timelines upfront.'
            },
            {
              q: 'Do you work with teams?',
              a: 'Yes! I can work directly with your team or collaborate with other agencies on larger projects.'
            },
            {
              q: 'Can you redesign my existing website?',
              a: 'Absolutely! I can audit, redesign, or rebuild your existing website to improve performance and conversions.'
            },
            {
              q: 'What\'s your revision policy?',
              a: 'Multiple revisions are included in the development process. I work until you\'re satisfied with the result.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-700 p-6 rounded-lg">
              <h4 className="font-bold text-white mb-2">{item.q}</h4>
              <p className="text-slate-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Let's get started!</h2>
          <p className="text-xl text-blue-100">
            Don't wait. Reach out now and let's discuss how I can help your business grow.
          </p>
        </div>
      </Section>
    </div>
  );
}
