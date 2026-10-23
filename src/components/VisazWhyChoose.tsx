"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, TrendingUp, ArrowRight, UserCheck } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazWhyChoose() {
  const { openModal } = useConsultationModal();

  const blocks = [
    {
      icon: <UserCheck className="w-9 h-9 text-[#E20935]" />,
      title: "Direct Online Interviews",
      desc: "Connect directly with certified migration attorneys and MARA/ICCRC legal counsel for live profile screening and fast-track roadmap planning."
    },
    {
      icon: <TrendingUp className="w-9 h-9 text-[#E20935]" />,
      title: "Quick & Easy Process",
      desc: "Fast-tracked skills assessment filings (ACS, EA, VETASSESS) and state nomination submissions with zero documentation delays."
    },
    {
      icon: <Award className="w-9 h-9 text-[#E20935]" />,
      title: "99.9% Visa Approval Rate",
      desc: "Audited multi-tier legal compliance pre-screening ensures zero-defect filings and exceptional grant rates across Australia PR and Canada Express Entry."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reasons List (Exact Match to theme_why_choose.png) */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-2.5">
              <div className="sec-sub-title">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
                Some Reasons People <br className="hidden sm:block" />Like Our Consultancy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                We equip our clients with comprehensive information and honest legal guidance, enabling well-informed decisions at every step of their journey.
              </p>
            </div>

            {/* Choose Blocks - Clean Typography with Red Icons & Faint Circle (Matches theme_why_choose.png) */}
            <div className="space-y-7 pt-2">
              {blocks.map((b, idx) => (
                <div key={idx} className="flex items-start group">
                  {/* Icon with faint pink circular highlight behind it */}
                  <div className="relative shrink-0 w-14 h-14 flex items-center justify-center">
                    <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#E20935]/10 group-hover:scale-125 transition-transform duration-300 pointer-events-none" />
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {b.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="ml-6 space-y-1">
                    <h5 className="text-lg sm:text-xl font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                      {b.title}
                    </h5>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openModal()}
                className="btn-style-one"
              >
                <span>Book Free Consultation &gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Image Composition with Floating Red Exp-Box (Matches theme_why_choose.png) */}
          <div className="lg:col-span-6 relative pb-16 lg:pb-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* 3 Photos Layout */}
              <div className="grid grid-cols-12 gap-4 items-start">
                
                {/* Image 1: Tall Vertical Image on the left (choose1-1.jpg) */}
                <div className="col-span-6 relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/visaz-assets/images/resource/choose1-1.jpg"
                    alt="Visaz Team Meeting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Right Stack: Image 2 & Image 3 */}
                <div className="col-span-6 space-y-4">
                  {/* Image 2 (choose1-2.jpg) */}
                  <div className="relative h-[180px] sm:h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/visaz-assets/images/resource/choose1-2.jpg"
                      alt="Client Consultation"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Image 3 (choose1-3.jpg) */}
                  <div className="relative h-[180px] sm:h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/visaz-assets/images/resource/choose1-3.jpg"
                      alt="Happy Student"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>

              {/* Floating Red Customer Box with pattern-7.png & 5 Avatars (Matches theme_why_choose.png) */}
              <div className="absolute -bottom-8 left-4 right-4 sm:left-10 sm:right-10 z-20 bg-[#E20935] text-white p-6 sm:p-7 shadow-2xl overflow-hidden animate-bounce-y">
                {/* Wavy Pattern Overlay from Theme (pattern-7.png) */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none bg-repeat"
                  style={{ backgroundImage: `url('/visaz-assets/images/icons/pattern-7.png')` }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black leading-tight text-white tracking-tight">
                      30,000+ Trusted <br />Clients
                    </h4>
                    <span className="text-xs text-white/80 font-medium">Over 15+ Years of Mastery</span>
                  </div>

                  {/* Avatars Strip with 5 Theme Avatars and White Plus Circle */}
                  <div className="flex items-center -space-x-3">
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                      <Image src="/visaz-assets/images/resource/avatar-1.png" alt="Client 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                      <Image src="/visaz-assets/images/resource/avatar-2.png" alt="Client 2" fill className="object-cover" />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                      <Image src="/visaz-assets/images/resource/avatar-3.png" alt="Client 3" fill className="object-cover" />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                      <Image src="/visaz-assets/images/resource/avatar-4.png" alt="Client 4" fill className="object-cover" />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                      <Image src="/visaz-assets/images/resource/avatar-5.png" alt="Client 5" fill className="object-cover" />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white bg-white text-[#E20935] flex items-center justify-center font-black text-base shadow-md">
                      +
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
