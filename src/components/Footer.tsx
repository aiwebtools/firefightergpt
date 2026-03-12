
import React from 'react';
import Logo from './Logo';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and about */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-300 mb-6 max-w-md">
              Elevate your firefighting strategy with Firefighter GPT. Harness the power of real-time 
              data and predictive analytics to effectively master and extinguish fires.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button text-sm inline-flex items-center gap-2"
              >
                Use Wildfire Firefighter GPT Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button text-sm inline-flex items-center gap-2 bg-gradient-to-r from-fire-600 to-flame-500"
              >
                Firefighter AI Command Center GPT
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-fire-400 transition-colors"
                >
                  Firefighter GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-fire-400 transition-colors"
                >
                  Firefighter AI Command Center GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-fire-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-fire-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-fire-400 transition-colors"
                >
                  More AI Tools
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-fire-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-fire-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-300 hover:text-fire-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-fire-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            {/* More AI Tools button */}
            <div className="mt-6">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full 
                          text-white font-medium transition-transform hover:scale-105"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-fire-400 transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-fire-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-fire-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
        
        {/* Small disclaimer notice */}
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-xs text-gray-500 text-center">
            For informational, educational, and research purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
