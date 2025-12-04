/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'text-primary': '#0B0B0B',
        'muted': '#6B6B6B',
        'accent-1': '#6C2FA5',
        'accent-2': '#A13EA8',
        'accent-3': '#C6A3E0',
        'ui-muted-bg': '#F5F5F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
