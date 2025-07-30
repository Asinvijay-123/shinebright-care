import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, IndianRupee } from 'lucide-react';
import quickShineIcon from '@/assets/quick-shine-icon.png';
import deepCleaningIcon from '@/assets/deep-cleaning-icon.png';
import rubbingPolishingIcon from '@/assets/rubbing-polishing-icon.png';
import windshieldPolishIcon from '@/assets/windshield-polish-icon.png';

interface Package {
  id: string;
  name: string;
  description: string;
  time: string;
  price: number;
  icon: string;
}

interface PackagesSectionProps {
  onBookNow?: (packageId: string) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onBookNow }) => {
  const packages: Package[] = [
    {
      id: 'quick-shine',
      name: 'QUICK SHINE',
      description: 'Keep your ride shining bright and rolling right with regular car cleaning!',
      time: 'Around 1hr',
      price: 349,
      icon: quickShineIcon,
    },
    {
      id: 'deep-cleaning',
      name: 'DEEP CLEANING',
      description: 'Revitalize your ride with a deep clean that\'ll make it shine like new!',
      time: 'Around 2-3hrs',
      price: 799,
      icon: deepCleaningIcon,
    },
    {
      id: 'rubbing-polishing',
      name: 'RUBBING & POLISHING',
      description: 'Elevate your drive with detailing that brings out the best in every detail.',
      time: 'Around 2-3hrs',
      price: 1399,
      icon: rubbingPolishingIcon,
    },
    {
      id: 'windshield-polish',
      name: 'WINDSHIELD POLISH',
      description: 'Clear the way to perfection with glass polishing that turns foggy into fabulous!',
      time: 'Around 2hrs',
      price: 799,
      icon: windshieldPolishIcon,
    },
  ];

  const handleBookNow = (packageId: string) => {
    if (onBookNow) {
      onBookNow(packageId);
    }
    // Fallback to WhatsApp
    const message = `Hello, I'm interested in the ${packages.find(p => p.id === packageId)?.name} package. Could you please provide more information?`;
    window.open(`https://api.whatsapp.com/send?phone=919509208599&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="packages" className="py-16 bg-surface-light">
      {/* Header */}
      <div className="bg-primary text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                OUR PACKAGES
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat">
                Packages for Every Ride//
              </h2>
            </div>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleBookNow('general')}
              className="bg-white text-primary hover:bg-gray-100 border-white font-bold"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Package Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="card-elevated p-6 hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={pkg.icon} 
                  alt={`${pkg.name} Icon`} 
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 font-montserrat">
                {pkg.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                {pkg.description}
              </p>

              {/* Time and Price */}
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>Time: {pkg.time}</span>
                </div>
                <div className="flex items-center text-lg font-bold text-primary">
                  <IndianRupee className="w-5 h-5 mr-1" />
                  <span>{pkg.price}/-</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="card" 
                  size="sm"
                  onClick={() => handleBookNow(pkg.id)}
                  className="flex-1"
                >
                  BOOK NOW
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleBookNow(pkg.id)}
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;