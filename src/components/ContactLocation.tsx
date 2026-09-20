import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { getSalonOpenStatus } from '../utils/timeUtils';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const openStatus = getSalonOpenStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6D3B]">
            Visit Or Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425]">
            LOCATION & CONTACT
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Conveniently situated in Batu Maung, Penang. Walk-ins welcomed subject to availability; appointments recommended.
          </p>
        </div>

        {/* Primary Contact Action Highlights (WhatsApp & Phone) */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] border border-[#86EFAC] flex flex-col justify-between space-y-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-800">
                  Fastest Communication
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#14532D]">
                  WhatsApp Enquiry
                </h3>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Have a question about nail designs, treatment packages, or today&apos;s available slots?
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-cta-button"
              className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT WITH US ON WHATSAPP</span>
            </a>
          </div>

          {/* Call Us Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF8F5] to-[#FDF2F4] border border-[#E8DCC4] flex flex-col justify-between space-y-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#5B1425] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#8A6D3B]">
                  Direct Voice Assistance
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#5B1425]">
                  Call Salon
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Call our salon reception during business hours (9:00 AM – 8:00 PM) for immediate assistance.
                </p>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              id="call-us-cta-button"
              className="w-full py-4 px-6 rounded-2xl bg-[#5B1425] hover:bg-[#7E1D36] text-[#FAF8F5] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 border border-[#D4AF37]/40"
            >
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <span>CALL US: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Location Details & Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Location & Address */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DCC4] shadow-md space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8A6D3B]">
                  Salon Address
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#5B1425]">
                  Golden Aura Nail & Beauty
                </h3>
              </div>
              <div className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 text-[#5B1425]">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            {/* Address Box */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DCC4] space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {BUSINESS_INFO.address.line1}
                  </p>
                  <p className="text-xs text-stone-600">
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                  </p>
                  <p className="text-xs text-stone-600">{BUSINESS_INFO.address.country}</p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-[11px] font-semibold text-stone-700 flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="pt-2 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-stone-700">Google Plus Code:</span>
                <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-stone-200 text-stone-800">
                  {BUSINESS_INFO.address.plusCode}
                </span>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={BUSINESS_INFO.mapsDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-[#FAF8F5] border-2 border-[#5B1425] text-[#5B1425] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Interactive Map Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DCC4] h-52 bg-stone-100">
              <iframe
                title="Golden Aura Nail & Beauty Location Map"
                src="https://maps.google.com/maps?q=16-2,%20Lintang%20Batu%20Maung%202,%2011960%20Batu%20Maung,%20Pulau%20Pinang,%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-medium text-stone-700 shadow-xs border border-stone-200">
                Batu Maung, Penang
              </div>
            </div>
          </div>

          {/* Right: Opening Hours Schedule */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DCC4] shadow-md space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8A6D3B]">
                  Operating Schedule
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#5B1425]">
                  OPENING HOURS
                </h3>
              </div>
              <div className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 text-[#5B1425]">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            {/* Real-time Status Card */}
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                openStatus.isOpen
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/80 border-amber-200 text-amber-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <div>
                  <h4 className="text-sm font-bold">{openStatus.statusText}</h4>
                  <p className="text-xs opacity-85">{openStatus.nextChangeText}</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 shadow-xs">
                Today is {openStatus.currentDay}
              </span>
            </div>

            {/* Weekly Schedule Table */}
            <div className="divide-y divide-stone-100 text-xs sm:text-sm">
              {BUSINESS_INFO.hours.map((schedule) => {
                const isToday = schedule.day === openStatus.currentDay;
                return (
                  <div
                    key={schedule.day}
                    className={`py-3 px-3 rounded-xl flex items-center justify-between transition-colors ${
                      isToday
                        ? 'bg-[#FDF2F4] text-[#5B1425] font-semibold border-l-4 border-[#5B1425]'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{schedule.day}</span>
                      {isToday && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#5B1425] text-white px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </div>
                    <span className={isToday ? 'font-bold text-[#5B1425]' : 'text-stone-600'}>
                      {schedule.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-xs text-stone-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>
                Appointments are prioritized during evening and weekend peak hours. Advance booking is advised.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
