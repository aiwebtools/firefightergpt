
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";
import FireAnimation from "../components/FireAnimation";
import DisclaimerPopup from "../components/DisclaimerPopup";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = "Firefighter GPT | Advanced AI Wildfire Management";
    
    // Check if user has already accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted') === 'true';
    if (!hasAcceptedDisclaimer) {
      setShowDisclaimer(true);
    }
    
    // Smooth scroll to section when URL has hash
    const { hash } = window.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Add scroll behavior
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      
      scrollElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
  };
  
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      {/* Animated Fire Background */}
      <FireAnimation />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
