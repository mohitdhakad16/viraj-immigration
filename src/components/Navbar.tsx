"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "@/context/ModalContext";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Compass,
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  Plane,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST, COUNTRIES_LIST } from "@/data/immigrationData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [countriesDropdown, setCountriesDropdown] = useState(false);
  const pathname = usePathname();
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else if (scrollY < 15) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setCountriesDropdown(false);
  }, [pathname]);

  const serviceIcons: Record<string, React.ReactNode> = {
    "study-visa": <GraduationCap className="w-4 h-4 text-[#E20935]" />,
    "work-permit": <Briefcase className="w-4 h-4 text-[#E20935]" />,
    "permanent-residency": <Award className="w-4 h-4 text-[#E20935]" />,
    "business-investor": <TrendingUp className="w-4 h-4 text-[#E20935]" />,
    "tourist-visitor": <Plane className="w-4 h-4 text-[#E20935]" />
  };

  return (
    <div className="w-full">
      {/* 1. Visaz Top Strip - Aligned with rest of website */}
      <div className="bg-[#16171A] text-slate-300 text-xs py-2.5 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-[#E20935]" />
              Noida Sector 62 & Melbourne VIC
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#E20935]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-[11px] bg-black/40 px-3.5 py-1 rounded-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E20935]" />
              <span className="font-semibold text-white">Accredited:</span>
              <span className="text-slate-300 font-mono">MARA: 1802914 | CICC: R531892</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#E20935] transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#E20935]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar (Strictly sticky, aligned max-w-7xl, zero horizontal overflow) */}
      <header className="w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 h-20 flex items-center shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 mr-4 xl:mr-6 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a50625] via-[#E20935] to-[#ff476d] p-0.5 shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-[#16171A] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 xl:w-6 xl:h-6 text-[#E20935]" />
              </div>
            </div>
            <div>
              <span className="text-lg xl:text-2xl font-extrabold tracking-tight text-[#16171A] block leading-none">
                VIRAJ<span className="text-[#E20935] ml-1">IMMIGRATION</span>
              </span>
              <span className="text-[9px] xl:text-[10px] uppercase tracking-widest text-slate-500 block font-semibold mt-1">
                Global Visas & Legal Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Shown on xl screens (1280px+) with comfortable spacing */}
          <nav className="hidden xl:flex items-center justify-center gap-3 2xl:gap-5 flex-1 px-4">
            <Link
              href="/"
              className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/"
                  ? "text-[#E20935] bg-red-50/70"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/about"
                  ? "text-[#E20935] bg-red-50/70"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Visa Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-[#E20935] bg-red-50/70"
                    : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
                }`}
              >
                <span>Visa Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E20935]" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] uppercase tracking-wider text-[#E20935] font-extrabold px-3 py-1 mb-1 border-b border-slate-100">
                    Immigration & Visa Categories
                  </div>
                  {SERVICES_LIST.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:border-[#E20935] transition-colors">
                        {serviceIcons[service.id]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {service.shortDesc}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-[#E20935] hover:underline cursor-pointer"
                    >
                      View All 5 Visa Practices →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Country Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCountriesDropdown(true)}
              onMouseLeave={() => setCountriesDropdown(false)}
            >
              <span
                className={`flex items-center gap-1 text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  pathname.startsWith("/countries")
                    ? "text-[#E20935] bg-red-50/70"
                    : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
                }`}
              >
                <span>Countries</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E20935]" />
              </span>

              {countriesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] uppercase tracking-wider text-[#E20935] font-extrabold px-3 py-1 mb-1 border-b border-slate-100">
                    Migration Destinations
                  </div>
                  {COUNTRIES_LIST.map((country) => (
                    <Link
                      key={country.id}
                      href={`/countries/${country.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-5 rounded overflow-hidden shadow-xs flex items-center justify-center font-bold text-xs bg-[#16171A] text-white border border-slate-200">
                          {country.flagCode}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                            {country.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {country.minPointsNeeded}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-[#E20935] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/assessment"
                  ? "text-[#E20935] bg-red-50/70"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Points Calculator
            </Link>

            <Link
              href="/success-stories"
              className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/success-stories"
                  ? "text-[#E20935] bg-red-50/70"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Success Stories
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/contact"
                  ? "text-[#E20935] bg-red-50/70"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openModal()}
              className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-md shadow-red-600/30 uppercase tracking-wider whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile / Tablet Toggle Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => openModal()}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold bg-[#E20935] text-white cursor-pointer"
              >
                Assess
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-[#16171A] hover:text-[#E20935] focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-8 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                All Visa Services
              </Link>

              {/* Mobile Services Sub-list */}
              <div className="pl-4 space-y-1 border-l-2 border-[#E20935] my-2">
                {SERVICES_LIST.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-[#E20935] cursor-pointer"
                  >
                    • {service.title}
                  </Link>
                ))}
              </div>

              <div className="text-xs uppercase tracking-wider text-[#E20935] font-extrabold px-3 pt-2">
                Destination Guides
              </div>
              <div className="pl-4 space-y-1 border-l-2 border-[#E20935] my-2">
                {COUNTRIES_LIST.map((country) => (
                  <Link
                    key={country.id}
                    href={`/countries/${country.slug}`}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-[#E20935] cursor-pointer"
                  >
                    • {country.name} Immigration Guide
                  </Link>
                ))}
              </div>

              <Link
                href="/assessment"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#E20935] hover:bg-red-50 cursor-pointer"
              >
                Free Points Calculator
              </Link>
              <Link
                href="/success-stories"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                Success Stories & Grants
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                Contact & Offices
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#E20935] text-white text-center block shadow-lg shadow-red-600/20 uppercase tracking-wider cursor-pointer"
              >
                Book Free Consultation
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 text-sm text-[#16171A] font-semibold hover:text-[#E20935] py-1 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E20935]" />
                <span>Call Hotline: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
