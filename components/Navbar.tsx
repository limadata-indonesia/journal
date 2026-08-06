"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { label: "Solusi", href: "#services" },
  { label: "Layanan", href: "#services" },
  { label: "Rekomendasi Jurnal", href: "/rekomendasi-jurnal" },
  { label: "Harga", href: "#pricing" },
  { label: "Sumber Daya", href: "#faq" },
  { label: "Tentang Kami", href: "#why-us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background shadow-soft">
      <nav className="mx-auto flex max-w-(--container-content) items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          Terindeks
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-text/70 transition hover:text-text">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm">
            Masuk
          </Button>
          <Button size="sm">Mulai Sekarang</Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-text lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-text/80">
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Masuk
              </Button>
              <Button size="sm">Mulai Sekarang</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
