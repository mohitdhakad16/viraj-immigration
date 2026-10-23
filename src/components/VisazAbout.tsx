"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall, Globe2, MapPin } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function VisazAbout() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Visaz Image Layout with Big Red Globe Circle */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none pr-6 sm:pr-12">
              
              {/* Primary Image (about1-1.jpg) */}
              <div className="relative w-4/5 h-[340px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="/visaz-assets/images/resource/about1-1.jpg"
                  alt="Visaz Immigration Advisory Counsel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Image (about1-2.jpg) positioned bottom right */}
              <div className="absolute -bottom-8 right-0 sm:right-2 w-3/5 h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image
                  src="/visaz-assets/images/resource/about1-2.jpg"
                  alt="Client Visa Success Consultation"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Visaz Iconic Circular Red Badge at Bottom-Left (Exact Match to theme_about.png) */}
              <div className="absolute -bottom-10 -left-6 sm:-left-10 z-30 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#E20935] flex items-center justify-center shadow-2xl animate-bounce-y">
                {/* Dashed Inset Ring */}
                <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-dashed border-white pointer-events-none" />
                <Globe2 className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10" />
              </div>

            </div>
          </div>

          {/* Right Column: About Company Narrative & 2-Column Split */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            
            <div className="sec-sub-title">
              <span>About Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
              Welcome to Experience <br className="hidden sm:block" />Visa Consulting Firm
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Choose <strong className="text-[#16171A]">Viraj Immigration &amp; Smart Geek Visas</strong> as your trusted Australia immigration expert for a smooth journey to permanent residency. Led by senior registered migration counsel, we house one of the most experienced visa processing units in the country, ensuring transparency, accuracy, and secure outcomes at every stage.
            </p>

            {/* Two-Column Split: Checklist Left, Exp-Box Right (Matches theme_about.png) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch pt-2">
              
              {/* Left Column: 4 Bullet Points */}
              <div className="sm:col-span-7 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#16171A]">
                  <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0" />
                  <span>Visa Consulting</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#16171A]">
                  <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0" />
                  <span>Immigration Consultancy</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#16171A]">
                  <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0" />
                  <span>Direct Online Interview</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#16171A]">
                  <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0" />
                  <span>99.9% Visa Approvals</span>
                </div>
              </div>

              {/* Right Column: Visaz Signature Exp-Box */}
              <div className="sm:col-span-5 border-t-[5px] border-[#E20935] bg-[#FAF8F7] p-5 sm:p-6 text-center rounded-b-xl shadow-xs flex flex-col items-center justify-center">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  We&apos;re
                </div>
                <div className="text-4xl sm:text-5xl font-black text-[#E20935] leading-none my-1 font-mono">
                  15+
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#16171A] leading-tight">
                  Years Of Experience
                </div>
              </div>

            </div>

            {/* Devika Tower Delhi HQ Callout */}
            <div className="p-3.5 rounded-xl bg-[#FAF8F7] border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E20935]/15 border border-[#E20935] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#E20935]" />
              </div>
              <div className="text-xs text-slate-700">
                <strong className="text-[#16171A] block font-bold">Delhi Headquarters:</strong>
                10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi, Delhi 110019
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => openModal()}
                className="btn-style-one"
              >
                <span>Book Free Consultation &gt;</span>
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
