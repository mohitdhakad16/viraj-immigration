"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Award, ChevronDown, ChevronUp, ArrowRight, Building, PhoneCall } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function VisazAuthorityNarrative() {
  const [expanded, setExpanded] = useState(false);
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="/visaz-assets/images/resource/choose1-1.jpg"
                  alt="Australia PR Immigration Consulting Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Delhi HQ Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E20935]/15 border border-[#E20935] flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-[#E20935]" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#16171A]">Headquartered in New Delhi</div>
                    <div className="text-[11px] text-slate-500 font-medium">10th Floor, Devika Tower, Nehru Place</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-[#E20935] text-white p-4 rounded-2xl shadow-xl hidden sm:block animate-bounce-y">
              <div className="text-2xl font-black">15+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider">Years Mastery</div>
            </div>
          </div>

          {/* Right Column: Full SmartGeek Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="sec-sub-title">
              <span>National Advisory Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-[#E20935]">Australia PR Immigration</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              With a strong legacy in global mobility, <strong>Viraj Immigration &amp; SmartGeekVisas</strong> is proud to be India’s most trusted advisory for professionals aspiring to settle in Australia from India. Backed by over <strong>15 years of pioneering expertise in Australia immigration PR</strong>, we deliver unmatched credibility and results-driven guidance.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              As a multinational entity with a presence in India, Canada, and the UAE, we operate with a truly global outlook. Headquartered in Delhi with state-of-the-art infrastructure at <strong>Devika Tower, Nehru Place</strong>, we house one of the most experienced Australia visa process units in the industry, ensuring transparency, accuracy, and secure outcomes at every stage.
            </p>

            {/* Read More Expandable Section */}
            <div className={`space-y-4 transition-all duration-300 ${expanded ? "block" : "hidden sm:block"}`}>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are the premier choice for the broadest range of PR for Australia pathways. From skilled migration (Subclasses 189, 190, 491) and employer-sponsored tracks to student and business visas, we function as a true one-stop hub for those researching how to apply for Australian visa categories.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recognized as the preferred advisor for Australia PR, we provide personalized, points-optimized strategies aligned with your background and long-term goals. Our deep understanding of Australian immigration allows us to deliver comprehensive, end-to-end migration solutions.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium text-[#16171A]">
                What truly sets us apart is our commitment to people—combining cutting-edge processing technology with the genuine, heartfelt support of Gurpreet Singh’s expert legal team. We don’t just process applications; we empower your Australia PR process with trust, care, and total confidence.
              </p>
            </div>

            {/* Mobile toggle button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="sm:hidden text-xs font-bold text-[#E20935] flex items-center gap-1 cursor-pointer"
            >
              <span>{expanded ? "Read Less" : "Read Full Story"}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F7] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-[#16171A]">ICCRC &amp; MARA Registered Counsel</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F7] border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#E20935] shrink-0" />
                <span className="text-xs font-bold text-[#16171A]">Mission Zero Defect Audit</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <button
                onClick={() => openModal("Australia PR Master Consultation")}
                className="btn-style-one w-full sm:w-auto"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="btn-style-two w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-[#E20935] mr-1" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
