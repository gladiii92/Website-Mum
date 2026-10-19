import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function CardGemstoneRecommendation({ cardName, stone }) {
  if (!stone) return null;

  return (
    <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 via-indigo-950/50 to-slate-900 border border-indigo-400/25 shadow-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Passender energetischer Heilstein</span>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-200 border border-indigo-400/20 font-medium">
          Handverlesenes Unikat
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-indigo-400/30 flex-shrink-0 shadow-md group">
          <img
            src={stone.imageUrl}
            alt={stone.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/10 pointer-events-none"></div>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h4 className="font-headline text-lg font-bold text-white">
              {stone.name}
            </h4>
            <span className="text-base font-bold text-amber-300">
              {stone.price}
            </span>
          </div>

          <p className="text-xs text-indigo-300/80 font-medium">
            {stone.subtitle}
          </p>

          <p className="font-body text-sm text-indigo-100/90 leading-relaxed">
            <strong className="text-indigo-200">Warum zu {cardName}?</strong> {stone.reason}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={`/product/${stone.slug}`}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-indigo-600/80 hover:bg-indigo-600 text-white border border-indigo-300/30 shadow-md transition-all group/btn"
            >
              <span>Diesen Heilstein im Shop ansehen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] text-indigo-300/60 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% naturbelassener Rohstein
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

