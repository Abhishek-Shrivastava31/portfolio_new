import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(48,0,64,1) 100%)',
        'navbar-gradient': 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 25%, rgba(0,6,8,1) 75%, rgba(0,212,255,0) 100%)',
        'blue-gradient': 'linear-gradient(90deg, rgba(0,95,115,1) 0%, rgba(0,63,121,1) 100%)',
        'red-gradient': 'linear-gradient(270deg, rgba(115,0,0,1) 0%, rgba(121,93,0,1) 100%)',
        'green-gradient': 'linear-gradient(90deg, rgba(0,115,96,1) 0%, rgba(0,121,18,1) 100%)'
      },
      
    },
  },
  plugins: [],
};
export default config;
