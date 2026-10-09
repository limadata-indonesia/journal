"use client";

import { motion } from "framer-motion";
import { Clock, FileX, LayoutTemplate, Mail, MessageSquareReply, Scale, ShieldAlert } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { Eyebrow } from "./ui/Decor";

const ICONS = { Scale, ShieldAlert, MessageSquareReply, FileX, LayoutTemplate, Mail };

// Abstract covers (no photos yet), cycled per card.
const COVERS = [
  "bg-[linear-gradient(135deg,#0f2899,#1638c2_55%,#4db6ff)]",
  "bg-[linear-gradient(135deg,#1c2468,#1638c2)]",
  "bg-[linear-gradient(135deg,#1235be,#4db6ff)]",
];

export function Blog() {
  return (
    <section id="blog" className="bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_70%,#f3f5fd_100%)] py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Blog & Wawasan</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
            Panduan Publikasi untuk Peneliti Indonesia
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted">
            Artikel praktis seputar jurnal Sinta & Scopus, penulisan, dan proses submisi. Segera hadir.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => {
            const Icon = ICONS[post.icon];
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                aria-disabled="true"
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
              >
                <div className={`relative h-44 overflow-hidden ${COVERS[i % COVERS.length]}`}>
                  <span aria-hidden className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-sky/40 blur-2xl" />
                  <span aria-hidden className="absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-violet/30 blur-2xl" />
                  <span aria-hidden className="absolute right-20 top-0 h-full w-14 bg-white/10 blur-xl" />
                  <Icon aria-hidden className="absolute bottom-5 right-6 h-16 w-16 text-white/85" strokeWidth={1.1} />
                  <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex-1 text-[19px] font-medium leading-snug text-primary">{post.title}</h3>
                  <p className="mt-6 flex items-center gap-2.5 text-sm font-semibold text-muted">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-surface text-accent">
                      <Clock className="h-3.5 w-3.5" />
                    </span>
                    Segera hadir
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
