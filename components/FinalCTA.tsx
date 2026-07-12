"use client";

import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-primary py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl px-6 text-center lg:px-10"
      >
        <h2 className="text-3xl font-bold text-white lg:text-4xl">Siap terbitkan dengan percaya diri?</h2>
        <p className="mt-4 text-lg text-white/70">Unggah manuskripmu hari ini dan bertemu editormu dalam hitungan jam.</p>
        <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
          <Upload className="h-4 w-4" /> Unggah Manuskripmu
        </Button>
      </motion.div>
    </section>
  );
}
