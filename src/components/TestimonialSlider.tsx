"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/immigrationData";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Play } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { openModal } = useConsultationModal();

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 45;

  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <div className="w-full">
      <div 
        onTouchStart={onTouchStartHandler}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={onTouchEndHandler}
        className="bg-[#16171A] rounded-2xl sm:rounded-3xl border border-[#E20935]/30 p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl text-white select-none"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Visual Column / Video Card preview */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-64 sm:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#E20935]/30 shadow-xl">
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
                className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E20935] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                aria-label="Watch client story"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
              </button>

              <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] sm:text-xs">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Visa: {current.grantYear}</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 shrink-0">Verified</span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              {/* Star Rating in Visaz Gold/Yellow */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#fdc009] text-[#fdc009]" />
                ))}
              </div>
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#E20935]/20" />
            </div>

            <p className="text-sm sm:text-lg lg:text-xl font-medium text-slate-100 leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#E20935] shrink-0">
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

              {/* Slider Controls and Dots */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 pt-2 sm:pt-0">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        currentIdx === i ? "w-6 bg-[#E20935]" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#E20935] hover:text-white text-white border border-white/10 flex items-center justify-center transition-colors active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#E20935] hover:text-white text-white border border-white/10 flex items-center justify-center transition-colors active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
