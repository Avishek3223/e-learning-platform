module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #FFECFC, #EEF8FF)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bagel: ["Bagel Fat One", "system-ui"],
        syne: ["Syne", "sans-serif"],
        source: ["Source Code Pro", "monospace"],
        static: ["Bacasime Antique", "serif"],
        baloo: ["Baloo 2", "sans-serif"],
        pagi:["Baloo Paaji 2", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
