
import React, { useEffect, useRef } from 'react';

const FireAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    
    // Create fire particles
    const createParticles = () => {
      // Clear existing particles
      const existingParticles = container.querySelectorAll('.fire-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('fire-particle');
        
        // Random positions and sizes
        const size = Math.random() * 8 + 2;
        const posX = Math.random() * containerWidth;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Color variations
        const hue = Math.floor(Math.random() * 60) + 10; // 10-70 hue for fire colors
        particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        particle.style.boxShadow = `0 0 ${size * 2}px ${size / 2}px hsl(${hue}, 100%, 50%, 0.7)`;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles periodically and on resize
    const intervalId = setInterval(createParticles, 15000);
    window.addEventListener('resize', createParticles);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <div className="fire-bg">
      <div ref={containerRef} className="fire-particles"></div>
    </div>
  );
};

export default FireAnimation;
