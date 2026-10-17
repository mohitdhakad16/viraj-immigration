"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroLeadForm from "@/components/HeroLeadForm";
import CountryTabs from "@/components/CountryTabs";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import TestimonialSlider from "@/components/TestimonialSlider";
import InteractiveGlobeSection from "@/components/InteractiveGlobeSection";
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

  const tickerItems = [
    "✦ MARA REGISTERED (MARN 1802914)",
    "✦ CICC LICENSED (RCIC R531892)",
    "✦ 98.7% VISA APPROVAL RATE",
    "✦ CANADA EXPRESS ENTRY & PNP",
    "✦ AUSTRALIA SUBCLASS 189/190/491",
    "✦ ZERO REJECTION PROTOCOL",
    "✦ 8,500+ VISAS GRANTED",
    "✦ UK SKILLED WORKER & GLOBAL TALENT",
    "✦ GERMANY CHANCENKARTE OPPORTUNITY CARD",
    "✦ 100% LEGAL ATTORNEY LODGEMENT"
  ];

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION (Visaz Red + Charcoal Theme) */}
      <section className="relative bg-[#16171A] text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-white/10">
        {/* Ambient atmospheric red flares */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Value Proposition & Authority */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/15 border border-[#E20935]/40 text-[#ff476d] shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#E20935]" />
                <span>MARA Registered: 1802914 & CICC Licensed: R531892</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Your Direct Pathway to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
                  Global Residency & PR
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Legally accredited immigration counsel for <strong>Canada Express Entry & PNP</strong>, <strong>Australia Subclass 189/190/491</strong>, Work Permits & Global Migration with an audited <strong>98.7% success rate</strong>.
              </p>

              {/* Trust Value Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-slate-200">Zero Rejection Protocol</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <Award className="w-4 h-4 text-[#E20935] shrink-0" />
                  <span className="font-semibold text-slate-200">8,500+ Visa Grants</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-semibold text-slate-200">India & Melbourne Offices</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openModal()}
                  className="px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 flex items-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Book Free Legal Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/assessment"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E20935] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#E20935]" />
                  <span>Calculate PR Points</span>
                </Link>
              </div>

              {/* Direct Hotline Pill */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#E20935] animate-pulse" />
                <span>Immediate Consultant Hotline:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-white font-bold hover:text-[#E20935] hover:underline cursor-pointer"
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

      {/* 2. CONTINUOUS ANIMATED TICKER MARQUEE (Visaz Style) */}
      <div className="bg-[#E20935] text-white py-3 overflow-hidden select-none border-y border-red-700 shadow-md">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-widest">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. STATS & ACCREDITATION STRIP */}
      <section className="bg-[#0E0F12] py-10 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E20935]/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#E20935] font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">
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
      <section className="py-20 relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Specialized Legal Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171A] tracking-tight">
              Comprehensive Visa & Immigration Pathways
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every visa category is managed directly by registered barristers, ensuring error-free documentation, strict timeline adherence, and maximum point score claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/80 via-[#16171A]/20 to-transparent" />
                  
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E20935] text-white shadow-md">
                    {service.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-semibold text-white">
                      Success: {service.successRate}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E20935]" />
                        Avg Time: {service.processingTime}
                      </span>
                      <span className="text-emerald-600 font-bold">100% Legal Filing</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#16171A] group-hover:text-[#E20935] flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Explore Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openModal(service.title)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E20935] text-white hover:bg-[#c5072d] transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Assessment Callout Card */}
            <div className="bg-[#16171A] rounded-3xl p-8 border border-[#E20935]/30 text-white flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#E20935]" />
                </div>
                <span className="text-xs font-bold text-[#ff476d] uppercase tracking-wider block">
                  Not Sure Which Visa Fits?
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Let Our Licensed Lawyers Evaluate Your Profile
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Avoid costly application rejections. We analyze your age, education, language test, and work background to recommend the highest probability pathway.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openModal()}
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-[#E20935] hover:bg-[#c5072d] text-white uppercase tracking-wider shadow-lg shadow-red-600/30 active:scale-95 transition-all text-center block cursor-pointer"
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
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
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
      <section className="py-20 bg-[#0E0F12] text-white relative overflow-hidden">
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
      <section className="py-20 bg-[#f8f6f1]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
              Streamlined Legal Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171A] tracking-tight">
              How We Turn Your Dream Into Permanent Residency
            </h2>
            <p className="text-sm text-slate-600">
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
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E20935] transition-all duration-300 relative group cursor-pointer"
              >
                <div className="text-4xl font-extrabold text-slate-200 font-mono group-hover:text-[#E20935]/30 transition-colors mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CLIENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-20 bg-[#16171A] text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/30">
              Verified Visa Approvals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Stories of New Beginnings Across the Globe
            </h2>
            <p className="text-sm text-slate-300">
              Over 8,500 individuals and families have realized their migration dreams through our licensed advisory.
            </p>
          </div>

          <TestimonialSlider />

          <div className="mt-12 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff476d] hover:text-white underline cursor-pointer"
            >
              <span>View All Verified Client Approval Grants & Video Interviews →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 10. PRE-FOOTER CTA STRIP */}
      <section className="bg-[#16171A] text-white py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center mx-auto">
            <Compass className="w-7 h-7 text-[#E20935]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Begin Your Permanent Residency Journey Today
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get your qualifications, work history, and points audited by our Senior Migration Counsel. The initial assessment is 100% free with no obligations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider cursor-pointer"
            >
              Book Free Consultation
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center gap-2 cursor-pointer"
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
