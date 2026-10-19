"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Compass,
  Plane,
  ShieldCheck,
  Award,
  DollarSign,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

const RealLeafletMap = dynamic(() => import("./RealLeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[360px] sm:min-h-[420px] rounded-xl bg-[#0E0F12] border border-white/10 flex flex-col items-center justify-center gap-3 text-slate-400">
      <div className="w-8 h-8 border-2 border-[#E20935] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold">Loading CartoDB Global Geographic Radar...</span>
    </div>
  )
});

export interface DestinationHub {
  id: string;
  name: string;
  country: string;
  code: string;
  city: string;
  coords: { x: number; y: number };
  prStreams: string;
  minPoints: string;
  avgSalary: string;
  processingTime: string;
  inDemandJobs: string[];
  successFeasibility: string;
}

const HUBS: DestinationHub[] = [
  {
    id: "canada",
    name: "Canada",
    country: "Canada",
    code: "CA",
    city: "Toronto & Vancouver",
    coords: { x: 23, y: 32 },
    prStreams: "Express Entry (FSW/CEC) & Provincial Nominee (OINP, SINP)",
    minPoints: "CRS ~485 - 510 or 600+ (with PNP)",
    avgSalary: "$82,000 CAD / Year",
    processingTime: "5 - 7 Months",
    inDemandJobs: ["Software Architects", "Registered Nurses", "Civil Engineers", "Supply Chain"],
    successFeasibility: "99.1% High Probability"
  },
  {
    id: "australia",
    name: "Australia",
    country: "Australia",
    code: "AU",
    city: "Melbourne & Sydney",
    coords: { x: 84, y: 78 },
    prStreams: "Subclass 189 (Independent) & Subclass 190 (State Nominated)",
    minPoints: "65 Pts Benchmark (Competitive: 75 - 85 Pts)",
    avgSalary: "$94,000 AUD / Year",
    processingTime: "7 - 10 Months",
    inDemandJobs: ["ICT Business Analysts", "Mechanical Engineers", "Doctors & Allied Health", "Construction Trades"],
    successFeasibility: "98.7% Verified Track"
  },
  {
    id: "uk",
    name: "United Kingdom",
    country: "United Kingdom",
    code: "GB",
    city: "London & Manchester",
    coords: { x: 47, y: 28 },
    prStreams: "Skilled Worker Visa (CoS) & Global Talent Pathway",
    minPoints: "70 Points (Job Offer + English Threshold)",
    avgSalary: "£48,000 GBP / Year",
    processingTime: "4 - 8 Weeks",
    inDemandJobs: ["Fintech Specialists", "Healthcare Practitioners", "Cybersecurity", "Corporate Law"],
    successFeasibility: "99.4% Approval Record"
  },
  {
    id: "germany",
    name: "Germany & Europe",
    country: "Europe / Germany",
    code: "EU",
    city: "Berlin & Frankfurt",
    coords: { x: 53, y: 30 },
    prStreams: "Opportunity Card (Chancenkarte) & EU Blue Card",
    minPoints: "6 Points (Degree + Experience + A1 German)",
    avgSalary: "€68,000 EUR / Year",
    processingTime: "6 - 10 Weeks",
    inDemandJobs: ["Automotive Engineers", "Fullstack Developers", "Renewable Energy", "Data Scientists"],
    successFeasibility: "98.9% High Feasibility"
  },
  {
    id: "usa",
    name: "United States",
    country: "USA",
    code: "US",
    city: "New York & Silicon Valley",
    coords: { x: 25, y: 38 },
    prStreams: "EB-5 Immigrant Investor Green Card & EB-1/EB-2 NIW",
    minPoints: "Qualifying Commercial Investment / Extraordinary Ability",
    avgSalary: "$105,000 USD / Year",
    processingTime: "12 - 16 Months",
    inDemandJobs: ["Tech Executives", "Corporate Directors", "Biomedical Leaders", "Enterprise Founders"],
    successFeasibility: "97.5% Accredited Filings"
  },
  {
    id: "uae",
    name: "UAE & Dubai",
    country: "UAE",
    code: "AE",
    city: "Dubai & Abu Dhabi",
    coords: { x: 60, y: 42 },
    prStreams: "10-Year Golden Visa (Investors & Specialized Talents)",
    minPoints: "Direct Eligibility (Property AED 2M+ / Executive Salary)",
    avgSalary: "AED 320,000 / Year",
    processingTime: "2 - 4 Weeks",
    inDemandJobs: ["Real Estate Directors", "AI Engineers", "Financial Consultants", "Healthcare Specialists"],
    successFeasibility: "99.6% Fast-Track"
  }
];

