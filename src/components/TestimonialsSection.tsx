import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Geeta Kumari',
      content: 'If you want quality service for car detailing. Then Car Care is the one where they offer high-quality services, without stressing their budget at the same time.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      id: '2',
      name: 'Rahul Sherewala',
      content: 'The overall appearance of the vehicle after cleaning is very good. The attitude and professionalism of the staff is good.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            TESTIMONIAL
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat">
            WHAT CLIENTS SAY //
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <StarRating rating={testimonial.rating} />
              
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary mr-4"
                />
                <div>
                  <div className="font-semibold text-white">
                    - {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Join hundreds of satisfied customers who trust Car Care
          </p>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>4.9/5 Average Rating</span>
            <span>•</span>
            <span>500+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;