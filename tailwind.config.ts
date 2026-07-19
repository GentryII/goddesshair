import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goddess: {
          plum: "#2B0B33",
          "plum-light": "#3D1049",
          "plum-deep": "#190720",
          ink: "#1A0E1F",
          gold: "#D4AF37",
          "gold-light": "#F1D375",
          "gold-dim": "#8C7020",
          pink: "#E6417A",
          "pink-light": "#F7A8C4",
          blush: "#FBEAE6",
          "blush-dim": "#F3D9D1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "halo-gradient":
          "radial-gradient(circle at 50% 50%, rgba(241,211,117,0.35), rgba(230,65,122,0.12) 45%, rgba(43,11,51,0) 70%)",
        "gold-line":
          "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,1) 50%, rgba(212,175,55,0) 100%)",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.55", transform: "rotate(0deg) scale(1)" },
          "50%": { opacity: "0.9", transform: "rotate(3deg) scale(1.03)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 9s ease-in-out infinite",
        drift: "drift 38s linear infinite",
        rise: "rise 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
