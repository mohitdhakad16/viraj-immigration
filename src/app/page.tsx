"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroLeadForm from "@/components/HeroLeadForm";
import VisazFeatures from "@/components/VisazFeatures";
import VisazAbout from "@/components/VisazAbout";
import VisazServices from "@/components/VisazServices";
import VisazCountry from "@/components/VisazCountry";
import VisazWhyChoose from "@/components/VisazWhyChoose";
import ComparisonSection from "@/components/ComparisonSection";
import OccupationDemandSection from "@/components/OccupationDemandSection";
import AverageSalariesSection from "@/components/AverageSalariesSection";
import VisazAuthorityNarrative from "@/components/VisazAuthorityNarrative";
import VisazProcess from "@/components/VisazProcess";
import VisazStats from "@/components/VisazStats";
import TestimonialSlider from "@/components/TestimonialSlider";
import MediaMentions from "@/components/MediaMentions";
import HomeFaq from "@/components/HomeFaq";
import RunningMarquee from "@/components/RunningMarquee";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";
import {
  ShieldCheck,
  Award,
  Compass,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Star
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useConsultationModal();

  return (
    <div className="w-full bg-[#FAF8F7] text-[#16171A]">
      
      {/* 1. HERO SECTION (Matches Visaz theme_slider.png layout + SmartGeek Copy) */}
      <section className="relative bg-[#16171A] text-white overflow-hidden pt-12 pb-16 lg:py-24 border-b border-white/10">
        {/* Authentic Visaz Background Slider Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/visaz-assets/images/main-slider/1.jpg"
            alt="Visaz Immigration Advisory Banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F12]/95 via-[#16171A]/88 to-[#0E0F12]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(226,9,53,0.25),transparent_70%)]" />
        </div>

        {/* Ambient floating red flares */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Authority */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Visaz Red Ribbon Subtitle Tag (Matches theme_slider.png) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#E20935] text-white shadow-md">
                <span>15+ Years Mastery • Australia &amp; Canada PR</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Dream, Apply, Achieve:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#ff6b8b]">
                  Begin Your PR Journey Now
                </span>
              </h1>

              {/* Sub-copy from SmartGeek */}
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                <strong className="font-extrabold text-white">15+ Years of Mastery.</strong> Led by senior migration counsel, we simplify the immigration journey and optimize your points test with an audited <strong className="font-extrabold text-[#ff476d]">99.9% success rate</strong>. Legally accredited counsel providing statutory pre-assessment, skills assessment drafting, and zero-defect visa filing for Australia, Canada, the UK, Europe, and the UAE.
              </p>

              {/* Authority & Stat Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-[#E20935]/40 transition-colors">
                  <Award className="w-5 h-5 text-[#E20935] shrink-0" />
                  <div>
                    <div className="font-extrabold text-white text-sm">30,000+ Grants</div>
                    <div className="text-[11px] text-slate-300 font-medium">Direct Lawyer Filing</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-emerald-500/40 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-extrabold text-white text-sm">99.9% Success</div>
                    <div className="text-[11px] text-slate-300 font-medium">Audited Approvals</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs sm:text-sm font-semibold hover:border-blue-500/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="font-extrabold text-white text-sm">Zero Defect</div>
                    <div className="text-[11px] text-slate-300 font-medium">Statutory Pre-Screen</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Visaz Slide Animations */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => openModal()}
                  className="btn-style-one w-full sm:w-auto"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <Link
                  href="/assessment"
                  className="btn-style-two w-full sm:w-auto bg-white/10 text-white border-white/20 hover:border-[#E20935]"
                >
                  <Sparkles className="w-4 h-4 text-[#E20935] mr-1" />
                  <span>Check Your PR Points</span>
                </Link>
              </div>

              {/* Direct Hotline Pill */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 pt-1">
                <PhoneCall className="w-4 h-4 text-[#E20935] animate-pulse" />
                <span>Immediate Legal Advisory Desk:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-white font-bold hover:text-[#ff476d] hover:underline cursor-pointer"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Social Proof Avatar Strip */}
              <div className="pt-2 flex items-center gap-3">
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

            {/* Right Column: High-Converting Hero Lead Form */}
            <div className="lg:col-span-5">
              <HeroLeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* 2. RUNNING RED MARQUEE TICKER (High-Impact Immigration Announcements) */}
      <RunningMarquee />

      {/* 3. VISAZ SIGNATURE "WHAT WE OFFER" SECTION (Matches theme_features.png) */}
      <VisazFeatures />

      {/* 4. VISAZ "ABOUT COMPANY" SECTION (Matches theme_about.png) */}
      <VisazAbout />

      {/* 5. VISAZ "SERVICE WE PROVIDE" SECTION (Matches theme_services.png) */}
      <VisazServices />

      {/* 6. VISAZ "CHOOSE COUNTRY" SECTION (Matches theme_country.png) */}
      <VisazCountry />

      {/* 7. VISAZ "WHY CHOOSE US" SECTION (Matches theme_why_choose.png) */}
      <VisazWhyChoose />

      {/* 8. WHAT MAKES US DIFFERENT FROM OTHERS? (SMARTGEEK COMPARISON MATRIX) */}
      <ComparisonSection />

      {/* 9. OCCUPATION DEMAND IN AUSTRALIA (SMARTGEEK SECTION) */}
      <OccupationDemandSection />

      {/* 10. AVERAGE SALARIES IN AUSTRALIA (SMARTGEEK BENCHMARK TABLE) */}
      <AverageSalariesSection />

      {/* 11. YOUR TRUSTED PARTNER FOR AUSTRALIA PR (FULL NARRATIVE) */}
      <VisazAuthorityNarrative />

      {/* 12. WORKING PROCESS (Matches theme_process.png) */}
      <VisazProcess />

      {/* 13. STATS & PROVEN NUMBERS BANNER */}
      <VisazStats />

      {/* 14. CLIENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-[#16171A] text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/30">
              Our Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Explore Why People Say About Our Services
            </h2>
            <p className="text-sm text-slate-300">
              Over 30,000+ individuals and families have achieved permanent residency through our regulated advisory.
            </p>
          </div>

          <TestimonialSlider />

          <div className="mt-12 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ff476d] hover:text-white underline cursor-pointer"
            >
              <span>View All Verified Client Approval Grants &amp; Video Interviews &gt;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 15. MEDIA MENTIONS (SMARTGEEK 12 PUBLICATION LOGOS) */}
      <MediaMentions />

      {/* 16. FREQUENTLY ASKED QUESTIONS (SMARTGEEK 8 PR FAQS) */}
      <HomeFaq />

      {/* 17. PRE-FOOTER CTA STRIP */}
      <section className="bg-gradient-to-b from-[#141518] to-[#16171A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center mx-auto">
            <Compass className="w-7 h-7 text-[#E20935]" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Begin Your Permanent Residency Journey Today
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get your qualifications, work history, and points audited by our Senior Migration Counsel. The initial assessment is 100% free with no obligations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => openModal()}
              className="btn-style-one w-full sm:w-auto"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="btn-style-two w-full sm:w-auto text-white bg-white/10 border-white/20 hover:border-[#E20935]"
            >
              <PhoneCall className="w-4 h-4 text-[#E20935] mr-1" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
