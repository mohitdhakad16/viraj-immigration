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
      icon: <FileCheck className="w-7 h-7 text-[#E20935]" />
    },
    {
      step: "Step 02",
      title: "Skills & Documents",
      desc: "Submitting formal skills assessment through designated authorities (ACS, Engineers Australia, VETASSESS) with zero-defect CDR reports.",
      icon: <Award className="w-7 h-7 text-[#E20935]" />
    },
    {
      step: "Step 03",
      title: "EOI & Nomination",
      desc: "Lodging Expression of Interest on SkillSelect & Express Entry, targeting high-probability state and provincial nominations (+600 pts).",
      icon: <Send className="w-7 h-7 text-[#E20935]" />
    },
    {
      step: "Step 04",
      title: "Receive Visa Grant",
      desc: "Receiving your stamped Permanent Residency visa with comprehensive pre-departure briefings and post-landing settlement support.",
      icon: <Plane className="w-7 h-7 text-[#E20935]" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matches theme_process.png) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="sec-sub-title">
            <span>Working Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
            4 Easy Steps To Secure <br className="hidden sm:block" />Your Permanent Residency
          </h2>
        </div>

        {/* Outer Steps Box with Visaz Connected Curved Line */}
        <div className="relative">
          {/* Connecting Curved Dotted Line (Matches theme_process.png) */}
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
                className="bg-white rounded-3xl p-7 pt-9 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#E20935] transition-all duration-300 text-center relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Circular Icon Box */}
                  <div className="w-20 h-20 rounded-full bg-[#FAF8F7] border-2 border-slate-200 group-hover:border-[#E20935] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E20935] transition-all duration-300 shadow-md">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(item.icon, {
                        className: "w-8 h-8 text-[#E20935] group-hover:text-white transition-colors duration-300"
                      })}
                    </span>
                  </div>

                  {/* Step Tag */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#E20935] bg-red-50 border border-red-200 mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#E20935] transition-colors">
                  <span>Phase 0{idx + 1} Protocol</span>
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
