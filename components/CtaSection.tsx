import React, { useState } from 'react';

const CtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('CTA Submitted:', { email });
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    }
  };

  return (
    <section id="cta" className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Build a More Resilient Firm?
          </h2>
          <p className="text-lg text-brand-gray mb-8">
            Be the first to see how AssociateInsight AI can transform your retention strategy. Join our waitlist for exclusive updates and early demo access.
          </p>
          {submitted ? (
             <div className="text-brand-green font-bold text-lg p-4 bg-white/10 rounded-lg">
              Thank you for your interest! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
                aria-label="Enter your email"
              />
              <button type="submit" className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
