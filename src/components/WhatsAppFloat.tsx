import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ 
  phoneNumber = '919509208599',
  message = "Hello, I'm interested in your car care services. Could you please provide more information?"
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
      <Button
        onClick={handleWhatsAppClick}
        variant="whatsapp"
        size="lg"
        className="float-whatsapp shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="hidden sm:inline ml-2 font-semibold">Contact Us</span>
      </Button>
      
      {/* Mobile Bottom Center */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
        <Button
          onClick={handleWhatsAppClick}
          variant="whatsapp"
          className="px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="font-semibold">Contact Us</span>
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;