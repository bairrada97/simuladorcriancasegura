module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/web/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "m-01": "rgb(var(--m-01))",
      "m-01--light-01": "rgb(var(--m-01--light-01) / <alpha-value>)",
      "m-01--light-02": "rgb(var(--m-01--light-02) / <alpha-value>)",
      "m-01--dark-01": "rgb(var(--m-01--dark-01) / <alpha-value>)",
      "m-01--dark-02": "rgb(var(--m-01--dark-02) / <alpha-value>)",

      "neu-00": "rgb(var(--neu-00) / <alpha-value>)",
      "neu-01": "rgb(var(--neu-01) / <alpha-value>)",
      "neu-02": "rgb(var(--neu-02) / <alpha-value>)",
      "neu-03": "rgb(var(--neu-03) / <alpha-value>)",
      "neu-04": "rgb(var(--neu-04) / <alpha-value>)",
      "neu-05": "rgb(var(--neu-05) / <alpha-value>)",
      "neu-06": "rgb(var(--neu-06) / <alpha-value>)",
      "neu-07": "rgb(var(--neu-07) / <alpha-value>)",
      "neu-08": "rgb(var(--neu-08) / <alpha-value>)",
      "neu-09": "rgb(var(--neu-09) / <alpha-value>)",
      "neu-10": "rgb(var(--neu-10) / <alpha-value>)",
      "neu-11": "rgb(var(--neu-11) / <alpha-value>)",
      "neu-12": "rgb(var(--neu-12) / <alpha-value>)",
      "neu-13": "rgb(var(--neu-13) / <alpha-value>)",

      red: "rgb(var(--red) / <alpha-value>)",
      orange: "rgb(var(--orange) / <alpha-value>)",
      yellow: "rgb(var(--yellow) / <alpha-value>)",
      green: "rgb(var(--green) / <alpha-value>)",
      teal: "rgb(var(--teal) / <alpha-value>)",

      "gra-01":
        "106.45deg, rgb($m-01--light-01) 8.47%, rgb($m-02--dark-01) 92.4%",
      "gra-02": "112.63deg, rgb($m-02) 10.93%, rgb($m-01--light-01) 88.2%",
      "gra-03":
        "97.5deg, rgb($m-02--dark-01) 4.32%, rgb($m-02--light-02) 94.22%",
      "gra-03--inverted":
        "97.5deg, rgb($m-02--light-02) 4.32%, rgb($m-02--dark-01) 94.22%",
      "gra-04": "360deg, rgb($m-01) 0%, rgb($m-01--light-01) 100%",
      "gra-05": "97.5deg, rgb($neu-10) 4.32%, rgb($neu-09) 94.22%",
      "gra-05--inverted": "97.5deg, rgb($neu-09) 4.32%, rgb($neu-1) 94.22%",
      "gra-06": "97.5deg, rgb($neu-08) 4.32%, rgb($neu-07) 94.22%",
      "gra-06--inverted": "97.5deg, rgb($neu-07) 4.32%, rgb($neu-08) 94.22%",
      "gra-07": "97.5deg, rgb($neu-06) 4.32%, rgb($neu-05) 94.22%",
      "gra-07--inverted": "97.5deg, rgb($neu-05) 4.32%, rgb($neu-06) 94.22%",
    },
    fonts: {
      sourceSansPro: "Source Sans Pro",
    },
    fontSize: {
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      32: "2rem",
    },

    fontWeights: {
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    zIndices: {
      1: "1",
      2: "10",
      3: "100",
    },
    screens: {
      tablet: "(min-width: 600px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
    },
    extend: {
      backgroundImage: {
        "gra-01":
          "linear-gradient(106.45deg, rgb(var(--m-01--light-01)) 8.47%, rgb(var(--m-02--dark-01)) 92.4%)",
        "gra-02":
          "linear-gradient(112.63deg,  rgb(var(--m-02)) 10.93%,  rgb(var(--m-01--light-01))  88.2%)",
        "gra-03":
          "linear-gradient(97.5deg, rgb(var(--m-02--dark-01)) 4.32%, rgb(var(--m-02--light-02)) 94.22%)",
        "gra-03--inverted":
          "linear-gradient(97.5deg, rgb(var(--m-02--light-02)) 4.32%, rgb(var(--m-02--dark-01))  94.22%)",
        "gra-04":
          "linear-gradient(360deg, rgb(var(--m-01)) 0%, rgb(var(--m-01--light-01)) 100%)",
        "gra-05":
          "linear-gradient(97.5deg, rgb(var(--neu-10)) 4.32%,rgb(var(--neu-09)) 94.22%)",
        "gra-05--inverted":
          "linear-gradient(97.5deg, rgb(var(--neu-09)) 4.32%, rgb(var(--neu-01)) 94.22%)",
        "gra-06":
          "linear-gradient(97.5deg, rgb(var(--neu-08))  4.32%, rgb(var(--neu-07))  94.22%)",
        "gra-06--inverted":
          "linear-gradient(97.5deg, rgb(var(--neu-07)) 4.32%, rgb(var(--neu-08)) 94.22%)",
        "gra-07":
          "linear-gradient(97.5deg, rgb(var(--neu-06))  4.32%, rgb(var(--neu-05))  94.22%)",
        "gra-07--inverted":
          "linear-gradient(97.5deg, rgb(var(--neu-05)) 4.32%, rgb(var(--neu-06))  94.22%)",
      },
      boxShadow: {
        "sha-01": "0px 5px 10px rgba(19, 20, 19, 0.12)",
        "sha-02": "0px 4px 12px rgba(19, 20, 19, 0.04)",
        "sha-03": "0px 6px 24px rgba(52, 183, 120, 0.2)",
        "sha-04": "0px 32px 72px rgba(19, 20, 19, 0.4)",
        "sha-05": "0px -5px 10px rgba(19, 20, 19, 0.12)",
        "sha-06": "0px 5px 18px rgba(19, 20, 19, 0.3)",
        "sha-07": "-2px 2px 3px -1px rgba(19, 20, 19, 0.32)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down":
          "accordion-down 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98)",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "1/7": "calc(100% / 7)",
      },
    },
  },
  plugins: [],
};
