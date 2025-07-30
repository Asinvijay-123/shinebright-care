import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import carCareLogo from '@/assets/car-care-logo.png';

interface NavigationProps {
  onContactClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: 'Quick Shine', href: '#packages' },
    { name: 'Deep Cleaning', href: '#packages' },
    { name: 'Rubbing & Polishing', href: '#packages' },
    { name: 'Windshield Polish', href: '#packages' },
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    // You can also add WhatsApp link here as fallback
    window.open('https://api.whatsapp.com/send?phone=919509208599&text=Hello%2C%20I%27m%20interested%20in%20your%20car%20care%20services.%20Could%20you%20please%20provide%20more%20information%3F', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={carCareLogo} 
              alt="Car Care Logo" 
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white font-semibold hover:text-primary transition-colors duration-300"
            >
              HOME
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-white font-semibold hover:text-primary transition-colors duration-300">
                PACKAGES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={handleContactClick}
              className="text-white font-semibold hover:text-primary transition-colors duration-300"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-md transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <div className="text-white font-semibold mb-2">PACKAGES</div>
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block py-1 text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                handleContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;