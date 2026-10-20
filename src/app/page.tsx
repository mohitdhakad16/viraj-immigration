"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroLeadForm from "@/components/HeroLeadForm";
import CountryTabs from "@/components/CountryTabs";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import TestimonialSlider from "@/components/TestimonialSlider";
import InteractiveGlobeSection from "@/components/InteractiveGlobeSection";
import HomeFaq from "@/components/HomeFaq";
import RunningMarquee from "@/components/RunningMarquee";
import CountryFlag from "@/components/CountryFlag";
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
  FileCheck,
  Send,
  Building2,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Plane
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
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION (Light Theme + Red Accents) */}
      <section className="relative bg-gradient-to-b from-[#ffffff] via-[#fcfbfa] to-[#f5f2ea] text-[#16171A] overflow-hidden pt-8 pb-14 lg:py-20 border-b border-slate-200">
        {/* Ambient atmospheric red flares */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E20935]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Value Proposition & Authority */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-red-50 border border-red-200 text-[#E20935] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#E20935] shrink-0" />
                <span>MARA Registered: 1802914 & CICC Licensed: R531892</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#16171A] leading-[1.12]">
                Your Direct Pathway to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E20935] via-[#c5072d] to-[#990022]">
                  Global Residency & PR
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Over <strong className="font-extrabold text-[#16171A]">8,500+ successful visa grants</strong> with an audited <strong className="font-extrabold text-[#E20935]">98.7% approval rate</strong>. Legally accredited immigration counsel providing statutory pre-assessment, CRS points fortification, and flawless visa lodgement for Canada, Australia, the UK, Europe, USA, and the UAE.
              </p>

              {/* Critical Authority & Attention-to-Detail Stat Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-[#E20935]/40 transition-colors">
                  <Award className="w-5 h-5 text-[#E20935] shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">8,500+ Grants</div>
                    <div className="text-xs text-slate-600 font-medium">Direct Lawyer Filing</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-emerald-500/40 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">98.7% Success</div>
                    <div className="text-xs text-slate-600 font-medium">Audited Approvals</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold hover:border-blue-500/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-extrabold text-[#16171A] text-sm">Zero Rejection</div>
                    <div className="text-xs text-slate-600 font-medium">Statutory Pre-Screen</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => openModal()}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Book Free Legal Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/assessment"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-[#16171A] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#E20935] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#E20935]" />
                  <span>Calculate PR Points</span>
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



      {/* 3. STATS & ACCREDITATION STRIP */}
      <section className="bg-gradient-to-b from-[#121316] to-[#16171A] py-10 sm:py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E20935]/40 transition-colors">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E20935] font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-200 mt-2 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 3D GLOBAL MIGRATION RADAR & CORRIDORS */}
      <InteractiveGlobeSection />

      {/* 5. CORE VISA SERVICES SECTION */}
      <section className="py-14 sm:py-20 relative bg-[#fcfbfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Specialized Legal Practice Areas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16171A] tracking-tight">
              Comprehensive Visa & Immigration Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every visa category is managed directly by registered barristers, ensuring error-free documentation, strict timeline adherence, and maximum point score claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
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
                    <div className="w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-bold text-white">
                      Success: {service.successRate}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#E20935]" />
                        Avg: {service.processingTime}
                      </span>
                      <span className="text-emerald-700 font-bold">100% Legal Filing</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#16171A] group-hover:text-[#E20935] flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Explore Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openModal(service.title)}
                      className="px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-[#E20935] text-white hover:bg-[#c5072d] transition-colors shadow-xs shadow-red-600/20 cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Assessment Callout Card */}
            <div className="bg-[#16171A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E20935]/30 text-white flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E20935]" />
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

              <div className="pt-5">
                <button
                  onClick={() => openModal()}
                  className="w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#E20935] hover:bg-[#c5072d] text-white uppercase tracking-wider shadow-lg shadow-red-600/30 active:scale-95 transition-all text-center block cursor-pointer"
                >
                  Request Profile Evaluation
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE DESTINATION COUNTRIES TABS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16171A] text-white">
              Choose Your Migration Dream
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171A] tracking-tight">
              Top Destination Countries & PR Guidelines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore point requirements, lifestyle perks, average incomes, and direct settlement streams for the world&apos;s most welcoming nations.
            </p>
          </div>

          <CountryTabs />

        </div>
      </section>

      {/* 7. INTERACTIVE ELIGIBILITY & POINTS CALCULATOR SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#141518] via-[#16171A] to-[#141518] text-white relative overflow-hidden border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff476d]">
              Interactive Self-Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Instant PR Points Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Answer 6 simple questions to calculate your eligibility score for Canada Express Entry or Australia SkillSelect.
            </p>
          </div>

          <EligibilityQuiz />
        </div>
      </section>

      {/* 8. OUR 4-STEP LEGAL MIGRATION PROCESS */}
      <section className="py-20 bg-[#fcfbfa] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Streamlined Legal Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
              How We Turn Your Dream Into Permanent Residency
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our 4-phase immigration pipeline guarantees zero filing errors and full legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Legal Eligibility Audit",
                desc: "Complete review of your resume, academic credentials, and language scores by certified immigration attorneys.",
                icon: <FileCheck className="w-6 h-6 text-[#E20935]" />
              },
              {
                step: "02",
                title: "Skill & Document Fortification",
                desc: "Submitting ECA/Skills Assessment with designated authorities (WES, ACS, Engineers Australia, VETASSESS).",
                icon: <Award className="w-6 h-6 text-[#E20935]" />
              },
              {
                step: "03",
                title: "Pool Lodgement & Nomination",
                desc: "Submitting Expression of Interest (EOI), targeting high-probability Provincial (PNP) and State Nominations.",
                icon: <Send className="w-6 h-6 text-[#E20935]" />
              },
              {
                step: "04",
                title: "Visa Grant & Relocation",
                desc: "Receiving your stamped Permanent Residency visa or work permit with complete post-landing settlement support.",
                icon: <Plane className="w-6 h-6 text-[#E20935]" />
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#E20935] transition-all duration-300 relative group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-200 font-mono group-hover:text-[#E20935]/40 transition-colors mb-3">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CLIENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-14 sm:py-20 bg-[#16171A] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/30">
              Verified Visa Approvals
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Stories of New Beginnings Across the Globe
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Over 8,500 individuals and families have realized their migration dreams through our licensed advisory.
            </p>
          </div>

          <TestimonialSlider />

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff476d] hover:text-white underline cursor-pointer"
            >
              <span>View All Verified Client Approval Grants & Video Interviews →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 10. HOME FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <HomeFaq />

      {/* 11. PRE-FOOTER CTA STRIP */}
      <section className="bg-gradient-to-b from-[#141518] to-[#16171A] text-white py-14 sm:py-18 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6 text-[#E20935]" />
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Begin Your Permanent Residency Journey Today
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get your qualifications, work history, and points audited by our Senior Migration Counsel. The initial assessment is 100% free with no obligations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider cursor-pointer"
            >
              Book Free Consultation
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
