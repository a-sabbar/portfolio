/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'x' : '0px',

      'xs': '375px',

      'sm': '600px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1200px',

      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      shadows: {
        'new-shadow': [
          '5px 2px 11px 0px rgba(2, 2, 2, 0.028)',' 15px 41px 12px 0px rgba(2, 2, 2, 0)'

        ],
        'new-shadow2': [
          '0px 13px 13px 0px rgba(0, 0, 0, 0.09)', '0px 29px 17px 0px rgba(0, 0, 0, 0.05)', '0px 51px 21px 0px rgba(0, 0, 0, 0.01)', '0px 80px 22px 0px rgba(0, 0, 0, 0.00)'
        ],
      },
    },
  },
  plugins: [],
}
