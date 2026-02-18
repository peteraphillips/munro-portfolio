import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pineGreen: "#0B3D2E",    // deep forest
        mossGreen: "#5A7D4E",    // hover / accent
        mistyGreen: "#A3B18A",   // mist/overlay
        leafGreen: "#7BB661",    // highlights
        barkBrown: "#3D2C1A",    // earthy accent
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Inter", "sans-serif"],
        futura: ["Futura", "Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
