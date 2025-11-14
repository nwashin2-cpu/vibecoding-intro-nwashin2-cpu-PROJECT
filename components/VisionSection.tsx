import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
            Our Vision: Empathy, Data, and Innovation
          </h2>
          <p className="text-lg text-brand-steel mb-8 leading-relaxed">
            We believe the future of the legal profession depends on nurturing its most valuable asset: its people. Our mission is to combine the empathy of human connection with the power of data to create law firms where every associate can build a fulfilling, long-term career.
          </p>
          <div className="bg-brand-ivory p-6 rounded-lg border-l-4 border-brand-gold text-left">
            <p className="font-serif italic text-xl text-brand-steel">
              "As former associates, we experienced the communication gaps and cultural drift that lead to burnout. We're building the platform we wish we had — one that empowers both associates and firms to succeed together."
            </p>
            <p className="mt-4 font-bold text-brand-navy">- The Founding Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
