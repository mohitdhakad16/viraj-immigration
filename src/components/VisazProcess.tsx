"use client";

import React from "react";
import { FileCheck, Award, Send, Plane, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazProcess() {
  const { openModal } = useConsultationModal();

  const steps = [
    {
      step: "01",
      title: "Free Profile Assessment",
      desc: "Comprehensive evaluation of your age, qualifications, work experience, and language benchmarks against current statutory points cutoffs.",
      icon: <FileCheck className="w-6 h-6 text-[#E20935]" />
    },
    {
      step: "02",
      title: "Skills & Documentation",
      desc: "Submitting formal skills assessment through designated authorities (ACS, Engineers Australia, VETASSESS, WES) with zero-defect CDR/RPL reports.",
      icon: <Award className="w-6 h-6 text-[#E20935]" />
    },
    {
      step: "03",
      title: "EOI & State Nomination",
      desc: "Lodging Expression of Interest on SkillSelect & Express Entry, proactively targeting high-probability State and Provincial Nominations (+600 pts).",
      icon: <Send className="w-6 h-6 text-[#E20935]" />
    },
    {
      step: "04",
      title: "Visa Grant & Relocation",
      desc: "Receiving your stamped Permanent Residency visa with comprehensive pre-departure briefings, banking setup, and post-landing settlement support.",
      icon: <Plane className="w-6 h-6 text-[#E20935]" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fcfbfa] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
            Working Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
            4 Easy Steps To Secure Your Permanent Residency
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our audited legal methodology removes guesswork and stress, guiding you step-by-step from initial assessment to your permanent visa grant.
          </p>
        </div>

        {/* Steps Grid with connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E20935] transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Step indicator watermark */}
              <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-extrabold text-slate-200 font-mono group-hover:text-[#E20935]/25 transition-colors">
                {item.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-[#E20935] transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#E20935] mb-1">
                  Step {item.step}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#E20935] transition-colors">
                <span>Phase {item.step} Protocol</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openModal()}
            className="btn-style-one"
          >
            <span>Begin Step 01: Free Profile Assessment</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
