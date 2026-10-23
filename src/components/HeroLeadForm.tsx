"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Shield, Award, Sparkles, Phone, Lock } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "Australia",
    visa: "Permanent Residency (PR)",
    education: "Graduation",
    englishLevel: "Good (7 Band)",
    experience: "4-5 years"
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const generatedId = `VI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedId);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "790f8dfc-2a01-4bdb-a4eb-825bf9707dce",
          subject: `PR Assessment Lead: ${formData.name} - ${formData.country} (${formData.visa})`,
          from_name: "Viraj Immigration Portal",
          reference_token: generatedId,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          target_country: formData.country,
          visa_category: formData.visa,
          education: formData.education,
          english_proficiency: formData.englishLevel,
          work_experience: formData.experience
        })
      });
      const data = await response.json();
      if (!data.success) {
        console.warn("Web3Forms notice:", data);
      }
    } catch (err) {
      console.error("Hero form submission error:", err);
    } finally {
      setLoading(false);
      setSuccess(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 shadow-2xl text-[#16171A] relative overflow-hidden">
      {/* Top red border accent line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E20935] via-[#ff476d] to-[#E20935]" />

      {/* Header */}
      <div className="mb-5 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E20935] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E20935]" />
            Free PR Assessment
          </span>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Audit-Ready in 24h
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#16171A] tracking-tight leading-tight">
          Dream, Apply, Achieve: Begin Your PR Journey Now
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Submit your profile details below and our registered legal counsel will email your points test evaluation!
        </p>
      </div>

      {success ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-extrabold text-[#16171A]">Assessment File Created!</h4>
          <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-[#16171A]">
            Reference Token: <span className="text-[#E20935]">{refId}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <strong className="text-[#E20935]">{formData.name}</strong>. A MARA / CICC certified immigration consultant is calculating your eligibility score for {formData.country} and will reach you at <strong className="text-[#16171A]">{formData.phone}</strong>.
          </p>
          <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Viraj%20Immigration,%20my%20PR%20assessment%20token%20is%20${refId}.%20I%20applied%20for%20${encodeURIComponent(formData.country)}%20${encodeURIComponent(formData.visa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Connect on WhatsApp with Token</span>
            </a>
            <button
              onClick={() => setSuccess(false)}
              className="text-xs text-[#E20935] underline hover:text-[#c5072d] font-bold py-1 cursor-pointer"
            >
              Evaluate another profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:ring-2 focus:ring-[#E20935]/10 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:ring-2 focus:ring-[#E20935]/10 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:ring-2 focus:ring-[#E20935]/10 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Destination Country *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-all cursor-pointer"
              >
                <option value="Australia">Australia (Subclasses 189/190/491)</option>
                <option value="Canada">Canada (Express Entry / PNP)</option>
                <option value="United Kingdom">United Kingdom (Skilled Worker)</option>
                <option value="Germany / Europe">Germany (Chancenkarte / Blue Card)</option>
                <option value="United States">United States (EB-1 / EB-2 NIW)</option>
                <option value="UAE">UAE (Golden Visa / Green Residency)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Education & Visa Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Highest Education *
              </label>
              <select
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-all cursor-pointer"
              >
                <option value="PHD/Doctorate">PHD / Doctorate</option>
                <option value="Masters">Masters Degree</option>
                <option value="Post Graduation">Post Graduation Diploma</option>
                <option value="Two or more Certificates">Two or More Certificates / Degrees</option>
                <option value="Graduation">Graduation / Bachelor&apos;s Degree</option>
                <option value="Diploma 3 years">Diploma (3 Years)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Visa Category *
              </label>
              <select
                value={formData.visa}
                onChange={(e) => setFormData({ ...formData, visa: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-all cursor-pointer"
              >
                <option value="Permanent Residency (PR)">Permanent Residency (PR)</option>
                <option value="Express Entry">Express Entry / Skilled Migration</option>
                <option value="PNP / State Nomination">PNP / State Nomination</option>
                <option value="Work Permit">Work Permit / Employer Sponsorship</option>
                <option value="Study Visa">Study Visa &amp; Post-Study PR</option>
                <option value="Business Investor Program">Business Investor Program</option>
                <option value="Tourist / Visitor Visa">Tourist / Visitor Visa</option>
              </select>
            </div>
          </div>

          {/* Row 4: English Level & Work Experience (From SmartGeek) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                English Level (IELTS / PTE) *
              </label>
              <select
                value={formData.englishLevel}
                onChange={(e) => setFormData({ ...formData, englishLevel: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-all cursor-pointer"
              >
                <option value="Excellent (8+ Band / 79+ PTE)">Excellent (8+ Band / 79+ PTE) - 20 pts</option>
                <option value="Good (7 Band / 65+ PTE)">Good (7 Band / 65+ PTE) - 10 pts</option>
                <option value="Average (6 Band / 50+ PTE)">Average (6 Band / 50+ PTE) - 0 pts</option>
                <option value="Yet to appear">Yet to Appear / Need Coaching</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Relevant Work Experience *
              </label>
              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f6f1] border border-slate-200 text-[#16171A] text-xs sm:text-sm focus:bg-white focus:border-[#E20935] focus:outline-none transition-all cursor-pointer"
              >
                <option value="1 year">1 Year Experience</option>
                <option value="2-3 years">2 - 3 Years Experience</option>
                <option value="4-5 years">4 - 5 Years Experience</option>
                <option value="6+ years">6+ Years (Maximum Work Points)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-98 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Calculating Points &amp; Lodging File...</span>
                </>
              ) : (
                <>
                  <span>Book Free Consultation</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Security & Regulatory Footnote */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-600" />
              100% Confidential Legal Evaluation
            </span>
            <span className="text-slate-400">Zero Defect Process</span>
          </div>
        </form>
      )}
    </div>
  );
}
