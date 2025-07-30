import React, { useEffect, useState } from 'react';
import whyChooseUsCar from '@/assets/why-choose-us-car.png';

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold text-sm uppercase tracking-wide">
          {label}
        </span>
        <span className="text-white font-bold">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${whyChooseUsCar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Container (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={whyChooseUsCar} 
                alt="Professional Car Cleaning" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <div className="mb-8">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                CAR CARE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-shadow">
                WHY CHOOSE US//
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed text-shadow-light">
                CAR CARE provides professional car cleaning services at your doorstep whenever you want, 
                so you can spend your time doing the things you love.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              <ProgressBar 
                label="QUALITY SERVICES" 
                percentage={90} 
                delay={200}
              />
              <ProgressBar 
                label="EXPERIENCED TECHNICIANS" 
                percentage={85} 
                delay={400}
              />
              <ProgressBar 
                label="CUSTOMER SATISFACTION" 
                percentage={95} 
                delay={600}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-600">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;