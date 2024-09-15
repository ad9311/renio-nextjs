import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#5E94FF',
          100: '#5585E6',
          200: '#4B76CC',
          300: '#476FBF',
          400: '#4268B3',
          500: '#395999',
          600: '#314D85',
          700: '#283E6B',
          800: '#1E2F52',
          900: '#131E33',
        },
      },
    },
  },
  plugins: [],
};
export default config;
