import React from 'react';
import { Sparkles, Heart, Flower2, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '✨': <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    '💖': <Heart className="w-6 h-6 text-[#E8B8C8]" />,
    '🌸': <Flower2 className="w-6 h-6 text-[#D4AF37]" />,
    '📍': <MapPin className="w-6 h-6 text-[#E8B8C8]" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6D3B]">
            The Golden Aura Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425]">
            WHY CHOOSE US
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Dedicated to providing serene, high-standard nail styling and beauty treatments for the Batu Maung community.
          </p>
        </div>

        {/* 4 Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E8DCC4] shadow-xs hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-[#5B1425] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-[#D4AF37]/30">
                  {iconMap[item.icon] || <span className="text-xl">{item.icon}</span>}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#5B1425] tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-[#8A6D3B]">
                <span>Golden Aura Care</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
