import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import FloatingWidgets from "@/components/FloatingWidgets";
import { ModalProvider } from "@/context/ModalContext";

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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-navy-950 selection:bg-gold-500 selection:text-navy-950">
        <ModalProvider>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <ConsultationModal />
          <FloatingWidgets />
        </ModalProvider>
      </body>
    </html>
  );
}
