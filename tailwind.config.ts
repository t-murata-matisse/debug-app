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
        custom1: "#75b1a9",
        custom2: "#5e8e87",
        custom3: "#d9b44a",
        custom4: "#4f6457",
        custom5: "#acd0c0",
      },
    },
  },
  plugins: [],
};
export default config;
