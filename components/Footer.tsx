import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "./ui/Button";

const COLUMNS = [
  { title: "Produk", links: ["Sinta Ready", "Scopus Ready", "Pendampingan Penuh"] },
  { title: "Sumber Daya", links: ["Contoh Editing", "Jaringan Editor", "Panduan Publikasi"] },
  { title: "Harga", links: ["Sinta Ready", "Scopus Ready", "Enterprise"] },
  { title: "Perusahaan", links: ["Karier", "Privasi", "Ketentuan", "Kontak"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-(--container-content) px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2">
            <span className="text-xl font-bold tracking-tight text-primary">Terindeks</span>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Pendampingan publikasi ilmiah dari naskah hingga terbit di jurnal terakreditasi Sinta dan terindeks Scopus, dipercaya peneliti di seluruh Indonesia.
            </p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-text">Newsletter</p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="you@university.edu"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <Button size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-text">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="transition hover:text-text">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>© 2026 Terindeks. Semua hak dilindungi.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-text">LinkedIn</Link>
            <Link href="#" className="hover:text-text">X</Link>
            <Link href="#" className="hover:text-text">ResearchGate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
