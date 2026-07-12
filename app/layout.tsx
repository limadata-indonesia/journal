import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Publiora — Terbitkan dengan Percaya Diri",
  description:
    "Editing akademik profesional untuk jurnal bereputasi tinggi. Dari editing bahasa hingga dukungan submisi jurnal, Publiora membantu peneliti memperkuat manuskrip dan meningkatkan kesiapan publikasi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
