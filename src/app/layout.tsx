import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import FloatingWidgets from "@/components/FloatingWidgets";
import { ModalProvider } from "@/context/ModalContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viraj Immigration | Certified Canada, Australia, UK & Europe Visa Consultants",
  description: "Accredited MARA & CICC partner immigration consultancy. High visa grant rate for Canada Express Entry PR, Australia Skilled Migration, Student Visas, Work Permits, and Golden Visas.",
  keywords: [
    "Viraj Immigration",
    "Canada PR consultants",
    "Australia PR visa",
    "MARA registered migration agent",
    "CICC licensed immigration",
    "Express Entry CRS calculator",
    "Subclass 189 190 visa",
    "Student visa PR pathway",
    "Work permit sponsorship"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F7] text-[#16171A] selection:bg-[#E20935] selection:text-white" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[9999] px-4 py-2 bg-[#E20935] text-white font-bold rounded-xl shadow-2xl transition-all"
        >
          Skip to main content
        </a>
        <ModalProvider>
          <Navbar />
          <main id="main-content" className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <ConsultationModal />
          <FloatingWidgets />
        </ModalProvider>
      </body>
    </html>
  );
}
