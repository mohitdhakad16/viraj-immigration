"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall, Award, CheckCircle2 } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function BestConsultantsBanner() {
  const { openModal } = useConsultationModal();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden text-white border-y border-white/10">
      {/* Background Image with Dark Contrast Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/visaz-assets/images/background/1.jpg"
          alt="Best Immigration Consultants in India"
          fill
          priority={false}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F12]/95 via-[#16171A]/90 to-[#0E0F12]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,9,53,0.15),transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl space-y-6">
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/40 backdrop-blur-md">
          <Award className="w-4 h-4 text-[#E20935]" />
          <span>India&apos;s Premier Immigration Advisory</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Best Immigration Consultants in India
        </h2>

        {/* Narrative Verbatim from SmartGeek */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Viraj Immigration &amp; Smart Geek Visas is one of India’s best immigration consultancies. Our immigration services are designed to equip clients with thorough information about the process, enabling them to make well-informed decisions.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          We provide expert immigration consultancy to individuals across India who aspire to live abroad. We offer genuine advice and identify the best possible application route for each client. Our core mission is to help our clients successfully achieve their immigration goals with top-tier immigration and citizenship advisory.
        </p>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-3xl mx-auto">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-[#E20935]">15+</div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Years Mastery</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-[#E20935]">30 K+</div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Cases Handled</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-[#E20935]">99.9%</div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Visa Grant Rate</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-[#E20935]">100%</div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Zero Defect Process</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openModal()}
            className="btn-style-one w-full sm:w-auto"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
            className="btn-style-two w-full sm:w-auto text-white bg-white/10 border-white/20 hover:border-[#E20935]"
          >
            <PhoneCall className="w-4 h-4 text-[#E20935] mr-1" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
