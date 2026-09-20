import React, { useState } from 'react';
import { Sparkles, MessageCircle, Calendar, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'nail' | 'beauty' | 'lips'>('all');
  const [selectedEnquiryService, setSelectedEnquiryService] = useState<ServiceItem | null>(null);

  const filteredServices = activeTab === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeTab);

  const handleEnquireNow = (service: ServiceItem) => {
    setSelectedEnquiryService(service);
  };

  const handleBookViaForm = (serviceName: string) => {
    setSelectedEnquiryService(null);
    onSelectServiceForBooking(serviceName);
  };

  const generateWhatsAppEnquiryUrl = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Golden Aura Nail & Beauty, I would like to enquire about your "${serviceName}" service at your Batu Maung salon.`
    );
    return `https://wa.me/60124484866?text=${text}`;
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFDFB] relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8DCC4] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3D3DC]/40 text-[#5B1425] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Curated Treatments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425] tracking-tight">
            OUR BEAUTY SERVICES
          </h2>
          <p className="text-sm sm:text-base text-[#5A454B] leading-relaxed">
            Thoughtfully provided nail styling, lash and brow refinements, facial care, and lip treatments tailored for you.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'nail', label: 'Nail Care' },
              { id: 'beauty', label: 'Beauty & Skincare' },
              { id: 'lips', label: 'Lips' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#5B1425] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#FAF8F5] text-stone-700 hover:bg-[#F3D3DC]/50 border border-[#E8DCC4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCC4] shadow-xs hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#5B1425] tracking-wider uppercase shadow-xs">
                    {service.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-[#24181B] group-hover:text-[#5B1425] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  {service.highlights && (
                    <div className="pt-1 space-y-1">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-500">
                          <Check className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Note & Enquire Button */}
              <div className="p-5 pt-0 mt-auto border-t border-stone-100/80">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 italic">Pricing:</span>
                  <span className="text-xs font-semibold text-[#8A6D3B] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8DCC4]">
                    {service.priceNote}
                  </span>
                </div>

                <button
                  onClick={() => handleEnquireNow(service)}
                  id={`enquire-btn-${service.id}`}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#5B1425] to-[#7E1D36] hover:from-[#4A0E1C] hover:to-[#6A162B] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] max-w-xl mx-auto text-xs text-stone-600">
          ✨ <span className="font-medium text-[#5B1425]">Looking for a combination package or specific nail art style?</span>{' '}
          Send us your inspiration photo via WhatsApp for a quick consultation.
        </div>
      </div>

      {/* Quick Service Enquiry Modal */}
      {selectedEnquiryService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedEnquiryService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#D4AF37]/50 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#8A6D3B] font-semibold">
                  Service Enquiry
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#5B1425]">
                  {selectedEnquiryService.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEnquiryService(null)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold p-1"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {selectedEnquiryService.description}
            </p>

            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DCC4] text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-stone-500">Rate Guideline:</span>
                <span className="font-medium text-[#5B1425]">{selectedEnquiryService.priceNote}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Salon Location:</span>
                <span className="font-medium text-stone-800">16-2, Batu Maung, Penang</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppEnquiryUrl(selectedEnquiryService.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-semibold tracking-wide shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </a>

              <button
                onClick={() => handleBookViaForm(selectedEnquiryService.name)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#5B1425] hover:bg-[#7E1D36] text-white rounded-xl text-sm font-semibold tracking-wide shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Fill Appointment Request Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
