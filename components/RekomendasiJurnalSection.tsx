import { RecommendationTool } from "./RecommendationTool";

export function RekomendasiJurnalSection() {
  return (
    <section id="rekomendasi-jurnal" className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Rekomendasi Jurnal</h2>
          <p className="mt-4 text-lg text-muted">
            Pilih bidang risetmu dan lihat contoh jurnal terakreditasi Sinta yang relevan.
          </p>
        </div>

        <div className="mt-14">
          <RecommendationTool />
        </div>
      </div>
    </section>
  );
}
