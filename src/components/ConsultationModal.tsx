"use client";

import React, { useState, useEffect } from "react";
import { useConsultationModal } from "@/context/ModalContext";
import { X, CheckCircle, Shield, Award, Sparkles, Send, Phone, Lock } from "lucide-react";
import confetti from "canvas-confetti";

export default function ConsultationModal() {
  const { isOpen, closeModal, preselectedVisa, preselectedCountry } = useConsultationModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    education: "",
    visaType: "",
    targetCountry: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        visaType: preselectedVisa || prev.visaType || "Permanent Residency (PR)",
        targetCountry: preselectedCountry || prev.targetCountry || "Canada"
      }));
      setIsSuccess(false);
    }
  }, [isOpen, preselectedVisa, preselectedCountry]);

  if (!isOpen) return null;

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
    }, 900);
  };

  return (
    <div 
      onClick={closeModal}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto overscroll-contain bg-[#16171A] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E20935]/30 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="sticky top-0 z-10 bg-[#0E0F12] px-4 sm:px-6 py-3.5 sm:py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#E20935]" />
                MARA & CICC Licensed Consultation
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Book Your Free Immigration Assessment
            </h3>
            <p className="text-xs text-slate-300">
              Get an accurate legal eligibility score within 24 hours.
            </p>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-white">Assessment Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#ff476d] font-semibold">{formData.name}</span>. A Senior Licensed Immigration Consultant has been assigned to your profile. We will call you at <span className="text-[#ff476d] font-semibold">{formData.phone}</span> shortly.
              </p>
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 text-xs text-slate-300 flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Confidential Profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E20935]" />
                  <span>Licensed Counsel Evaluation</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#E20935] hover:bg-[#c5072d] text-white font-bold transition-all shadow-lg shadow-red-600/30"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Applicant Age *</label>
                  <input
                    type="number"
                    min="18"
                    max="65"
                    required
                    placeholder="e.g. 29"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Highest Qualification</label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  >
                    <option value="Masters / Post Graduate" className="bg-[#16171A]">Master's / Post Graduate</option>
                    <option value="Bachelor's Degree (4 Years)" className="bg-[#16171A]">Bachelor's Degree</option>
                    <option value="PhD / Doctorate" className="bg-[#16171A]">PhD / Doctorate</option>
                    <option value="Diploma (3 Years)" className="bg-[#16171A]">Diploma (3 Years)</option>
                    <option value="Other" className="bg-[#16171A]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Visa Category</label>
                  <select
                    value={formData.visaType}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  >
                    <option value="Permanent Residency (PR)" className="bg-[#16171A]">Permanent Residency (PR)</option>
                    <option value="Work Permit & Skilled" className="bg-[#16171A]">Work Permit</option>
                    <option value="Student Visa & PR Pathways" className="bg-[#16171A]">Student Visa</option>
                    <option value="Business & Investor Visa" className="bg-[#16171A]">Business & Investor</option>
                    <option value="Tourist & Visitor Visa" className="bg-[#16171A]">Tourist / Visitor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">Target Country</label>
                  <select
                    value={formData.targetCountry}
                    onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                  >
                    <option value="Canada" className="bg-[#16171A]">Canada 🇨🇦</option>
                    <option value="Australia" className="bg-[#16171A]">Australia 🇦🇺</option>
                    <option value="United Kingdom" className="bg-[#16171A]">United Kingdom 🇬🇧</option>
                    <option value="Europe / Germany" className="bg-[#16171A]">Europe / Germany 🇪🇺</option>
                    <option value="USA" className="bg-[#16171A]">USA 🇺🇸</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Brief Profile Details or Queries (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. 5 years experience as Software Developer, IELTS 7.5 bands..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 text-sm tracking-wide disabled:opacity-50 uppercase"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Eligibility Credentials...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Claim Free Expert Assessment & Call Back</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 gap-1.5 text-center sm:text-left">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#E20935]" />
                  100% Confidential & GDPR/MARA Compliant
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  Instant Hotline: +91 98765 43210
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
