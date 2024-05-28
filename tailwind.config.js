/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        "about-section": "1fr 3fr"
      },
      colors: {
        "page-white" : "#f2f0ef",
        "page-black" : "#252525", 
        "page-accent" : "#6a89a7",
        "page-accent-light" : "#bdddfc",
        "bg-light": "#c9c8c7",
        "bg-dark" : "#252525",
        "card-bg" : "#ffffff",
        "card-bg-light" : "#ffffff",
      }
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: false
  }
};
