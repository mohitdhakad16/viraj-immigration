"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, ArrowRight, PhoneCall, Sparkles, Building2, MapPin } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function VisazAbout() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Visaz Dual Photo Collage with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image from Visaz Template */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-4/5 h-84 sm:h-96 z-10"
                style={{ position: "relative", minHeight: 336, overflow: "hidden" }}
              >
                <Image
                  src="/visaz-assets/images/resource/about1-1.jpg"
                  alt="Visaz Immigration Advisory Counsel"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/40 to-transparent" />
              </div>

              {/* Overlapping Secondary Image from Visaz Template */}
              <div 
                className="absolute -bottom-8 right-0 sm:right-4 w-3/5 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20"
                style={{ position: "absolute", minHeight: 256, overflow: "hidden" }}
              >
                <Image
                  src="/visaz-assets/images/resource/about1-2.jpg"
                  alt="Client Visa Success Consultation"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E20935]/20 to-transparent" />
              </div>

              {/* Visaz Signature Red Floating Experience Badge */}
              <div className="absolute top-6 -left-2 sm:-left-6 z-30 bg-[#E20935] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center gap-3 animate-bounce-y">
                <div className="text-3xl sm:text-4xl font-black font-mono leading-none">
                  15+
                </div>
                <div className="text-xs font-bold leading-tight uppercase tracking-wider">
                  Years of<br />Mastery
                </div>
              </div>

              {/* Mission Zero Defect Floating Badge */}
              <div className="absolute bottom-6 left-2 z-30 bg-[#16171A]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/15 shadow-xl flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">Mission Zero Defect Process</span>
              </div>

            </div>
          </div>

          {/* Right Column: Company Narrative from SmartGeek */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            
            <div className="sec-sub-title">
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
              Why Choose Smart Geek Visas &amp; Viraj Immigration As Your Partner?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Choose <strong className="text-[#16171A]">Viraj Immigration &amp; Smart Geek Visas</strong> as your trusted Australia immigration expert for a smooth journey to permanent residency. Our experienced team offers personalized support at every step, with a proven track record as one of India’s top Australia immigration advisors.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Backed by over <strong>15 years of pioneering expertise</strong> in Australia PR (subclasses 189, 190, 491) and Canada Express Entry, led by Gurpreet Singh and senior registered legal counsel. We house one of the most experienced visa processing units in the country, ensuring transparency, accuracy, and secure outcomes at every stage.
            </p>

            {/* Devika Tower Delhi HQ Callout */}
            <div className="p-4 rounded-2xl bg-[#FAF8F7] border border-slate-200 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E20935]/15 border border-[#E20935] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#E20935]" />
              </div>
              <div className="text-xs text-slate-700">
                <strong className="text-[#16171A] block text-sm font-bold">Delhi Headquarters:</strong>
                10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi, Delhi 110019
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "15+ Years of Australian Immigration Law Mastery",
                "ICCRC & MARA Registered Migration Lawyers",
                "Specialized Australia Subclasses 189, 190 & 491",
                "Dedicated Compliance Team to Reduce Rejections",
                "Complete End-to-End Support from Assessment to Grant",
                "Technology-Driven Tracking with Real-Time Updates"
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
                className="btn-style-one"
              >
                <span>Book Free Consultation</span>
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

        </div>
      </div>
    </section>
  );
}
