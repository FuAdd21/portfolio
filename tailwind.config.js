/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0A0A0A',
        surface: '#141414',
        card:    '#1C1C1C',
        border:  '#2A2A2A',
        accent:  '#7C6AFA',
        'accent-dim': '#9D8FFB',
        primary: '#F5F5F5',
        muted:   '#888888',
        subtle:  '#444444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': '11px',
        xs:    '12px',
        sm:    '14px',
        base:  '16px',
        lg:    '18px',
        xl:    '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      maxWidth: {
        content: '1100px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
