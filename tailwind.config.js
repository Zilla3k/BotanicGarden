/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotosans: ['Roboto', 'sans-serif'],
        robotomono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        // Home
        'home-banner': "url('src/routes/Home/assets/banner.svg')",
        'home-pool': "url('src/routes/Home/assets/pool.svg')",
        'home-garden': "url('src/routes/Home/assets/garden.svg')",
        'home-panel': "url('src/routes/Home/assets/panel.svg')",

        // Pools
        // 'pool-banner': "url('src/routes/Pools/assets/banner.svg')",

        // Navbar
        logo: "url('/src/components/Navbar/assets/logo.svg')",
      },
      colors: {
        greenlight: '#d4ecdb',
        greenmedium: '#b2c6b8',
        greenhard: '#1f2d23',
        greendark: '#161818',
        whitecream: '#e5fff0',
        black: '#1B1B1B',
      },
    },
  },
  plugins: [],
};
