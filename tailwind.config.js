const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // overwrite tailwind classes
    extend: {
      // add on to the tailwind classes
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["even"],
      borderRadius: ["first", "last"],
    },
  },
  plugins: [],
};
