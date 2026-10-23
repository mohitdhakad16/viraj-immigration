"use client";

import React from "react";
import Image from "next/image";
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
      icon: <Award className="w-9 h-9 text-white group-hover:text-[#E20935] transition-colors" />
    },
    {
      num: "02",
      title: "99.9% Success Rate",
      subtitle: "Audit-Ready Precision",
      desc: "We turn tough visa cases into approved grants with a seamless, statutory multi-tier compliance audit.",
      icon: <TrendingUp className="w-9 h-9 text-white group-hover:text-[#E20935] transition-colors" />
    },
    {
      num: "03",
      title: "Strategic Australia Pathways",
      subtitle: "Subclasses 189, 190 & 491",
      desc: "End-to-end guidance for direct PR and state nominations with fast-tracked statutory application lodging.",
      icon: <ShieldCheck className="w-9 h-9 text-white group-hover:text-[#E20935] transition-colors" />
    },
    {
      num: "04",
      title: "100% Ethical Transparency",
      subtitle: "Mission Zero Defect",
      desc: "Mission Zero Defect process with complete clarity, realistic pre-assessments, and no hidden costs.",
      icon: <Compass className="w-9 h-9 text-white group-hover:text-[#E20935] transition-colors" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#16171A] text-white relative overflow-hidden border-b border-white/10">
      {/* Authentic Visaz Floating Theme Icons */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-30 select-none">
        <Image src="/visaz-assets/images/icons/icon-dots-3.png" alt="Dots" width={100} height={100} />
      </div>
      <div className="absolute bottom-10 right-10 pointer-events-none opacity-30 select-none">
        <Image src="/visaz-assets/images/icons/icon-dots-4.png" alt="Dots" width={100} height={100} />
      </div>
      <div className="absolute top-16 right-28 pointer-events-none opacity-40 select-none hidden lg:block">
        <Image src="/visaz-assets/images/icons/icon-plane-6.png" alt="Flight Path" width={160} height={80} />
      </div>
      <div className="absolute top-28 right-8 pointer-events-none opacity-80 select-none animate-bounce-y hidden lg:block">
        <Image src="/visaz-assets/images/icons/icon-parachute.png" alt="Parachute" width={65} height={65} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Matches theme_features.png */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2.5">
          <div className="sec-sub-title">
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Professional Offer For Immigrate
          </h2>
        </div>

        {/* 4 Feature Blocks Grid - Matches theme_features.png Exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative mt-8 group cursor-pointer"
              onClick={() => openModal(item.title)}
            >
              {/* Feature Inner Box: #100E0E background, padding 65px 35px 30px */}
              <div className="relative bg-[#100E0E] pt-16 px-8 pb-8 flex flex-col justify-between h-full overflow-hidden transition-all duration-300 shadow-xl border border-white/5">
                
                {/* Red Fill Expanding from Center on Hover (Exact Visaz Theme behavior) */}
                <div className="absolute top-0 left-1/2 w-0 h-full bg-[#E20935] group-hover:left-0 group-hover:w-full transition-all duration-300 ease-out z-0 pointer-events-none" />

                {/* Top Circular Red Icon at top: -40px, left: 35px */}
                <div className="absolute -top-10 left-8 z-10 w-20 h-20 rounded-full bg-[#E20935] group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300">
                  <span className="transition-transform duration-300 group-hover:scale-x-[-1]">
                    {item.icon}
                  </span>
                </div>

                <div className="relative z-10 space-y-3 pt-2">
                  <h5 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h5>

                  <p className="text-sm text-white/55 group-hover:text-white/95 leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-white/10 group-hover:border-white/20">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:underline">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
