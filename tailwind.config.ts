import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1d1d1d",
        header: "#101010",
        sidebar: "#101010",
      },
    },
  },
  plugins: [],
} satisfies Config;
