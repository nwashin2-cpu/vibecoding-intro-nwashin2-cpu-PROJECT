import React from 'react';
import AssessmentIcon from './icons/AssessmentIcon';
import MatchingIcon from './icons/MatchingIcon';
import AnalysisIcon from './icons/AnalysisIcon';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <AssessmentIcon />,
      title: '1. Assess',
      description: 'Go beyond resumes with evidence-based personality and competency testing to understand what truly drives your associates.',
    },
    {
      icon: <MatchingIcon />,
      title: '2. Assign',
      description: 'Our AI-driven engine matches associates with practice groups and partners where their personalities and skills will thrive.',
    },
    {
      icon: <AnalysisIcon />,
      title: '3. Analyze',
      description: 'Gain continuous, anonymized insights from conversational intelligence to proactively address morale and performance issues.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-brand-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">A Data-Driven Approach to Retention</h2>
          <p className="text-lg text-brand-steel max-w-3xl mx-auto">Our three-step process turns ambiguity into actionable insight.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center relative">
          {/* Dashed line connecting cards on larger screens */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line x1="15%" y1="1" x2="85%" y2="1" stroke="#A0AEC0" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg z-10 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center mb-6 h-16 w-16 mx-auto bg-brand-green/10 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-brand-steel">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
