import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Manicure');

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('#booking');
    // Focus the name field if available
    setTimeout(() => {
      const nameInput = document.getElementById('booking-name');
      if (nameInput) nameInput.focus();
    }, 400);
  };

  const handleServicesClick = () => {
    scrollToSection('#services');
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('#booking');
    setTimeout(() => {
      const dateInput = document.getElementById('booking-date');
      if (dateInput) dateInput.focus();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24181B] font-sans antialiased flex flex-col selection:bg-[#F3D3DC] selection:text-[#5B1425]">
      {/* Sticky Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onServicesClick={handleServicesClick}
        />

        {/* Small Trust Indicator (5.0 Google Rating) */}
        <TrustSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Showcase */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Portfolio & Atmosphere Gallery */}
        <GallerySection />

        {/* Booking Appointment Request Form */}
        <BookingSection preselectedService={selectedService} />

        {/* Contact, WhatsApp, & Location Section */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick CTA Bar (Call, WhatsApp, Book Now) */}
      <MobileStickyBar onBookClick={handleBookClick} />
    </div>
  );
}
