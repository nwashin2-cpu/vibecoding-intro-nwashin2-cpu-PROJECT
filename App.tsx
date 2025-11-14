import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import VisionSection from './components/VisionSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-ivory text-brand-steel font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <VisionSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
