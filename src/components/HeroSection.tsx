import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <section 
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Text Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-shadow animate-bounce-gentle font-medium tracking-wide">
          // DOORSTEP CAR CLEANING SERVICES //
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shadow animate-bounce-gentle-delayed font-montserrat">
          CAR CARE
        </h1>
      </div>

      {/* Moving Car Animation */}
      <div className="absolute bottom-20 left-0 w-full pointer-events-none overflow-hidden">
        <div className="animate-drive-across">
          <svg 
            width="80" 
            height="40" 
            viewBox="0 0 120 60" 
            className="fill-white opacity-80"
          >
            {/* Simple car silhouette */}
            <path d="M20 40 L20 35 Q20 30 25 30 L35 30 Q40 25 45 25 L75 25 Q80 25 85 30 L95 30 Q100 30 100 35 L100 40 L95 40 Q95 45 90 45 Q85 45 85 40 L35 40 Q35 45 30 45 Q25 45 25 40 Z"/>
            <circle cx="30" cy="42" r="6" className="fill-gray-400"/>
            <circle cx="90" cy="42" r="6" className="fill-gray-400"/>
            <rect x="45" y="30" width="30" height="8" rx="2" className="fill-gray-600"/>
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;