import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';
import { Mail, Phone, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-hairline py-16 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-hairline">
          
          {/* Quick Contact Links (Left Column) */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
                HUBUNGI LANGSUNG
              </span>
              <div className="space-y-3">
                <div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-3 text-sm font-medium hover:text-neutral-600 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-soft border border-hairline flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span>{personalInfo.email}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-3 text-sm font-medium hover:text-neutral-600 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-soft border border-hairline flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>{personalInfo.phone}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-medium hover:text-neutral-600 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-soft border border-hairline flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{personalInfo.linkedinDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brand & Summary (Right Column) */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between text-left md:text-right">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-black mb-3">
                {personalInfo.name}
              </h3>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black hover:bg-neutral-100 py-2.5 px-4 rounded-pill bg-surface-soft border border-hairline transition-colors self-start md:self-end cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        {/* <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>SISTEM DESAIN: DESIGN.MD</span>
            <span>&bull;</span>
            <span>REACT &amp; TAILWIND CSS</span>
          </div>
        </div> */}

      </div>
    </footer>
  );
}
