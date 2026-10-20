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
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const generatedId = `VI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedId);
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
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-2xl text-[#16171A] relative">
      {/* Top accent badge */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E20935] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E20935]" />
            Free Legal Evaluation
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#16171A] mt-0.5">
            Check Your PR Eligibility Now
          </h3>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">Response Window</span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Within 24 Hours
          </span>
        </div>
      </div>

      {success ? (
        <div className="text-center py-6 space-y-4 animate-in fade-in">
          <div className="w-14 h-14 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-extrabold text-[#16171A]">Assessment File Created!</h4>
          <div className="inline-block px-3.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-[#16171A]">
            Reference Token: <span className="text-[#E20935]">{refId}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            Thank you, <strong className="text-[#E20935]">{formData.name}</strong>. A MARA / CICC certified consultant is evaluating your profile for {formData.country} and will contact you at <strong className="text-[#16171A]">{formData.phone}</strong>.
          </p>
          <div className="pt-2 flex flex-col gap-2 max-w-xs mx-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Viraj%20Immigration,%20my%20assessment%20ref%20is%20${refId}.%20I%20applied%20for%20${encodeURIComponent(formData.country)}%20${encodeURIComponent(formData.visa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Connect on WhatsApp with Token</span>
            </a>
            <button
              onClick={() => setSuccess(false)}
              className="text-xs text-[#E20935] underline hover:text-[#c5072d] font-bold py-1"
            >
              Submit another profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] placeholder-slate-400 text-base sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="tel"
              required
              placeholder="Mobile (WhatsApp) *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] placeholder-slate-400 text-base sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
            />
            <input
              type="number"
              min="18"
              max="65"
              required
              placeholder="Your Age (e.g. 28) *"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] placeholder-slate-400 text-base sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] placeholder-slate-400 text-base sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] text-base sm:text-xs font-semibold focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
              >
                <option value="Canada">Canada 🇨🇦</option>
                <option value="Australia">Australia 🇦🇺</option>
                <option value="United Kingdom">United Kingdom 🇬🇧</option>
                <option value="USA">USA 🇺🇸</option>
                <option value="Germany / Europe">Europe / Germany 🇪🇺</option>
                <option value="UAE & Dubai">UAE & Dubai 🇦🇪</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Visa Category</label>
              <select
                value={formData.visa}
                onChange={(e) => setFormData({ ...formData, visa: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] text-base sm:text-xs font-semibold focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
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
            <label className="block text-xs font-bold text-slate-700 mb-1">Highest Education</label>
            <select
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#16171A] text-base sm:text-xs font-semibold focus:bg-white focus:border-[#E20935] focus:outline-none transition-colors"
            >
              <option value="Masters">Master's / Post Graduate Degree</option>
              <option value="Bachelors">Bachelor's Degree (4-Year)</option>
              <option value="PhD">Doctorate / PhD</option>
              <option value="Diploma">Diploma / Trade Certification</option>
            </select>
          </div>

          <div className="pt-1.5">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-[0.99] transition-all shadow-xl shadow-red-600/30 text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
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

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 pt-1 gap-1 text-center sm:text-left">
            <span className="flex items-center gap-1 font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#E20935]" />
              MARA & CICC Verified
            </span>
            <span className="flex items-center gap-1 text-[#16171A] font-bold">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              {COMPANY_INFO.phone}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
