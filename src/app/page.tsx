"use client";

import React from "react";
import Link from "next/link";
import VisazHeroSlider from "@/components/VisazHeroSlider";
import VisazFeatures from "@/components/VisazFeatures";
import VisazAbout from "@/components/VisazAbout";
import VisazServices from "@/components/VisazServices";
import VisazCountry from "@/components/VisazCountry";
import VisazWhyChoose from "@/components/VisazWhyChoose";
import VisazContactSection from "@/components/VisazContactSection";
import VisazProcess from "@/components/VisazProcess";
import TestimonialSlider from "@/components/TestimonialSlider";
import VisazClients from "@/components/VisazClients";

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF8F7] text-[#16171A]">
      
      {/* 1. HERO SLIDER SECTION (800px Grand Cinematic Hero - Exact Visaz Theme Match) */}
      <VisazHeroSlider />

      {/* 2. VISAZ SIGNATURE "WHAT WE OFFER" SECTION (Exact Match to theme_features.png) */}
      <VisazFeatures />

      {/* 3. VISAZ "ABOUT COMPANY" SECTION (Exact Match to theme_about.png) */}
      <VisazAbout />

      {/* 4. VISAZ "SERVICE WE PROVIDE" SECTION (Exact Match to theme_services.png) */}
      <VisazServices />

      {/* 5. VISAZ "CHOOSE COUNTRY" SECTION (Exact Match to theme_country.png) */}
      <VisazCountry />

      {/* 6. VISAZ "WHY CHOOSE US" SECTION (Exact Match to theme_why_choose.png) */}
      <VisazWhyChoose />

      {/* 7. VISAZ "CONTACT SECTION / CONSULTATION SUMMIT" (Exact Match to theme contact-section with Consultation Lead Form) */}
      <VisazContactSection />

      {/* 8. WORKING PROCESS (Exact Match to theme_process.png) */}
      <VisazProcess />

      {/* 9. CLIENT SUCCESS STORIES & TESTIMONIALS (Exact Match to theme testimonial-section) */}
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

      {/* 10. VISAZ TRUSTED PARTNERS (Exact Match to theme clients-section) */}
      <VisazClients />

    </div>
  );
}
