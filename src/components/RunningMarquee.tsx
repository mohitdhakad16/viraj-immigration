"use client";

import React from "react";
import CountryFlag from "@/components/CountryFlag";
import { ShieldCheck, Award, Sparkles, CheckCircle2, TrendingUp, Zap } from "lucide-react";

export default function RunningMarquee() {
  const tickerItems = [
    {
      flag: "ca",
      title: "Canada Express Entry Draw",
      highlight: "Category-Based ITAs Open (Healthcare, STEM, Trades)",
      badge: "CRS Cutoff Drop"
    },
    {
      icon: <Award className="w-4 h-4 text-white" />,
      title: "8,500+ PR Grants",
      highlight: "Audited 98.7% Success Rate Across 5 Continents",
      badge: "Verified"
    },
    {
      flag: "au",
      title: "Australia SkillSelect 2026",
      highlight: "Subclass 189/190 Priority Processing for Engineers, Tech & Medics",
      badge: "State Nom Open"
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-white" />,
      title: "Accredited Barristers",
      highlight: "MARA Registered (1802914) & CICC Licensed (R531892)",
      badge: "Direct Representation"
    },
    {
      flag: "gb",
      title: "United Kingdom Skilled Worker",
      highlight: "Fast-Track 3-8 Week In-Country Settlement & CoS Filing",
      badge: "Sponsorship Active"
    },
    {
      flag: "de",
      title: "Germany Chancenkarte",
      highlight: "Opportunity Card Points Entry & EU Blue Card Direct Pathways",
      badge: "Jobseeker Visa"
    },
    {
      flag: "us",
      title: "USA EB-5 & L-1 Transfers",
      highlight: "Commercial Investment & C-Suite Multinational Executive Green Cards",
      badge: "Permanent Residency"
    },
    {
      flag: "ae",
      title: "UAE 10-Year Golden Visa",
      highlight: "Tax-Free Residency for Specialized Professionals & Investors",
      badge: "Fast-Track 21 Days"
    },
    {
      icon: <Sparkles className="w-4 h-4 text-white" />,
      title: "Zero Rejection Protocol",
      highlight: "Pre-Screening Audit Before Retainer Signing",
      badge: "100% Legal Filing"
    }
  ];

  return (
    <div className="bg-[#E20935] text-white py-3 sm:py-3.5 border-y border-red-700/40 overflow-hidden shadow-lg select-none relative z-20">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {/* First track */}
        <div className="flex items-center space-x-8 sm:space-x-12 shrink-0 pr-8 sm:pr-12">
          {tickerItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-ping inline-block" />
              {item.flag ? (
                <CountryFlag code={item.flag} size="md" className="shadow-xs" />
              ) : (
                <span className="p-1 rounded-md bg-white/20 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              <span className="font-extrabold uppercase tracking-wide text-white">
                {item.title}:
              </span>
              <span className="text-white/95 font-medium">
                {item.highlight}
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/30 text-white px-2 py-0.5 rounded-full border border-white/20">
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Second track (exact duplicate for seamless infinite loop) */}
        <div className="flex items-center space-x-8 sm:space-x-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-ping inline-block" />
              {item.flag ? (
                <CountryFlag code={item.flag} size="md" className="shadow-xs" />
              ) : (
                <span className="p-1 rounded-md bg-white/20 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              <span className="font-extrabold uppercase tracking-wide text-white">
                {item.title}:
              </span>
              <span className="text-white/95 font-medium">
                {item.highlight}
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/30 text-white px-2 py-0.5 rounded-full border border-white/20">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
