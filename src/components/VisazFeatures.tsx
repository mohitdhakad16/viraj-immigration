"use client";

import React from "react";
import { Award, ShieldCheck, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazFeatures() {
  const { openModal } = useConsultationModal();

  const features = [
    {
      num: "01",
      title: "15+ Years of Mastery",
      subtitle: "Strategic PR Pathways",
      desc: "Backed by over 15 years of legal experience, we simplify your permanent residency journey and optimize your points test for Australia (Subclasses 189, 190, 491) and Canada (Express Entry & PNP).",
      icon: <Award className="w-7 h-7 text-[#E20935]" />,
      highlights: [
        "Points optimization for maximum draw rank",
        "Direct legal lodging by accredited counsel",
        "State and provincial nomination targeting"
      ]
    },
    {
      num: "02",
      title: "99.9% Success Rate",
      subtitle: "Audit-Ready Legal Precision",
      desc: "We turn complex visa cases into approved grants. Our multi-tier document compliance protocol ensures zero filing errors, accurate ANZSCO/NOC job descriptions, and flawless submission.",
      icon: <ShieldCheck className="w-7 h-7 text-[#E20935]" />,
      highlights: [
        "Skills assessment & CDR / RPL drafting",
        "Zero-defect statutory documentation",
        "Refusal reversal & review application mastery"
      ]
    },
    {
      num: "03",
      title: "100% Ethical Transparency",
      subtitle: "Mission Zero Defect Process",
      desc: "Complete transparency with clear, milestone-based fees and zero hidden costs. You receive realistic pre-assessments, real-time tracking, and dedicated guidance from start to visa grant.",
      icon: <Compass className="w-7 h-7 text-[#E20935]" />,
      highlights: [
        "No false promises; statutory pre-evaluation",
        "Milestone payment schedule with no surprises",
        "Comprehensive post-landing & relocation care"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f8f6f1] relative overflow-hidden border-b border-slate-200">
      {/* Background Watermark Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(#E20935_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Visaz Theme Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              <span className="w-2 h-2 rounded-full bg-[#E20935] animate-ping" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
              Professional Legal Guidance For Your Global Move
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Accredited by MARA and CICC, we transform ambitious career aspirations into permanent residency grants with verified zero-defect compliance.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E20935] to-[#ff476d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-[#E20935] transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-200 font-mono group-hover:text-[#E20935]/30 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#E20935] mb-1">
                  {item.subtitle}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors duration-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E20935] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => openModal()}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#16171A] group-hover:text-white bg-slate-50 group-hover:bg-[#E20935] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
