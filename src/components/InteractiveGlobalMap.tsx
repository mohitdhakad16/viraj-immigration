"use client";

import React, { useState } from "react";
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

interface DestinationHub {
  id: string;
  name: string;
  country: string;
  code: string;
  city: string;
  coords: { x: number; y: number }; // SVG map percentage coordinates
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
    name: "Germany / Europe",
    country: "Europe / Germany",
    code: "EU",
    city: "Berlin & Frankfurt",
    coords: { x: 53, y: 32 },
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
    coords: { x: 25, y: 40 },
    prStreams: "EB-5 Immigrant Investor Green Card & L-1 Executive Transfer",
    minPoints: "Qualifying Commercial Investment / Management",
    avgSalary: "$105,000 USD / Year",
    processingTime: "14 - 18 Months",
    inDemandJobs: ["Tech Executives", "Corporate Directors", "Biomedical Leaders", "Enterprise Founders"],
    successFeasibility: "97.5% Accredited Filings"
  }
];

export default function InteractiveGlobalMap() {
  const [selectedHub, setSelectedHub] = useState<DestinationHub>(HUBS[0]);
  const [filterMode, setFilterMode] = useState<"skilled" | "investor" | "student">("skilled");
  const { openModal } = useConsultationModal();

  // Origin point: New Delhi Hub
  const origin = { x: 67, y: 47 };

  return (
    <div className="w-full bg-[#16171A] rounded-3xl border border-[#E20935]/30 p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden">
      {/* Background ambient radar glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Strip */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/40 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#E20935]" />
            <span>Interactive Global Migration Radar</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Live Global Visa Pathways & Flight Corridors
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Click any destination on the globe to inspect real-time PR quotas, salaries, and visa approval routes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
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
        
        {/* Left Column: Interactive SVG World Map Canvas (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0E0F12] rounded-2xl border border-white/10 p-4 sm:p-6 relative overflow-hidden shadow-inner">
          
          {/* Subtle Radar Scan line */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,9,53,0.08)_0,transparent_70%)] pointer-events-none" />

          {/* Interactive World Map SVG */}
          <div className="relative w-full aspect-[16/9] min-h-[280px]">
            <svg
              viewBox="0 0 1000 550"
              className="w-full h-full select-none"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
            >
              {/* Simplified Geometric World Landmass Polygons */}
              <g fill="#21242b" opacity="0.75">
                {/* North America */}
                <path d="M120,70 L280,60 L360,110 L300,200 L240,240 L190,270 L150,210 L100,140 Z" />
                {/* South America */}
                <path d="M260,280 L350,300 L330,420 L270,470 L240,360 Z" />
                {/* Europe */}
                <path d="M460,90 L560,80 L580,160 L500,210 L440,160 Z" />
                {/* Africa */}
                <path d="M460,220 L580,210 L590,360 L520,440 L440,320 Z" />
                {/* Asia */}
                <path d="M570,70 L860,80 L880,240 L760,320 L620,240 L570,140 Z" />
                {/* Australia */}
                <path d="M780,360 L920,350 L910,460 L800,470 Z" />
              </g>

              {/* Glowing Flight Arcs from Delhi origin to Selected Destination */}
              {HUBS.map((hub) => {
                const isSelected = hub.id === selectedHub.id;
                const startX = origin.x * 10;
                const startY = origin.y * 5.5;
                const endX = hub.coords.x * 10;
                const endY = hub.coords.y * 5.5;
                const midX = (startX + endX) / 2;
                const midY = Math.min(startY, endY) - 50;

                const pathD = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

                return (
                  <g key={hub.id}>
                    {/* Background faint path */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isSelected ? "#E20935" : "#4b5563"}
                      strokeWidth={isSelected ? "2.5" : "1"}
                      opacity={isSelected ? 1 : 0.25}
                      className={isSelected ? "animate-flight-path" : ""}
                    />
                  </g>
                );
              })}

              {/* Origin Marker: New Delhi Headquarters */}
              <g transform={`translate(${origin.x * 10}, ${origin.y * 5.5})`}>
                <circle r="12" fill="#E20935" opacity="0.3" className="animate-ping" />
                <circle r="6" fill="#E20935" />
                <circle r="2.5" fill="#ffffff" />
                <text
                  x="0"
                  y="-12"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="bold"
                >
                  NEW DELHI HQ
                </text>
              </g>

              {/* Destination Hub Markers */}
              {HUBS.map((hub) => {
                const isSelected = hub.id === selectedHub.id;
                const posX = hub.coords.x * 10;
                const posY = hub.coords.y * 5.5;

                return (
                  <g
                    key={hub.id}
                    transform={`translate(${posX}, ${posY})`}
                    onClick={() => setSelectedHub(hub)}
                    className="cursor-pointer group"
                  >
                    {/* Ping wave on selected */}
                    {isSelected && (
                      <circle r="16" fill="#E20935" opacity="0.4" className="animate-ping" />
                    )}
                    <circle
                      r={isSelected ? "8" : "6"}
                      fill={isSelected ? "#E20935" : "#374151"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="group-hover:scale-125 transition-transform"
                    />
                    <text
                      x="0"
                      y="18"
                      textAnchor="middle"
                      fill={isSelected ? "#E20935" : "#d1d5db"}
                      fontSize={isSelected ? "11" : "9"}
                      fontWeight={isSelected ? "800" : "600"}
                      className="transition-colors"
                    >
                      {hub.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Quick Country Pill Buttons on Map Base */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-wrap items-center justify-center gap-1.5 z-20">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedHub.id === hub.id
                      ? "bg-[#E20935] text-white shadow-md shadow-red-600/40 scale-105"
                      : "bg-[#16171A]/90 text-slate-300 border border-white/10 hover:border-[#E20935]"
                  }`}
                >
                  <span>{hub.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Flight Dossier (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0E0F12] rounded-2xl border border-[#E20935]/40 p-6 sm:p-7 shadow-xl space-y-5 animate-in fade-in duration-300">
          
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#ff476d] font-mono font-bold block">
                Official Immigration Dossier
              </span>
              <h4 className="text-2xl font-extrabold text-white mt-0.5 flex items-center gap-2">
                <span>{selectedHub.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#E20935] text-white font-mono">
                  {selectedHub.code}
                </span>
              </h4>
              <span className="text-xs text-slate-400 block mt-0.5">
                Primary Gateways: {selectedHub.city}
              </span>
            </div>

            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              {selectedHub.successFeasibility}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-[11px] block">Average Skilled Salary</span>
              <span className="text-sm font-extrabold text-white flex items-center gap-1 mt-0.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                {selectedHub.avgSalary}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-[11px] block">Standard Processing</span>
              <span className="text-sm font-extrabold text-white flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#E20935]" />
                {selectedHub.processingTime}
              </span>
            </div>
          </div>

          {/* Primary Streams */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Primary Settlement Streams:
            </span>
            <div className="text-xs text-slate-200 p-2.5 rounded-lg bg-black/40 border border-white/10 font-medium">
              {selectedHub.prStreams}
            </div>
          </div>

          {/* In-Demand Occupations */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              High-Demand Skill Shortages:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedHub.inDemandJobs.map((job, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#16171A] border border-white/10 text-[11px] text-slate-300 font-semibold"
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
              className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
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
