"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroLeadForm from "@/components/HeroLeadForm";
import VisazFeatures from "@/components/VisazFeatures";
import VisazAbout from "@/components/VisazAbout";
import OccupationDemandSection from "@/components/OccupationDemandSection";
import ComparisonSection from "@/components/ComparisonSection";
import VisazProcess from "@/components/VisazProcess";
import VisazStats from "@/components/VisazStats";
import CountryTabs from "@/components/CountryTabs";
import TestimonialSlider from "@/components/TestimonialSlider";
import InteractiveGlobeSection from "@/components/InteractiveGlobeSection";
import HomeFaq from "@/components/HomeFaq";
import RunningMarquee from "@/components/RunningMarquee";
import { useConsultationModal } from "@/context/ModalContext";
import {
  SERVICES_LIST,
  COMPANY_INFO
} from "@/data/immigrationData";
import {
  ShieldCheck,
  Award,
  Compass,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Sparkles,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Plane,
  Star
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useConsultationModal();

  const serviceIcons: Record<string, React.ReactNode> = {
    "study-visa": <GraduationCap className="w-6 h-6 text-[#E20935]" />,
    "work-permit": <Briefcase className="w-6 h-6 text-[#E20935]" />,
    "permanent-residency": <Award className="w-6 h-6 text-[#E20935]" />,
    "business-investor": <TrendingUp className="w-6 h-6 text-[#E20935]" />,
    "tourist-visitor": <Plane className="w-6 h-6 text-[#E20935]" />
  };

  return (
    <div className="w-full bg-[#f8f6f1] text-[#16171A]">
      
      {/* 1. HERO SECTION (True Visaz Theme Replica + SmartGeek Copy) */}
      <section className="relative bg-gradient-to-b from-[#ffffff] via-[#fcfbfa] to-[#f8f6f1] text-[#16171A] overflow-hidden pt-8 pb-14 lg:py-20 border-b border-slate-200">
        {/* Ambient atmospheric red flares */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E20935]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Authority */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Kicker badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-red-50 border border-red-200 text-[#E20935] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#E20935] shrink-0" />
                <span>MARA Registered: 1802914 &amp; CICC Licensed: R531892</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#16171A] leading-[1.12]">
                Dream, Apply, Achieve:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E20935] via-[#c5072d] to-[#990022]">
                  Begin Your Global PR Journey
                </span>
              </h1>

              {/* Sub-copy from SmartGeek */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                <strong className="font-extrabold text-[#16171A]">15+ Years of Mastery.</strong> We simplify the immigration journey and optimize your points test with an audited <strong className="font-extrabold text-[#E20935]">99.9% success rate</strong>. Legally accredited counsel providing statutory pre-assessment, skills assessment drafting, and zero-defect visa filing for Australia, Canada, the UK, Europe, and the UAE.
              </p>

              {/* Critical Authority & Attention-to-Detail Stat Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-[#E20935]/40 transition-colors">
                  <Award className="w-5 h-5 text-[#E20935] shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">30,000+ Grants</div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Lawyer Filing</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-emerald-500/40 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">99.9% Success</div>
                    <div className="text-[11px] text-slate-500 font-medium">Audited Approvals</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-blue-500/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">Zero Defect</div>
                    <div className="text-[11px] text-slate-500 font-medium">Statutory Pre-Screen</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => openModal()}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/assessment"
                  className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-[#16171A] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#E20935] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#E20935]" />
                  <span>Check Your PR Points</span>
                </Link>
              </div>

              {/* Direct Hotline Pill */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 pt-1">
                <PhoneCall className="w-4 h-4 text-[#E20935] animate-pulse" />
                <span>Immediate Legal Advisory Desk:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-[#16171A] font-bold hover:text-[#E20935] hover:underline cursor-pointer"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Social Proof Avatar Strip */}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Client 3" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Client 4" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-[#fdc009]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fdc009]" />
                    ))}
                    <span className="text-slate-800 font-bold ml-1">4.9 / 5</span>
                  </div>
                  <span className="text-slate-500 text-[11px] font-semibold">Over 30,000+ Verified Visa Grants</span>
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

      {/* 3. VISAZ SIGNATURE 3-CARD "WHAT WE OFFER" SECTION */}
      <VisazFeatures />

      {/* 4. VISAZ "ABOUT COMPANY" SECTION */}
      <VisazAbout />

      {/* 5. OCCUPATION DEMAND & AVERAGE SALARIES (SMARTGEEK SECTION) */}
      <OccupationDemandSection />

      {/* 6. WHAT MAKES US DIFFERENT FROM OTHERS? (SMARTGEEK COMPARISON MATRIX) */}
      <ComparisonSection />

      {/* 7. CORE VISA SERVICES SECTION (Visaz Card Grid) */}
      <section className="py-16 sm:py-24 relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Service We Provide
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
              Explore Our Visa, Citizenship &amp; Immigration Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every visa category is managed directly by registered migration attorneys, ensuring error-free documentation, strict timeline adherence, and maximum point score claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-[#f8f6f1] rounded-3xl border border-slate-200 shadow-xs hover:shadow-2xl hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Header with Badge */}
                <div 
                  className="relative h-52 sm:h-56 w-full overflow-hidden"
                  style={{ position: "relative", minHeight: 208, overflow: "hidden" }}
                >
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/85 via-[#16171A]/25 to-transparent" />
                  
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-[#E20935] text-white shadow-md">
                    {service.badge}
                  </span>

                  <div className="absolute bottom-3 left-3.5 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-bold text-white">
                      Success: {service.successRate}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#E20935]" />
                        Avg: {service.processingTime}
                      </span>
                      <span className="text-emerald-700 font-bold">100% Legal Filing</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#16171A] group-hover:text-[#E20935] flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Explore Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openModal(service.title)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E20935] text-white hover:bg-[#c5072d] transition-colors shadow-xs shadow-red-600/20 cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Assessment Callout Card */}
            <div className="bg-[#16171A] rounded-3xl p-6 sm:p-8 border border-[#E20935]/40 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E20935]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#E20935]" />
                </div>
                <span className="text-xs font-bold text-[#ff476d] uppercase tracking-wider block">
                  Not Sure Which Visa Fits?
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Let Our Licensed Lawyers Evaluate Your Profile
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avoid costly application rejections. We analyze your age, education, language test, and work background to recommend the highest probability pathway.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => openModal()}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#E20935] hover:bg-[#c5072d] text-white uppercase tracking-wider shadow-lg shadow-red-600/30 active:scale-95 transition-all text-center block cursor-pointer"
                >
                  Request Profile Evaluation
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. DESTINATION COUNTRIES ("IMMIGRATION CHOOSE YOUR COUNTRY") */}
      <section className="py-16 sm:py-24 bg-[#f8f6f1] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Choose Country
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
              Immigration: Choose Your Destination Country
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore points benchmarks, annual incomes, lifestyle standards, and direct PR streams for the world&apos;s top immigration corridors.
            </p>
          </div>

          <CountryTabs />

        </div>
      </section>

      {/* 9. WORKING PROCESS ("4 EASY STEPS" - VISAZ PROCESS SECTION) */}
      <VisazProcess />

      {/* 10. STATS & PROVEN NUMBERS BANNER */}
      <VisazStats />

      {/* 11. INTERACTIVE 3D GLOBAL MIGRATION RADAR */}
      <InteractiveGlobeSection />

      {/* 12. CLIENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-[#16171A] text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
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
              <span>View All Verified Client Approval Grants &amp; Video Interviews →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (SMARTGEEK 8 PR FAQS) */}
      <HomeFaq />

      {/* 14. PRE-FOOTER CTA STRIP */}
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
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider cursor-pointer"
            >
              Book Free Consultation
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#E20935]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
