import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { getSalonOpenStatus } from '../utils/timeUtils';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getSalonOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => {
      setOpenStatus(getSalonOpenStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DCC4]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#F0E6D8]'
      }`}
    >
      {/* Top micro-bar with opening hours & phone */}
      <div className="bg-[#5B1425] text-[#FAF8F5] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-[#F3D3DC]">{openStatus.statusText}</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span className="hidden sm:inline text-stone-200">Daily 9:00 AM – 8:00 PM</span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="hidden md:inline text-stone-200 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4AF37]" /> Batu Maung, Penang
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
              title="Call Golden Aura"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group text-left"
          id="brand-logo-link"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#5B1425] to-[#7E1D36] flex items-center justify-center text-[#D4AF37] shadow-sm border border-[#D4AF37]/40 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-[#E5C378]" />
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#5B1425] leading-tight group-hover:text-[#7E1D36] transition-colors">
              GOLDEN AURA
            </span>
            <span className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium text-[#8A6D3B]">
              Nail & Beauty • Penang
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[#362128] hover:text-[#5B1425] text-sm font-medium tracking-wider uppercase transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider text-[#15803D] bg-[#DCFCE7] hover:bg-[#BBF7D0] rounded-full border border-[#86EFAC] transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>012-448 4866</span>
          </a>

          <button
            onClick={onBookClick}
            id="nav-book-btn"
            className="px-5 py-2.5 bg-gradient-to-r from-[#5B1425] to-[#7E1D36] hover:from-[#4A0E1C] hover:to-[#6A162B] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onBookClick}
            className="px-3.5 py-1.5 bg-[#5B1425] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-full"
          >
            BOOK NOW
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-[#5B1425] hover:bg-[#F3D3DC]/40 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DCC4] px-6 py-5 shadow-xl transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-[#362128] hover:text-[#5B1425] py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D4AF37]">✦</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold tracking-wide shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Us on WhatsApp
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-[#D4AF37] text-[#5B1425] rounded-xl text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Call {BUSINESS_INFO.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#5B1425] to-[#7E1D36] text-[#FAF8F5] rounded-xl text-sm font-semibold tracking-wider uppercase shadow-md"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
