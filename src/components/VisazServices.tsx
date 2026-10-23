"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Award, Plane, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

const SERVICES = [
  {
    id: "student-visa",
    slug: "study-visa",
    title: "Student Visa",
    desc: "Complete admissions and student visa processing for top universities in Australia, Canada, the UK & Europe with clear pathways to post-study work and PR.",
    image: "/visaz-assets/images/resource/service1-1.jpg",
    icon: <GraduationCap className="w-8 h-8 text-white" />
  },
  {
    id: "business-visa",
    slug: "business-investor",
    title: "Business Visa",
    desc: "Strategic investor visas, Start-Up Visa programs, and entrepreneur sponsorship routes for high-net-worth professionals expanding globally.",
    image: "/visaz-assets/images/resource/service1-2.jpg",
    icon: <Briefcase className="w-8 h-8 text-white" />
  },
  {
    id: "worker-visa",
    slug: "work-permit",
    title: "Worker Visa",
    desc: "Employer-sponsored work permits, TSS Subclass 482, LMIA compliance, and skilled worker migration streams with expedited processing.",
    image: "/visaz-assets/images/resource/service1-3.jpg",
    icon: <Award className="w-8 h-8 text-white" />
  },
  {
    id: "permanent-residency",
    slug: "permanent-residency",
    title: "Permanent Residency",
    desc: "Australia Subclasses 189, 190, 491 and Canada Express Entry points-tested permanent residency with 15+ years of legal mastery and 99.9% success.",
    image: "/visaz-assets/images/resource/service1-4.jpg",
    icon: <Plane className="w-8 h-8 text-white" />
  }
];

export default function VisazServices() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2.5">
          <div className="sec-sub-title">
            <span>Service We Provide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
            Explore Our Visa Citizenship<br className="hidden sm:block" /> &amp; Immigration Services
          </h2>
        </div>

        {/* 4 Cards Grid - Matches theme_services.png Exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="relative group transition-all duration-300"
            >
              {/* Photo Box */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden shadow-md">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* White Content Box with Icon at top: -60px, left: 0px (Exact Theme CSS Match) */}
              <div className="relative -mt-8 mx-4 p-6 pt-7 bg-white shadow-[0_10px_60px_rgba(171,171,171,0.25)] text-center transition-all duration-300 group-hover:shadow-2xl">
                
                {/* Red Square Icon Box (60px x 60px) attached to top-left of content box */}
                <div className="absolute -top-[60px] left-0 w-[60px] h-[60px] bg-[#E20935] group-hover:bg-[#16171A] text-white flex items-center justify-center transition-colors duration-300 z-10">
                  {s.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors mb-2.5">
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                  {s.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-bold text-[#16171A] group-hover:text-[#E20935] flex items-center gap-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openModal(s.title)}
                    className="text-xs font-extrabold text-[#E20935] hover:underline cursor-pointer"
                  >
                    Apply Now &gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
