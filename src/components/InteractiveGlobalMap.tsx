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
        
        {/* Left Column: Interactive SVG World Map Canvas (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0E0F12] rounded-2xl border border-white/10 p-4 sm:p-6 relative overflow-hidden shadow-inner">
          
          {/* Subtle Radar Scan line */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,9,53,0.08)_0,transparent_70%)] pointer-events-none" />

          {/* Interactive World Map SVG */}
          <div className="relative w-full aspect-[16/9] min-h-[300px]">
            <svg
              viewBox="0 0 1000 550"
              className="w-full h-full select-none"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
            >
              {/* Latitude / Longitude Grid Lines */}
              <g stroke="#ffffff" strokeWidth="0.5" opacity="0.08">
                <line x1="50" y1="130" x2="950" y2="130" strokeDasharray="3 3" />
                <line x1="50" y1="275" x2="950" y2="275" strokeDasharray="4 4" />
                <line x1="50" y1="420" x2="950" y2="420" strokeDasharray="3 3" />
                <line x1="250" y1="50" x2="250" y2="500" strokeDasharray="3 3" />
                <line x1="500" y1="50" x2="500" y2="500" strokeDasharray="4 4" />
                <line x1="750" y1="50" x2="750" y2="500" strokeDasharray="3 3" />
              </g>

              {/* Realistic Detailed World Continents Vector Outlines */}
              <g fill="#21242d" stroke="#2c303b" strokeWidth="1">
                {/* North America (Alaska, Canada, Greenland, US, Mexico) */}
                <path d="M 68,95 C 75,70 120,60 160,55 C 200,50 250,55 285,68 C 300,75 320,80 340,95 C 360,110 355,130 330,140 C 310,150 290,140 280,150 C 270,165 290,185 275,200 C 260,215 250,230 230,240 C 215,248 195,255 180,265 C 165,275 155,270 150,250 C 145,230 160,215 155,195 C 150,175 125,160 100,155 C 80,150 65,120 68,95 Z" />
                {/* Greenland */}
                <path d="M 330,40 C 360,35 390,45 385,70 C 380,85 350,95 330,85 C 315,75 315,50 330,40 Z" />
                {/* South America */}
                <path d="M 235,270 C 260,265 295,280 315,300 C 340,325 350,355 335,385 C 320,415 300,445 280,475 C 268,495 260,490 255,470 C 248,440 240,400 235,370 C 228,335 220,305 235,270 Z" />
                {/* Europe (British Isles, Scandinavia, Mainland) */}
                {/* UK & Ireland */}
                <path d="M 450,115 C 460,110 470,120 468,135 C 465,148 452,150 445,140 C 440,130 442,120 450,115 Z" />
                {/* Scandinavia */}
                <path d="M 505,65 C 525,55 545,70 540,95 C 535,115 520,130 505,125 C 495,120 495,80 505,65 Z" />
                {/* Continental Europe */}
                <path d="M 465,150 C 490,140 530,135 560,145 C 575,150 580,170 565,185 C 550,200 520,205 495,210 C 475,215 455,200 450,185 C 445,170 452,155 465,150 Z" />
                {/* Africa (Mediterranean to Cape of Good Hope, Madagascar) */}
                <path d="M 465,225 C 510,215 565,220 590,245 C 615,270 610,310 595,345 C 580,380 565,420 535,445 C 515,465 500,460 485,435 C 468,405 450,360 442,320 C 435,280 440,240 465,225 Z" />
                {/* Madagascar */}
                <path d="M 605,370 C 615,365 620,380 615,405 C 610,420 600,415 598,395 C 596,380 600,372 605,370 Z" />
                {/* Asia & Middle East (Arabia, India, Russia/China, Japan) */}
                <path d="M 575,140 C 620,125 700,105 780,110 C 840,115 880,140 870,175 C 860,210 830,240 800,265 C 765,295 720,310 680,285 C 655,270 645,240 635,215 C 620,230 600,240 580,225 C 565,210 568,175 575,140 Z" />
                {/* Indian Peninsula */}
                <path d="M 645,215 C 665,215 690,235 685,265 C 680,285 665,305 655,285 C 645,265 635,235 645,215 Z" />
                {/* Japan */}
                <path d="M 875,160 C 885,155 892,170 885,190 C 880,205 870,195 870,180 C 870,170 872,162 875,160 Z" />
                {/* Australia & Oceania */}
                <path d="M 780,345 C 820,335 880,340 905,365 C 925,390 915,430 890,455 C 860,480 815,475 785,450 C 760,425 755,375 780,345 Z" />
                {/* New Zealand */}
                <path d="M 935,440 C 945,435 950,450 942,470 C 935,480 928,470 930,455 Z" />
              </g>

              {/* Glowing Flight Arcs from Delhi origin to Selected Destination */}
              {HUBS.map((hub) => {
                const isSelected = hub.id === selectedHub.id;
                const startX = origin.x * 10;
                const startY = origin.y * 5.5;
                const endX = hub.coords.x * 10;
                const endY = hub.coords.y * 5.5;
                const midX = (startX + endX) / 2;
                const midY = Math.min(startY, endY) - 55;

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
                      strokeDasharray={isSelected ? "6 3" : undefined}
                      className={isSelected ? "animate-pulse" : ""}
                    />
                  </g>
                );
              })}

              {/* Origin Marker: New Delhi Headquarters */}
              <g transform={`translate(${origin.x * 10}, ${origin.y * 5.5})`}>
                <circle r="14" fill="#E20935" opacity="0.3" className="animate-ping" />
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
