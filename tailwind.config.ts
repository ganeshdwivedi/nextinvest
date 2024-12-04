import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        thin: "var(--font-thin)",
        light: "var(--font-light)",
        regular: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
      },
      colors: {
        primary: "#128b76",
        secondary: "#f56b8d",
        footer: "#ececec",
        middle: "#ecf4fd",
        lightGreen: "#128b76",
        lightGrey: "#a8aaac",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
