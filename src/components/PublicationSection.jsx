import { publication } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

export default function PublicationSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Color-Block Section (Coral) per DESIGN.md */}
          <div className="bg-block-coral rounded-section p-8 sm:p-12 lg:p-16 border border-rose-900/10">
            {/* Section Header */}
            <div className="relative mb-8 pb-4 border-b border-black/10 overflow-hidden">
              {/* Watermark Section Number in background */}
              <span
                className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-black/[0.04] pointer-events-none select-none"
                aria-hidden="true"
              >
                04
              </span>

              {/* Top Bar: Dots Grid */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div
                  className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-black/40"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Section Eyebrow & Title */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-neutral-800 uppercase tracking-widest flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>[ 04 // PUBLIKASI RISET ]</span>
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                    Artikel Ilmiah
                  </h2>
                </div>
                {/* <p className="mt-2 sm:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-wider">
                  SENTRINOV
                </p> */}
              </div>
            </div>

            {/* Publication Title & Details */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-black text-white text-xs font-mono font-medium mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>{publication.publisher}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-snug">
                {publication.title}
              </h2>

              <div className="bg-white/85 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-black/5 mb-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-3">
                  RINGKASAN ABSTRAK
                </h3>
                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
                  {publication.abstract}
                </p>
                <div className="mt-4 pt-4 border-t border-hairline flex flex-wrap gap-2 text-xs font-mono">
                  <span className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md">Model: RetinaFace</span>
                  <span className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md">Framework: DeepFace</span>
                  <span className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md">Embedding: FaceNet512</span>
                </div>
              </div>

              {/* Direct Read Paper Button */}
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Buka Artikel Ilmiah (ISAS Proceeding)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
