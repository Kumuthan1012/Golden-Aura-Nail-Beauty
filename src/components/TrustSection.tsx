import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-10 bg-white border-y border-[#EFE5D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FDF2F4] via-[#FFFDFB] to-[#FAF8F5] border border-[#E8DCC4] shadow-xs">
          {/* Left Title & Stars */}
          <div className="text-center sm:text-left space-y-1.5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6D3B]">
              Verified Client Satisfaction
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#5B1425]">
              LOVED BY OUR CLIENTS
            </h2>
            <p className="text-xs text-stone-500">
              Trusted for genuine care, clean aesthetics, and relaxing salon experiences in Batu Maung.
            </p>
          </div>

          {/* Center Rating Badge */}
          <div className="flex items-center gap-4 bg-white px-6 py-3.5 rounded-xl border border-[#D4AF37]/40 shadow-xs">
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#24181B]">5.0</span>
                <span className="text-xs font-medium text-stone-600">Google Rating</span>
              </div>
            </div>
            <div className="h-9 w-px bg-stone-200" />
            <div className="text-left">
              <span className="text-[11px] block font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                100% Authentic
              </span>
              <span className="text-[10px] text-stone-400 mt-0.5 block">Penang, MY</span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="text-center sm:text-right">
            <a
              href={BUSINESS_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="see-on-google-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-[#5B1425] bg-white hover:bg-[#FDF2F4] border border-[#5B1425]/30 hover:border-[#5B1425] transition-all duration-200 shadow-xs"
            >
              <span>See us on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
