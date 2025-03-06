
import React from 'react';
import { FireExtinguisher } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withTagline = true, className = '' }) => {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 blur-sm bg-fire-500 rounded-full animate-pulse-glow"></div>
        <FireExtinguisher className="relative text-white w-8 h-8 md:w-10 md:h-10" />
      </div>
      <div>
        <h1 className={`font-bold ${sizeClasses[size]} fire-glow-text text-white`}>
          Firefighter GPT
        </h1>
        {withTagline && (
          <div className="text-[0.65rem] md:text-xs text-gray-300 font-medium">
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-fire-400 hover:text-fire-300 transition-colors">AiWebTools.Ai</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
