
import React from 'react';
import { MapPin, Search, BarChart4, Target, ArrowRight } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center gap-6 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-fire-500 to-flame-500 
                      flex items-center justify-center shadow-fire text-white text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="mb-2 flex items-center justify-center md:justify-start gap-2">
          {icon}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <MapPin className="w-5 h-5 text-fire-400" />,
      title: "Location Input",
      description: "Provide the location of the wildfire or fire emergency situation. This is the only information Firefighter GPT needs from you to begin its analysis."
    },
    {
      number: 2,
      icon: <Search className="w-5 h-5 text-fire-400" />,
      title: "Data Collection",
      description: "The AI immediately gathers comprehensive real-time data, including fire locations, weather conditions, terrain information, and available resources."
    },
    {
      number: 3,
      icon: <BarChart4 className="w-5 h-5 text-fire-400" />,
      title: "Analysis & Calculation",
      description: "Using Python and scientific methodology, the system analyzes fire behavior, predicts spread patterns, and calculates optimal suppression strategies."
    },
    {
      number: 4,
      icon: <Target className="w-5 h-5 text-fire-400" />,
      title: "Strategic Guidance",
      description: "Receive precise geo-coordinates for air drops, detailed resource requirements, and step-by-step tactical guidance until the fire is fully extinguished."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-cyber-dark to-cyber-dark/80">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
            Process
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            How <span className="text-gradient">Firefighter GPT</span> Works
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            A streamlined process that turns minimal input into comprehensive firefighting guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step 
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 150}
              />
              {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-fire-500 rotate-90 md:rotate-0" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://chatgpt.com/g/g-9IxNOg9vY-firefighter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-base inline-flex items-center justify-center gap-2"
          >
            Use Wildfire Firefighter GPT Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://chatgpt.com/g/g-67dab29f4bb88191baf574b8fbb4cb0d-firefighter-ai-command-center-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button text-base inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fire-600 to-flame-500"
          >
            Firefighter AI Command Center GPT
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
