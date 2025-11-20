/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DMSans_400Regular"],
        dmsansMedium: ["DMSans_500Medium"],
        dmsansBold: ["DMSans_700Bold"],
        dmsansExtra: ["DMSans_800ExtraBold"],
      },
      colors: {
        primary: "#f2f4f5",
      },
    },
  },
  plugins: [],
};
