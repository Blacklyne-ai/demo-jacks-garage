/** @type {import('tailwindcss').Config} */
// Jack's Garage — Classic VW specialist design system.
// CI: the existing site's brand accent is RED (sampled #C80000 from the live site). Preserved here
// as the primary. Black + warm CREAM come straight from the logo/favicon; vintage gold (#C9A961)
// is the heritage trim accent that complements the red. LIGHT mood only, no dark toggle.
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Classic VW red — the brand accent from the existing site (#C80000 sampled). Primary action.
        brand: {
          50: '#FCEAEB',
          100: '#F8CDCF',
          200: '#EF9DA1',
          300: '#E56C72',
          400: '#D83E47',
          500: '#C8101C', // classic VW red — primary action
          600: '#A90D18',
          700: '#880B14',
          800: '#6F0C14',
          900: '#5C0D14',
        },
        // Ink — near-pure black, sampled from the logo. The mechanical authority colour.
        ink: {
          DEFAULT: '#1A1A1A',
          950: '#0F0F0F',
          900: '#1A1A1A',
          800: '#26231F',
          700: '#36322C',
          600: '#4A453E',
          500: '#5A5550',
        },
        // Vintage gold — heritage trim accent (chrome-script warmth).
        gold: {
          100: '#F3EBD6',
          200: '#E7D6AE',
          300: '#DCC68F',
          400: '#D3B575',
          500: '#C9A961', // accent
          600: '#AF8E47',
          700: '#8C7038',
        },
        // Warm cream surfaces — taken from the favicon disc.
        cream: {
          DEFAULT: '#FAF8F2',
          100: '#FAF8F2', // page background
          200: '#F5F1E8', // section surface
          300: '#EFE8D9', // layered surface
        },
        surface: '#F5F1E8',     // warm section background
        line: '#E5DDD0',        // warm hairline borders
        muted: '#5A5550',       // muted warm body text
        ok: '#6B9B5F',          // open-now status — classic VW Bay-window green
        closed: '#C41E3A',      // closed status — classic VW Beetle red
      },
      fontFamily: {
        // The source site uses the native system-sans stack; Inter is its faithful web-font
        // equivalent (and what premium modern sites use). Headings + body share it.
        display: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'], // heritage "Classic VW" accent moments only
      },
      fontSize: {
        // Fluid clamp scale (px targets from brief)
        'd1': ['clamp(2.85rem, 8.5vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'd2': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'd3': ['clamp(2.25rem, 4vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2rem, 3vw, 3rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 1.6vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      maxWidth: { '8xl': '88rem' },
      borderRadius: { 'pill': '999px', '2xl': '1.25rem', '3xl': '1.75rem', '4xl': '2.25rem' },
      boxShadow: {
        glass: '0 8px 32px rgba(26,26,26,0.10)',
        'glass-lg': '0 20px 60px -12px rgba(26,26,26,0.20)',
        card: '0 1px 2px rgba(26,26,26,0.04), 0 12px 32px -12px rgba(26,26,26,0.14)',
        'card-hover': '0 8px 16px rgba(26,26,26,0.06), 0 28px 56px -16px rgba(200,16,28,0.32)',
        glow: '0 0 0 1px rgba(200,16,28,0.4), 0 10px 40px -8px rgba(200,16,28,0.5)',
        'inner-line': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
      letterSpacing: { tightest: '-0.05em' },
      backgroundImage: {
        // Dark hero mesh — near-black with classic-VW-red + gold glow.
        'mesh-ink': 'radial-gradient(1200px 600px at 80% -10%, rgba(200,16,28,0.34), transparent 60%), radial-gradient(900px 500px at 0% 110%, rgba(201,169,97,0.16), transparent 55%), linear-gradient(160deg,#0F0F0F 0%,#151110 45%,#1B1311 100%)',
        'orange-grad': 'linear-gradient(135deg,#D83E47 0%,#C8101C 55%,#A90D18 100%)',
        'gold-grad': 'linear-gradient(135deg,#DCC68F 0%,#C9A961 100%)',
        // Warm cream mesh for light hero sections.
        'cream-mesh': 'radial-gradient(900px 520px at 85% -10%, rgba(200,16,28,0.10), transparent 60%), radial-gradient(820px 480px at -5% 110%, rgba(201,169,97,0.16), transparent 55%), linear-gradient(180deg,#FAF8F2 0%,#F5F1E8 100%)',
        'grid-faint': 'linear-gradient(rgba(26,26,26,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(26,26,26,0.045) 1px,transparent 1px)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-ring': { '0%': { boxShadow: '0 0 0 0 rgba(107,155,95,0.6)' }, '70%': { boxShadow: '0 0 0 7px rgba(107,155,95,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(107,155,95,0)' } },
        'pulse-ring-red': { '0%': { boxShadow: '0 0 0 0 rgba(196,30,58,0.6)' }, '70%': { boxShadow: '0 0 0 7px rgba(196,30,58,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(196,30,58,0)' } },
        shimmer: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(220%)' } },
        'ken-burns': { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.12)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        marquee: 'marquee 38s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'pulse-ring-red': 'pulse-ring-red 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'ken-burns': 'ken-burns 18s ease-out both alternate infinite',
      },
    },
  },
  plugins: [],
};
