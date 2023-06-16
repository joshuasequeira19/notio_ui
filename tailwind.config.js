/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              blue: {
                  100: "#caf0f8",
                  200: "#ade8f4",
                  300: "#90e0ef",
                  400: "#48cae4",
                  500: "#00b4d8",
                  600: "#0096c7",
                  700: "#0077b6",
                  800: "#023e8a",
                  900: "#03045e",
              },
              olive: {
                  900: "#283618",
                  700: "#606c38",
              },
              brown: {
                  700: "#bc6c25",
                  400: "#dda15e",
                  200: "#fefae0",
              },
          },
      },
      fontFamily: {
          sans: ["Merriweather Sans", "sans"],
      },
  },
  plugins: [],
};