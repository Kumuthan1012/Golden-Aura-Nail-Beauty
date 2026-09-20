import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <aside
      id="mobile-sticky-action-bar"
      aria-label="Quick Action Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DCC4] px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          id="mobile-bar-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF8F5] active:bg-[#F3D3DC] border border-[#E8DCC4] text-[#5B1425] transition-colors min-h-[48px]"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={BUSINESS_INFO.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#DCFCE7] active:bg-[#BBF7D0] border border-[#86EFAC] text-[#14532D] transition-colors min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4 text-[#16A34A] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Book Now button */}
        <button
          onClick={onBookClick}
          id="mobile-bar-book"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#5B1425] to-[#7E1D36] active:from-[#4A0E1C] active:to-[#6A162B] text-white shadow-sm transition-colors min-h-[48px]"
        >
          <Calendar className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">Book Now</span>
        </button>
      </div>
    </aside>
  );
};
