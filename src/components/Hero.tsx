import React from 'react';
import { Star, Sparkles, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, SALON_IMAGES } from '../data/salonData';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FDF2F4]/60 to-[#FAF8F5]"
    >
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F3D3DC]/40 via-[#E5C378]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Pill / Trust Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D4AF37]/40 shadow-xs text-xs font-medium text-[#5B1425] mx-auto lg:mx-0">
              <span className="flex items-center gap-1 text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              </span>
              <span className="font-semibold text-stone-800">5.0 Google Rating</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-600">Batu Maung, Penang</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#5B1425] leading-[1.12]">
              BEAUTY THAT MAKES YOU FEEL EXTRAORDINARY
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A383D] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Your destination for beautiful nails, beauty treatments and self-care in Batu Maung, Penang.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onBookClick}
                id="hero-book-appointment-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#5B1425] to-[#7E1D36] hover:from-[#4A0E1C] hover:to-[#6A162B] text-white text-sm font-semibold tracking-widest uppercase rounded-full shadow-lg shadow-[#5B1425]/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 border border-[#D4AF37]/50"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={onServicesClick}
                id="hero-view-services-btn"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#FDF2F4] text-[#5B1425] text-sm font-semibold tracking-wider uppercase rounded-full shadow-xs hover:shadow-md transition-all duration-300 border border-[#D9C3B0] flex items-center justify-center gap-2"
              >
                <span>VIEW OUR SERVICES</span>
              </button>
            </div>

            {/* Key Salon Highlights */}
            <div className="pt-6 border-t border-[#EBDCCF] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#F3D3DC]/50 text-[#5B1425] mt-0.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#801B38]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Expert Care</h4>
                  <p className="text-[11px] text-stone-500">Fine nail & beauty artistry</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#F3D3DC]/50 text-[#5B1425] mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#801B38]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Batu Maung</h4>
                  <p className="text-[11px] text-stone-500">16-2, Lintang Batu Maung 2</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#F3D3DC]/50 text-[#5B1425] mt-0.5 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#801B38]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Daily Hours</h4>
                  <p className="text-[11px] text-stone-500">9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative champagne frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3D3DC]/50 to-[#5B1425]/10 blur-sm -z-10" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#D4AF37]/40 bg-white group">
                <img
                  src={SALON_IMAGES.hero}
                  alt="Golden Aura Nail & Beauty Salon Interior"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24181B]/80 via-transparent to-transparent opacity-80" />

                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#8A6D3B] font-semibold">
                        Golden Aura Experience
                      </p>
                      <h3 className="font-serif text-base font-semibold text-[#5B1425]">
                        Nails • Eyelash • Eyebrows • Facials
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 text-[11px] font-bold bg-[#FAF8F5] border border-[#D4AF37]/60 text-[#5B1425] rounded-full">
                        Penang
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-[#E8DCC4] items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5B1425] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-sm">
                  GA
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-stone-800">5.0 Star Rated Salon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
