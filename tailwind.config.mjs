import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: " scale(1)" },
          "33%": { transform: " scale(1.05)" },
          "66%": { transform: "scale(0.95)" },
          "100%": { transform: " scale(1)" },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Light Theme
        accent: {
          DEFAULT: "hsl(14, 73%, 61%)", // Original color
          light: "hsl(14, 80%, 70%)", // Lighter for hover or highlights
          lighter: "hsl(14, 85%, 85%)", // Much lighter for backgrounds
          dark: "hsl(14, 73%, 50%)", // Darker for contrast
          darker: "hsl(14, 73%, 40%)", // Much darker for stronger contrast
        },
        black: {
          DEFAULT: "hsl(0, 0%, 10%)", // Almost black
          light: "hsl(0, 0%, 25%)", // Lighter black for borders or text
        },
        white: {
          DEFAULT: "hsl(0, 0%, 100%)", // Pure white
          dark: "hsl(0, 0%, 90%)", // Off-white for subtle backgrounds
        },
        // Dark Theme
        dark: {
          accent: {
            DEFAULT: "hsl(14, 73%, 61%)", // Original color for dark theme
            light: "hsl(14, 80%, 75%)", // Lighter for highlights in dark mode
            lighter: "hsl(14, 85%, 90%)", // Lighter for backgrounds
            dark: "hsl(14, 73%, 55%)", // Darker for more contrast
            darker: "hsl(14, 73%, 45%)", // Much darker for strong contrast
          },
          black: {
            DEFAULT: "hsl(0, 0%, 90%)", // Almost white for text
            dark: "hsl(0, 0%, 70%)", // Lighter for borders in dark mode
          },
          white: {
            DEFAULT: "hsl(0, 0%, 15%)", // Off-black for backgrounds
            light: "hsl(0, 0%, 25%)", // Slightly lighter for subtle areas
          },
        },
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
