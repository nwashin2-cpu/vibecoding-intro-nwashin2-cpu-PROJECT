import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      console.log('Submitted:', { name, email });
      setSubmitted(true);
      setName('');
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    }
  };

  return (
    <section id="hero" className="relative bg-brand-navy text-white min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
       <div 
        className="absolute inset-0 opacity-10" 
        style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight mb-4">
          Ret<span className="text-brand-gold">AI</span>n Your Best Associates — Intelligently.
        </h1>
        <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-8">
          Leverage AI-driven personality analytics and conversational intelligence to build a thriving, resilient legal team.
        </p>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto shadow-2xl">
          {submitted ? (
            <div className="text-brand-green font-bold text-lg">
              Thank you! We've received your information.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:w-1/3 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-1/3 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
                aria-label="Your Email Address"
              />
              <button type="submit" className="w-full sm:w-auto bg-brand-green text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex-grow">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;