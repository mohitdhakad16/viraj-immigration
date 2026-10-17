"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/immigrationData";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Play } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { openModal } = useConsultationModal();

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <div className="w-full">
      <div className="bg-[#16171A] rounded-3xl border border-[#E20935]/30 p-6 sm:p-12 relative overflow-hidden shadow-2xl text-white">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Column / Video Card preview */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-[#E20935]/30 shadow-xl">
              <Image
                src={current.videoThumbnail}
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#16171A]/40 group-hover:bg-[#16171A]/20 transition-colors" />

              {/* Play Button Simulation in Visaz Red */}
              <button
                onClick={() => openModal()}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#E20935] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                aria-label="Watch client story"
              >
                <Play className="w-6 h-6 fill-white ml-1" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle className="w-4 h-4" />
                  Visa Approved: {current.grantYear}
                </span>
                <span className="text-[11px] text-slate-300">Verified Client</span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              {/* Star Rating in Visaz Gold/Yellow */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fdc009] text-[#fdc009]" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#E20935]/20" />
            </div>

            <p className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E20935]">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{current.name}</h4>
                  <div className="text-xs text-[#ff476d] font-semibold">{current.country}</div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E20935] hover:text-white text-white border border-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E20935] hover:text-white text-white border border-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
