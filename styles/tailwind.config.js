module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.md", "./src/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "zoog-teal": "#03d7d9",
        "zoog-purple": "#c58ffb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
