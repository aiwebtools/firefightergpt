
import React from 'react';
import { Flame, Wind, Map, BarChart, Clock, Target, FileText, CheckSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="glass-card p-6 rounded-lg flex flex-col items-center text-center animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-fire-500 to-flame-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Flame className="w-7 h-7 text-white" />,
      title: "AI-Powered Fire Analysis",
      description: "Advanced AI web tools for accurate assessment of active wildfires using real-time data from reliable sources to determine fire behavior patterns."
    },
    {
      icon: <Wind className="w-7 h-7 text-white" />,
      title: "Smart Weather Integration",
      description: "AI tools that incorporate current weather conditions including wind speed, direction, humidity, and forecasts for precise fire management."
    },
    {
      icon: <Map className="w-7 h-7 text-white" />,
      title: "Intelligent Terrain Analysis",
      description: "AI web tools that evaluate geographical features, vegetation types, and fuel loads to predict fire spread and identify critical intervention points."
    },
    {
      icon: <BarChart className="w-7 h-7 text-white" />,
      title: "AI Resource Calculator",
      description: "Advanced AI tools that determine exact resources needed for successful fire suppression based on fire size, intensity, and environmental factors."
    },
    {
      icon: <Target className="w-7 h-7 text-white" />,
      title: "Precision AI Coordinates",
      description: "AI web tools providing exact geographical coordinates for optimal fire suppression efforts, backed by scientific data and AI calculations."
    },
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: "AI-Generated Reports",
      description: "Comprehensive AI tools that deliver detailed analysis reports on active fires, weather conditions, and recommended intervention strategies."
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: "Proactive AI Guidance",
      description: "AI web tools that continuously provide next actionable steps to guide firefighters through the complete fire suppression process."
    },
    {
      icon: <CheckSquare className="w-7 h-7 text-white" />,
      title: "AI Strategy Optimization",
      description: "Smart AI tools that recommend best firefighting practices and techniques based on specific fire scenarios and available resources."
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
            AI Web Tools Capabilities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Advanced AI Web Tools for <span className="text-gradient">Firefighting Intelligence</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            AI Web Tools combines cutting-edge artificial intelligence technology with real-time data analysis 
            to provide precise, actionable guidance for wildfire management through our advanced AI tools suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
