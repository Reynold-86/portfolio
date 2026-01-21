import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from './content.js';

// Navigation bar with sticky positioning and CTA buttons
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = "Hi Reynold, I'm interested in your services. Can we discuss?";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`,
      '_blank'
    );
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 font-bold text-xl text-white hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">💻</span>
            <span>Reynold</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium text-sm flex items-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium text-sm"
            >
              Get Quote
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
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-800 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleWhatsApp}
              className="w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium"
            >
              💬 WhatsApp
            </button>
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
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
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
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Web Apps</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">📧 Email</a></li>
              <li><a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">💬 WhatsApp</a></li>
              <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">🐙 GitHub</a></li>
              <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">💼 LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
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
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-green-600 hover:bg-green-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Service Card component
export function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all transform hover:scale-105 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-white mb-2 text-lg">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

// Portfolio Card component
export function PortfolioCard({ item, onViewDetails }) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
         onClick={() => onViewDetails(item)}>
      <div className="relative overflow-hidden h-48 bg-slate-700">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-bold">View Details</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-white">{item.title}</h3>
          <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        <p className="text-slate-400 text-sm">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tools.slice(0, 3).map((tool, idx) => (
            <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pricing Card component
export function PricingCard({ plan, onSelect }) {
  return (
    <div className={`rounded-lg overflow-hidden transition-all transform hover:scale-105 ${
      plan.featured 
        ? 'bg-gradient-to-br from-blue-600 to-blue-700 ring-2 ring-blue-400 scale-105' 
        : 'bg-slate-800 border border-slate-700'
    }`}>
      <div className="p-8">
        {plan.featured && <div className="text-blue-200 text-xs font-bold mb-2">⭐ MOST POPULAR</div>}
        <h3 className={`font-bold text-2xl mb-2 ${plan.featured ? 'text-white' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-slate-400'}`}>
          {plan.description}
        </p>
        <div className="mb-6">
          <span className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-blue-400'}`}>
            {plan.startingPrice}
          </span>
          {plan.startingPrice !== "Let's Talk" && <span className={`text-sm ml-2 ${plan.featured ? 'text-blue-100' : 'text-slate-400'}`}>
            + VAT
          </span>}
        </div>
        <p className={`text-xs mb-6 ${plan.featured ? 'text-blue-100' : 'text-slate-400'}`}>
          ⏱️ Delivery: {plan.deliveryDays}
        </p>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className={`text-sm flex items-start ${plan.featured ? 'text-blue-50' : 'text-slate-300'}`}>
              <span className="mr-3">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onSelect(plan)}
          className={`w-full py-3 rounded-lg font-bold transition-all ${
            plan.featured
              ? 'bg-white text-blue-600 hover:bg-blue-50'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

// Testimonial Card component
export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-sm text-slate-400">{testimonial.business}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">⭐</span>
        ))}
      </div>
      <p className="text-slate-300 italic">"{testimonial.text}"</p>
    </div>
  );
}

// Lead Capture Form component
export function LeadForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', service: '', budget: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        <option value="">Select a Service</option>
        <option value="web-dev">Web Development</option>
        <option value="graphic-design">Graphic Design</option>
        <option value="both">Both Services</option>
      </select>
      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        <option value="">Select Budget Range</option>
        <option value="under-500">Under $500</option>
        <option value="500-1000">$500 - $1,000</option>
        <option value="1000-5000">$1,000 - $5,000</option>
        <option value="5000-plus">$5,000+</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
      >
        Send Message
      </button>
    </form>
  );
}

// Floating WhatsApp Button
export function FloatingWhatsAppButton() {
  const handleClick = () => {
    const message = "Hi Reynold, I'm interested in your services. Can we discuss?";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40 text-3xl"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp"
    >
      💬
    </button>
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
