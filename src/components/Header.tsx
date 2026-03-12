
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-cyber-dark/95 backdrop-blur-md py-2'
          : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Logo size="sm" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5">
          <a 
            href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-xs lg:text-sm px-3 lg:px-5 py-2"
          >
            Use Wildfire Firefighter GPT Now
          </a>
          <a 
            href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-xs lg:text-sm px-3 lg:px-5 py-2 bg-gradient-to-r from-fire-600 to-flame-500"
          >
            Firefighter AI Command Center GPT
          </a>
          <a href="#faq" className="text-white hover:text-fire-400 transition-colors font-medium text-sm">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover:text-fire-400 transition-colors font-medium text-sm">
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-fire-400 transition-colors font-medium text-sm"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 -mr-2 touch-manipulation active:scale-95 transition-transform" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[calc(100%)] bg-cyber-dark/98 backdrop-blur-lg transition-all duration-200 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ height: 'calc(100dvh - 56px)' }}
      >
        <nav className="flex flex-col gap-3 p-5 overflow-y-auto h-full">
          <a 
            href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-center text-sm py-3"
            onClick={closeMenu}
          >
            Use Wildfire Firefighter GPT Now
          </a>
          <a 
            href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-center text-sm py-3 bg-gradient-to-r from-fire-600 to-flame-500"
            onClick={closeMenu}
          >
            Firefighter AI Command Center GPT
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-fire-400 transition-colors font-medium py-3 text-center text-base border-b border-white/10"
            onClick={closeMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-fire-400 transition-colors font-medium py-3 text-center text-base border-b border-white/10"
            onClick={closeMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-fire-400 transition-colors font-medium py-3 text-center text-base"
            onClick={closeMenu}
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
