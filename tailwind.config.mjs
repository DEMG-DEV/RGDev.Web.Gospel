/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gospel: {
          navy: {
            50: '#F0F4F8',
            100: '#D9E2EC',
            200: '#BCCCDC',
            300: '#9FB3C8',
            700: '#1B365D',
            800: '#102A4D',
            900: '#0D2040',
            950: '#071124',
          },
          gold: {
            50: '#FFFDF5',
            100: '#FEF9E7',
            200: '#FDF0C5',
            300: '#FCE49D',
            400: '#F7CE55',
            500: '#D49A37',
            600: '#B87E24',
            700: '#915F16',
            800: '#6E450E',
            900: '#4F3008',
          },
          warm: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F7CE55 0%, #D49A37 50%, #B87E24 100%)',
        'navy-gradient': 'linear-gradient(135deg, #071124 0%, #0D2040 60%, #102A4D 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}
