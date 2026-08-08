import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from './content.js';

// Decorative blurred gradient blobs used behind page content for depth
export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="bg-blob w-96 h-96 -top-20 -left-20 bg-blue-600/25 animate-blob" />
      <div className="bg-blob w-96 h-96 top-1/3 -right-20 bg-purple-600/20 animate-blob" style={{ animationDelay: '4s' }} />
      <div className="bg-blob w-96 h-96 bottom-0 left-1/3 bg-cyan-500/15 animate-blob" style={{ animationDelay: '8s' }} />
    </div>
  );
}

// Floating scroll-to-top widget, appears once the user scrolls past the hero
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-strong shadow-glow-blue text-blue-300 hover:text-white hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

// Navigation bar with sticky positioning and CTA buttons
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong shadow-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 font-bold text-xl text-white hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">💻</span>
            <span className="text-gradient">Reynold</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-500/50 text-blue-300 rounded-lg hover:bg-blue-600/20 hover:border-blue-400 transition-all font-medium text-sm"
              >
                Resume
              </a>
            )}
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 bg-brand-gradient text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 font-medium text-sm hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4 animate-fade-in">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    active ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-3 px-4 py-2 border border-blue-500/50 text-blue-300 rounded-lg hover:bg-blue-600/20 transition-all font-medium"
              >
                Resume
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

// Footer component
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💻</span>
              <span className="font-bold text-white text-lg">Reynold Mashininga</span>
            </div>
            <p className="text-slate-400 text-sm">{personalInfo.bio}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-bold text-white mb-4">Experience</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/experience" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="/experience" className="hover:text-blue-400 transition-colors">Work Experience</a></li>
              <li><a href="/experience" className="hover:text-blue-400 transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: '📧', label: 'Email', url: `mailto:${personalInfo.email}` },
                { icon: '💬', label: 'WhatsApp', url: `https://wa.me/${personalInfo.whatsapp}` },
                { icon: '🐙', label: 'GitHub', url: personalInfo.github },
                { icon: '💼', label: 'LinkedIn', url: personalInfo.linkedin },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full glass text-slate-300 hover:text-white hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Designed & Built with React + Tailwind ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// CTA Button component (reusable)
export function CTAButton({ children, onClick, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-brand-gradient text-white hover:shadow-glow-blue',
    secondary: 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:shadow-glow-cyan',
    outline: 'glass border border-blue-500/40 text-blue-300 hover:text-white hover:border-blue-400 hover:bg-blue-600/10',
    // For use on top of a colored/gradient banner background
    white: 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-2xl',
    ghost: 'bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Icon Card component (used for skills, values, etc.)
export function IconCard({ icon, title, description }) {
  return (
    <div className="glass gradient-border rounded-xl p-6 hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="font-bold text-white mb-2 text-lg">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

// Project Card component
export function ProjectCard({ item, onViewDetails }) {
  return (
    <div className="glass gradient-border rounded-xl overflow-hidden hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
         onClick={() => onViewDetails(item)}>
      <div className="relative overflow-hidden h-48 bg-slate-700">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white font-bold px-4 py-1.5 rounded-full glass-strong text-sm">View Details</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2 gap-2">
          <h3 className="font-bold text-white">{item.title}</h3>
          <span className="text-xs bg-brand-gradient text-white px-3 py-1 rounded-full whitespace-nowrap">
            {item.category}
          </span>
        </div>
        <p className="text-slate-400 text-sm">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tools.slice(0, 3).map((tool, idx) => (
            <span key={idx} className="text-xs bg-white/5 border border-white/10 text-slate-300 px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


// Contact Form component
export function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', reason: '', message: '' });
  };

  const fieldClass = "w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 focus:bg-white/[0.07] transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={fieldClass}
      />
      <select
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        className={fieldClass}
      >
        <option value="">Reason for contacting (optional)</option>
        <option value="job-opportunity">Job Opportunity</option>
        <option value="internship">Internship</option>
        <option value="freelance">Freelance / Contract Work</option>
        <option value="other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
        className={`${fieldClass} resize-none`}
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-brand-gradient text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 font-bold hover:scale-[1.02]"
      >
        Send Message
      </button>
    </form>
  );
}

// Copy-to-clipboard button, shows a brief "Copied!" confirmation
export function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full glass border border-white/10 text-slate-300 hover:text-white hover:border-blue-400/50 transition-all duration-300"
    >
      <span>{copied ? '✓' : '📋'}</span>
      <span>{copied ? 'Copied!' : label}</span>
    </button>
  );
}

// Accordion item — click to expand/collapse
export function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <h4 className="font-bold text-white">{question}</h4>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-white/5 text-blue-300 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-slate-400 text-sm px-6 pb-5">{answer}</p>
        </div>
      </div>
    </div>
  );
}

// Section Container wrapper
export function Section({ children, className = '' }) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

// Section Heading
export function SectionHeading({ title, subtitle, center = true }) {
  return (
    <div className={center ? 'text-center mb-16' : 'mb-16'}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-slate-400">{subtitle}</p>}
    </div>
  );
}
