
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, delay = 0 }) => {
  return (
    <div 
      className="border border-white/10 rounded-lg overflow-hidden animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left text-white hover:bg-white/5 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 w-5 h-5" /> : <ChevronDown className="flex-shrink-0 w-5 h-5" />}
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-white/5">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Firefighter GPT?",
      answer: "Firefighter GPT is an advanced AI tool designed to assist fire command in managing and combating wildfires and structural fires. It provides real-time data analysis, resource allocation recommendations, and tactical decision-making support based on scientific calculations and live data."
    },
    {
      question: "How does Firefighter GPT get its information?",
      answer: "Firefighter GPT conducts comprehensive web research to gather relevant data about active fires, weather conditions, terrain, vegetation types, and fuel loads from reliable sources. It only requires the location input from the user to begin its analysis."
    },
    {
      question: "Can Firefighter GPT help with all types of fires?",
      answer: "Yes, Firefighter GPT is equipped to handle various fire scenarios, including wildfires, forest fires, house fires, car fires, and other types of fire emergencies. It adapts its recommendations based on the specific type of fire and environment."
    },
    {
      question: "How accurate are the predictions and recommendations?",
      answer: "Firefighter GPT uses real-time data, scientific calculations, and advanced analytics to provide highly accurate predictions and recommendations. Its analysis is based on actual measurements, mathematical models, and fire science principles."
    },
    {
      question: "What kind of specific guidance does Firefighter GPT provide?",
      answer: "Firefighter GPT provides precise geo-coordinates for aerial drops, detailed resource requirements, backburning coordinates, containment strategies, and step-by-step tactical guidance. It also calculates the number of drops needed, timing recommendations, and considers factors like wind direction and speed."
    }
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-cyber-dark/80 to-cyber-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
            Questions & Answers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Firefighter GPT and how it can assist in fire management
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
