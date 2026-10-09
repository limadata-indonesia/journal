import { Logo } from "./Navbar";
import { Streaks } from "./ui/Decor";

const LINKS = [
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const MARQUEE = "Konsultasikan Manuskripmu Sekarang";

const FOOTER_BARS = [
  { left: "0%", width: "6%", from: "rgba(77,182,255,0.6)", to: "rgba(22,56,194,0.95)", top: "20%" },
  { left: "7%", width: "4%", from: "rgba(124,92,255,0.25)", to: "rgba(22,56,194,0.8)", top: "35%" },
  { left: "86%", width: "5%", from: "rgba(77,182,255,0.35)", to: "rgba(22,56,194,0.85)", top: "30%" },
  { left: "91%", width: "9%", from: "rgba(124,92,255,0.55)", to: "rgba(124,92,255,0.95)", top: "15%" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f3f5fd_0%,#f3f5fd_38%,#9aa9e8_62%,#1638c2_88%)]">
      <Streaks bars={FOOTER_BARS} />

      {/* Giant scrolling CTA */}
      <a href="#pricing" className="relative block overflow-hidden pt-6" aria-label={MARQUEE}>
        <div className="flex w-max animate-marquee whitespace-nowrap" aria-hidden>
          {[0, 1].map((k) => (
            <span key={k} className="pr-16 text-[72px] font-bold leading-none tracking-[-0.04em] text-accent sm:text-[120px] lg:text-[168px]">
              {MARQUEE} <span className="text-sky">•</span>
            </span>
          ))}
        </div>
      </a>

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
