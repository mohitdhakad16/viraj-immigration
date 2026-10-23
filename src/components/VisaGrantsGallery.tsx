"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Award, ZoomIn, X, ChevronLeft, ChevronRight, FileCheck, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

interface GrantItem {
  id: number;
  image: string;
  subclass: string;
  clientInitials: string;
  occupation: string;
  country: string;
  turnaround: string;
}

const GRANTS_DATA: GrantItem[] = [
  {
    id: 1,
    image: "/images/grants/grant-1.webp",
    subclass: "Australia Subclass 190 PR",
    clientInitials: "R. Sharma",
    occupation: "Software Engineer",
    country: "Australia (NSW)",
    turnaround: "7 Months"
  },
  {
    id: 2,
    image: "/images/grants/grant-2.webp",
    subclass: "Australia Subclass 189 PR",
    clientInitials: "P. Patel",
    occupation: "Registered Nurse",
    country: "Australia (Direct PR)",
    turnaround: "5 Months"
  },
  {
    id: 3,
    image: "/images/grants/grant-3.webp",
    subclass: "Australia Subclass 491 Regional",
    clientInitials: "A. Verma",
    occupation: "Mechanical Engineer",
    country: "Australia (VIC)",
    turnaround: "6 Months"
  },
  {
    id: 4,
    image: "/images/grants/grant-4.webp",
    subclass: "Canada Express Entry PR",
    clientInitials: "G. Singh",
    occupation: "Financial Analyst",
    country: "Canada (Ontario)",
    turnaround: "6 Months"
  },
  {
    id: 5,
    image: "/images/grants/grant-5.webp",
    subclass: "Australia Subclass 190 PR",
    clientInitials: "S. Nair",
    occupation: "Early Childhood Teacher",
    country: "Australia (SA)",
    turnaround: "4 Months"
  },
  {
    id: 6,
    image: "/images/grants/grant-6.webp",
    subclass: "Australia Subclass 189 PR",
    clientInitials: "V. Gupta",
    occupation: "Database Administrator",
    country: "Australia (SkillSelect)",
    turnaround: "8 Months"
  },
  {
    id: 7,
    image: "/images/grants/grant-7.webp",
    subclass: "Australia Subclass 491 PR",
    clientInitials: "K. Reddy",
    occupation: "Civil Engineer",
    country: "Australia (QLD)",
    turnaround: "6 Months"
  },
  {
    id: 8,
    image: "/images/grants/grant-8.webp",
    subclass: "Canada Provincial Nominee (PNP)",
    clientInitials: "M. Kaur",
    occupation: "Marketing Specialist",
    country: "Canada (BC PNP)",
    turnaround: "9 Months"
  }
];

export default function VisaGrantsGallery() {
  const [selectedGrant, setSelectedGrant] = useState<GrantItem | null>(null);
  const { openModal } = useConsultationModal();

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGrant) return;
    const currentIndex = GRANTS_DATA.findIndex((g) => g.id === selectedGrant.id);
    const prevIndex = (currentIndex - 1 + GRANTS_DATA.length) % GRANTS_DATA.length;
    setSelectedGrant(GRANTS_DATA[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGrant) return;
    const currentIndex = GRANTS_DATA.findIndex((g) => g.id === selectedGrant.id);
    const nextIndex = (currentIndex + 1) % GRANTS_DATA.length;
    setSelectedGrant(GRANTS_DATA[nextIndex]);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="sec-sub-title">
            <span>Verified PR Approvals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
            Our Success Story:{" "}
            <span className="text-[#E20935]">Verified Visa Approval Grants</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real permanent residency grant letters secured for our clients through Australian SkillSelect (Subclasses 189, 190, 491) and Canada Express Entry. Client personal identifiers are masked to respect strict statutory confidentiality.
          </p>
        </div>

        {/* 8 Grants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRANTS_DATA.map((grant) => (
            <div
              key={grant.id}
              onClick={() => setSelectedGrant(grant)}
              className="group bg-[#FAF8F7] rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#E20935]/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Document Preview Container */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={grant.image}
                  alt={`${grant.subclass} Grant Letter`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Subclass Pill */}
                <div className="absolute top-3 left-3 bg-[#16171A]/90 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                  <FileCheck className="w-3 h-3 text-[#E20935]" />
                  <span>{grant.subclass}</span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#E20935] text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold text-white/90 truncate">{grant.occupation}</div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 mt-0.5">
                    <span>{grant.country}</span>
                    <span className="text-emerald-400 font-bold">Granted in {grant.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3.5 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Client: {grant.clientInitials}</span>
                </div>
                <span className="text-[11px] font-bold text-[#E20935] group-hover:underline flex items-center gap-0.5">
                  View <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust CTA Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#E20935]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                Want Your Australia PR Visa Grant Next?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                15+ Years Mastery with audited 99.9% approval grant rate across all nominated skills.
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="btn-style-one shrink-0 w-full sm:w-auto"
          >
            <span>Check Your Eligibility Now</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Grant Detail Zoom */}
      {selectedGrant && (
        <div
          onClick={() => setSelectedGrant(null)}
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-[#16171A] text-white">
              <div>
                <span className="text-[11px] font-bold text-[#E20935] uppercase tracking-wider block">
                  Official Visa Grant Notice
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedGrant.subclass} — {selectedGrant.occupation}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGrant(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E20935] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grant Image Preview */}
            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-slate-900 overflow-y-auto">
              <Image
                src={selectedGrant.image}
                alt={`${selectedGrant.subclass} Grant Letter`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  setSelectedGrant(null);
                  openModal(`Eligibility Check for ${selectedGrant.subclass}`);
                }}
                className="btn-style-one text-xs px-5 py-2.5"
              >
                Claim Free Profile Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
