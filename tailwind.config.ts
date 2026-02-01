import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333", // Default text color
            a: {
              color: "#1E40AF", // Link color
              textDecoration: "underline",
              "&:hover": {
                color: "#1D4ED8", // Hover link color
              },
            },
            h1: {
              color: "#1F2937", // Heading 1 color
            },
            h2: {
              color: "#1F2937", // Heading 2 color
            },
            h3: {
              color: "#1F2937", // Heading 3 color
            },
            blockquote: {
              borderLeftColor: "#1E40AF", // Blockquote border color
              fontStyle: "italic",
              color: "#4B5563",
            },
            code: {
              backgroundColor: "#F3F4F6", // Inline code background
              padding: "2px 4px",
              borderRadius: "4px",
              color: "#D97706", // Code text color
            },
            pre: {
              backgroundColor: "#F3F4F6", // Code block background
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
              fontSize: "0.9rem",
              lineHeight: "1.6",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
