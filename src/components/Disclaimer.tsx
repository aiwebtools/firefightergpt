
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
            Important Information
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Legal <span className="text-gradient">Disclaimer</span>
          </h2>
        </div>
        
        <div className="glass-card p-6 md:p-8 rounded-lg max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-fire-500 flex-shrink-0" />
            <h3 className="text-xl font-bold text-white">Please Read Carefully</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Firefighter GPT is an AI-powered tool designed to provide informational support and guidance for fire management scenarios. While we strive to ensure the accuracy and reliability of all data and recommendations provided by Firefighter GPT, there are inherent limitations to any AI system.
            </p>
            
            <p>
              <strong className="text-white">Not a Replacement for Professional Judgment:</strong> Firefighter GPT should be used as a supplementary tool to assist trained fire management professionals. It is not intended to replace human judgment, expertise, or official protocols established by fire departments, emergency services, or relevant authorities.
            </p>
            
            <p>
              <strong className="text-white">Data Limitations:</strong> While Firefighter GPT accesses real-time data from various sources, there may be delays, inaccuracies, or gaps in the available information. Users should verify critical data through official channels when possible.
            </p>
            
            <p>
              <strong className="text-white">Emergency Situations:</strong> In any emergency situation, always contact local emergency services (e.g., 911 in the United States) immediately. Do not rely solely on Firefighter GPT for emergency response guidance.
            </p>
            
            <p>
              <strong className="text-white">No Liability:</strong> AI Web Tools LLC, its affiliates, partners, and developers assume no responsibility or liability for any decisions, actions, or outcomes resulting from the use of Firefighter GPT. By using this tool, you acknowledge and agree that you are solely responsible for any actions taken based on the information provided.
            </p>
            
            <p>
              <strong className="text-white">Training and Educational Context:</strong> Firefighter GPT may be used for training, educational, or planning purposes, but must be complemented with professional training and established protocols for actual fire management operations.
            </p>
            
            <p>
              <strong className="text-white">Continual Development:</strong> Firefighter GPT is continuously being developed and improved. While we strive for accuracy and reliability, the system may have limitations or make errors. Users should apply critical thinking and professional judgment when evaluating recommendations.
            </p>
            
            <p>
              By using Firefighter GPT, you acknowledge that you have read, understood, and agreed to this disclaimer. If you do not agree with these terms, please refrain from using the tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
