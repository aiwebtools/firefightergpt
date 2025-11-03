
import React from 'react';
import VideoEmbed from './VideoEmbed';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block animate-float">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
              AI Web Tools - Advanced Firefighting Technology
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in">
            <span className="block">Premier AI Web Tools for</span>
            <span className="text-gradient">Wildfire Management</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
            AI Web Tools presents cutting-edge artificial intelligence solutions for emergency response. 
            Harness the power of real-time data and predictive analytics to deliver precise,
            actionable guidance for effectively mastering and extinguishing fires.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: "400ms"
          }}>
            <a 
              href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button text-base sm:text-lg"
            >
              Use Wildfire Firefighter GPT Now
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button text-base sm:text-lg bg-gradient-to-r from-fire-600 to-flame-500"
            >
              Firefighter AI Command Center GPT
            </a>
            <a 
              href="#features" 
              className="px-6 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-lg 
                        transition-all duration-300 font-medium text-base sm:text-lg hover:bg-white/5"
            >
              Explore AI Tools
            </a>
          </div>
          
          {/* Add disclaimer below buttons */}
          <div className="mt-4 text-xs text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: "500ms"
          }}>
            <p>AI Web Tools LLC - For educational, research, and informational purposes only. Not intended to replace professional firefighting services or emergency response. Always contact local emergency services in case of fire.</p>
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="container mx-auto px-4 md:px-8 mt-8 mb-16 z-10">
        <div className="max-w-4xl mx-auto glass-card p-3 animate-fade-in" style={{
          animationDelay: "600ms"
        }}>
          <VideoEmbed videoId="kDu2SSP9Glw" title="Firefighter GPT Anthem - AI Web Tools" autoplay={true} muted={false} />
        </div>
      </div>
      
      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
