"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Plane,
  Compass,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight,
  RotateCw,
  Award,
  Users,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import CountryFlag from "@/components/CountryFlag";

interface GlobeDestination {
  id: string;
  name: string;
  countryCode: string;
  flag: string;
  city: string;
  cx: number; // percentage in globe circle
  cy: number;
  visaType: string;
  acceptanceRate: number;
  processingWeeks: number;
  avgIncome: string;
  quotaStatus: "Open" | "Fast-Track" | "High Demand";
  keyRequirement: string;
  topRoles: string[];
}

const DESTINATIONS: GlobeDestination[] = [
  {
    id: "canada",
    name: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    city: "Toronto / Vancouver",
    cx: 26,
    cy: 33,
    visaType: "Express Entry & PNP (PR)",
    acceptanceRate: 98.8,
    processingWeeks: 22,
    avgIncome: "$84,500 CAD",
    quotaStatus: "Fast-Track",
    keyRequirement: "CRS ~480+ or PNP Nomination",
    topRoles: ["Cloud Engineers", "Nurses & MDs", "Data Scientists", "Supply Chain"]
  },
  {
    id: "australia",
    name: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    city: "Melbourne / Sydney",
    cx: 78,
    cy: 73,
    visaType: "Subclass 189 / 190 / 491 PR",
    acceptanceRate: 97.9,
    processingWeeks: 28,
    avgIncome: "$96,000 AUD",
    quotaStatus: "High Demand",
    keyRequirement: "65+ Points (SkillSelect Lodgement)",
    topRoles: ["ICT Architects", "Civil Engineers", "Healthcare", "Accountants"]
  },
  {
    id: "uk",
    name: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    city: "London / Edinburgh",
    cx: 46,
    cy: 26,
    visaType: "Skilled Worker & Global Talent",
    acceptanceRate: 99.2,
    processingWeeks: 6,
    avgIncome: "£52,000 GBP",
    quotaStatus: "Fast-Track",
    keyRequirement: "CoS Sponsorship or Tech Nation Endorsement",
    topRoles: ["Fintech Leads", "AI Researchers", "Medical Officers", "Corporate Legal"]
  },
  {
    id: "germany",
    name: "Germany & EU",
    countryCode: "DE",
    flag: "🇩🇪",
    city: "Berlin / Munich",
    cx: 58,
    cy: 36,
    visaType: "Chancenkarte (Opportunity Card) & EU Blue Card",
    acceptanceRate: 98.4,
    processingWeeks: 8,
    avgIncome: "€72,000 EUR",
    quotaStatus: "Open",
    keyRequirement: "Recognized Degree + 6 Opportunity Points",
    topRoles: ["Automotive Engineers", "Software Devs", "Renewable Energy", "Physicists"]
  },
  {
    id: "usa",
    name: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    city: "New York / Silicon Valley",
    cx: 22,
    cy: 48,
    visaType: "EB-5 Investor & L-1 Executive Transfer",
    acceptanceRate: 96.5,
    processingWeeks: 54,
    avgIncome: "$118,000 USD",
    quotaStatus: "Open",
    keyRequirement: "Commercial Investment or Multinational Manager",
    topRoles: ["Tech Founders", "C-Suite Execs", "Biotech Directors", "Venture Partners"]
  },
  {
    id: "uae",
    name: "UAE & Dubai",
    countryCode: "AE",
    flag: "🇦🇪",
    city: "Dubai & Abu Dhabi",
    cx: 66,
    cy: 50,
    visaType: "10-Year Golden Visa & Freelance Residency",
    acceptanceRate: 99.6,
    processingWeeks: 3,
    avgIncome: "AED 320,000",
    quotaStatus: "Fast-Track",
    keyRequirement: "Specialized Talent or Real Estate Investor",
    topRoles: ["Real Estate Investors", "AI Engineers", "Media Executives", "Specialist Doctors"]
  }
];

