/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        canvas: '#ffffff',
        'inverse-canvas': '#000000',
        ink: '#000000',
        'inverse-ink': '#ffffff',
        hairline: '#e6e6e6',
        'hairline-soft': '#f1f1f1',
        'surface-soft': '#f7f7f5',
        'block-lime': '#dceeb1',
        'block-lilac': '#c5b0f4',
        'block-cream': '#f4ecd6',
        'block-pink': '#efd4d4',
        'block-mint': '#c8e6cd',
        'block-coral': '#f3c9b6',
        'block-navy': '#1f1d3d',
        'accent-magenta': '#ff3d8b',
        'semantic-success': '#1ea64a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'pill': '50px',
        'section': '28px',
      },
      letterSpacing: {
        'display': '-0.035em',
        'headline': '-0.02em',
      }
    },
  },
  plugins: [],
}
