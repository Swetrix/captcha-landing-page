tailwind.config = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          750: '#141d2e',
        }
      },
    },
    minHeight: {
     '72': '18rem',
     'page': 'calc(100vh - 74px)', // header height -> 74px
     'min-footer': 'calc(100vh - 160px)', // 74px + 88px footer height
     'min-footer-ad': 'calc(100vh - 265px)', // 74px + 88px footer height
    },
  },
  variants: {
    extend: {},
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive'],
  },
}
