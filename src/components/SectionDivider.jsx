import ScrollReveal from './ScrollReveal';

/**
 * SectionDivider — editorial "chapter break" between portfolio sections.
 * Styled as a mini pastel band with large section number, contextual label,
 * and decorative geometric elements. Follows DESIGN.md block-* palette.
 */

const colorVariants = {
  lime: 'bg-block-lime',
  lilac: 'bg-block-lilac',
  cream: 'bg-block-cream',
  mint: 'bg-block-mint',
  coral: 'bg-block-coral',
  navy: 'bg-block-navy',
  neutral: 'bg-surface-soft',
};

export default function SectionDivider({
  label = '',
  nextNumber = '',
  nextLabel = '',
  color = 'neutral',
}) {
  const bg = colorVariants[color] || colorVariants.neutral;
  const isNavy = color === 'navy';

  return (
    <ScrollReveal direction="none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          className={`${bg} rounded-2xl sm:rounded-section overflow-hidden border ${
            isNavy ? 'border-white/10' : 'border-black/5'
          }`}
        >
          <div className="relative px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between gap-4 overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
              {/* Large faded number */}
              <span
                className={`absolute -right-4 sm:right-6 top-1/2 -translate-y-1/2 font-bold text-[120px] sm:text-[160px] leading-none tracking-tighter ${
                  isNavy ? 'text-white/[0.06]' : 'text-black/[0.04]'
                }`}
              >
                {nextNumber || '→'}
              </span>

              {/* Decorative dots grid */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full ${
                      isNavy ? 'bg-white/15' : 'bg-black/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 sm:pl-12">
              {/* Divider line accent */}
              

              <div className="flex flex-col">
                {label && (
                  <span
                    className={`font-mono text-[11px] uppercase tracking-widest mb-0.5 ${
                      isNavy ? 'text-white/40' : 'text-black/35'
                    }`}
                  >
                    {label}
                  </span>
                )}
                {nextLabel && (
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isNavy ? 'text-white' : 'text-black'
                    }`}
                  >
                    {nextLabel}
                  </span>
                )}
              </div>
            </div>

            {/* Right side: next arrow */}
            <div className="relative z-10 flex items-center gap-3">
              {nextNumber && (
                <span
                  className={`font-mono text-xs uppercase tracking-widest ${
                    isNavy ? 'text-white/40' : 'text-black/30'
                  }`}
                >
                  SECTION {nextNumber}
                </span>
              )}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  isNavy
                    ? 'bg-white/10 text-white'
                    : 'bg-black/5 text-black'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
