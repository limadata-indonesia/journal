"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { LinkButton } from "./ui/Button";

const NAV_LINKS = [
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "Alur", href: "#alur" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("text-2xl font-bold tracking-tight", className)}>
      terindeks<span className="text-sky">.</span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open ? "bg-accent/95 shadow-[0_8px_30px_-12px_rgba(15,40,153,0.6)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-(--container-content) items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="text-white">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/85 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <LinkButton href="#pricing" variant="white" size="sm">
            Mulai Sekarang
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/15 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="py-2.5 text-base font-medium text-white/90">
                {link.label}
              </a>
            ))}
            <LinkButton href="#pricing" variant="white" size="sm" className="mt-3 self-start">
              Mulai Sekarang
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
