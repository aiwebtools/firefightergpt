
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-sm"
          >
            USE FIREFIGHTER GPT NOW
          </a>
          <a 
            href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-sm bg-gradient-to-r from-fire-600 to-flame-500"
          >
            COMMAND CENTER GPT
          </a>
          <a href="#faq" className="text-white hover:text-fire-400 transition-colors font-medium">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover:text-fire-400 transition-colors font-medium">
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-fire-400 transition-colors font-medium"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              USE FIREFIGHTER GPT NOW
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button text-center bg-gradient-to-r from-fire-600 to-flame-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMMAND CENTER GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-fire-400 transition-colors font-medium p-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-fire-400 transition-colors font-medium p-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-fire-400 transition-colors font-medium p-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
