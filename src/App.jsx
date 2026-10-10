import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationSection from './components/PublicationSection';
import EducationCertSection from './components/EducationCertSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

/**
 * Portofolio Bagus Setiyo Pambudi
 * - Didesain mengikuti DESIGN.md (monochrome canvas + oversized pastel story blocks)
 * - Simpel, informatif, dan seamless (tanpa klik-klik yang tidak perlu)
 * - Dilengkapi animasi saat scroll
 * - Foto profil menggunakan: src/assets/close_up.jpg
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col font-sans">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Canvas Putih dengan Foto & Tipografi Editorial) */}
        <Hero />

        {/* 3. Marquee Strip Ribbon */}
        {/* <MarqueeStrip /> */}

        {/* 4. Tentang Saya (Color-Block Cream) */}
        <div id="tentang" className="scroll-mt-20">
          <AboutSection />
        </div>

        {/* 5. Pengalaman Kerja (White Canvas dengan Timeline) */}
        <div id="pengalaman" className="scroll-mt-20">
          <ExperienceSection />
        </div>

        {/* 6. Proyek Kuliah (Color-Block Mint) */}
        <div id="proyek" className="scroll-mt-20">
          <ProjectsSection />
        </div>

        {/* 7. Publikasi Riset Ilmiah (Color-Block Coral) */}
        <div id="publikasi" className="scroll-mt-20">
          <PublicationSection />
        </div>

        {/* 8. Pendidikan & Sertifikasi (White Canvas) */}
        <div id="pendidikan" className="scroll-mt-20">
          <EducationCertSection />
        </div>

        {/* 9. Kemampuan Teknis & Bahasa (Color-Block Navy) */}
        <div id="keahlian" className="scroll-mt-20">
          <SkillsSection />
        </div>
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
