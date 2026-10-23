export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  heroImage: string;
  processingTime: string;
  successRate: string;
  keyFeatures: string[];
  eligibilityRequirements: string[];
  processSteps: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface CountryItem {
  id: string;
  slug: string;
  name: string;
  capital: string;
  flagCode: string;
  tagline: string;
  heroImage: string;
  popularStreams: string[];
  minPointsNeeded: string;
  avgSalary: string;
  salaryStat?: { amount: string; period: string };
  pointsStat?: { score: string; detail: string };
  pathwayStat?: { title: string; subtitle: string };
  whyChoose: string[];
  topVisas: { name: string; type: string; processing: string; description: string }[];
  overview: string;
}

export const COMPANY_INFO = {
  name: "Viraj Immigration",
  legalName: "Viraj Immigration Consultancy Services",
  tagline: "Dream, Apply, Achieve: Begin Your Global PR Journey",
  phone: "+91 62621 91313",
  whatsapp: "+916262191313",
  email: "info@virajvisasexpert.com",
  secondaryEmail: "info@virajvisasexpert.com",
  officeIndia: "10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi, Delhi 110019",
  officeOverseas: "Suite 502, 120 Spencer Street, Melbourne VIC 3000, Australia",
  accreditations: [
    { title: "MARA Registered", code: "MARN: 1802914", country: "Australia" },
    { title: "CICC / RCIC Licensed", code: "RCIC: R531892", country: "Canada" },
    { title: "IAA Licensed", code: "Adviser ID: 201901124", country: "New Zealand" },
    { title: "ISO 9001:2015", code: "Certified Quality Mgmt", country: "Global" }
  ],
  stats: [
    { label: "Years Immigration Experience", value: "15+" },
    { label: "Applications Experience", value: "30 K+" },
    { label: "Audited Success Rate", value: "99.9%" },
    { label: "Seeking Advice Every Year", value: "100 K+" }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "study-visa",
    slug: "study-visa",
    title: "Student Visa & PR Pathways",
    shortDesc: "Strategic education visa filing, genuine student criteria compliance, post-study work permits & clear pathways to permanent residency.",
    fullDesc: "We don't just secure student visas; we architect your entire journey from university enrollment to high-earning post-study work rights and permanent residency. We ensure 100% compliance with Genuine Student (GS) criteria, financial documentation, and visa lodging.",
    badge: "High Visa Success",
    iconName: "GraduationCap",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    processingTime: "4 - 8 Weeks",
    successRate: "99.2%",
    keyFeatures: [
      "Genuine Student (GS/GTE) legal documentation & SOP drafting",
      "Post-Study Work Permit (PGWP / Subclass 485) strategic roadmap",
      "Spouse and dependent accompaniment visa lodgement",
      "Financial audit, education loan & proof of funds clearance",
      "Fast-track visa submission via registered legal portals"
    ],
    eligibilityRequirements: [
      "Valid passport with minimum 6 months validity",
      "Confirmed Letter of Acceptance / Confirmation of Enrolment (CoE)",
      "Proof of required English proficiency (IELTS, PTE, or TOEFL)",
      "Verifiable proof of funds covering 1-year tuition and living expenses",
      "Clean medical fitness certification & police clearance certificate"
    ],
    processSteps: [
      { step: 1, title: "Course & PR Strategy Mapping", desc: "Selecting programs that align with high-demand skilled occupation lists for future PR." },
      { step: 2, title: "Financial & SOP Fortification", desc: "Drafting bulletproof Statement of Purpose addressing all immigration intent tests." },
      { step: 3, title: "Visa Filing & Biometrics", desc: "Lodging official application directly with the respective High Commission." },
      { step: 4, title: "Pre-Departure & Landing Support", desc: "Flight orientation, foreign exchange, accommodation and post-arrival compliance." }
    ],
    faqs: [
      { q: "Can my spouse work full-time while I am studying?", a: "Yes, in destinations like Australia and Canada (for master's and doctoral degrees), spouses are eligible for open full-time work permits during the study duration." },
      { q: "How does studying abroad lead to Permanent Residency?", a: "Graduates earn local educational credentials, vital in-country skilled work experience via post-study work permits, and bonus points on immigration grids (e.g., Express Entry CRS and Australia SkillSelect)." }
    ]
  },
  {
    id: "work-permit",
    slug: "work-permit",
    title: "Work Permit & Skilled Migration",
    shortDesc: "Employer sponsorship, LMIA, Global Talent Stream, Australia TSS 482 & Subclass 186 employer nomination visas.",
    fullDesc: "Navigate complex employer sponsorship regulations and international talent migration streams. Whether you have a job offer needing LMIA/Sponsorship approval or are seeking employer-nominated migration, our registered immigration barristers handle the entire compliance pipeline.",
    badge: "Direct Work Rights",
    iconName: "Briefcase",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    processingTime: "6 - 16 Weeks",
    successRate: "97.8%",
    keyFeatures: [
      "Labour Market Impact Assessment (LMIA) legal documentation",
      "Australia Subclass 482 (Skills in Demand) & Subclass 186 Direct Entry",
      "UK Skilled Worker Visa sponsorship compliance & Certificate of Sponsorship (CoS)",
      "Skill assessment through authorized assessing bodies (ACS, VETASSESS, Engineers Australia)",
      "Direct transition roadmap from temporary work permit to PR"
    ],
    eligibilityRequirements: [
      "Relevant educational qualification mapped to ANZSCO or NOC codes",
      "Minimum 2–3 years verifiable post-qualification work experience",
      "Valid job offer from an approved sponsor employer (for employer-sponsored streams)",
      "Language test meeting the minimum vocational or competent threshold",
      "Positive skills assessment outcome"
    ],
    processSteps: [
      { step: 1, title: "Occupation Code & Assessment", desc: "Evaluating your CV against official national occupational classifications (NOC / ANZSCO)." },
      { step: 2, title: "Employer Sponsorship Clearance", desc: "Ensuring the sponsor employer holds an active approved sponsorship license and labor clearance." },
      { step: 3, title: "Visa Lodgement & Expedited Filing", desc: "Drafting legal submission letters arguing specialized economic value." },
      { step: 4, title: "Visa Grant & Work Commencement", desc: "Receiving your work visa with immediate work authorization." }
    ],
    faqs: [
      { q: "Can I bring my family on a work permit?", a: "Yes, your spouse receives an open work permit or dependent visa, and dependent children can attend government schools." },
      { q: "What happens if I change my employer?", a: "You can transfer your visa to another approved employer by lodging a nomination transfer without leaving the country." }
    ]
  },
  {
    id: "permanent-residency",
    slug: "permanent-residency",
    title: "Permanent Residency (PR) & Express Entry",
    shortDesc: "Canada Express Entry & Provincial Nominee Programs (PNP), Australia Subclass 189/190/491 points-tested skilled immigration.",
    fullDesc: "Attain unconditional permanent residency for you and your family. Enjoy free healthcare, world-class education for your children, full career flexibility, and a guaranteed pathway to citizenship in top-tier global economies like Canada and Australia.",
    badge: "Most Popular",
    iconName: "Award",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    processingTime: "6 - 12 Months",
    successRate: "99.1%",
    keyFeatures: [
      "Comprehensive CRS Score / Points Grid Optimization review",
      "Provincial Nominee Program (PNP) applications across all Canadian provinces",
      "Australia SkillSelect Expression of Interest (EOI) & State Nomination (190/491)",
      "Credential Evaluation (ECA through WES, ICAS, IQAS, CES)",
      "Legal representation by MARA registered agents & CICC licensed consultants"
    ],
    eligibilityRequirements: [
      "Age ideally under 40 years for maximum points allocation",
      "Bachelor's, Master's, or PhD degree verified through ECA / Skill Assessment",
      "Minimum 3 years of continuous skilled employment experience",
      "Strong language test scores (CLB 8/9+ for Canada, Proficient/Superior for Australia)",
      "Proof of settlement funds for the entire accompanying family"
    ],
    processSteps: [
      { step: 1, title: "Free Profile Score Audit", desc: "Calculating your exact points tally across age, education, language, and employment." },
      { step: 2, title: "Skill & Educational Verification", desc: "Submitting ECA to WES or professional skill assessment to designated assessing bodies." },
      { step: 3, title: "EOI & Invitation to Apply (ITA)", desc: "Submitting Expressions of Interest to federal and state immigration pools." },
      { step: 4, title: "PR Lodgement & Visa Grant", desc: "Submitting full police, medical, and asset dossiers for unconditional PR grant." }
    ],
    faqs: [
      { q: "What is the minimum score required for Australia PR?", a: "The legal minimum is 65 points on the points test, however competitive invitations for Subclass 189 and 190 typically range from 75 to 85+ points depending on your occupation." },
      { q: "How long is permanent residency valid for?", a: "A PR visa is typically granted for 5 years with unrestricted travel facility, and can be renewed or converted to citizenship after fulfilling residency obligations." }
    ]
  },
  {
    id: "business-investor",
    slug: "business-investor",
    title: "Business & Investor Visa",
    shortDesc: "High net-worth immigration, Canada Start-Up Visa, Australia Subclass 188/888 & European Golden Visa residency programs.",
    fullDesc: "Expand your business footprint globally while securing permanent residency for your family. Designed for business owners, corporate executives, and high net-worth investors seeking wealth preservation, global mobility, and tax-efficient residency.",
    badge: "High Net Worth",
    iconName: "TrendingUp",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
    processingTime: "8 - 18 Months",
    successRate: "98.4%",
    keyFeatures: [
      "Canada Start-Up Visa with designated Angel Investor & Incubator support",
      "European Residency by Investment (Greece, Portugal, Spain Golden Visas)",
      "UK Innovator Founder Visa and scale-up business plans",
      "Source of funds legal audit and compliance certification",
      "Complete white-glove corporate setup, legal and tax advisory"
    ],
    eligibilityRequirements: [
      "Demonstrable business track record or senior executive managerial experience",
      "Verifiable net assets ranging from $300,000 to $2,000,000+ depending on jurisdiction",
      "Qualifying investment or capital deployment in approved enterprises or government bonds",
      "Clean source of wealth audit verified by chartered accountants",
      "Passage of rigorous global security and anti-money laundering checks"
    ],
    processSteps: [
      { step: 1, title: "Jurisdiction & Investment Assessment", desc: "Evaluating financial goals to determine the optimal country and program." },
      { step: 2, title: "Business Plan & Endorsement", desc: "Drafting market feasibility reports and obtaining designated endorsement bodies." },
      { step: 3, title: "Capital Deployment & Due Diligence", desc: "Facilitating escrow transfers and verifying compliant source of funds." },
      { step: 4, title: "Residency Card & Citizenship Roadmap", desc: "Receiving resident status with minimal physical stay obligations." }
    ],
    faqs: [
      { q: "Do European Golden Visas require me to live in the country full-time?", a: "No. Many European programs (like Portugal and Greece) require as few as 7 to 14 days per year of physical presence while maintaining full Schengen travel rights." }
    ]
  },
  {
    id: "tourist-visitor",
    slug: "tourist-visitor",
    title: "Tourist & Visitor Visa",
    shortDesc: "Fast-track Schengen, USA B1/B2, Canada Visitor & UK Standard Visitor visas with high approval rates and refusal rectification.",
    fullDesc: "Travel the world without visa stress. Whether planning a leisure holiday, visiting family, attending business conferences, or reapplying after a previous visa refusal, we present an airtight dossier establishing undeniable financial capacity and strong ties to your home country.",
    badge: "Fast-Track Approval",
    iconName: "Plane",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
    processingTime: "10 - 25 Days",
    successRate: "99.4%",
    keyFeatures: [
      "Refusal Case Overturn: Specializing in rectifying Section 214(b) and previous visa rejections",
      "Complete documentation, invitation letters, day-wise itineraries, and cover letters",
      "Consulate interview coaching for US B1/B2 and high-scrutiny embassies",
      "Multi-entry Schengen visa strategies for up to 5-year validity",
      "Express premium appointments and biometric scheduling assistance"
    ],
    eligibilityRequirements: [
      "Valid passport with at least 6 months remaining validity",
      "Verifiable bank statements demonstrating sufficient travel funding",
      "Proof of stable employment, business ownership, or property ties",
      "Clear travel itinerary, flight reservations, and hotel bookings",
      "Invitation letter if visiting friends, family, or business partners"
    ],
    processSteps: [
      { step: 1, title: "Intent & Document Scrutiny", desc: "Reviewing your financial standing and ties to establish unquestionable home ties." },
      { step: 2, title: "Airtight File Construction", desc: "Preparing the official dossier, cover letters, and tax proof." },
      { step: 3, title: "Biometric & Interview Appointment", desc: "Securing earliest consular appointment slots and one-on-one mock interview drills." },
      { step: 4, title: "Passport Stamping & Collection", desc: "Receiving your stamped multi-entry visa." }
    ],
    faqs: [
      { q: "Can I apply if my visa was previously rejected?", a: "Yes. In fact, over 40% of our clients come to us after prior refusals. We request official GCMS/CAIPS notes to address the exact refusal reason before re-filing." }
    ]
  }
];

