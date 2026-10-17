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
  whyChoose: string[];
  topVisas: { name: string; type: string; processing: string; description: string }[];
  overview: string;
}

export const COMPANY_INFO = {
  name: "Viraj Immigration",
  legalName: "Viraj Immigration Consultancy Services",
  tagline: "Your Gateway to Global Residency, Careers & Citizenship",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "admissions@virajimmigration.com",
  secondaryEmail: "info@virajimmigration.com",
  officeIndia: "Level 4, Sovereign Corporate Tower, Sector 62, Noida, NCR, India",
  officeOverseas: "Suite 502, 120 Spencer Street, Melbourne VIC 3000, Australia",
  accreditations: [
    { title: "MARA Registered", code: "MARN: 1802914", country: "Australia" },
    { title: "CICC / RCIC Licensed", code: "RCIC: R531892", country: "Canada" },
    { title: "IAA Licensed", code: "Adviser ID: 201901124", country: "New Zealand" },
    { title: "ISO 9001:2015", code: "Certified Quality Mgmt", country: "Global" }
  ],
  stats: [
    { label: "Successful Visa Grants", value: "8,500+" },
    { label: "Visa Approval Rate", value: "98.7%" },
    { label: "Years Industry Experience", value: "14+" },
    { label: "Licensed Legal Counsels", value: "25+" }
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
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["Express Entry (FSW/CEC)", "Provincial Nominee Programs (OINP, SINP, BCPNP)", "Start-Up Visa", "LMIA Work Permits", "Family Class"],
    minPointsNeeded: "CRS ~470 - 510 (Direct Entry) or 600+ (with PNP)",
    avgSalary: "$78,000 CAD / Year",
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
    id: "europe-usa",
    slug: "europe-usa",
    name: "USA & Europe (Schengen)",
    capital: "Washington D.C. / Brussels",
    flagCode: "EU",
    tagline: "The Epicenters of Innovation, Enterprise & Wealth",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80",
    popularStreams: ["USA EB-5 Immigrant Investor", "USA L-1 / H-1B", "Germany Opportunity Card (Chancenkarte)", "EU Blue Card", "Golden Visas"],
    minPointsNeeded: "Varies by Program / Investment tier",
    avgSalary: "$95,000 USD / €65,000 EUR",
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
    city: "Noida / Delhi NCR (Head Office)",
    address: "Level 4, Sovereign Corporate Tower, Sector 62, Noida, NCR, 201309",
    phone: "+91 98765 43210",
    email: "delhi@virajimmigration.com",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM",
    isHeadquarters: true,
    mapCoordinates: { lat: 28.628, lng: 77.364 }
  },
  {
    city: "Melbourne, Australia",
    address: "Suite 502, 120 Spencer Street, Melbourne VIC 3000, Australia",
    phone: "+61 3 9999 8888",
    email: "melbourne@virajimmigration.com",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM AEST",
    isHeadquarters: false,
    mapCoordinates: { lat: -37.818, lng: 144.953 }
  },
  {
    city: "Toronto, Canada",
    address: "Suite 1800, 100 University Avenue, Toronto, ON M5J 1V6, Canada",
    phone: "+1 416 888 7766",
    email: "toronto@virajimmigration.com",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM EST",
    isHeadquarters: false,
    mapCoordinates: { lat: 43.647, lng: -79.385 }
  },
  {
    city: "Mumbai, India",
    address: "Floor 8, Platina Tower, Bandra Kurla Complex (BKC), Mumbai, 400051",
    phone: "+91 98765 43211",
    email: "mumbai@virajimmigration.com",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM",
    isHeadquarters: false,
    mapCoordinates: { lat: 19.066, lng: 72.868 }
  }
];
