import { Logo } from "./Navbar";
import { Streaks } from "./ui/Decor";

const LINKS = [
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

const FOOTER_BARS = [
  { left: "-2%", width: "8%", from: "rgba(77,182,255,0.45)", to: "rgba(22,56,194,0.75)", top: "20%" },
  { left: "3%", width: "9%", from: "rgba(77,182,255,0.25)", to: "rgba(22,56,194,0.6)", top: "35%" },
  { left: "88%", width: "9%", from: "rgba(124,92,255,0.25)", to: "rgba(77,100,230,0.6)", top: "30%" },
  { left: "93%", width: "9%", from: "rgba(77,182,255,0.4)", to: "rgba(22,56,194,0.75)", top: "15%" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f3f5fd_0%,#f3f5fd_38%,#9aa9e8_62%,#1638c2_88%)]">
      <Streaks bars={FOOTER_BARS} />

      <div className="relative mx-auto max-w-(--container-content) px-6 pb-16 pt-24 lg:px-10">
        <div className="rounded-3xl bg-white px-8 py-10 shadow-premium lg:px-16 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Logo className="text-accent" />
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary/80">Jasa Publikasi Jurnal Sinta & Scopus</span>
            </div>
            <nav className="flex flex-wrap gap-x-9 gap-y-3">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] font-semibold text-primary/80 transition hover:text-accent">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-7 text-sm text-primary/75 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Terindeks. Semua hak dilindungi.</p>
            <p className="max-w-md sm:text-right">Kami tidak menjamin penerimaan dan tidak bekerja sama dengan jurnal predator.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
