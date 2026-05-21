"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioFolders } from "@/lib/portfolio";

export function PortfolioFolderGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioFolders.map((folder, i) => (
        <motion.div
          key={folder.slug}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={`/portfolio/${folder.slug}`}
            className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${folder.gradient} p-6 shadow-xl ${folder.glow} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/25 sm:p-8`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-black/20 text-xl font-bold text-white backdrop-blur-sm"
            >
              {folder.icon}
            </span>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {folder.title}
            </h2>
            <p className="mt-2 text-sm text-white/80">{folder.tagline}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90 uppercase transition-transform duration-300 group-hover:translate-x-1">
              Open folder
              <span aria-hidden>→</span>
            </p>
            <p className="absolute bottom-4 right-4 text-[10px] font-medium text-white/50">
              {folder.slides.length} studies
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
