import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const [email, setEmail] = useState('');

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    window.open('https://api.whatsapp.com/send?phone=919509208599&text=Hello%2C%20I%27m%20interested%20in%20your%20car%20care%20services.%20Could%20you%20please%20provide%20more%20information%3F', '_blank');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // You can add actual subscription logic here
  };

  const services = [
    { name: 'Quick Shine', href: '#packages' },
    { name: 'Deep Cleaning', href: '#packages' },
    { name: 'Rubbing & Polishing', href: '#packages' },
    { name: 'Windshield Polish', href: '#packages' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-montserrat mb-4">
              COMPANY //
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Need a special car cleaning service? We are happy to fulfill every request 
              in order to exceed your expectations.
            </p>
            
            {/* Contact Info */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold">Talk To Our Support</div>
                  <div className="text-lg font-bold text-primary">9509208599</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>3 K Shivpure Kota (Raj.),</p>
                  <p>near Saras Dairy Shivpura</p>
                  <p>Pincode: 324010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-montserrat mb-4">
              OUR SOLUTIONS //
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-montserrat mb-4">
              SUBSCRIBE NOW //
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Subscribe to our newsletter and be the first to know about exclusive deals, 
              new services, and car care tips.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  className="rounded-l-none px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright Car Care. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
              <span className="text-gray-600">/</span>
              <button 
                onClick={handleContactClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;