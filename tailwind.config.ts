import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-dark-elem": "hsl(209, 23%, 22%)",
        "color-dark-bg": "hsl(207, 26%, 17%)",
        "color-dark": "hsl(200, 15%, 8%)",
        "color-gray": "hsl(0, 0%, 52%)",
        "color-light-bg": "hsl(0, 0%, 98%)",
        "color-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
export default config;
