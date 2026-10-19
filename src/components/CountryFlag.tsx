"use client";

import React from "react";

interface CountryFlagProps {
  code: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function CountryFlag({ code, className = "", size = "md" }: CountryFlagProps) {
  const normalized = (code || "").toLowerCase().trim();

  // Size mappings (aspect ratio 4:3 or 3:2)
  const sizeClasses = {
    sm: "w-4 h-3 text-[10px]",
    md: "w-6 h-4 text-xs",
    lg: "w-8 h-5 text-sm",
    xl: "w-10 h-7 text-base"
  }[size];

  const commonProps = {
    className: `inline-block shrink-0 rounded-xs overflow-hidden shadow-xs border border-black/10 align-middle ${sizeClasses} ${className}`,
    viewBox: "0 0 640 480",
    xmlns: "http://www.w3.org/2000/svg"
  };

  // Canada 🇨🇦
  if (normalized === "ca" || normalized === "canada") {
    return (
      <svg {...commonProps} aria-label="Flag of Canada">
        <path fill="#d52b1e" d="M0 0h160v480H0zM480 0h160v480H480z" />
        <path fill="#fff" d="M160 0h320v480H160z" />
        {/* Maple Leaf */}
        <path
          fill="#d52b1e"
          d="M320 85l18 48 38-16-10 40 42 12-32 30 18 36-40 4-4 46-18-20-4 45-8-45-18 20-4-46-40-4 18-36-32-30 42-12-10-40 38 16z"
        />
        <path fill="#d52b1e" d="M315 320h10v75h-10z" />
      </svg>
    );
  }

  // Australia 🇦🇺
  if (normalized === "au" || normalized === "australia") {
    return (
      <svg {...commonProps} aria-label="Flag of Australia">
        <path fill="#00008b" d="M0 0h640v480H0z" />
        {/* Union Jack in Canton */}
        <g>
          <clipPath id="au-canton">
            <path d="M0 0h320v240H0z" />
          </clipPath>
          <g clipPath="url(#au-canton)">
            <path fill="#fff" d="M0 0l320 240M320 0L0 240" stroke="#fff" strokeWidth="48" />
            <path fill="#cc0000" d="M0 0l320 240M320 0L0 240" stroke="#cc0000" strokeWidth="24" />
            <path fill="#fff" d="M160 0v240M0 120h320" stroke="#fff" strokeWidth="60" />
            <path fill="#cc0000" d="M160 0v240M0 120h320" stroke="#cc0000" strokeWidth="36" />
          </g>
        </g>
        {/* Commonwealth 7-pointed Star */}
        <circle cx="160" cy="360" r="38" fill="#fff" />
        {/* Southern Cross Stars */}
        <circle cx="480" cy="100" r="14" fill="#fff" />
        <circle cx="540" cy="180" r="14" fill="#fff" />
        <circle cx="480" cy="380" r="14" fill="#fff" />
        <circle cx="420" cy="220" r="14" fill="#fff" />
        <circle cx="505" cy="260" r="9" fill="#fff" />
      </svg>
    );
  }

  // United Kingdom 🇬🇧
  if (normalized === "gb" || normalized === "uk" || normalized === "united kingdom") {
    return (
      <svg {...commonProps} aria-label="Flag of the United Kingdom">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 0l640 480M640 0L0 480" stroke="#fff" strokeWidth="70" />
        <path fill="#c8102e" d="M0 0l640 480M640 0L0 480" stroke="#c8102e" strokeWidth="35" />
        <path fill="#fff" d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="100" />
        <path fill="#c8102e" d="M320 0v480M0 240h640" stroke="#c8102e" strokeWidth="60" />
      </svg>
    );
  }

  // United States 🇺🇸
  if (normalized === "us" || normalized === "usa" || normalized === "united states") {
    return (
      <svg {...commonProps} aria-label="Flag of the United States">
        <path fill="#b22234" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
        <path fill="#3c3b6e" d="M0 0h280v258H0z" />
        {/* Star dots */}
        <g fill="#fff">
          <circle cx="35" cy="32" r="8" /><circle cx="95" cy="32" r="8" /><circle cx="155" cy="32" r="8" /><circle cx="215" cy="32" r="8" />
          <circle cx="65" cy="64" r="8" /><circle cx="125" cy="64" r="8" /><circle cx="185" cy="64" r="8" /><circle cx="245" cy="64" r="8" />
          <circle cx="35" cy="96" r="8" /><circle cx="95" cy="96" r="8" /><circle cx="155" cy="96" r="8" /><circle cx="215" cy="96" r="8" />
          <circle cx="65" cy="128" r="8" /><circle cx="125" cy="128" r="8" /><circle cx="185" cy="128" r="8" /><circle cx="245" cy="128" r="8" />
          <circle cx="35" cy="160" r="8" /><circle cx="95" cy="160" r="8" /><circle cx="155" cy="160" r="8" /><circle cx="215" cy="160" r="8" />
          <circle cx="65" cy="192" r="8" /><circle cx="125" cy="192" r="8" /><circle cx="185" cy="192" r="8" /><circle cx="245" cy="192" r="8" />
          <circle cx="35" cy="224" r="8" /><circle cx="95" cy="224" r="8" /><circle cx="155" cy="224" r="8" /><circle cx="215" cy="224" r="8" />
        </g>
      </svg>
    );
  }

  // Germany 🇩🇪
  if (normalized === "de" || normalized === "germany") {
    return (
      <svg {...commonProps} aria-label="Flag of Germany">
        <path fill="#000" d="M0 0h640v160H0z" />
        <path fill="#dd0000" d="M0 160h640v160H0z" />
        <path fill="#ffce00" d="M0 320h640v160H0z" />
      </svg>
    );
  }

  // Dual Flag for USA & Europe (Schengen) 🇺🇸 🇪🇺
  if (
    normalized === "us-eu" ||
    normalized === "eu-us" ||
    normalized === "europe-usa" ||
    normalized === "usa-europe" ||
    normalized === "us_eu" ||
    normalized === "eu_us"
  ) {
    return (
      <span className={`inline-flex items-center gap-1 shrink-0 align-middle ${className}`} aria-label="Flags of USA and Europe">
        <CountryFlag code="us" size={size} className="rounded-xs shadow-xs" />
        <CountryFlag code="eu" size={size} className="rounded-xs shadow-xs" />
      </span>
    );
  }

  // European Union 🇪🇺 / Europe
  if (normalized === "eu" || normalized === "europe" || normalized === "schengen") {
    return (
      <svg {...commonProps} aria-label="Flag of Europe">
        <path fill="#003399" d="M0 0h640v480H0z" />
        <g fill="#ffcc00">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const cx = Math.round(320 + 130 * Math.cos(angle));
            const cy = Math.round(240 + 130 * Math.sin(angle));
            return <circle key={i} cx={cx} cy={cy} r="12" />;
          })}
        </g>
      </svg>
    );
  }

  // UAE 🇦🇪 / Dubai
  if (normalized === "ae" || normalized === "uae" || normalized === "dubai") {
    return (
      <svg {...commonProps} aria-label="Flag of United Arab Emirates">
        <path fill="#00732f" d="M160 0h480v160H160z" />
        <path fill="#fff" d="M160 160h480v160H160z" />
        <path fill="#000" d="M160 320h480v160H160z" />
        <path fill="#ff0000" d="M0 0h160v480H0z" />
      </svg>
    );
  }

  // New Zealand 🇳🇿
  if (normalized === "nz" || normalized === "new zealand") {
    return (
      <svg {...commonProps} aria-label="Flag of New Zealand">
        <path fill="#00247d" d="M0 0h640v480H0z" />
        <g>
          <clipPath id="nz-canton">
            <path d="M0 0h320v240H0z" />
          </clipPath>
          <g clipPath="url(#nz-canton)">
            <path fill="#fff" d="M0 0l320 240M320 0L0 240" stroke="#fff" strokeWidth="48" />
            <path fill="#cc0000" d="M0 0l320 240M320 0L0 240" stroke="#cc0000" strokeWidth="24" />
            <path fill="#fff" d="M160 0v240M0 120h320" stroke="#fff" strokeWidth="60" />
            <path fill="#cc0000" d="M160 0v240M0 120h320" stroke="#cc0000" strokeWidth="36" />
          </g>
        </g>
        {/* 4 Red Stars with White Borders */}
        <circle cx="480" cy="110" r="14" fill="#fff" /><circle cx="480" cy="110" r="10" fill="#cc0000" />
        <circle cx="550" cy="200" r="12" fill="#fff" /><circle cx="550" cy="200" r="8" fill="#cc0000" />
        <circle cx="480" cy="360" r="15" fill="#fff" /><circle cx="480" cy="360" r="11" fill="#cc0000" />
        <circle cx="430" cy="230" r="12" fill="#fff" /><circle cx="430" cy="230" r="8" fill="#cc0000" />
      </svg>
    );
  }

  // India 🇮🇳
  if (normalized === "in" || normalized === "india") {
    return (
      <svg {...commonProps} aria-label="Flag of India">
        <path fill="#ff9933" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="50" fill="none" stroke="#000080" strokeWidth="7" />
        <circle cx="320" cy="240" r="12" fill="#000080" />
      </svg>
    );
  }

  // Fallback
  return (
    <span className={`inline-flex items-center justify-center font-bold bg-[#16171A] text-white rounded-xs border border-white/20 uppercase tracking-tighter ${sizeClasses} ${className}`}>
      {code.slice(0, 2).toUpperCase()}
    </span>
  );
}
