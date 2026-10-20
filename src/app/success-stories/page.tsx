"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS, SUCCESS_STORIES_DATA } from "@/data/immigrationData";
import {
  CheckCircle,
  Star,
  Play,
  Award,
  Calendar,
  Briefcase,
  Sparkles
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function SuccessStoriesPage() {
  const [filter, setFilter] = useState("all");
  const { openModal } = useConsultationModal();

  const filteredStories = filter === "all"
    ? SUCCESS_STORIES_DATA
    : SUCCESS_STORIES_DATA.filter((s) => s.country.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10 overflow-hidden">
        {/* Authentic Client Success Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
            alt="Clients Granted Permanent Residency"
            fill
            priority
            className="object-cover object-center opacity-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0f]/85 via-[#16171A]/65 to-[#0c0d0f]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,9,53,0.18),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/20 border border-[#E20935]/40 text-[#ff476d] backdrop-blur-md shadow-xs">
            <Award className="w-4 h-4 text-[#E20935]" />
            <span>Audited Visa Grant Proof</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            Real Stories, Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              Permanent Residency Grants
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-medium">
            Every visa approved represents a life transformed. Explore verified case studies of engineers, healthcare professionals, entrepreneurs, and families who trusted our licensed legal team.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Visa Grants" },
              { id: "canada", label: "🇨🇦 Canada PR" },
              { id: "australia", label: "🇦🇺 Australia GSM" },
              { id: "united kingdom", label: "🇬🇧 UK Skilled & Business" },
              { id: "usa", label: "🇺🇸 USA Visas" },
              { id: "europe", label: "🇪🇺 Europe & Germany" },
              { id: "uae", label: "🇦🇪 UAE Golden Visa" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-[#E20935] text-white shadow-md shadow-red-600/30"
                    : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VISA APPROVAL CASE STUDIES GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#E20935] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image with Grant Badge */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.applicantName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#E20935] text-white shadow-md">
                      {story.country}
                    </span>

                    <span className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500 text-white font-mono">
                      Grant: {story.grantDate}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#E20935] font-bold">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{story.visaType}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#16171A]">
                      {story.applicantName}
                    </h3>

                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{story.occupation}</span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {story.highlight}
                    </p>

                    <div className="text-xs text-slate-500 font-mono flex items-center gap-1 pt-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E20935]" />
                      <span>Timeline: {story.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openModal(story.visaType, story.country)}
                    className="w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-[#E20935] hover:text-white text-[#16171A] transition-colors"
                  >
                    Assess Profile Like This →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIDEO TESTIMONIAL INTERVIEWS */}
      <section className="py-20 bg-[#16171A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/30">
              Video Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Watch Our Clients Share Their Experiences
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Hear directly from applicants who navigated points hurdles, skills assessments, and visa lodgement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-black/40 rounded-3xl border border-white/10 hover:border-[#E20935] overflow-hidden shadow-xl space-y-4 p-4 flex flex-col justify-between group transition-colors"
              >
                <div>
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={t.videoThumbnail}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#16171A]/40" />

                    <button
                      onClick={() => openModal()}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#E20935] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      aria-label="Play video"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>

                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs text-emerald-400 font-bold flex items-center justify-between">
                      <span>Visa Stamped: {t.grantYear}</span>
                      <span>Verified Client</span>
                    </div>
                  </div>

                  <div className="pt-3 space-y-1">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fdc009] text-[#fdc009]" />
                      ))}
                    </div>
                    <h4 className="text-sm font-bold text-white pt-1">{t.name}</h4>
                    <p className="text-xs text-[#ff476d] font-semibold">{t.country}</p>
                    <p className="text-xs sm:text-[13px] text-slate-300 italic pt-2 line-clamp-3 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openModal(t.country)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#E20935] transition-colors"
                >
                  Start Your Journey
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-gradient-to-r from-[#16171A] to-[#0E0F12] text-white py-16 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <Sparkles className="w-8 h-8 text-[#E20935] mx-auto" />
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Will Your Success Story Be Next?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Take the first step. Get a comprehensive legal eligibility evaluation from our registered immigration counsel.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider"
            >
              Book Free Profile Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
