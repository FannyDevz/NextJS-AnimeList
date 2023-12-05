/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors : {
      color: {
        primary: '#CCD6F6',
        accent: '#63FCD8',
        accentsecondary: '#6FFFFF',
        secondary: '#8892B0',
        dark: '#0A192F',
        darksecondary: '#0F1F3A',
        success: '#00ADB5',
        error: '#EF476F',
        }
      }
  },
  plugins: [],
}
