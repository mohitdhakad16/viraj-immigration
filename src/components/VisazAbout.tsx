"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function VisazAbout() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visaz Signature Dual Image Collage with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-4/5 h-80 sm:h-96 z-10"
                style={{ position: "relative", minHeight: 320, overflow: "hidden" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Migration Counsel at Viraj Immigration"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/40 to-transparent" />
              </div>

              {/* Overlapping Secondary Image */}
              <div 
                className="absolute -bottom-8 right-2 sm:right-6 w-3/5 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20"
                style={{ position: "absolute", minHeight: 240, overflow: "hidden" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                  alt="Client Visa Grant Handshake"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E20935]/20 to-transparent" />
              </div>

              {/* Visaz Signature Red Floating Experience Badge */}
              <div className="absolute top-6 left-0 sm:-left-4 z-30 bg-[#E20935] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center gap-3 animate-bounce-slow">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono leading-none">
                  15+
                </div>
                <div className="text-xs font-bold leading-tight uppercase tracking-wider">
                  Years of<br />Mastery
                </div>
              </div>

              {/* Mission Zero Defect Pill */}
              <div className="absolute bottom-6 left-4 z-30 bg-black/85 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">Mission Zero Defect Process</span>
              </div>

            </div>
          </div>

          {/* Right Column: Visaz Company Content (from SmartGeek) */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
                <Award className="w-3.5 h-3.5" />
                About Viraj Immigration
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
                India&apos;s Trusted Advisory for Australia &amp; Canada Permanent Residency
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              With a strong legacy in global mobility, <strong className="text-[#16171A]">Viraj Immigration</strong> is proud to be India&apos;s most trusted advisory for professionals aspiring to settle in Australia, Canada, the UK, Europe, and the UAE. Backed by over 15 years of pioneering expertise in permanent residency and skilled migration, we deliver unmatched credibility and results-driven guidance.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Headquartered in New Delhi (<strong className="text-[#16171A]">Devika Tower, Nehru Place</strong>) with multinational offices in Melbourne, Australia and Toronto, Canada, we house one of the most experienced visa processing units in the industry, ensuring transparency, accuracy, and secure outcomes at every stage.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "MARA (Australia: 1802914) & CICC Licensed",
                "Subclasses 189, 190, 491, Express Entry & PNP",
                "Multi-tier legal document compliance audit",
                "Milestone-based fees with zero hidden costs",
                "Pre-departure orientation & post-landing support",
                "Direct ANZSCO / NOC code assessment & CDR drafting"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#E20935] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => openModal()}
                className="px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about"
                className="px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16171A] bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#E20935] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Learn More About Us</span>
              </Link>
            </div>

            {/* Hotline callout */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-600">
              <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-[#E20935] animate-pulse" />
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Direct Immigration Hotline:</span>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="font-extrabold text-[#16171A] hover:text-[#E20935]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
