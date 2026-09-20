import React from 'react';
import { Sparkles, Heart, Compass, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SALON_IMAGES } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Imagery Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md">
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/30 bg-white">
                <img
                  src={SALON_IMAGES.salonInterior}
                  alt="Golden Aura Nail & Beauty Salon Ambiance"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset Overlapping Detail Image */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
                <img
                  src={SALON_IMAGES.nailArt}
                  alt="Detailed Nail Art at Golden Aura"
                  className="w-full h-44 sm:h-52 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gold Accent badge */}
              <div className="absolute -top-4 -left-4 bg-[#5B1425] text-[#FAF8F5] p-3 rounded-xl shadow-lg border border-[#D4AF37]/40 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-serif tracking-wider">Batu Maung • Penang</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Core Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6D3B]">
                Welcome To Golden Aura
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425] leading-tight">
                {BUSINESS_INFO.aboutTitle}
              </h2>
            </div>

            {/* Exact Required Copy */}
            <p className="text-base sm:text-lg text-[#3E2D33] leading-relaxed font-normal">
              {BUSINESS_INFO.aboutDescription}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E8DCC4] space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#5B1425]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-serif font-bold text-base text-[#5B1425]">Thoughtful Attention</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Careful detailing dedicated to nail health, styling, and soothing personal care.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DCC4] space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#5B1425]">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-serif font-bold text-base text-[#5B1425]">Relaxing Setting</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A comfortable, peaceful environment for your regular self-care rituals in Batu Maung.
                </p>
              </div>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-stone-600">
              <span className="font-semibold text-stone-900">Appointment & Enquiries:</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="font-bold text-[#5B1425] hover:text-[#D4AF37] transition-colors"
              >
                012-448 4866
              </a>
              <span className="text-stone-300">•</span>
              <span>16-2, Lintang Batu Maung 2, Penang</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
