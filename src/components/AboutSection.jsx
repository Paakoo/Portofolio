import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Server, Cpu, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const iconMap = [Server, Cpu, Sparkles];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Color-Block Section (Cream) per DESIGN.md */}
          <div className="bg-block-cream rounded-section p-8 sm:p-12 lg:p-16 border border-amber-900/10">
            {/* Section Header */}
            <div className="relative mb-8 pb-4 border-b border-black/10 overflow-hidden">
              {/* Watermark Section Number in background */}
              <span
                className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-black/[0.04] pointer-events-none select-none"
                aria-hidden="true"
              >
                01
              </span>

              {/* Top Bar: Decorative Dots Grid */}
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
                  <span className="font-mono text-xs font-semibold text-black uppercase tracking-widest block mb-2">
                    [ 01 // TENTANG SAYA ]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                    Siapakah Saya?
                  </h2>
                </div>
                {/* <p className="mt-2 sm:mt-0 font-mono text-xs text-black uppercase tracking-wider">
                  WHO'S THIS GUY?
                </p> */}
              </div>
            </div>
            
            <p className="text-justify sm:text-lg text-neutral-800 leading-relaxed max-w-5xl mb-8">
              {personalInfo.summary}
            </p>

            {/* 3 Core Pillars - Clean, informative, no clicking required */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/10">
              {personalInfo.coreFocus.map((focus, index) => {
                const Icon = iconMap[index] || Server;
                return (
                  <div
                    key={focus.title}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-black/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg text-black mb-2 tracking-tight">
                        {focus.title}
                      </h3>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {focus.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
