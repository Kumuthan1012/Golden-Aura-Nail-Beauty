import React from 'react';
import { Sparkles, Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24181B] text-[#FAF8F5] pt-16 pb-28 sm:pb-20 border-t-2 border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5B1425] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-wider text-[#FAF8F5]">
                  {BUSINESS_INFO.name.toUpperCase()}
                </h3>
                <p className="text-[11px] tracking-[0.2em] text-[#D4AF37] uppercase">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Your destination for beautiful nails, beauty treatments and self-care in Batu Maung, Penang.
            </p>

            {/* Social Media Placeholders */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { name: 'Instagram', label: 'IG', url: '#' },
                  { name: 'Facebook', label: 'FB', url: '#' },
                  { name: 'TikTok', label: 'TT', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    onClick={(e) => {
                      if (social.url === '#') {
                        e.preventDefault();
                        alert(`Golden Aura's ${social.name} profile link will connect here once provided.`);
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-[#5B1425] hover:text-[#D4AF37] border border-stone-700 text-xs font-semibold text-stone-300 transition-all duration-200"
                    title={`Follow us on ${social.name}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold tracking-wider text-[#D4AF37] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Client Gallery', href: '#gallery' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact & Location', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-stone-600">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold tracking-wider text-[#D4AF37] uppercase">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2 text-stone-200">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium">Monday – Sunday</span>
              </div>
              <p className="text-stone-400 pl-6">9:00 AM – 8:00 PM</p>
              <div className="pt-2 pl-6">
                <span className="inline-block text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold">
                  Open 7 Days a Week
                </span>
              </div>
            </div>
          </div>

          {/* Location & Contact Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold tracking-wider text-[#D4AF37] uppercase">
              Salon Location
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <address className="not-italic text-stone-300 leading-relaxed">
                  16-2, Lintang Batu Maung 2,<br />
                  11960 Batu Maung,<br />
                  Pulau Pinang, Malaysia
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#D4AF37] font-semibold text-stone-200 transition-colors"
                >
                  012-448 4866
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-stone-200 transition-colors"
                >
                  WhatsApp: 012-448 4866
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Golden Aura Nail & Beauty. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Crafted for Golden Aura Nail & Beauty • Batu Maung, Penang</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
