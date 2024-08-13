import { type Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  plugins: [daisyui],
} satisfies Config;
