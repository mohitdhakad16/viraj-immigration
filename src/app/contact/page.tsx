"use client";

import React, { useState } from "react";
import { OFFICE_LOCATIONS, COMPANY_INFO } from "@/data/immigrationData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Building,
  Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState(OFFICE_LOCATIONS[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "Canada",
    visa: "Permanent Residency (PR)",
    office: OFFICE_LOCATIONS[0].city,
    preferredDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Viraj%20Immigration,%20I%20would%20like%20to%20book%20an%20appointment%20at%20${encodeURIComponent(selectedOffice.city)}`;

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/15 border border-[#E20935]/40 text-[#ff476d]">
            <Building className="w-4 h-4 text-[#E20935]" />
            <span>Global Office Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connect With Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              Immigration Counsels
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Visit our corporate offices in Noida NCR, Melbourne, Toronto, or Mumbai, or connect via confidential private video consultation.
          </p>
        </div>
      </section>

      {/* 2. OFFICE TABS & CONTACT GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Office Selection Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-6 no-scrollbar">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOffice(office)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedOffice.city === office.city
                    ? "bg-[#E20935] text-white shadow-xl shadow-red-600/30 scale-105"
                    : "bg-white text-[#16171A] border border-slate-200 hover:border-[#E20935]/40"
                }`}
              >
                <MapPin className="w-4 h-4 text-[#E20935]" />
                <span>{office.city}</span>
                {office.isHeadquarters && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-extrabold ${
                    selectedOffice.city === office.city ? "bg-black text-white" : "bg-red-100 text-[#E20935]"
                  }`}>
                    HQ
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Main Grid: Info + Form */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 5 Cols: Selected Office Details & Quick Contact */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Details Card */}
              <div className="p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff476d]">
                    Selected Location
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedOffice.city}
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E20935] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-sm">Address:</strong>
                      <span className="text-slate-300 leading-relaxed">{selectedOffice.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#E20935] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-sm">Direct Office Phone:</strong>
                      <a href={`tel:${selectedOffice.phone.replace(/\s+/g, "")}`} className="text-[#ff476d] hover:underline font-bold">
                        {selectedOffice.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#E20935] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-sm">Office Email:</strong>
                      <a href={`mailto:${selectedOffice.email}`} className="text-[#ff476d] hover:underline">
                        {selectedOffice.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E20935] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-sm">Consultation Hours:</strong>
                      <span className="text-slate-300">{selectedOffice.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp {selectedOffice.city} Desk</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#E20935]" />
                    <span>Central Hotline: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#16171A]">
                  <ShieldCheck className="w-4 h-4 text-[#E20935]" />
                  <span>Visiting Our Office?</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To ensure dedicated time with a Senior Immigration Counsel, prior appointment booking is mandatory. Walk-ins are accommodated based on barrister availability.
                </p>
              </div>

            </div>

            {/* Right 7 Cols: Appointment Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E20935] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Consultation Booking
                </span>
                <h3 className="text-2xl font-extrabold text-[#16171A] mt-1">
                  Schedule an In-Person or Video Consultation
                </h3>
              </div>

              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-400">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#16171A]">Appointment Request Confirmed!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#16171A]">{formData.name}</strong>. Our legal coordinator for the <strong className="text-[#E20935]">{formData.office}</strong> office has received your request and will call you at <strong className="text-[#16171A]">{formData.phone}</strong> to confirm your slot.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#E20935] text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Office Location</label>
                      <select
                        value={formData.office}
                        onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      >
                        {OFFICE_LOCATIONS.map((o) => (
                          <option key={o.city} value={o.city}>{o.city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      >
                        <option value="Canada">Canada 🇨🇦</option>
                        <option value="Australia">Australia 🇦🇺</option>
                        <option value="United Kingdom">United Kingdom 🇬🇧</option>
                        <option value="Europe / Germany">Europe / Germany 🇪🇺</option>
                        <option value="USA">USA 🇺🇸</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Visa Category</label>
                      <select
                        value={formData.visa}
                        onChange={(e) => setFormData({ ...formData, visa: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                      >
                        <option value="Permanent Residency (PR)">Permanent Residency (PR)</option>
                        <option value="Work Permit & Skilled">Work Permit</option>
                        <option value="Student Visa & PR Pathways">Student Visa (PR Path)</option>
                        <option value="Business & Investor">Business / Investor</option>
                        <option value="Tourist & Visitor Visa">Tourist / Visitor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Consultation Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Profile Information (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Share your current qualifications, years of experience, or specific visa query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-xs sm:text-sm focus:border-[#E20935] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-extrabold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Booking Consultation Slot...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Confirm Legal Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
