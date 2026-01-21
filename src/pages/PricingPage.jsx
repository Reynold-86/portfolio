import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PricingCard, Section, SectionHeading } from '../components';
import { pricing, personalInfo } from '../content';

export function PricingPage() {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // Store selected plan in localStorage for contact form
    localStorage.setItem('selectedPlan', JSON.stringify(plan));
    navigate('/contact');
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Pricing & Packages</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent pricing for every budget. All prices are starting points and can be customized.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <SectionHeading title="Choose Your Plan" subtitle="Select the best option for your needs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricing.map(plan => (
            <PricingCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-slate-800">
        <SectionHeading title="Detailed Comparison" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-700">
              <tr>
                <th className="text-left px-4 py-3 text-white font-bold">Feature</th>
                <th className="text-center px-4 py-3 text-white font-bold">Starter</th>
                <th className="text-center px-4 py-3 text-white font-bold">Business</th>
                <th className="text-center px-4 py-3 text-white font-bold">Pro</th>
                <th className="text-center px-4 py-3 text-white font-bold">Custom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {[
                { feature: 'Number of Pages', starter: '5', business: '10', pro: 'Unlimited', custom: '✓' },
                { feature: 'Mobile Responsive', starter: '✓', business: '✓', pro: '✓', custom: '✓' },
                { feature: 'SEO Optimization', starter: 'Basic', business: 'Full', pro: 'Advanced', custom: '✓' },
                { feature: 'Contact Forms', starter: '1', business: 'Multiple', pro: 'Advanced', custom: '✓' },
                { feature: 'Blog/CMS', starter: '✗', business: '✓', pro: '✓', custom: '✓' },
                { feature: 'E-Commerce', starter: '✗', business: '✗', pro: '✓', custom: '✓' },
                { feature: 'Custom Features', starter: '✗', business: 'Limited', pro: '✓', custom: '✓' },
                { feature: 'Database Setup', starter: '✗', business: '✗', pro: '✓', custom: '✓' },
                { feature: 'Post-Launch Support', starter: '1 month', business: '3 months', pro: '6 months', custom: 'Ongoing' },
                { feature: 'Maintenance', starter: 'Basic', business: 'Standard', pro: 'Premium', custom: '✓' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800'}>
                  <td className="text-left px-4 py-3 text-white font-semibold">{row.feature}</td>
                  <td className="text-center px-4 py-3 text-slate-300">{row.starter}</td>
                  <td className="text-center px-4 py-3 text-slate-300">{row.business}</td>
                  <td className="text-center px-4 py-3 text-slate-300">{row.pro}</td>
                  <td className="text-center px-4 py-3 text-slate-300">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: 'Can I upgrade my plan later?',
              a: 'Absolutely! If you start with the Starter plan and need more features later, you can upgrade anytime.'
            },
            {
              q: 'Do you offer custom packages?',
              a: 'Yes! If none of the standard packages fit your needs, contact me to discuss a custom solution tailored to your requirements.'
            },
            {
              q: 'What\'s included in post-launch support?',
              a: 'Bug fixes, minor updates, performance optimization, and general maintenance depending on the plan level.'
            },
            {
              q: 'Do you offer revisions?',
              a: 'Yes! Multiple revisions are included during the development process to ensure you\'re happy with the final product.'
            },
            {
              q: 'What about hosting and domain?',
              a: 'Domain registration and hosting are separate. I can recommend affordable options or help you set up your existing ones.'
            },
            {
              q: 'What\'s your payment process?',
              a: '50% upfront to start, 50% upon completion. Flexible payment options available for larger projects.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg">
              <h3 className="font-bold text-white mb-3 text-lg">{item.q}</h3>
              <p className="text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Add-ons Section */}
      <Section className="bg-slate-800">
        <SectionHeading title="Popular Add-ons" subtitle="Enhance your project with these optional services" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🚀', name: 'Rush Delivery', desc: 'Get your project delivered 50% faster', price: '+$299' },
            { icon: '📊', name: 'Analytics Setup', desc: 'Google Analytics and conversion tracking', price: '+$99' },
            { icon: '📧', name: 'Email Integration', desc: 'Newsletter setup and automation', price: '+$199' },
            { icon: '🛡️', name: 'SSL Certificate', desc: '1-year SSL for secure HTTPS', price: '+$99' },
            { icon: '⚙️', name: 'API Integration', desc: 'Connect external services', price: '+$299' },
            { icon: '📱', name: 'Mobile App UI', desc: 'iOS/Android app design', price: '+$499' },
          ].map((addon, idx) => (
            <div key={idx} className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition-all">
              <div className="text-4xl mb-3">{addon.icon}</div>
              <h4 className="font-bold text-white mb-2">{addon.name}</h4>
              <p className="text-slate-400 text-sm mb-4">{addon.desc}</p>
              <div className="text-blue-400 font-bold">{addon.price}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Ready to get started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pick a plan and let's build something amazing. I'm here to answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-bold transition-all"
            >
              Get a Quote
            </button>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Hi Reynold, I'm interested in your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold transition-all"
            >
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
