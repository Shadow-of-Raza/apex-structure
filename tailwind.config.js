// /** @type {import('tailwindcss').Config} */

// export const content = [
//   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
// ];
// export const theme = {
//   extend: {
//     colors: {
//       golden_pollen: {
//         DEFAULT: '#ffc836',
//         100: '#3e2e00',
//         200: '#7c5b00',
//         300: '#bb8900',
//         400: '#f9b700',
//         500: '#ffc836',
//         600: '#ffd560',
//         700: '#ffdf88',
//         800: '#ffeaaf',
//         900: '#fff4d7',
//       },
//       royal_gold: {
//         DEFAULT: '#fdd963',
//         100: '#453501',
//         200: '#8b6b02',
//         300: '#d0a003',
//         400: '#fcc81e',
//         500: '#fdd963',
//         600: '#fde082',
//         700: '#fee8a2',
//         800: '#fef0c1',
//         900: '#fff7e0',
//       },
//       platinum: {
//         DEFAULT: '#ededed',
//         100: '#2f2f2f',
//         200: '#5f5f5f',
//         300: '#8e8e8e',
//         400: '#bebebe',
//         500: '#ededed',
//         600: '#f1f1f1',
//         700: '#f4f4f4',
//         800: '#f8f8f8',
//         900: '#fbfbfb',
//       },
//       black: {
//         DEFAULT: '#000000',
//         100: '#0f0f0f',
//         200: '#1a1a1a',
//         300: '#262626',
//         400: '#404040',
//         500: '#000000',
//         600: '#595959',
//         700: '#737373',
//         800: '#a6a6a6',
//         900: '#d9d9d9',
//       },
//       white: {
//         DEFAULT: '#ffffff',
//         100: '#333333',
//         200: '#666666',
//         300: '#999999',
//         400: '#cccccc',
//         500: '#ffffff',
//         600: '#ffffff',
//         700: '#ffffff',
//         800: '#ffffff',
//         900: '#ffffff',
//       },
//       cobalt_blue: {
//         DEFAULT: '#003eab',
//         100: '#000d23',
//         200: '#001945',
//         300: '#002668',
//         400: '#00338b',
//         500: '#003eab',
//         600: '#0058f1',
//         700: '#357fff',
//         800: '#78aaff',
//         900: '#bcd4ff',
//       },
//       true_cobalt: {
//         DEFAULT: '#002679',
//         100: '#000818',
//         200: '#001031',
//         300: '#001749',
//         400: '#001f62',
//         500: '#002679',
//         600: '#003fc8',
//         700: '#1660ff',
//         800: '#6495ff',
//         900: '#b1caff',
//       },
//       blue_shade_1: {
//         DEFAULT: '#134377',
//         100: '#040d16',
//         200: '#071a2c',
//         300: '#0b2742',
//         400: '#0e3458',
//         500: '#134377',
//         600: '#1e67b8',
//         700: '#3e8feb',
//         800: '#81b7f3',
//         900: '#c0dbf9',
//       },
//       blue_shade_2: {
//         DEFAULT: '#18578c',
//         100: '#05111c',
//         200: '#0a2238',
//         300: '#0f3354',
//         400: '#13446f',
//         500: '#18578c',
//         600: '#2276c7',
//         700: '#4e9ae6',
//         800: '#8dbbee',
//         900: '#c6ddf7',
//       },
//     },
//     fontFamily: {
//       sans: ['var(--font-ibm-plex-serif)', 'Georgia', 'serif'],
//     },
//   },
// };
// export const plugins = [];




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#f59e0b',
          600: '#d97706',
        },
        black: {
          DEFAULT: '#000000',
          100: '#0f0f0f',
          200: '#1a1a1a',
          300: '#262626',
          400: '#404040',
          500: '#000000',
          600: '#595959',
          700: '#737373',
          800: '#a6a6a6',
          900: '#d9d9d9',
        },
        platinum: {
          DEFAULT: '#ededed',
          100: '#2f2f2f',
          200: '#5f5f5f',
          300: '#8e8e8e',
          400: '#bebebe',
          500: '#ededed',
          600: '#f1f1f1',
          700: '#f4f4f4',
          800: '#f8f8f8',
          900: '#fbfbfb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}