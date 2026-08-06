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
  title: "Terindeks — Terbitkan dengan Percaya Diri",
  description:
    "Pendampingan publikasi ilmiah untuk jurnal terakreditasi Sinta dan terindeks Scopus. Dari rekomendasi jurnal, editing bahasa, hingga pendampingan submisi dan respons reviewer, Terindeks membantu peneliti Indonesia menerbitkan manuskrip di jurnal yang tepat.",
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
