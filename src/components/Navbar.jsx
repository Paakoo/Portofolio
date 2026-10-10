import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Tentang', href: '#tentang', num: '01' },
  { label: 'Pengalaman', href: '#pengalaman', num: '02' },
  { label: 'Proyek', href: '#proyek', num: '03' },
  { label: 'Publikasi', href: '#publikasi', num: '04' },
  { label: 'Pendidikan', href: '#pendidikan', num: '05' },
  { label: 'Keahlian', href: '#keahlian', num: '06' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll detection for active section spy & scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section highlight
      const scrollPos = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.querySelector(navLinks[i].href);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? 'py-3' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
          
          {/* Centered Floating Pill Navigation Dock (Tanpa Brand Identity & Tanpa Button CTA) */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 bg-white/90 border border-hairline p-1.5 rounded-pill backdrop-blur-md shadow-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 sm:px-5 py-2 rounded-pill text-sm sm:text-[15px] transition-all duration-200 relative ${
                    isActive
                      ? 'bg-black text-white font-semibold shadow-xs'
                      : 'text-neutral-700 hover:text-black hover:bg-black/5 font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Floating Toggle Button */}
          <div className="pointer-events-auto flex md:hidden w-full justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-hairline shadow-md flex items-center justify-center text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-Down Panel */}
        <div
          className={`absolute top-18 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-hairline p-5 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'text-neutral-800 hover:bg-surface-soft'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? 'text-white/60' : 'text-neutral-400'
                      }`}
                    >
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider ${
                      isActive ? 'text-white/60' : 'text-black/30'
                    }`}
                  >
                    {link.href.replace('#', '')}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
