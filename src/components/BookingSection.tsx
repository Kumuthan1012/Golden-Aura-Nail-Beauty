import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, MessageCircle, Sparkles, Send, Phone, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: preselectedService || 'Manicure',
    date: '',
    time: '11:00 AM',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submissionHistory, setSubmissionHistory] = useState<BookingFormData[]>([]);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Load any prototype requests from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('golden_aura_requests');
      if (saved) {
        setSubmissionHistory(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    try {
      const updated = [formData, ...submissionHistory];
      setSubmissionHistory(updated);
      localStorage.setItem('golden_aura_requests', JSON.stringify(updated));
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitted(true);
  };

  const createWhatsAppBookingUrl = (data: BookingFormData) => {
    const text = encodeURIComponent(
      `Hello Golden Aura Nail & Beauty, I would like to request an appointment:\n` +
      `• Name: ${data.name || 'Customer'}\n` +
      `• Phone: ${data.phone || '-'}\n` +
      `• Service: ${data.service}\n` +
      `• Preferred Date: ${data.date || 'Flexible'}\n` +
      `• Preferred Time: ${data.time}\n` +
      (data.message ? `• Note: ${data.message}\n` : '') +
      `Thank you!`
    );
    return `https://wa.me/60124484866?text=${text}`;
  };

  // Get tomorrow's date for date picker min attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3D3DC]/50 text-[#5B1425] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Salon Appointments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425]">
            READY FOR YOUR BEAUTY APPOINTMENT?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Submit your appointment request below. Our salon team in Batu Maung will contact you to confirm your slot.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCC4] shadow-xl relative">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#5B1425]">
                  Request Received
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                  Thank you! Your appointment request has been received. Golden Aura Nail & Beauty will contact you to confirm your appointment.
                </p>
              </div>

              {/* Summary of request */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DCC4] text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Name:</span>
                  <span className="font-semibold text-stone-800">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Phone:</span>
                  <span className="font-semibold text-stone-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-[#5B1425]">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Date & Time:</span>
                  <span className="font-semibold text-stone-800">{formData.date} at {formData.time}</span>
                </div>
                {formData.message && (
                  <div className="pt-1">
                    <span className="text-stone-500 block mb-0.5">Special note:</span>
                    <span className="italic text-stone-700 text-xs">{formData.message}</span>
                  </div>
                )}
              </div>

              {/* WhatsApp instant confirmation link */}
              <div className="pt-2 space-y-3">
                <a
                  href={createWhatsAppBookingUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-semibold tracking-wide shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details Directly via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: 'Manicure',
                      date: '',
                      time: '11:00 AM',
                      message: '',
                    });
                  }}
                  className="text-xs text-stone-500 hover:text-[#5B1425] underline pt-2 block mx-auto"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="appointment-form">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jessica Tan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 012-345 6789"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Preferred Service */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label htmlFor="booking-service" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Preferred Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name} ({srv.categoryLabel})
                      </option>
                    ))}
                    <option value="Consultation / Multiple Services">
                      Consultation / Multiple Services
                    </option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-time" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                  >
                    {[
                      '9:30 AM',
                      '10:30 AM',
                      '11:30 AM',
                      '1:00 PM',
                      '2:30 PM',
                      '3:30 PM',
                      '5:00 PM',
                      '6:30 PM',
                    ].map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="booking-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Message / Special Requests (Optional)
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific design ideas, nail conditions, or preferred requests..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-sm text-stone-900 focus:outline-none focus:border-[#5B1425] focus:ring-1 focus:ring-[#5B1425] transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="w-full sm:flex-1 py-4 px-8 bg-gradient-to-r from-[#5B1425] to-[#7E1D36] hover:from-[#4A0E1C] hover:to-[#6A162B] text-white text-sm font-semibold tracking-widest uppercase rounded-full shadow-lg shadow-[#5B1425]/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#D4AF37]/50"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>REQUEST APPOINTMENT</span>
                </button>

                <a
                  href={createWhatsAppBookingUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-stone-500 pt-1">
                Notice: Submitting this form sends an appointment request. Our salon team will get in touch with you to finalize your exact slot.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
