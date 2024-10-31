/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 30s linear infinite",
        "slide-step": "slide-step 30s steps(5, end) infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-gradient-orange-RP": {
          backgroundImage:
            "linear-gradient(to right, #f97316, #ef4444, #ec4899)",
        },
        ".bg-gradient-pink-RO": {
          backgroundImage:
            "linear-gradient(to right, #ec4899, #ef4444, #f97316)",
        },
        ".bg-gradient-yellow-PR": {
          backgroundImage:
            "linear-gradient(to right, #fbbf24,#ec4899, #ef4444)",
        },
        ".bg-gradient-pink-RY": {
          backgroundImage:
            "linear-gradient(to right,  #ec4899,#ef4444, #fbbf24)",
        },

        ".text-gradient-orange-RP": {
          backgroundImage:
            "linear-gradient(to right, #f97316, #ef4444, #ec4899)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        // Gradient for text starting with pink to orange
        ".text-gradient-pink-RO": {
          backgroundImage:
            "linear-gradient(to right, #ec4899, #ef4444, #f97316)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
