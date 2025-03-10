
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept }) => {
  const { toast } = useToast();
  
  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    onAccept();
    toast({
      title: "Welcome to Firefighter GPT",
      description: "Thank you for accepting our terms",
    });
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md p-1 rounded-xl bg-gradient-to-r from-fire-500 via-flame-500 to-fire-600 animate-pulse-glow">
        <div className="relative bg-background p-6 rounded-lg shadow-lg">
          <button 
            onClick={onAccept}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-xl font-bold mb-3 text-center bg-gradient-to-r from-fire-400 via-fire-500 to-flame-500 bg-clip-text text-transparent">
            IMPORTANT DISCLAIMER
          </h2>
          
          <div className="my-4 text-gray-300 text-sm space-y-2">
            <p>
              Firefighter GPT is provided for <span className="font-semibold text-white">educational, research, and informational purposes only</span>.
            </p>
            <p>
              It is <span className="font-semibold text-white">not intended to replace professional firefighting services</span> or emergency response protocols.
            </p>
            <p>
              In case of a real fire emergency, please contact your local emergency services immediately.
            </p>
          </div>
          
          <button
            onClick={handleAccept}
            className="w-full relative group overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 w-3 bg-gradient-to-r from-fire-500 to-flame-600 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative z-10 block py-3 font-bold text-center transition-colors duration-300 ease-out text-fire-500 group-hover:text-white">
              I AGREE
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
