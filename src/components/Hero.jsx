import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { LinkedInIcon } from './Icons';
import { Download, ExternalLink, Phone, MapPin, Mail } from 'lucide-react';

export default function Hero() {

  return (
    <section className="pt-12 sm:pt-20 pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Editorial Typography & Pitch */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-display leading-[1.05] text-black mb-6">
                {personalInfo.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl sm:text-2xl font-normal text-neutral-700 tracking-tight leading-snug mb-5">
                Full-Stack Engineer &amp; IT Infrastructure Enthusiast
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
                Lulusan Teknik Informatika PENS dengan keahlian komprehensif memadukan keandalan infrastruktur server (Linux/Windows, Jaringan, Virtualisasi) dan pengembangan aplikasi web &amp; mobile modern end-to-end.
              </p>
            </ScrollReveal>

            {/* Quick Contact & Action Pills (No tedious clicks, immediate utility) */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={personalInfo.resume || '/Bagus Setiyo_CV.pdf'}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white text-black border border-hairline hover:border-black/30 text-sm font-medium hover:bg-surface-soft transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.gdrivePortfolio || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white text-black border border-hairline hover:border-black/30 text-sm font-medium hover:bg-surface-soft transition-colors"
                  title="Lihat Portofolio Google Drive"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Lihat Porto</span>
                </a>
              </div>

              {/* Metadata Details */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-neutral-500 uppercase tracking-wider pt-4 border-t border-hairline">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{personalInfo.phone}</span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 hover:text-black transition-colors lowercase"
                  title="Kirim email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={250} className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                {/* Background decorative offset card mimicking DESIGN.md pastel blocks */}
                <div className="absolute inset-0 bg-block-lime rounded-section translate-x-3 translate-y-3 -rotate-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

                {/* Main Photo Container */}
                <div className="relative bg-white border border-hairline rounded-section overflow-hidden shadow-sm p-3">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface-soft">
                    {/* User photo: loaded from src/assets/close_up.jpg via personalInfo.avatar */}
                    <img
                      src={personalInfo.avatar}
                      alt={`Foto Profil ${personalInfo.name}`}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback avatar if profile photo fails to load
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