export const COUNTRIES_LIST: CountryItem[] = [
  {
    id: "canada",
    slug: "canada",
    name: "Canada",
    capital: "Ottawa",
    flagCode: "CA",
    tagline: "The World's #1 Destination for Skilled Professionals & Families",
    heroImage: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1800&q=80",
    popularStreams: ["Express Entry (FSW/CEC)", "Provincial Nominee Programs (OINP, SINP, BCPNP)", "Start-Up Visa", "LMIA Work Permits", "Family Class"],
    minPointsNeeded: "CRS ~470 - 510 (Direct Entry) or 600+ (with PNP)",
    avgSalary: "$78,000 CAD / Year",
    salaryStat: {
      amount: "$78,000 CAD",
      period: "Avg. skilled income / yr"
    },
    pointsStat: {
      score: "CRS ~470–510",
      detail: "Direct Pool (+600 via PNP)"
    },
    pathwayStat: {
      title: "Express Entry",
      subtitle: "Federal PR & Provincial PNP"
    },
    overview: "Canada's welcoming immigration system offers clear paths to permanent residency, world-renowned free healthcare, subsidized education, and citizenship in just 3 years.",
    whyChoose: [
      "World-class universal healthcare covered by provincial health insurance",
      "Free public schooling from kindergarten through high school for children",
      "Fast-track to Canadian citizenship after 1,095 days of physical presence",
      "Spouse gets immediate open work rights on work and study programs",
      "Safe, multicultural cities consistently ranked top 10 globally for liveability"
    ],
    topVisas: [
      { name: "Federal Skilled Worker (Express Entry)", type: "Permanent Residency", processing: "6 Months", description: "Points-based direct PR for skilled managers and professionals." },
      { name: "Provincial Nominee Program (PNP)", type: "Permanent Residency", processing: "9-14 Months", description: "Provincial nominations granting +600 points on the CRS grid." },
      { name: "Global Talent Stream Work Permit", type: "Work Permit", processing: "4-8 Weeks", description: "Fast-track work authorization for high-tech and specialized workers." }
    ]
  },
  {
    id: "australia",
    slug: "australia",
    name: "Australia",
    capital: "Canberra",
    flagCode: "AU",
    tagline: "Sun, High Earnings & Unrivaled Quality of Life",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["Subclass 189 (Skilled Independent)", "Subclass 190 (Skilled Nominated)", "Subclass 491 (Regional)", "Subclass 482 (TSS Work)", "Subclass 186"],
    minPointsNeeded: "65 Points min. (Competitive cutoff: 75 - 85+ pts)",
    avgSalary: "$92,000 AUD / Year",
    salaryStat: {
      amount: "$92,000 AUD",
      period: "Avg. skilled income / yr"
    },
    pointsStat: {
      score: "65 Points Min",
      detail: "Competitive: 75–85+ pts"
    },
    pathwayStat: {
      title: "Direct PR",
      subtitle: "Subclass 189, 190 & 491"
    },
    overview: "Australia offers some of the highest minimum wages in the world, pristine beaches, great weather, and a robust immigration program for engineers, IT professionals, healthcare staff, and trades.",
    whyChoose: [
      "Medicare: Universal access to public hospitals and subsidized medicine",
      "Among the highest minimum wages and hourly salaries in the OECD",
      "Pathway to Australian passport—one of the most powerful travel documents globally",
      "Balanced outdoor lifestyle with sunny weather throughout the year",
      "Pensions, family tax benefits, and child care subsidies for permanent residents"
    ],
    topVisas: [
      { name: "Skilled Independent Visa (Subclass 189)", type: "Permanent Residency", processing: "8-12 Months", description: "Direct PR with no employer or state sponsorship requirement." },
      { name: "Skilled Nominated Visa (Subclass 190)", type: "Permanent Residency", processing: "9-14 Months", description: "State-sponsored PR granting +5 bonus points on SkillSelect." },
      { name: "Temporary Skill Shortage (Subclass 482)", type: "Work Visa", processing: "6-10 Weeks", description: "Employer-sponsored work visa with seamless PR transition." }
    ]
  },
  {
    id: "uk",
    slug: "uk",
    name: "United Kingdom",
    capital: "London",
    flagCode: "GB",
    tagline: "The Global Financial & Cultural Hub of Europe",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["Skilled Worker Visa", "Global Talent Visa", "Scale-up Worker", "Innovator Founder Visa", "Indefinite Leave to Remain (ILR)"],
    minPointsNeeded: "70 Points (Job offer + English + Salary threshold)",
    avgSalary: "£46,000 GBP / Year",
    salaryStat: {
      amount: "£46,000 GBP",
      period: "Avg. skilled income / yr"
    },
    pointsStat: {
      score: "70 Points Req.",
      detail: "Job Offer + English + Salary"
    },
    pathwayStat: {
      title: "Skilled Worker",
      subtitle: "5-Yr ILR Settlement Route"
    },
    overview: "With the post-Brexit points-based immigration system, the UK has opened doors wider than ever for global talent in fintech, medicine, technology, and academia.",
    whyChoose: [
      "NHS healthcare system providing comprehensive medical care",
      "Gateway to European, Middle Eastern, and American global trade corridors",
      "Children study in historic, world-ranking education institutions",
      "Indefinite Leave to Remain (ILR) granted after 5 years of legal work",
      "Spouse enjoys unconditional open work authorization"
    ],
    topVisas: [
      { name: "Skilled Worker Visa", type: "Employment / Path to PR", processing: "3-8 Weeks", description: "For skilled individuals with an approved job offer and sponsorship certificate." },
      { name: "Global Talent Visa", type: "Direct Settlement Path", processing: "4-6 Weeks", description: "For leaders and emerging leaders in tech, science, arts, and humanities." },
      { name: "Innovator Founder Visa", type: "Business & Investment", processing: "8-12 Weeks", description: "Fast-track 3-year settlement for innovative business entrepreneurs." }
    ]
  },
  {
    id: "usa",
    slug: "usa",
    name: "United States",
    capital: "Washington D.C.",
    flagCode: "US",
    tagline: "The World Leader in Enterprise, Technology & High-Yield Careers",
    heroImage: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["EB-1 Extraordinary Ability", "EB-2 National Interest Waiver (NIW)", "EB-5 Immigrant Investor", "L-1 Intracompany Transferee", "O-1 Visa"],
    minPointsNeeded: "Direct Petition (EB-1/EB-2 NIW/EB-5)",
    avgSalary: "$105,000 USD / Year",
    salaryStat: {
      amount: "$105,000 USD",
      period: "Avg. skilled income / yr"
    },
    pointsStat: {
      score: "Direct Petition",
      detail: "EB-1 / EB-2 NIW / EB-5"
    },
    pathwayStat: {
      title: "Green Card",
      subtitle: "Permanent US Residency"
    },
    overview: "From the Silicon Valley innovation ecosystem to New York global finance, the United States offers exceptional earning potential and clear Green Card settlement pathways for professionals and investors.",
    whyChoose: [
      "World's largest economy with highest global tech and executive compensation",
      "Permanent Green Card grants unconditional residency and pathway to US citizenship",
      "EB-2 National Interest Waiver (NIW) allows self-petition with no employer sponsor needed",
      "World-ranking Ivy League education and unmatched research institutions",
      "Full flexibility to invest, incorporate, and expand commercial enterprises globally"
    ],
    topVisas: [
      { name: "EB-1 & EB-2 NIW Green Card", type: "Permanent Residency", processing: "10-18 Months", description: "Direct Green Card for advanced degree holders, researchers, and tech pioneers." },
      { name: "EB-5 Immigrant Investor Program", type: "Green Card", processing: "18-24 Months", description: "Direct permanent residency for qualified commercial enterprise investors." },
      { name: "L-1 & O-1 Specialized Visas", type: "Executive & Talent", processing: "4-12 Weeks", description: "Work authorization for multinational executives and extraordinary ability talent." }
    ]
  },
  {
    id: "europe",
    slug: "europe",
    name: "Europe & Germany",
    capital: "Berlin / Brussels",
    flagCode: "EU",
    tagline: "Schengen Mobility, Free Education & Germany's High-Tech Economy",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["Germany Opportunity Card (Chancenkarte)", "EU Blue Card", "Portugal Golden Visa", "Spain Residence", "Austria Red-White-Red Card"],
    minPointsNeeded: "6 Points (Chancenkarte) / EU Blue Card Threshold",
    avgSalary: "€68,000 EUR / Year",
    salaryStat: {
      amount: "€68,000 EUR",
      period: "Avg. skilled income / yr"
    },
    pointsStat: {
      score: "6 Points Req.",
      detail: "Germany Chancenkarte Grid"
    },
    pathwayStat: {
      title: "EU Blue Card",
      subtitle: "Schengen Settlement & PR"
    },
    overview: "With Germany's progressive Opportunity Card (Chancenkarte) and the pan-European EU Blue Card, experience high living standards, tuition-free university education, and borderless travel across 29 Schengen nations.",
    whyChoose: [
      "Borderless travel, live, and work access across 29 Schengen member states",
      "Tuition-free public universities across Germany and Northern Europe",
      "Fast-track to permanent settlement (21-27 months with German language proficiency)",
      "Comprehensive national healthcare and family social security benefits",
      "Strong labor protections, 30 days statutory paid vacation, and high work-life balance"
    ],
    topVisas: [
      { name: "Germany Opportunity Card (Chancenkarte)", type: "Jobseeker Visa", processing: "4-8 Weeks", description: "Points-based entry allowing skilled professionals to seek jobs in Germany." },
      { name: "EU Blue Card", type: "Work & Settlement", processing: "6-12 Weeks", description: "Fast-track residency for highly qualified university graduates across the EU." },
      { name: "European Golden & Nomad Visas", type: "Residency", processing: "8-16 Weeks", description: "Flexible residency permits for investors, entrepreneurs, and remote professionals." }
    ]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE & Dubai",
    capital: "Dubai & Abu Dhabi",
    flagCode: "AE",
    tagline: "0% Income Tax, 10-Year Golden Visas & Global Business Capital",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["10-Year Golden Visa", "Green Visa (Freelance & Self-Employment)", "Remote Work Visa", "Corporate Employment", "Real Estate Investor Visa"],
    minPointsNeeded: "Direct 10-Yr Golden Visa (No Points System)",
    avgSalary: "AED 320,000 / Year",
    salaryStat: {
      amount: "AED 320,000",
      period: "Tax-free skilled income / yr"
    },
    pointsStat: {
      score: "No Points System",
      detail: "Salary / Degree / Investment"
    },
    pathwayStat: {
      title: "10-Yr Golden Visa",
      subtitle: "Long-Term Renewable Residency"
    },
    overview: "The United Arab Emirates is the world's leading tax-free business and lifestyle haven, offering 10-year Golden Visas, 100% foreign enterprise ownership, world-class safety, and supreme global connectivity.",
    whyChoose: [
      "0% personal income tax, capital gains tax, and corporate tax exemptions",
      "10-Year renewable Golden Visa with 100% foreign business ownership",
      "Consistently ranked among the top 3 safest countries in the world",
      "Sponsor your spouse, children of any age, and domestic staff with ease",
      "Premier global aviation hub connecting Europe, Asia, and North America"
    ],
    topVisas: [
      { name: "10-Year UAE Golden Visa", type: "Long-Term Residency", processing: "2-4 Weeks", description: "Self-sponsored 10-year residency for professionals earning AED 30k+/mo, investors, and executives." },
      { name: "UAE Green Visa (Freelancer / Skilled)", type: "5-Year Residency", processing: "2-3 Weeks", description: "5-year residency for self-employed professionals without requiring an employer sponsor." },
      { name: "Remote Work & Digital Nomad Visa", type: "1-Year Renewable", processing: "1-2 Weeks", description: "Live tax-free in Dubai while working remotely for your overseas employer." }
    ]
  },
  {
    id: "europe-usa",
    slug: "europe-usa",
    name: "USA & Europe (Combined)",
    capital: "Washington D.C. / Brussels",
    flagCode: "US-EU",
    tagline: "The Epicenters of Innovation, Enterprise & Wealth",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["USA EB-5 Immigrant Investor", "USA L-1 / H-1B", "Germany Opportunity Card (Chancenkarte)", "EU Blue Card", "Golden Visas"],
    minPointsNeeded: "Varies by Program / Investment tier",
    avgSalary: "$95,000 USD / €65,000 EUR",
    salaryStat: {
      amount: "$95k USD / €65k EUR",
      period: "High-earning skilled average"
    },
    pointsStat: {
      score: "Stream-Specific",
      detail: "Chancenkarte / EB-5 / Blue Card"
    },
    pathwayStat: {
      title: "Green & Blue Card",
      subtitle: "Direct Residency Grants"
    },
    overview: "From the Silicon Valley innovation boom in the United States to Germany's progressive Opportunity Card and EU Blue Card, experience the pinnacle of global careers and citizenship.",
    whyChoose: [
      "Unlimited access to 29 Schengen member states with no internal borders",
      "US Green Card gives permanent residency and access to federal benefits",
      "Germany's Chancenkarte allows job seeking with a points-based entry card",
      "Zero tuition fees at public universities across Germany and Northern Europe",
      "Dual citizenship recognized across multiple European countries"
    ],
    topVisas: [
      { name: "Germany Opportunity Card (Chancenkarte)", type: "Jobseeker Visa", processing: "4-8 Weeks", description: "Points-based entry allowing skilled professionals to seek jobs in Germany." },
      { name: "US EB-5 Immigrant Investor", type: "Green Card", processing: "18-24 Months", description: "Direct permanent residency for qualified commercial enterprise investors." },
      { name: "EU Blue Card", type: "Work & Settlement", processing: "6-12 Weeks", description: "Fast-track residency for highly qualified university graduates across the EU." }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Rajesh & Sunita Sharma",
    country: "Canada PR (Express Entry FSW)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "Our CRS was 468, which felt hopeless with recent high cutoffs. Viraj Immigration guided us through the Ontario OINP Human Capital stream. Within 6 months, we had our nomination (+600 points) and our Canada PR stamp. Unbelievable expertise!",
    rating: 5,
    grantYear: "2024",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Vikramaditya Sengupta",
    country: "Australia Subclass 189 (Civil Engineer)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "My CDR assessment with Engineers Australia was rejected previously when I tried alone. The MARA agents at Viraj rebuilt my CDR report from scratch. Received positive skills assessment in 3 weeks and Australia PR grant within 9 months!",
    rating: 5,
    grantYear: "2024",
    videoThumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Ananya & Rohan Deshmukh",
    country: "UK Skilled Worker + Spouse Visa",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    quote: "Secured our UK work sponsorship through their corporate network in London. Their legal team drafted our Certificate of Sponsorship compliance within 10 days. We landed in Manchester last month. Flawless service!",
    rating: 5,
    grantYear: "2025",
    videoThumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Harpreet Singh Mann",
    country: "Germany Opportunity Card (Chancenkarte)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "As a senior software developer, Germany's Chancenkarte was the ideal route. Viraj Immigration evaluated my points, translated my credentials to ZAB standards, and got my visa stamped in 4 weeks. Now working in Berlin!",
    rating: 5,
    grantYear: "2025",
    videoThumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  }
];

export const SUCCESS_STORIES_DATA = [
  {
    applicantName: "Pooja & Sameer Verma",
    visaType: "Canada Express Entry PR",
    country: "Canada",
    timeline: "5 Months from ITA to CoPR",
    grantDate: "January 2025",
    occupation: "IT Project Manager & Financial Analyst",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    highlight: "Received Canada PR with 8-year-old child. Now settled in Calgary, Alberta."
  },
  {
    applicantName: "Gurpreet K. Dhillon",
    visaType: "Australia Subclass 190 (Victoria)",
    country: "Australia",
    timeline: "7 Months",
    grantDate: "November 2024",
    occupation: "Registered Nurse",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    highlight: "Nursing skills assessment expedited via ANMAC, received Victorian state invitation at 85 points."
  },
  {
    applicantName: "Abhishek Chawla",
    visaType: "UK Innovator Founder Visa",
    country: "United Kingdom",
    timeline: "3 Months",
    grantDate: "February 2025",
    occupation: "Fintech Entrepreneur",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    highlight: "Secured endorsing body approval from Innovator International and relocated headquarters to Canary Wharf."
  },
  {
    applicantName: "Meenakshi Sundaram",
    visaType: "Canada Start-Up Visa",
    country: "Canada",
    timeline: "14 Months",
    grantDate: "December 2024",
    occupation: "AgriTech Co-founder",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    highlight: "Obtained letter of support from Canadian Angel Investor group, secured direct permanent residence for 3 co-founders."
  },
  {
    applicantName: "Karan Johar Malhotra",
    visaType: "Australia Subclass 482 to 186 PR",
    country: "Australia",
    timeline: "2 Years total to PR",
    grantDate: "March 2025",
    occupation: "Senior Executive Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    highlight: "Transitioned from temporary employer sponsorship to permanent residency in Sydney."
  },
  {
    applicantName: "Sneha Nair",
    visaType: "US B1/B2 Visitor Visa (Refusal Overturned)",
    country: "USA",
    timeline: "3 Weeks",
    grantDate: "April 2025",
    occupation: "Corporate Strategy Consultant",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    highlight: "Overcame 2 previous Section 214(b) refusals with our specialized interview rehearsal program."
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: "New Delhi (Head Office)",
    address: "10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi, Delhi 110019",
    phone: "+91 62621 91313",
    email: "info@virajvisasexpert.com",
    hours: "Mon - Sat: 10:00 AM - 6:00 PM",
    isHeadquarters: true,
    mapCoordinates: { lat: 28.549, lng: 77.253 }
  },
  {
    city: "Noida / Delhi NCR Corporate Office",
    address: "Level 4, Sovereign Corporate Tower, Sector 62, Noida, NCR, 201309",
    phone: "+91 62621 91313",
    email: "info@virajvisasexpert.com",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM",
    isHeadquarters: false,
    mapCoordinates: { lat: 28.628, lng: 77.364 }
  },
  {
    city: "Melbourne, Australia",
    address: "Suite 502, 120 Spencer Street, Melbourne VIC 3000, Australia",
    phone: "+61 3 9999 8888",
    email: "info@virajvisasexpert.com",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM AEST",
    isHeadquarters: false,
    mapCoordinates: { lat: -37.818, lng: 144.953 }
  },
  {
    city: "Toronto, Canada",
    address: "Suite 1800, 100 University Avenue, Toronto, ON M5J 1V6, Canada",
    phone: "+1 416 888 7766",
    email: "info@virajvisasexpert.com",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM EST",
    isHeadquarters: false,
    mapCoordinates: { lat: 43.647, lng: -79.385 }
  },
  {
    city: "Mumbai, India",
    address: "Floor 8, Platina Tower, Bandra Kurla Complex (BKC), Mumbai, 400051",
    phone: "+91 98765 43211",
    email: "info@virajvisasexpert.com",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM",
    isHeadquarters: false,
    mapCoordinates: { lat: 19.066, lng: 72.868 }
  }
];

export interface OccupationDemandItem {
  id: string;
  title: string;
  category: string;
  salaryAud: string;
  salaryCad: string;
  pathways: string[];
  pointsBenchmark: string;
  demandLevel: "Very High" | "Critical Shortage" | "Priority Fast-Track";
  iconName: string;
  description: string;
}

export const OCCUPATIONS_DEMAND: OccupationDemandItem[] = [
  {
    id: "it-professionals",
    title: "IT Professionals & Software Engineers",
    category: "Technology",
    salaryAud: "AUD 85,000 - 150,000",
    salaryCad: "CAD 90,000 - 155,000",
    pathways: ["Subclass 189/190", "Canada Express Entry STEM", "Germany Chancenkarte"],
    pointsBenchmark: "65 - 85 Points",
    demandLevel: "Critical Shortage",
    iconName: "Code",
    description: "Software developers, cloud architects, cybersecurity specialists, data scientists, and DevOps engineers are on high-priority skilled occupation lists with accelerated invitation rounds."
  },
  {
    id: "healthcare-workers",
    title: "Healthcare Workers & Nursing Specialists",
    category: "Healthcare",
    salaryAud: "AUD 75,000 - 140,000",
    salaryCad: "CAD 80,000 - 145,000",
    pathways: ["Subclass 189/190 Fast-Track", "Canada Category-Based Healthcare", "UK Health & Care Visa"],
    pointsBenchmark: "65 - 75 Points",
    demandLevel: "Critical Shortage",
    iconName: "Stethoscope",
    description: "Registered nurses, general practitioners, medical lab technicians, and physiotherapists receive expedited state nominations and invitations at minimum cutoff thresholds."
  },
  {
    id: "engineers",
    title: "Engineers (Civil, Mechanical, Electrical)",
    category: "Engineering",
    salaryAud: "AUD 80,000 - 135,000",
    salaryCad: "CAD 85,000 - 140,000",
    pathways: ["Engineers Australia CDR Pathway", "Provincial Nominee Program (PNP)", "Subclass 491 Regional"],
    pointsBenchmark: "70 - 80 Points",
    demandLevel: "Very High",
    iconName: "Cog",
    description: "Civil infrastructure, structural, electrical, and mechanical engineers are needed across major national transport, energy, and urban development projects."
  },
  {
    id: "finance-accounting",
    title: "Financial & Accounting Professionals",
    category: "Finance",
    salaryAud: "AUD 70,000 - 130,000",
    salaryCad: "CAD 75,000 - 130,000",
    pathways: ["CPA / CA ANZ Assessment", "Express Entry FSW", "Subclass 190 State Nomination"],
    pointsBenchmark: "75 - 85 Points",
    demandLevel: "Very High",
    iconName: "TrendingUp",
    description: "Chartered accountants, auditors, financial analysts, and corporate controllers in corporate hubs like Sydney, Melbourne, Toronto, and Vancouver."
  },
  {
    id: "skilled-trades",
    title: "Skilled Trades & Technicians",
    category: "Trades",
    salaryAud: "AUD 60,000 - 120,000",
    salaryCad: "CAD 65,000 - 115,000",
    pathways: ["TRA Skills Assessment", "Federal Skilled Trades (FST)", "Provincial Nominee Streams"],
    pointsBenchmark: "65 - 70 Points",
    demandLevel: "Priority Fast-Track",
    iconName: "Wrench",
    description: "Electricians, plumbers, automotive mechanics, welders, and HVAC technicians benefit from minimal English requirements and direct job-ready pathways."
  },
  {
    id: "teachers-educators",
    title: "Teachers & Early Childhood Educators",
    category: "Education",
    salaryAud: "AUD 60,000 - 105,000",
    salaryCad: "CAD 65,000 - 110,000",
    pathways: ["AITSL Assessment", "Subclass 189 Independent", "State Nomination Priority"],
    pointsBenchmark: "65 - 75 Points",
    demandLevel: "Critical Shortage",
    iconName: "GraduationCap",
    description: "Secondary school educators, special education tutors, and early childhood teachers enjoy fast-track regional invitations and excellent work-life balance."
  },
  {
    id: "supply-chain-logistics",
    title: "Supply Chain & Logistics Managers",
    category: "Logistics",
    salaryAud: "AUD 75,000 - 130,000",
    salaryCad: "CAD 75,000 - 125,000",
    pathways: ["VETASSESS Professional", "Express Entry Transport Category", "Subclass 491"],
    pointsBenchmark: "70 - 80 Points",
    demandLevel: "Very High",
    iconName: "Truck",
    description: "Procurement managers, warehouse directors, distribution heads, and supply chain analysts managing international trade corridors."
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing Specialists",
    category: "Marketing",
    salaryAud: "AUD 70,000 - 125,000",
    salaryCad: "CAD 70,000 - 120,000",
    pathways: ["VETASSESS Marketing", "Subclass 190 State Sponsored", "Global Talent Employer Sponsored"],
    pointsBenchmark: "75 - 85 Points",
    demandLevel: "Very High",
    iconName: "Target",
    description: "Digital marketing managers, market research analysts, brand strategists, and enterprise sales directors driving multinational growth."
  }
];

export interface ComparisonRow {
  feature: string;
  virajOffer: string;
  othersDont: string;
}

export const SMART_GEEK_COMPARISON: ComparisonRow[] = [
  {
    feature: "Experience & Legal Credibility",
    virajOffer: "15+ years of proven immigration expertise with verified grant records",
    othersDont: "Limited experience with immigration laws & changing visa policies"
  },
  {
    feature: "Visa Solutions & Pathways",
    virajOffer: "Complete visa solutions: PR, Work, Business, Student & Investor visas",
    othersDont: "Restricted visa offerings, focused on one category or country only"
  },
  {
    feature: "Global Network & Legal Presence",
    virajOffer: "Strong global presence in India, Australia & Canada with licensed barristers",
    othersDont: "Small local teams with limited real-world international exposure"
  },
  {
    feature: "Regulatory Licensing & Accreditations",
    virajOffer: "Direct MARA (Australia) & CICC (Canada) registered migration consultants",
    othersDont: "Unaccredited brokers relying on third-party sub-agents"
  },
  {
    feature: "PR Pathway Optimization",
    virajOffer: "Specialized expertise in PR points testing, state nominations & complex appeals",
    othersDont: "Weak understanding of PR rules, resulting in frequent CRS point miscalculations"
  },
  {
    feature: "Document Compliance & Zero Rejection",
    virajOffer: "Dedicated 3-tier legal compliance audit to prevent visa rejections",
    othersDont: "Inconsistent documentation checks leading to unnecessary refusals and delays"
  },
  {
    feature: "Technology & Transparent Tracking",
    virajOffer: "Milestone-driven client portal with real-time application tracking & updates",
    othersDont: "Manual, slow processes with zero tracking and poor communication"
  },
  {
    feature: "Client Advisory Approach",
    virajOffer: "Personalized, client-first legal guidance at every milestone",
    othersDont: "Generic, sales-driven approach with high upfront fees and little personal care"
  },
  {
    feature: "End-to-End Migration Support",
    virajOffer: "Complete support under one roof: Profile assessment, filing, grant to post-landing",
    othersDont: "Disconnected services handled by multiple uncoordinated agencies"
  }
];

export const SMART_GEEK_FAQS = [
  {
    q: "1. How to apply for Australian PR from India?",
    a: "You can apply for Australian PR from India through skilled migration pathways like Subclass 189 (Skilled Independent), Subclass 190 (Skilled Nominated), or Subclass 491 (Skilled Work Regional) visas. The process includes skills assessment through relevant authorities (ACS, Engineers Australia, VETASSESS), achieving required IELTS or PTE scores, submitting an Expression of Interest (EOI) on SkillSelect, securing state nomination (if applying for 190 or 491), and lodging your visa application with comprehensive documentation."
  },
  {
    q: "2. What is the eligibility score for Australian PR?",
    a: "The minimum statutory eligibility score for Australian PR is 65 points under the Points Test. Points are awarded based on age (up to 30 pts), education (up to 20 pts), skilled work experience (up to 15 pts), English language proficiency (up to 20 pts for Superior English), and state nomination bonus (5 pts for Subclass 190, 15 pts for Subclass 491). While 65 is the threshold to enter the pool, competitive scores of 75-85 points ensure faster invitations."
  },
  {
    q: "3. What is the age limit for Australian PR?",
    a: "The maximum age limit to apply for Australian PR under General Skilled Migration (GSM) is 45 years at the time of invitation. Applicants aged 25–32 years receive the highest points (30 points), making this age bracket ideal for skilled migration. Applicants aged 33–39 receive 25 points, and 40–44 receive 15 points."
  },
  {
    q: "4. How long does Australian PR processing take?",
    a: "Australian PR processing typically ranges between 6 to 12 months, depending on the visa subclass, occupation demand, points score, and whether you have a state nomination. Skills assessment takes approximately 4-8 weeks, EOI invitation depends on draw frequency, and final Department of Home Affairs visa processing takes 5-8 months post-lodgement."
  },
  {
    q: "5. What is the minimum IELTS score for Australian PR?",
    a: "The statutory minimum IELTS score is 6 bands in each of the 4 modules (Competent English, 0 points). However, scoring 7 bands (Proficient English) grants 10 points, and scoring 8 bands (Superior English) grants 20 bonus points. Most successful IT, engineering, and finance applicants secure 7 or 8 bands in IELTS or 65+/79+ in PTE Academic to maximize their invitation probability."
  },
  {
    q: "6. Do I need a PR consultant for an immigration visa?",
    a: "While self-application is permitted, working with a licensed MARA migration consultant dramatically increases your approval rate and prevents costly mistakes. Australian immigration laws and occupation lists update frequently. A certified consultant ensures accurate ANZSCO job matching, bulletproof CDR/RPL skills reports, EOI optimization, and complete compliance with Department of Home Affairs guidelines."
  },
  {
    q: "7. Which immigration visa is best for skilled professionals?",
    a: "For skilled professionals with tertiary qualifications and work experience, points-based visas like Australia Subclass 189/190 and Canada Express Entry (Federal Skilled Worker) are the gold standard. They provide immediate permanent residency upon arrival, unrestricted work rights for your spouse, free public healthcare, subsidized world-class schooling for children, and a direct path to citizenship."
  },
  {
    q: "8. How to choose the best immigration consultant in India?",
    a: "Always verify that the consultancy operates under registered migration lawyers (such as Australian MARA or Canadian CICC registration numbers). Choose a firm with transparent milestone fees, documented grant letters, physical corporate offices in major hubs (like Delhi and NCR), and verifiable client testimonials. Avoid unregistered agents who promise fake job guarantees or lack statutory licenses."
  }
];