export default function InteractiveGlobalMap() {
  const [selectedHub, setSelectedHub] = useState<DestinationHub>(HUBS[0]);
  const [filterMode, setFilterMode] = useState<"skilled" | "investor" | "student">("skilled");
  const { openModal } = useConsultationModal();

  // Origin point: New Delhi Hub
  const origin = { x: 67, y: 45 };

  return (
    <div className="w-full bg-[#16171A] rounded-3xl border border-[#E20935]/30 p-5 sm:p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden">
      {/* Background ambient radar glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Strip */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/40 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#E20935]" />
            <span>Interactive Global Migration Radar</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
            Live Global Visa Pathways & Flight Corridors
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Click any destination on the globe to inspect real-time PR quotas, salaries, and visa approval routes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 shrink-0">
          {[
            { id: "skilled", label: "Skilled PR" },
            { id: "investor", label: "Business & Investor" },
            { id: "student", label: "Student to PR" }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setFilterMode(mode.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterMode === mode.id
                  ? "bg-[#E20935] text-white shadow-md shadow-red-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map & Route Dossier Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Real Interactive Geographic World Map with CartoDB & Real Flights (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0E0F12] rounded-2xl border border-white/10 p-3 sm:p-5 relative overflow-hidden shadow-inner flex flex-col gap-3">
          <RealLeafletMap
            selectedHub={selectedHub}
            onSelectHub={setSelectedHub}
            hubs={HUBS}
          />

          {/* Quick Country Pill Buttons on Map Base */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedHub.id === hub.id
                    ? "bg-[#E20935] text-white shadow-md shadow-red-600/40 scale-105"
                    : "bg-[#16171A] text-slate-300 border border-white/10 hover:border-[#E20935] hover:text-white"
                }`}
              >
                <span>{hub.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Live Interactive Flight Dossier (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0E0F12] rounded-2xl border border-[#E20935]/40 p-5 sm:p-7 shadow-xl space-y-4 animate-in fade-in duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-widest text-[#ff476d] font-mono font-bold block">
                Official Immigration Dossier
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 flex items-center gap-2 flex-wrap">
                <span className="whitespace-nowrap">{selectedHub.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#E20935] text-white font-mono shrink-0">
                  {selectedHub.code}
                </span>
              </h4>
              <span className="text-xs text-slate-400 block mt-0.5 truncate">
                Primary Gateways: {selectedHub.city}
              </span>
            </div>

            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full self-start sm:self-center shrink-0 whitespace-nowrap">
              {selectedHub.successFeasibility}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Average Skilled Salary</span>
              <span className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1 mt-0.5 truncate">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{selectedHub.avgSalary}</span>
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Standard Processing</span>
              <span className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1 mt-0.5 truncate">
                <Clock className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
                <span>{selectedHub.processingTime}</span>
              </span>
            </div>
          </div>

          {/* Primary Streams */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Primary Settlement Streams:
            </span>
            <div className="text-xs text-slate-200 p-2.5 rounded-lg bg-black/40 border border-white/10 font-medium">
              {selectedHub.prStreams}
            </div>
          </div>

          {/* In-Demand Occupations */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              High-Demand Skill Shortages:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedHub.inDemandJobs.map((job, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[#16171A] border border-white/10 text-[11px] text-slate-300 font-semibold"
                >
                  ✓ {job}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => openModal(`Permanent Residency (${selectedHub.name})`, selectedHub.name)}
              className="w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <span>Simulate My {selectedHub.name} Visa Odds</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
