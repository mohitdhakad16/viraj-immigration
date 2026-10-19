"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Shield, Award, Sparkles, Phone } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    education: "Masters",
    visa: "Permanent Residency (PR)",
    country: "Canada"
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <div className="w-full bg-[#16171A]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#E20935]/30 shadow-2xl text-white relative">
      {/* Top accent badge */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff476d] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E20935]" />
            Free Legal Evaluation
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
            Check Your PR Eligibility Now
          </h3>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-[10px] text-slate-400 block">Response Time</span>
          <span className="text-xs font-bold text-emerald-400">Within 24 Hours</span>
        </div>
      </div>

      {success ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-14 h-14 bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Application Received!</h4>
          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
            Thank you, <strong className="text-[#ff476d]">{formData.name}</strong>. A MARA / CICC certified consultant is evaluating your profile for {formData.country} and will contact you at <strong className="text-[#ff476d]">{formData.phone}</strong>.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="text-xs text-[#E20935] underline hover:text-[#ff476d]"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <input
              type="tel"
              required
              placeholder="Mobile (WhatsApp) *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
            />
            <input
              type="number"
              min="18"
              max="65"
              required
              placeholder="Your Age (e.g. 28) *"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-400 text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
              >
                <option value="Canada" className="bg-[#16171A]">Canada 🇨🇦</option>
                <option value="Australia" className="bg-[#16171A]">Australia 🇦🇺</option>
                <option value="United Kingdom" className="bg-[#16171A]">United Kingdom 🇬🇧</option>
                <option value="Germany / Europe" className="bg-[#16171A]">Europe / Germany 🇪🇺</option>
                <option value="USA" className="bg-[#16171A]">USA 🇺🇸</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Visa Category</label>
              <select
                value={formData.visa}
                onChange={(e) => setFormData({ ...formData, visa: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
              >
                <option value="Permanent Residency (PR)" className="bg-[#16171A]">Permanent Residency (PR)</option>
                <option value="Work Permit & Skilled" className="bg-[#16171A]">Work Permit</option>
                <option value="Student Visa & PR Pathways" className="bg-[#16171A]">Student Visa (PR Path)</option>
                <option value="Business & Investor" className="bg-[#16171A]">Business / Investor</option>
                <option value="Tourist & Visitor Visa" className="bg-[#16171A]">Tourist / Visitor</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Highest Education</label>
            <select
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-base sm:text-sm focus:border-[#E20935] focus:outline-none transition-colors"
            >
              <option value="Masters" className="bg-[#16171A]">Master's / Post Graduate</option>
              <option value="Bachelors" className="bg-[#16171A]">Bachelor's Degree (4-Year)</option>
              <option value="PhD" className="bg-[#16171A]">Doctorate / PhD</option>
              <option value="Diploma" className="bg-[#16171A]">Diploma (3-Year)</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 px-4 rounded-xl font-extrabold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-[0.99] transition-all shadow-lg shadow-red-600/30 text-sm tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Evaluating Profile...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-2 gap-1.5 text-center sm:text-left">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#E20935]" />
              MARA & CICC Verified
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_INFO.phone}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
