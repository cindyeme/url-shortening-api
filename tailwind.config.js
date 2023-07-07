/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        primary: "#2acfcf",
        secondary: "#3b3054",
        hover: "#9be3e2",
        error: "#f46262",
        darkViolet: "#232127",
        shorterSection: "#eff1f7",
        bgMobileMenu: "#00000088",
        grayViolet: "#544a6d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgShortenMobile: "url('/app/assets/bg-shorten-mobile.svg')",
        bgShortenDesktop: "url('/app/assets/bg-shorten-desktop.svg')",
        bgBoostMobile: "url('/app/assets/bg-boost-mobile.svg')",
        bgBoostDesktop: "url('/app/assets/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
