"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Phone, Calendar } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 350) {
        setShowScrollTop(true);
      } else if (scrollY < 200) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Viraj%20Immigration,%20I%20want%20to%20evaluate%20my%20visa%20eligibility`;

  return (
    <>
      {/* Desktop Floating Action Buttons (Right Bottom) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end space-y-3">
        {/* Scroll To Top in Visaz Red */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-[#16171A] text-white border border-[#E20935]/40 flex items-center justify-center shadow-lg hover:bg-[#E20935] hover:text-white transition-all active:scale-90"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl shadow-emerald-900/30 hover:scale-105 transition-all"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="tracking-wide">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Floating Scroll To Top (Positioned cleanly above bottom bar) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="md:hidden fixed bottom-16 right-4 z-40 w-9 h-9 rounded-full bg-[#16171A]/95 text-white border border-[#E20935]/50 flex items-center justify-center shadow-xl active:scale-90 transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-[#ff476d]" />
        </button>
      )}

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#16171A]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-black/60 border border-white/10 text-white flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-95 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#E20935] shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openModal()}
          className="flex-[1.4] py-2.5 px-2 rounded-xl bg-[#E20935] hover:bg-[#c5072d] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md uppercase tracking-wide active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">Free Assessment</span>
        </button>
      </div>
    </>
  );
}
