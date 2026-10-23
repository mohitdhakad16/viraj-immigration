"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function VisazWhyChoose() {
  const { openModal } = useConsultationModal();

  const blocks = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E20935]" />,
      title: "ICCRC & MARA Registered Counsel",
      desc: "Direct representation under Australian MARA (1802914) and Canadian CICC (R531892) licenses ensures 100% legal compliance and statutory audit clearance."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#E20935]" />,
      title: "Strategic Australia Pathways (189, 190, 491)",
      desc: "Fast-tracked state nomination strategies, points test optimization, and ANZSCO/NOC job descriptions crafted to meet current migration quotas."
    },
    {
      icon: <Award className="w-6 h-6 text-[#E20935]" />,
      title: "99.9% Audited Visa Grant Rate",
      desc: "Mission Zero Defect quality control process with multiple review stages before lodgement, turning complex immigration cases into successful grants."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reasons List (Matches theme_why_choose.png) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="sec-sub-title">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
                Some Reasons People <br className="hidden sm:block" />Like Our Consultancy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We equip our clients with comprehensive information and honest legal guidance, enabling well-informed decisions at every step of their journey.
              </p>
            </div>

            {/* Choose Blocks */}
            <div className="space-y-6">
              {blocks.map((b, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F7] border border-slate-200/80 hover:border-[#E20935]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 mt-0.5">
                    {b.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[#16171A]">
                      {b.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => openModal()}
                className="btn-style-one"
              >
                <span>Book Free Consultation &gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Image Collage with Floating Red Badge (Matches theme_why_choose.png) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Photo Collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/visaz-assets/images/resource/choose1-1.jpg"
                    alt="Visaz Team Meeting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white mt-8">
                  <Image
                    src="/visaz-assets/images/resource/choose1-2.jpg"
                    alt="Client Consultation"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Red Customer Box (Exact Visaz Theme match from theme_why_choose.png) */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-12 sm:right-12 z-20 bg-[#E20935] text-white p-6 rounded-3xl shadow-2xl border-4 border-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black leading-tight">
                      30,000+ Trusted<br />Clients
                    </h4>
                    <span className="text-xs text-white/90 font-medium">Over 15+ Years of Mastery</span>
                  </div>

                  {/* Avatars Strip */}
                  <div className="flex items-center -space-x-3">
                    <div className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-white">
                      <Image src="/visaz-assets/images/resource/avatar-1.png" alt="Client 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-white">
                      <Image src="/visaz-assets/images/resource/avatar-2.png" alt="Client 2" fill className="object-cover" />
                    </div>
                    <div className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-white">
                      <Image src="/visaz-assets/images/resource/avatar-3.png" alt="Client 3" fill className="object-cover" />
                    </div>
                    <div className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-white">
                      <Image src="/visaz-assets/images/resource/avatar-4.png" alt="Client 4" fill className="object-cover" />
                    </div>
                    <div className="w-11 h-11 rounded-full border-2 border-white bg-[#16171A] text-white flex items-center justify-center text-xs font-bold shadow-md">
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
