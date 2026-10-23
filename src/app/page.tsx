"use client";

import React from "react";
import Link from "next/link";
import VisazHeroSlider from "@/components/VisazHeroSlider";
import RunningMarquee from "@/components/RunningMarquee";
import VisazFeatures from "@/components/VisazFeatures";
import VisazAbout from "@/components/VisazAbout";
import VisazServices from "@/components/VisazServices";
import VisazCountry from "@/components/VisazCountry";
import VisazWhyChoose from "@/components/VisazWhyChoose";
import ComparisonSection from "@/components/ComparisonSection";
import OccupationDemandSection from "@/components/OccupationDemandSection";
import AverageSalariesSection from "@/components/AverageSalariesSection";
import VisazAuthorityNarrative from "@/components/VisazAuthorityNarrative";
import VisazContactSection from "@/components/VisazContactSection";
import VisazProcess from "@/components/VisazProcess";
import VisazStats from "@/components/VisazStats";
import TestimonialSlider from "@/components/TestimonialSlider";
import VisazClients from "@/components/VisazClients";
import HomeFaq from "@/components/HomeFaq";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";
import { Compass, ArrowRight, PhoneCall } from "lucide-react";

export default function HomePage() {
  const { openModal } = useConsultationModal();

  return (
    <div className="w-full bg-[#FAF8F7] text-[#16171A]">
      
      {/* 1. HERO SLIDER SECTION (800px Grand Cinematic Hero - Exact Visaz Theme Match) */}
      <VisazHeroSlider />

      {/* 2. RUNNING RED MARQUEE TICKER (High-Impact Immigration Announcements) */}
      <RunningMarquee />

      {/* 3. VISAZ SIGNATURE "WHAT WE OFFER" SECTION (Exact Match to theme_features.png) */}
      <VisazFeatures />

      {/* 4. VISAZ "ABOUT COMPANY" SECTION (Exact Match to theme_about.png) */}
      <VisazAbout />

      {/* 5. VISAZ "SERVICE WE PROVIDE" SECTION (Exact Match to theme_services.png) */}
      <VisazServices />

      {/* 6. VISAZ "CHOOSE COUNTRY" SECTION (Exact Match to theme_country.png) */}
      <VisazCountry />

      {/* 7. VISAZ "WHY CHOOSE US" SECTION (Exact Match to theme_why_choose.png) */}
      <VisazWhyChoose />

      {/* 8. WHAT MAKES US DIFFERENT FROM OTHERS? (SMARTGEEK 9-POINT COMPARISON MATRIX) */}
      <ComparisonSection />

      {/* 9. OCCUPATION DEMAND IN AUSTRALIA (SMARTGEEK HIGH-DEMAND SECTORS) */}
      <OccupationDemandSection />

      {/* 10. AVERAGE SALARIES IN AUSTRALIA (SMARTGEEK STATUTORY SALARY BENCHMARKS) */}
      <AverageSalariesSection />

      {/* 11. YOUR TRUSTED PARTNER FOR AUSTRALIA PR (FULL SMARTGEEK NARRATIVE) */}
      <VisazAuthorityNarrative />

      {/* 12. VISAZ "CONTACT SECTION / CONSULTATION SUMMIT" (Matches theme contact-section with HeroLeadForm) */}
      <VisazContactSection />

      {/* 13. WORKING PROCESS (Exact Match to theme_process.png) */}
      <VisazProcess />

      {/* 14. STATS & PROVEN NUMBERS BANNER */}
      <VisazStats />

      {/* 15. CLIENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-[#16171A] text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-16">
            <div className="sec-sub-title">
              <span className="text-[#ff476d]">Our Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
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

      {/* 16. VISAZ TRUSTED PARTNERS (Authentic Visaz Theme Clients Strip, Replaces SmartGeek Media Images) */}
      <VisazClients />

      {/* 17. FREQUENTLY ASKED QUESTIONS (SMARTGEEK 8 PR FAQS) */}
      <HomeFaq />

      {/* 18. PRE-FOOTER CTA STRIP */}
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
