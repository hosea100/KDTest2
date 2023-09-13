/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dracula: {
          background: '#282a36',
          currentLine: '#44475a',
          selection: '#44475a',
          foreground: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        skin: {
          base: {
            light: 'var(--color-text-base-light)',
            muted: 'var(--color-text-base-muted)',
            inverted: 'var(--color-text-base-inverted)',
            lightTeal: 'var(--color-button-accent-light)',
          }
        }
      },
      backgroundColor: {
        skin: {
          base: {
            light: 'var(--background-color-light)',
          },
        }
      },
    },
  },
  plugins: [],
}
