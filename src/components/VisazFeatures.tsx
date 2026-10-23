"use client";

import React from "react";
import { Award, ShieldCheck, Compass, ArrowRight, TrendingUp } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazFeatures() {
  const { openModal } = useConsultationModal();

  const features = [
    {
      num: "01",
      title: "15+ Years of Mastery",
      subtitle: "Strategic PR Pathways",
      desc: "Led by senior migration counsel, we simplify the Australia and Canada immigration journey and optimize your points test.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      num: "02",
      title: "99.9% Success Rate",
      subtitle: "Audit-Ready Precision",
      desc: "We turn tough visa cases into approved grants with a seamless, statutory multi-tier compliance audit.",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      num: "03",
      title: "Strategic Australia Pathways",
      subtitle: "Subclasses 189, 190 & 491",
      desc: "End-to-end guidance for direct PR and state nominations with fast-tracked statutory application lodging.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
      num: "04",
      title: "100% Ethical Transparency",
      subtitle: "Mission Zero Defect",
      desc: "Mission Zero Defect process with complete clarity, realistic pre-assessments, and no hidden costs.",
      icon: <Compass className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#16171A] text-white relative overflow-hidden border-b border-white/10">
      {/* Decorative dot matrix pattern & subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#E20935_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Matches theme_features.png */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="sec-sub-title">
            <span className="text-[#ff476d]">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Professional Offer For Immigrate
          </h2>
        </div>

        {/* 4 Feature Blocks Grid - Matches theme_features.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative mt-8 group"
            >
              {/* Feature Inner Box */}
              <div className="relative bg-[#1F2228] rounded-3xl p-6 sm:p-7 pt-12 border border-white/10 group-hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-xl">
                {/* Red Fill Transition on Hover */}
                <div className="absolute inset-0 bg-[#E20935] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0" />

                {/* Floating Circular Red Icon at top */}
                <div className="absolute -top-7 left-6 z-10 w-16 h-16 rounded-full bg-[#E20935] group-hover:bg-white text-white group-hover:text-[#E20935] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:scale-x-[-1] transition-transform duration-300 group-hover:text-[#E20935]">
                    {React.cloneElement(item.icon, {
                      className: "w-8 h-8 text-white group-hover:text-[#E20935] transition-colors"
                    })}
                  </span>
                </div>

                <div className="relative z-10 space-y-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#ff6b8b] group-hover:text-white/90 block">
                    {item.subtitle}
                  </span>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 group-hover:text-white/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-4 border-t border-white/10 group-hover:border-white/20">
                  <button
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:underline cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
