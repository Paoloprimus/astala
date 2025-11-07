import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors Castala! (da aggiungere in futuro)
      },
      fontFamily: {
        // Custom fonts (da aggiungere in futuro)
      },
    },
  },
  plugins: [],
}

export default config
