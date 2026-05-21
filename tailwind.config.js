/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#d9d9e7",
        "secondary-container": "#dbe2f9",
        "on-primary-fixed": "#001452",
        "inverse-primary": "#b7c4ff",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#3f4759",
        "on-primary-fixed-variant": "#0038b6",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e7e7f5",
        "tertiary-fixed-dim": "#ffb4a1",
        "secondary-fixed-dim": "#bfc6dc",
        "surface-variant": "#e1e1ef",
        "background": "#fbf8ff",
        "on-tertiary-fixed-variant": "#891e00",
        "inverse-on-surface": "#f0effe",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "outline-variant": "#c3c5d9",
        "on-surface": "#191b25",
        "outline": "#737688",
        "on-error-container": "#93000a",
        "surface-container-highest": "#e1e1ef",
        "surface-container-low": "#f3f2ff",
        "surface-container": "#ededfb",
        "tertiary-fixed": "#ffdbd2",
        "secondary-fixed": "#dbe2f9",
        "surface-tint": "#004ced",
        "on-surface-variant": "#434656",
        "primary-fixed-dim": "#b7c4ff",
        "on-tertiary-container": "#ffddd5",
        "secondary": "#565e71",
        "on-tertiary-fixed": "#3c0800",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "surface-bright": "#fbf8ff",
        "surface": "#fbf8ff",
        "on-secondary-fixed": "#141b2c",
        "primary-container": "#0052ff",
        "tertiary": "#952200",
        "primary": "#003ec7",
        "on-secondary-container": "#5c6477",
        "inverse-surface": "#2e303a",
        "primary-fixed": "#dde1ff",
        "on-background": "#191b25",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#bf3003",
        "on-primary-container": "#dfe3ff"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
