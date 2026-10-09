import { RecommendationTool } from "./RecommendationTool";
import { Eyebrow } from "./ui/Decor";

export function RekomendasiJurnalSection() {
  return (
    <section id="rekomendasi-jurnal" className="bg-background py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Rekomendasi Jurnal</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
            Temukan Jurnal yang Sesuai Bidang Risetmu
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted">
            Pilih bidang riset dan lihat contoh jurnal terakreditasi Sinta yang relevan.
          </p>
        </div>

        <div className="mt-12">
          <RecommendationTool />
        </div>
      </div>
    </section>
  );
}
