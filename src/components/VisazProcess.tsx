"use client";

import React from "react";
import Image from "next/image";
import { FileCheck, Award, Send, Plane, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazProcess() {
  const { openModal } = useConsultationModal();

  const steps = [
    {
      step: "Step 01",
      title: "Online Assessment",
      desc: "Comprehensive evaluation of your age, qualifications, work history, and language test scores against current PR quotas.",
      icon: <FileCheck className="w-12 h-12" />
    },
    {
      step: "Step 02",
      title: "Skills & Documents",
      desc: "Submitting formal skills assessment through designated authorities (ACS, Engineers Australia, VETASSESS) with zero-defect reports.",
      icon: <Award className="w-12 h-12" />
    },
    {
      step: "Step 03",
      title: "EOI & Nomination",
      desc: "Lodging Expression of Interest on SkillSelect & Express Entry, targeting high-probability state and provincial nominations (+600 pts).",
      icon: <Send className="w-12 h-12" />
    },
    {
      step: "Step 04",
      title: "Receive Visa Grant",
      desc: "Receiving your stamped Permanent Residency visa with comprehensive pre-departure briefings and post-landing settlement support.",
      icon: <Plane className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Match to theme_process.png) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2.5">
          <div className="sec-sub-title">
            <span>Working Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
            4 Easy Steps To Secure <br className="hidden sm:block" />Your Permanent Residency
          </h2>
        </div>

        {/* Outer Steps Box with Visaz Connected Curved Line & Directional Arrows */}
        <div className="relative">
          {/* Connecting Curved Dotted Flight Line from Theme */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-16 z-0 pointer-events-none opacity-40">
            <Image
              src="/visaz-assets/images/icons/icon-line.png"
              alt="Process Line"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative text-center group cursor-pointer"
                onClick={() => openModal(item.title)}
              >
                {/* Horizontal Directional Arrow to next step (Matches theme icon-arrow.png) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 z-20 pointer-events-none opacity-60">
                    <Image
                      src="/visaz-assets/images/icons/icon-arrow.png"
                      alt="Next"
                      width={28}
                      height={28}
                    />
                  </div>
                )}

                {/* Big Circular Icon with Red Border (Matches theme_process.png: 150px) */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-[#E20935] text-[#E20935] group-hover:bg-[#E20935] group-hover:text-white flex items-center justify-center mx-auto mb-8 shadow-xl transition-all duration-300 relative">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  
                  {/* Small triangular pointer under the circle */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#E20935] group-hover:border-t-[#E20935] transition-colors" />
                </div>

                {/* Content Box */}
                <div className="bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E20935] block mb-2">
                    {item.step}
                  </span>

                  <h5 className="text-lg font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors mb-2.5">
                    {item.title}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openModal()}
            className="btn-style-one"
          >
            <span>Begin Step 01: Free Profile Assessment &gt;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