export default function InteractiveGlobeSection() {
  const [selectedDest, setSelectedDest] = useState<GlobeDestination>(DESTINATIONS[0]);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const { openModal } = useConsultationModal();

  // Auto-cycle through destinations when autoRotate is on
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setSelectedDest((prev) => {
        const currentIndex = DESTINATIONS.findIndex((d) => d.id === prev.id);
        const nextIndex = (currentIndex + 1) % DESTINATIONS.length;
        return DESTINATIONS[nextIndex];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <section className="py-16 sm:py-24 bg-[#16171A] text-white relative overflow-hidden border-y border-white/10">
      {/* Animated Glowing Background Matrix Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#E20935]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#E20935]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-[#E20935]/40 text-[#ff4d6d] text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Globe className="w-3.5 h-3.5 animate-spin-slow text-[#E20935]" />
            <span>Interactive Global Migration Radar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Explore Your Immigration Corridors in <span className="red-gradient-text">Real Time</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click any country pin or destination tab to inspect live visa stream quotas, acceptance rates, expected processing timelines, and average starting salaries.
          </p>

          {/* Destination Country Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mt-6 sm:mt-8 max-w-5xl mx-auto w-full">
            {DESTINATIONS.map((dest) => {
              const isSelected = selectedDest.id === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => {
                    setSelectedDest(dest);
                  }}
                  className={`w-full flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2.5 rounded-xl text-xs lg:text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#E20935] text-white shadow-lg shadow-red-600/40 ring-2 ring-[#E20935]/50 scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-[#E20935]/40"
                  }`}
                >
                  <CountryFlag code={dest.countryCode} size="sm" className="shrink-0" />
                  <span className="whitespace-nowrap">{dest.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Grid: Left 3D Globe + Right Interactive Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 3D Globe & Radar Sphere */}
          <div className="lg:col-span-7 bg-[#0E0F12]/80 rounded-3xl border border-white/10 p-5 sm:p-8 backdrop-blur-xl relative shadow-2xl flex flex-col justify-between">
            
            {/* Top Globe Toolbar */}
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>HQ Origin: <strong>New Delhi / Mumbai</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E20935]" />
                <span>6 Destination Corridors</span>
              </div>
            </div>

            {/* Interactive SVG 3D Globe Visualization */}
            <div className="w-full flex items-center justify-center my-auto py-4 sm:py-6">
              <div className="relative w-full max-w-[500px] sm:max-w-[520px] lg:max-w-[530px] aspect-square flex items-center justify-center">
                
                {/* Outer Atmospheric Rings */}
                <div className="absolute -inset-5 sm:-inset-6 rounded-full border border-dashed border-white/10 animate-reverse-spin-slow pointer-events-none" />
                <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border border-[#E20935]/25 animate-spin-slow pointer-events-none" />

                {/* Main Glowing Globe Sphere (Guaranteed 100% True Geometric Circle) */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1c1e24] via-[#121316] to-[#0a0a0d] border-2 border-red-500/35 shadow-[0_0_90px_rgba(226,9,53,0.3)] relative overflow-hidden flex items-center justify-center">
                  
                  {/* SVG Longitude & Latitude Graticule */}
                  <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 100">
                    {/* Latitudes */}
                    <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="#E20935" strokeWidth="0.4" strokeDasharray="1 2" />
                    <ellipse cx="50" cy="50" rx="45" ry="26" fill="none" stroke="#E20935" strokeWidth="0.4" strokeDasharray="1 2" />
                    <ellipse cx="50" cy="50" rx="45" ry="38" fill="none" stroke="#E20935" strokeWidth="0.4" strokeDasharray="1 2" />
                    {/* Longitudes */}
                    <ellipse cx="50" cy="50" rx="12" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1 2" />
                    <ellipse cx="50" cy="50" rx="26" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1 2" />
                    <ellipse cx="50" cy="50" rx="38" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1 2" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#E20935" strokeWidth="0.6" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.5" />

                    {/* Flight Arc from India (67, 52) to Selected Destination */}
                    <path
                      d={`M 66 52 Q ${((66 + selectedDest.cx) / 2)} ${Math.min(52, selectedDest.cy) - 20} ${selectedDest.cx} ${selectedDest.cy}`}
                      fill="none"
                      stroke="#E20935"
                      strokeWidth="1.8"
                      className="animate-flight-path"
                    />

                    {/* India Hub Origin Dot */}
                    <circle cx="66" cy="52" r="2.5" fill="#E20935" />
                    <circle cx="66" cy="52" r="5" fill="none" stroke="#E20935" strokeWidth="0.6" className="animate-ping" />
                  </svg>

                  {/* Clickable Destination Hub Pins on the Globe */}
                  {DESTINATIONS.map((dest) => {
                    const isSelected = selectedDest.id === dest.id;
                    return (
                      <button
                        key={dest.id}
                        onClick={() => {
                          setSelectedDest(dest);
                        }}
                        style={{
                          position: "absolute",
                          left: `${dest.cx}%`,
                          top: `${dest.cy}%`,
                          transform: "translate(-50%, -50%)"
                        }}
                        className={`group z-20 flex flex-col items-center cursor-pointer transition-all ${
                          isSelected ? "scale-110 sm:scale-115 z-30" : "scale-90 sm:scale-95 hover:scale-105 opacity-85 hover:opacity-100"
                        }`}
                        aria-label={`Select ${dest.name}`}
                      >
                        {/* Circular Vector Flag Pin */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden flex items-center justify-center shadow-xl transition-all ${
                            isSelected
                              ? "ring-3 sm:ring-4 ring-[#E20935] ring-offset-2 ring-offset-[#16171A] border-2 border-white scale-110 animate-bounce bg-black/60"
                              : "border-2 border-white/40 hover:border-[#E20935] bg-black/50"
                          }`}
                        >
                          <CountryFlag code={dest.countryCode} size="md" className="!w-full !h-full object-cover border-0 rounded-none scale-125 pointer-events-none" />
                        </div>

                        {/* Enlarged Country Name Tag (Clean & Mobile-Safe) */}
                        <span
                          className={`text-[11px] sm:text-xs font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg mt-1 whitespace-nowrap shadow-lg transition-all ${
                            isSelected
                              ? "bg-[#E20935] text-white shadow-red-600/40 border border-white/20"
                              : "bg-black/85 backdrop-blur-md text-slate-200 border border-white/10 group-hover:text-white group-hover:border-[#E20935]/40"
                          }`}
                        >
                          {dest.name}
                        </span>
                      </button>
                    );
                  })}

                  {/* Sweeping Radar Beam Effect */}
                  <div className="absolute inset-0 pointer-events-none animate-radar opacity-20">
                    <div className="w-1/2 h-1/2 bg-gradient-to-br from-red-600/40 to-transparent origin-bottom-right" />
                  </div>
                </div>

                {/* Orbiting Satellite Marker */}
                <div className="absolute -inset-2 sm:-inset-2.5 animate-spin-slow pointer-events-none">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-[0_0_12px_#E20935] absolute -top-1.5 left-1/2 -translate-x-1/2" />
                </div>
              </div>
            </div>

            {/* Bottom Globe Telemetry Bar */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 mt-4 gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Radar Lock: <strong className="text-white">{selectedDest.name}</strong></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff4d6d]">
                <span>Est: ~{selectedDest.processingWeeks} Wks</span>
                <span className="text-white/20">•</span>
                <span>{selectedDest.acceptanceRate}% Success</span>
                <span className="text-white/20">•</span>
                <span className="text-emerald-400 font-bold">{selectedDest.quotaStatus}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Migration Dossier Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1c1e24] to-[#121316] rounded-3xl border border-red-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E20935]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Country Banner */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-white/10 pb-4 sm:pb-5 mb-5 sm:mb-6 gap-2.5 sm:gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <CountryFlag code={selectedDest.countryCode} size="md" className="rounded shadow-sm shrink-0" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                    {selectedDest.name}
                  </h3>
                  <span className="text-[11px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    {selectedDest.countryCode}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Target Metros: <strong className="text-slate-200">{selectedDest.city}</strong>
                </p>
              </div>

              <div className="flex items-center sm:flex-col sm:items-end gap-2 sm:gap-0.5 shrink-0">
                <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {selectedDest.quotaStatus}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Quota Active
                </span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between min-h-[96px] sm:min-h-[110px]">
                <div className="flex items-center gap-1.5 text-slate-300 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">Success Rate</span>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">
                    {selectedDest.acceptanceRate}%
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">
                    High Visa Grant Ratio
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between min-h-[96px] sm:min-h-[110px]">
                <div className="flex items-center gap-1.5 text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">Est. Processing</span>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">
                    ~{selectedDest.processingWeeks} Wks
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                    Verified Bar Filing
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between min-h-[96px] sm:min-h-[110px]">
                <div className="flex items-center gap-1.5 text-slate-300 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">Avg Salary</span>
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold text-white whitespace-nowrap">
                    {selectedDest.avgIncome}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Yearly median package
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between min-h-[96px] sm:min-h-[110px]">
                <div className="flex items-center gap-1.5 text-slate-300 mb-1">
                  <Award className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">Primary Pathway</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {selectedDest.visaType}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Direct Settlement Path
                  </span>
                </div>
              </div>
            </div>

            {/* Threshold & Demand List */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 mb-6 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#ff476d] font-extrabold block mb-1">
                  Eligibility Benchmark:
                </span>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {selectedDest.keyRequirement}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-2">
                  High-Priority In-Demand Occupations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDest.topRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-200 border border-white/10 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-3">
              <button
                onClick={() => openModal(`Permanent Residency (${selectedDest.name})`, selectedDest.name)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-3 sm:px-4 rounded-2xl font-extrabold text-xs sm:text-[13px] text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/40 uppercase tracking-normal sm:tracking-wide whitespace-nowrap cursor-pointer"
              >
                <span className="whitespace-nowrap">Calculate My Points for {selectedDest.name}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  MARA & CICC Verified Path
                </span>
                <Link
                  href={
                    selectedDest.id === "canada"
                      ? "/countries/canada"
                      : selectedDest.id === "australia"
                      ? "/countries/australia"
                      : selectedDest.id === "uk"
                      ? "/countries/uk"
                      : "/countries/europe-usa"
                  }
                  className="text-[#ff4d6d] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Full Guide</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
