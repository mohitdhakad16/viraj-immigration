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
import CountryFlag from "@/components/CountryFlag";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [countriesDropdown, setCountriesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
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
    <>
      {/* 1. Visaz Dark Top Strip (Normal document flow, scrolls naturally with zero layout shift) */}
      <div className="bg-[#16171A] text-slate-300 text-xs py-2.5 border-b border-white/10 hidden md:block w-full">
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

      {/* 2. Main Sticky Navigation Bar (Native position: sticky, perfectly aligned max-w-7xl, zero edge stick) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/98 shadow-md py-3 sm:py-3.5 border-slate-200 backdrop-blur-md"
            : "bg-white shadow-xs py-4 sm:py-5 lg:py-5.5 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between">
          
          {/* 1. Left Column: Brand Logo (Sleek, well-proportioned, flush left) */}
          <div className="flex items-center justify-start shrink-0">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
              <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 xl:w-9 xl:h-9 rounded-xl bg-gradient-to-tr from-[#a50625] via-[#E20935] to-[#ff476d] p-0.5 shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full bg-[#16171A] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 xl:w-4.5 xl:h-4.5 text-[#E20935]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] sm:text-base xl:text-[17px] font-extrabold tracking-tight text-[#16171A] block leading-none">
                  VIRAJ<span className="text-[#E20935] ml-1">IMMIGRATION</span>
                </span>
                <span className="hidden sm:block text-[8px] xl:text-[8.5px] uppercase tracking-wider text-slate-500 font-semibold mt-1">
                  Visa & Immigration Advisory
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Center Column: Navigation Links (Strictly centered with equal space on left and right via mx-auto) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 mx-auto">
            <Link
              href="/"
              className={`text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/"
                  ? "text-[#E20935] bg-red-50"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/about"
                  ? "text-[#E20935] bg-red-50"
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
                className={`flex items-center gap-1 text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-[#E20935] bg-red-50"
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

            {/* Country Guides Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setCountriesDropdown(true)}
              onMouseLeave={() => setCountriesDropdown(false)}
            >
              <Link
                href="/countries"
                className={`flex items-center gap-1 text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  pathname.startsWith("/countries")
                    ? "text-[#E20935] bg-red-50"
                    : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
                }`}
              >
                <span>Countries</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E20935]" />
              </Link>

              {countriesDropdown && (
                <div className="absolute top-full -left-36 xl:-left-24 w-[640px] xl:w-[700px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 px-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#E20935] font-extrabold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      Global Migration Corridors & PR Directories
                    </span>
                    <Link
                      href="/countries"
                      className="text-xs font-bold text-slate-500 hover:text-[#E20935] transition-colors"
                    >
                      View All Countries →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {COUNTRIES_LIST.filter((c) => c.id !== "europe-usa").map((country) => (
                      <Link
                        key={country.id}
                        href={`/countries/${country.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group cursor-pointer"
                      >
                        <div className="mt-0.5 shrink-0">
                          <CountryFlag code={country.flagCode} size="md" className="rounded shadow-xs" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors truncate">
                              {country.name}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                              {country.salaryStat?.amount || country.avgSalary.split("/")[0]}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {country.pathwayStat?.title ? `${country.pathwayStat.title} • ${country.pointsStat?.score || country.minPointsNeeded}` : country.minPointsNeeded}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 bg-slate-50/80 rounded-xl p-2.5">
                    <div className="text-xs text-slate-600">
                      <span className="font-bold text-[#16171A]">Not sure which country you qualify for?</span> Find out in 60 seconds.
                    </div>
                    <Link
                      href="/assessment"
                      className="text-xs font-bold text-[#E20935] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Take Points Audit</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              className={`text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/assessment"
                  ? "text-[#E20935] bg-red-50"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Points Calculator
            </Link>

            <Link
              href="/success-stories"
              className={`text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/success-stories"
                  ? "text-[#E20935] bg-red-50"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Success Stories
            </Link>

            <Link
              href="/contact"
              className={`text-xs xl:text-[13px] 2xl:text-sm font-bold whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                pathname === "/contact"
                  ? "text-[#E20935] bg-red-50"
                  : "text-[#16171A] hover:text-[#E20935] hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Right Column: CTA Action Button & Mobile Trigger (Aligned to far right) */}
          <div className="flex items-center justify-end shrink-0 gap-2 sm:gap-3">
            <button
              onClick={() => openModal()}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 xl:px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-md shadow-red-600/30 uppercase tracking-wider whitespace-nowrap cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile / Tablet Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => openModal()}
                className="sm:hidden px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#E20935] text-white flex items-center justify-center min-h-[36px] active:scale-95 shadow-xs cursor-pointer"
              >
                Assess
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-[#16171A] hover:text-[#E20935] focus:outline-none cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 sm:px-6 pt-3 pb-8 space-y-3 shadow-2xl max-h-[calc(100vh-75px)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                About Us
              </Link>

              {/* Collapsible Visa Services */}
              <div>
                <div
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    All Visa Services
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }}
                    className="p-1 text-slate-500 hover:text-[#E20935]"
                    aria-label="Toggle services menu"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3.5 space-y-1.5 border-l-2 border-[#E20935] my-2 animate-in fade-in duration-150">
                    {SERVICES_LIST.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E20935] cursor-pointer"
                      >
                        • {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Collapsible Destination Guides */}
              <div>
                <div
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
                  onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                >
                  <span className="flex-1">Destination Guides</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileCountriesOpen(!mobileCountriesOpen);
                    }}
                    className="p-1 text-slate-500 hover:text-[#E20935]"
                    aria-label="Toggle destinations menu"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCountriesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {mobileCountriesOpen && (
                  <div className="pl-3.5 space-y-2 border-l-2 border-[#E20935] my-2 animate-in fade-in duration-150">
                    {COUNTRIES_LIST.filter((c) => c.id !== "europe-usa").map((country) => (
                      <Link
                        key={country.id}
                        href={`/countries/${country.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E20935] cursor-pointer"
                      >
                        <CountryFlag code={country.flagCode} size="sm" />
                        <span>{country.name} Guide</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#E20935] hover:bg-red-50 cursor-pointer"
              >
                Free Points Calculator
              </Link>
              <Link
                href="/success-stories"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935] cursor-pointer"
              >
                Success Stories & Grants
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
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
                className="flex items-center justify-center gap-2 text-sm text-[#16171A] font-semibold hover:text-[#E20935] py-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E20935]" />
                <span>Call Hotline: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
