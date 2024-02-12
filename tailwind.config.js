/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "JosefinSans_600SemiBold",
        subtitle: "JosefinSans_500Medium",
        body: "JosefinSans_400Regular",
        bold: "JosefinSans_700Bold",
      },
    },
  },
  plugins: [],
}
