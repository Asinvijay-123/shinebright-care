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
          <img 
            src="/lovable-uploads/2694da83-9a76-4cb1-a061-f7ce8c0c4ff6.png"
            alt="Moving Car"
            className="w-[720px] h-[360px] object-contain drop-shadow-2xl opacity-90"
          />
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