import { experiences } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

/**
 * Color mapping using DESIGN.md block-* palette only.
 * No outside accent colors (lime-500, purple-500, etc.) — only the documented tokens.
 */
const colorMap = {
  lime: {
    block: 'bg-block-lime',
    blockBorder: 'border-black/5',
    dot: 'bg-block-lime',
    badge: 'bg-block-lime text-black',
    icon: 'text-black/60',
  },
  lilac: {
    block: 'bg-block-lilac',
    blockBorder: 'border-black/5',
    dot: 'bg-block-lilac',
    badge: 'bg-block-lilac text-black',
    icon: 'text-black/60',
  },
  coral: {
    block: 'bg-block-coral',
    blockBorder: 'border-black/5',
    dot: 'bg-block-coral',
    badge: 'bg-block-coral text-black',
    icon: 'text-black/60',
  },
  mint: {
    block: 'bg-block-mint',
    blockBorder: 'border-black/5',
    dot: 'bg-block-mint',
    badge: 'bg-block-mint text-black',
    icon: 'text-black/60',
  },
};

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="relative mb-14 pb-4 border-b border-hairline overflow-hidden">
            {/* Watermark Section Number in background */}
            <span
              className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-black/[0.04] pointer-events-none select-none"
              aria-hidden="true"
            >
              02
            </span>

            {/* Top Bar: Dots Grid & SECTION 02 Indicator */}
            <div className="relative z-10 flex items-center justify-between mb-8">
              {/* Left: Decorative Dots Grid */}
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
                <span className="font-mono text-xs font-semibold text-black uppercase tracking-widest block mb-2">
                  [ 02 // PENGALAMAN KERJA ]
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                  Rekam Jejak Pengalaman Saya
                </h2>
              </div>
              {/* <p className="mt-2 sm:mt-0 font-mono text-xs text-black uppercase tracking-wider">
                TOTAL {experiences.length} POSISI
              </p> */}
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-hairline hidden md:block" />

          <div className="md:space-y-8">
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color] || colorMap.lime;

              return (
                <ScrollReveal key={`${exp.company}-${exp.period}`} delay={index * 120}>
                  <div className="relative md:pl-14 pb-10 last:pb-0 group">

                    {/* Timeline Dot — uses block-* color, no outside accents */}
                    <div className="hidden md:flex absolute left-[11px] top-2 z-10">
                      <div className={`w-[18px] h-[18px] rounded-full ${colors.dot} ring-4 ring-white group-hover:scale-110 transition-transform duration-300`} />
                    </div>

                    {/* Card — hairline border, no shadow (per DESIGN.md) */}
                    <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white hover:border-black/20 transition-colors duration-300">

                      {/* Color accent strip — thin top bar using block-* color */}
                      <div className={`h-1.5 w-full ${colors.block}`} />

                      <div className="p-6 sm:p-8">
                        {/* Header: Company + Type Badge + Period */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                              <h3 className="font-bold text-xl sm:text-2xl text-black tracking-tight">
                                {exp.company}
                              </h3>
                              {/* Badge: pill shape per DESIGN.md, block-* background */}
                              <span className={`px-3 py-0.5 rounded-pill text-[11px] font-mono font-semibold uppercase tracking-wider ${colors.badge}`}>
                                {exp.type}
                              </span>
                            </div>
                            <p className="text-sm sm:text-base font-medium text-black flex items-center gap-2">
                              <Briefcase className="w-3.5 h-3.5 text-black/40 flex-shrink-0" />
                              <span>{exp.role}</span>
                            </p>
                          </div>

                          {/* Period pill */}
                          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-black bg-surface-soft px-3 py-1.5 rounded-pill border border-hairline whitespace-nowrap self-start">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-2.5">
                          {exp.responsibilities.map((task, taskIdx) => (
                            <div
                              key={taskIdx}
                              className="flex items-start gap-3 bg-surface-soft px-4 py-3 rounded-xl border border-hairline hover:border-black/15 transition-colors duration-200"
                            >
                              <ArrowUpRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.icon}`} />
                              <span className="text-sm text-neutral-800 leading-relaxed">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
