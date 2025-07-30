import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PackagesSection from '@/components/PackagesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  // Use the uploaded background image for hero section
  const heroBackgroundImage = '/lovable-uploads/39e0d878-8ca6-4234-a1d1-a002250cf9eb.png';

  const handleContactClick = () => {
    // Handle contact functionality - could open a modal, navigate to contact form, etc.
    console.log('Contact clicked');
  };

  const handleBookNow = (packageId: string) => {
    // Handle booking functionality - could open booking modal, navigate to booking form, etc.
    console.log('Book now clicked for package:', packageId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <HeroSection backgroundImage={heroBackgroundImage} />
      
      {/* Packages Section */}
      <PackagesSection onBookNow={handleBookNow} />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer onContactClick={handleContactClick} />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
