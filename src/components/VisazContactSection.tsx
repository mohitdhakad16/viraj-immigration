"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Award } from "lucide-react";
import HeroLeadForm from "@/components/HeroLeadForm";
import { COMPANY_INFO } from "@/data/immigrationData";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazContactSection() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] relative border-b border-slate-200 overflow-hidden">
      {/* Authentic Visaz Background Pattern (pattern-1.png) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-repeat"
        style={{ backgroundImage: `url('/visaz-assets/images/icons/pattern-1.png')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Authority (Matches theme contact-section left col) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="sec-sub-title">
              <span>Your Favorite&apos;s Destination</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
              Skilled Visa’s In Global <br className="hidden sm:block" />Immigration Summit
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every profile requires meticulous statutory legal alignment. Our MARA and ICCRC accredited migration counsel conduct comprehensive pre-evaluations, optimize points under General Skilled Migration (subclasses 189, 190, 491), and eliminate filing discrepancies.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-bold text-[#16171A]">
                <div className="w-6 h-6 rounded-full bg-[#E20935]/10 flex items-center justify-center text-[#E20935]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Faster &amp; Reliable Execution with Zero Document Defects</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-bold text-[#16171A]">
                <div className="w-6 h-6 rounded-full bg-[#E20935]/10 flex items-center justify-center text-[#E20935]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Accurate &amp; Expert Legal Representation Under Direct Lawyers</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-bold text-[#16171A]">
                <div className="w-6 h-6 rounded-full bg-[#E20935]/10 flex items-center justify-center text-[#E20935]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Statutory Pre-Assessment with 100% Fee Transparency</span>
              </div>
            </div>

            {/* Direct hotline & Action button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openModal()}
                className="btn-style-one"
              >
                <span>Get Free Consulting</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="btn-style-two"
              >
                <PhoneCall className="w-4 h-4 text-[#E20935] mr-1" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form in Visaz Card Shell */}
          <div className="lg:col-span-6">
            <HeroLeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
