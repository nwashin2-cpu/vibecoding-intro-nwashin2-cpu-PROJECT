import React from 'react';
import CheckIcon from './icons/CheckIcon';

const ProblemSolutionSection: React.FC = () => {
  const problems = [
    { title: "20% Annual Turnover", description: "Costs firms $200k - $500k per departure." },
    { title: "80% Leave in 5 Years", description: "A massive drain on talent and institutional knowledge." },
    { title: "Associate Burnout", description: "Driven by poor work-life balance and a lack of connection." },
  ];

  const solutions = [
    "Lower turnover costs and increase profitability.",
    "Build happier, more engaged teams.",
    "Develop a stronger, more diverse leadership pipeline.",
    "Make data-driven decisions on assignments and mentorship.",
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The Revolving Door of Legal Talent</h2>
          <p className="text-lg text-brand-steel max-w-3xl mx-auto">High associate attrition isn't just a line item; it's a critical business failure. We provide the intelligence to fix it.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="bg-red-50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-serif font-bold text-red-800 mb-6">Why Associates Leave</h3>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-md shadow-sm">
                  <p className="font-bold text-red-700">{item.title}</p>
                  <p className="text-brand-steel">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solution Side */}
          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-serif font-bold text-green-800 mb-6">How Our Platform Helps</h3>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-brand-green" />
                  </div>
                  <span className="ml-3 text-brand-steel text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
