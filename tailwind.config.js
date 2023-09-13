/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          }
        }
      },
      backgroundColor: {
        skin: {
          base: {
            light: 'var(--background-color-light)'
          },
          button: {
            light: 'var(--color-button-accent-light)',
            hover: 'var(--color-button-accent-hover-light)',
            muted: 'var(--color-button-accent-muted-light)',
          }
        }
      },
    },
  },
  plugins: [],
}
