/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ivory: "#FFFFFF", navy: "#112148", gold: "#AB8F46" },
      fontFamily: { display: ["var(--font-jost)", "Arial", "sans-serif"], body: ["var(--font-jost)", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
