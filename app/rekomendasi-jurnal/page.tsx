import type { Metadata } from "next";
import { RecommendationTool } from "./RecommendationTool";

export const metadata: Metadata = {
  title: "Cek Rekomendasi Jurnal Sinta & Scopus",
  description:
    "Cek rekomendasi jurnal jasa publikasi jurnal sesuai bidang risetmu — jurnal terakreditasi Sinta (S1–S6) maupun terindeks Scopus (Q1–Q4). Pilih bidang riset, lihat contoh jurnal yang relevan.",
  alternates: { canonical: "/rekomendasi-jurnal" },
};

export default function RekomendasiJurnalPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
          <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-(--container-content) px-6 py-16 lg:px-10 lg:py-20">
          <h1 className="font-heading max-w-2xl text-3xl font-bold leading-tight text-white lg:text-5xl">
            Cek Rekomendasi Jurnal
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Pilih bidang risetmu dan lihat contoh jurnal terakreditasi Sinta maupun terindeks Scopus yang relevan.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
          <RecommendationTool />
        </div>
      </section>
    </main>
  );
}
