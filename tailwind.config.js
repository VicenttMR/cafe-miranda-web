/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        miranda: {
          red: "#C41E3A",
          "red-dark": "#A0182E",
          "red-light": "#E8233F",
          teal: "#1DB5AD",
          "teal-dark": "#179990",
          "teal-light": "#22CEC5",
          dark: "#1A1A1A",
          gray: "#6B7280",
          light: "#F5F5F0",
          cream: "#FAFAF7",
        },
      },
      fontFamily: {
        // Anton: display bold condensed — matches logo weight
        anton: ["var(--font-anton)", "sans-serif"],
        // Space Grotesk: clean modern body
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        // Inter: small UI text
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 10rem)", { lineHeight: "0.92" }],
        "display-lg": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.0" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
