
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
        },
        darkbg: {
          DEFAULT: '#19242F' //https://tataprojects.com/
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}