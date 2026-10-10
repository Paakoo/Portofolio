import { skills } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Terminal, Globe2, Layers, Server } from 'lucide-react';

export default function SkillsSection() {
  // Categorized for effortless scanning without needing tabs or clicks
  const categories = [
    {
      group: "Infrastruktur & Server",
      icon: Server,
      items: [
        "Server Administration (Linux, Windows Server)",
        "Virtualization (VMware)",
        "Network Configuration",
        "Monitoring & Troubleshooting",
        "Hardware & Infrastructure Maintenance",
        "Hardware Installation",
      ],
    },
    {
      group: "Software Development",
      icon: Layers,
      items: [
        "Web Development (Full-Stack)",
        "Mobile App Development",
        "Database Management",
        "API Integration & Automation",
        // "AI Biometrics (DeepFace, RetinaFace)",
      ],
    },
    {
      group: "Desain Antarmuka (UI/UX)",
      icon: Terminal,
      items: [
        "User Experience & Interface Design (UX/UI)",
        "Wireframing & Prototyping (Figma)",
        "Design System & Style Guides",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Color-Block Section (Navy) per DESIGN.md */}
          <div className="bg-block-navy rounded-section p-8 sm:p-12 lg:p-16 text-white border border-neutral-800">
            {/* Section Header */}
            <div className="relative mb-10 pb-4 border-b border-white/15 overflow-hidden">
              {/* Watermark Section Number in background */}
              <span
                className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-white/[0.05] pointer-events-none select-none"
                aria-hidden="true"
              >
                06
              </span>

              {/* Top Bar: Dots Grid */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-white/40"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Header Title & Subtitle */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-neutral-300 uppercase tracking-widest block mb-2">
                    [ 06 // KEMAMPUAN TEKNIS ]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Keahlian &amp; Spesialisasi
                  </h2>
                </div>
                {/* <p className="mt-2 sm:mt-0 font-mono text-xs text-neutral-400 uppercase tracking-wider">
                  KOMPETENSI INTI &bull; HARDWARE &amp; SOFTWARE
                </p> */}
              </div>
            </div>

            {/* 3 Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.group}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-base text-white tracking-tight">
                        {cat.group}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-emerald-400 text-xs font-mono mt-0.5">•</span>
                          <span className="text-sm text-neutral-200 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row: Language Proficiency */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-neutral-300 flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                    KEMAMPUAN BAHASA
                  </span>
                  <span className="text-sm font-medium text-white">
                    Bahasa Komunikasi Profesional
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3.5 py-1.5 rounded-pill bg-white/15 text-xs font-mono text-white border border-white/10"
                  >
                    {lang.name} &bull; <strong className="font-semibold text-emerald-300">{lang.level}</strong>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
