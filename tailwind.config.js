module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    screens: {
      sm: "480px", // Adjust to your needs
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      maxWidth: {
        1100: "1100px",
      },
      maxHeight: {
        36: "9rem", // 36rem to px conversion
        68: "17rem", // 68rem to px conversion
      },
      spacing: {
        4.12: "4.12rem", // Custom spacing
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
