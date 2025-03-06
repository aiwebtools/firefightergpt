
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating, delay = 0 }) => {
  return (
    <div 
      className="glass-card p-6 rounded-lg animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            className={`w-5 h-5 ${index < rating ? 'text-fire-400 fill-fire-400' : 'text-gray-500'}`} 
          />
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">"{quote}"</p>
      <div>
        <h4 className="font-semibold text-white">{author}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Firefighter GPT completely transformed our approach to wildfire management. The precise geo-coordinates and resource calculations were instrumental in our containment efforts.",
      author: "Chief Michael Torres",
      role: "Fire Department Commander",
      rating: 5
    },
    {
      quote: "The real-time data analysis and tactical recommendations provided by Firefighter GPT allowed us to make informed decisions that saved valuable time and resources.",
      author: "Sarah Johnson",
      role: "Emergency Response Coordinator",
      rating: 5
    },
    {
      quote: "During a recent forest fire, Firefighter GPT's predictions on fire spread direction were remarkably accurate, helping us deploy resources exactly where they were needed most.",
      author: "David Ramirez",
      role: "Wildland Firefighter",
      rating: 4
    },
    {
      quote: "As someone responsible for coordinating multiple firefighting teams, the strategic guidance from Firefighter GPT has been invaluable for optimizing our response efforts.",
      author: "Captain Lisa Morgan",
      role: "Regional Fire Control",
      rating: 5
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-fire-600 rounded-full">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            What Fire Professionals <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Hear from fire management professionals who have experienced the power of Firefighter GPT in real-world scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
