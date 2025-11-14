import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#problem', label: 'The Problem' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#vision', label: 'Our Vision' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold text-brand-navy">
            AssociateInsight AI
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-steel hover:text-brand-navy transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#cta" className="bg-brand-green text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              Join Waitlist
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy focus:outline-none">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="px-4 pt-2 pb-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-brand-steel hover:text-brand-navy block">
              {link.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setIsOpen(false)} className="bg-brand-green text-white text-center font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
