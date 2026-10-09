import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Belum ada domain kustom -- ganti begitu terpasang. metadataBase perlu URL
// absolut agar path relatif di openGraph/alternates ter-resolve dengan benar.
const SITE_URL = "https://journal-ruddy-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Terindeks — Jasa Publikasi Jurnal Terpercaya",
    template: "%s | Terindeks",
  },
  description:
    "Jasa publikasi jurnal terpercaya untuk jurnal terakreditasi Sinta dan terindeks Scopus. Dari rekomendasi jurnal, editing bahasa, hingga pendampingan submisi dan respons reviewer, Terindeks membantu peneliti Indonesia menerbitkan manuskrip di jurnal yang tepat.",
  keywords: [
    "jasa publikasi jurnal",
    "jasa publikasi jurnal sinta",
    "jasa publikasi jurnal scopus",
    "publikasi ilmiah",
    "editing jurnal ilmiah",
    "penyuntingan manuskrip",
    "rekomendasi jurnal sinta",
    "jurnal terakreditasi sinta",
    "jurnal terindeks scopus",
    "Terindeks",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Terindeks",
    url: "/",
    title: "Terindeks — Jasa Publikasi Jurnal Terpercaya",
    description:
      "Jasa publikasi jurnal terpercaya untuk jurnal terakreditasi Sinta dan terindeks Scopus. Rekomendasi jurnal, editing bahasa, dan pendampingan submisi hingga terbit.",
    images: [{ url: "/hero-library.jpg", width: 1200, height: 630, alt: "Terindeks — Jasa Publikasi Jurnal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terindeks — Jasa Publikasi Jurnal Terpercaya",
    description:
      "Jasa publikasi jurnal terpercaya untuk jurnal terakreditasi Sinta dan terindeks Scopus.",
    images: ["/hero-library.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
