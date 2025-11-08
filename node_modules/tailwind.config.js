/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html', // Include all HTML files in the project
    './src/**/*.css', // Include all CSS files in the src folder
    './**/*.js', // Include all JavaScript files in the project
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'primary': '#0CDC2A',
        'dark': '#384166',
        'teal': '#0B735F',
        'sage': '#639D75',
        'cream': '#E3DBA9',
        // Accent Palette
        'accent1': '#0CDC2A',
        'accent2': '#0B735F',
        'accent3': '#639D75',
        'accent4': '#F6A623',
        // Tint Colors (using opacity in utility classes is preferred, but defining them can be useful)
        // 'accent1-tint': 'rgba(12,220,42,0.06)', // Use bg-accent1/6 instead
      },
      fontFamily: {
        // Using 'Courier New' as a custom font-family, which would need to be imported/loaded
        mono: ['"Courier New"', 'monospace'],
      },
      spacing: {
        'header-h': 'clamp(3rem, 8vh, 6rem)', // If used often
        // TOC top spacing
        'toc-top-base': '3.5rem', 
      },
      // Animation for section-highlight
      keyframes: {
        'drop-in': {
          'from': { transform: 'translateX(-12px)', boxShadow: '0 8px 30px rgba(56,65,102,0.06)' },
          '60%': { transform: 'translateX(4px)' },
          'to': { transform: 'translateX(0)', boxShadow: '0 6px 18px rgba(56,65,102,0.06)' },
        }
      },
      animation: {
        'drop-in': 'drop-in 360ms ease forwards',
      },
    },
  },
  plugins: [],
}