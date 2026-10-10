import { projects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Smartphone, Globe, Layout, ShoppingBag } from 'lucide-react';

export default function ProjectsSection() {
  const getIcon = (category) => {
    switch (category) {
      case 'Mobile App':
        return <Smartphone className="w-5 h-5 text-neutral-800" />;
      case 'Web App':
        return <Globe className="w-5 h-5 text-neutral-800" />;
      case 'UI / UX Designer':
        return <Layout className="w-5 h-5 text-neutral-800" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Color-Block Section (Mint) per DESIGN.md */}
          <div className="bg-block-mint rounded-section p-8 sm:p-12 lg:p-16 border border-emerald-900/10">
            {/* Section Header */}
            <div className="relative mb-8 pb-4 border-b border-black/10 overflow-hidden">
              {/* Watermark Section Number in background */}
              <span
                className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-black/[0.04] pointer-events-none select-none"
                aria-hidden="true"
              >
                03
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
                  <span className="font-mono text-xs font-semibold text-neutral-800 uppercase tracking-widest block mb-2">
                    [ 03 // PROJECT ]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                    Beberapa Eksplorasi Aplikasi
                  </h2>
                </div>
                {/* <p className="mt-2 sm:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-wider">
                  TOTAL {projects.length} PROJECT
                </p> */}
              </div>
            </div>

            {/* Project Cards Grid - No pictures generated, clean typography & description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                          {getIcon(item.category)}
                        </div>
                        <span className="font-mono text-xs font-medium text-neutral-600 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-neutral-400">
                        PROJ 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Concise text description */}
                    <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-hairline flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-pill bg-surface-soft border border-hairline text-neutral-700 text-xs font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
