"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Star
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function VisazHeroSlider() {
  const { openModal } = useConsultationModal();

  return (
    <section className="relative bg-[#16171A] text-white overflow-hidden min-h-[700px] sm:min-h-[760px] lg:min-h-[820px] flex items-center border-b border-white/10">
      {/* Authentic Visaz Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/visaz-assets/images/main-slider/1.jpg"
          alt="Visaz Immigration Advisory Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Visaz Theme Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16171A] via-[#16171A]/85 to-[#16171A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(226,9,53,0.28),transparent_70%)]" />
      </div>

      {/* Decorative ambient flares */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Authentic Visaz Red Ribbon Subtitle Tag (bg-subtitle.png) */}
          <div
            className="inline-flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider px-6 py-2 bg-no-repeat bg-contain bg-left shadow-lg select-none"
            style={{ backgroundImage: `url('/visaz-assets/images/icons/bg-subtitle.png')`, minWidth: 300 }}
          >
            <span>15+ Years Mastery • Australia &amp; Canada PR</span>
          </div>

          {/* Grand 75px Title (Matches theme h1: font-size: 75px, line-height: 90px) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white tracking-tight leading-[1.12]">
            Dream, Apply, Achieve:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#ff6b8b]">
              Begin Your PR Journey Now
            </span>
          </h1>

          {/* Sub-copy from SmartGeek (18px, 32px line-height in theme) */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
            <strong className="font-extrabold text-white">15+ Years of Mastery.</strong> Led by senior migration counsel, we simplify the immigration journey and optimize your points test with an audited <strong className="font-extrabold text-[#ff476d]">99.9% success rate</strong>. Statutory pre-assessment, skills assessment drafting, and zero-defect visa filing for Australia, Canada, the UK, Europe, and the UAE.
          </p>

          {/* Authority Stat Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-2xl">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-[#E20935]/50 transition-colors">
              <Award className="w-5 h-5 text-[#E20935] shrink-0" />
              <div>
                <div className="font-extrabold text-white text-sm">30,000+ Grants</div>
                <div className="text-[11px] text-slate-300 font-medium">Direct Lawyer Filing</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-emerald-500/50 transition-colors">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="font-extrabold text-white text-sm">99.9% Success</div>
                <div className="text-[11px] text-slate-300 font-medium">Audited Approvals</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-blue-500/50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="font-extrabold text-white text-sm">Zero Defect</div>
                <div className="text-[11px] text-slate-300 font-medium">Statutory Pre-Screen</div>
              </div>
            </div>
          </div>

          {/* Action Buttons with Visaz Slide Hover Animations */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <button
              onClick={() => openModal()}
              className="btn-style-one text-sm sm:text-base py-4 px-8"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <Link
              href="/assessment"
              className="btn-style-two text-sm sm:text-base py-4 px-8 bg-white/10 text-white border-white/20 hover:border-[#E20935]"
            >
              <Sparkles className="w-4 h-4 text-[#E20935] mr-1.5" />
              <span>Check Your PR Points</span>
            </Link>
          </div>

          {/* Direct Hotline Pill & Rating Avatars */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <PhoneCall className="w-4 h-4 text-[#E20935] animate-pulse" />
              <span>Immediate Legal Advisory:</span>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="text-white font-bold hover:text-[#ff476d] hover:underline cursor-pointer"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image src="/visaz-assets/images/resource/avatar-1.png" alt="Client 1" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image src="/visaz-assets/images/resource/avatar-2.png" alt="Client 2" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image src="/visaz-assets/images/resource/avatar-3.png" alt="Client 3" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image src="/visaz-assets/images/resource/avatar-4.png" alt="Client 4" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-[#fdc009]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#fdc009]" />
                  ))}
                  <span className="text-white font-bold ml-1">4.9 / 5</span>
                </div>
                <span className="text-slate-300 text-[11px] font-semibold">Over 30,000+ Verified Visa Grants</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
