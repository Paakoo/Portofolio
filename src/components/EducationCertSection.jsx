import { education, certifications } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function EducationCertSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="relative mb-12 pb-4 border-b border-hairline overflow-hidden">
            {/* Watermark Section Number in background */}
              <span
                className="absolute -right-2 sm:right-6 -top-4 sm:-top-6 font-bold text-[120px] sm:text-[160px] lg:text-[250px] leading-none tracking-tighter text-black/[0.04] pointer-events-none select-none"
                aria-hidden="true"
              >
              05
            </span>

            {/* Top Bar: Dots Grid & SECTION 05 Indicator */}
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
                <span className="font-mono text-xs font-semibold text-neutral-800 uppercase tracking-widest block mb-2">
                  [ 05 // PENDIDIKAN &amp; SERTIFIKASI ]
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                  Penjelasan Singkat Pendidikan
                </h2>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-surface-soft border border-hairline rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    PENDIDIKAN FORMAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mt-1 mb-2">
                    {education.institution}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-base font-semibold text-neutral-800">
                      {education.major}
                    </span>
                    <span className="text-neutral-400">&bull;</span>
                    <span className="font-mono text-xs text-neutral-600 bg-white px-2.5 py-1 rounded-pill border border-hairline">
                      {education.period}
                    </span>
                  </div>

                  <div className="space-y-3.5 pt-4 border-t border-hairline">
                    <h4 className="font-mono text-xs font-semibold text-neutral-800 uppercase tracking-wider">
                      PENCAPAIAN &amp; AKTIVITAS:
                    </h4>
                    {education.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-neutral-800 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-neutral-500 uppercase">
                  <span>SURABAYA, JAWA TIMUR</span>
                  <span className="text-black font-semibold">GRADUATED 2025</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications Grid (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-surface-soft border border-hairline rounded-2xl p-6 sm:p-8 h-full">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-hairline">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-black" />
                    <h3 className="font-bold text-lg text-black tracking-tight">
                      Sertifikasi &amp; Pelatihan
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 uppercase">
                    {certifications.length} SERTIFIKAT
                  </span>
                </div>

                {/* 2-Column Grid of Certifications - all visible, no click needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="bg-white p-3.5 rounded-xl border border-hairline flex flex-col justify-between hover:border-black/30 transition-colors"
                    >
                      <span className="text-sm font-semibold text-black leading-snug mb-2">
                        {cert.name}
                      </span>
                      <span className="inline-block self-start font-mono text-[11px] text-neutral-600 bg-surface-soft px-2 py-0.5 rounded-md border border-hairline">
                        Issued by: {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
