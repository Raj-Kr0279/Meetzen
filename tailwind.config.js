/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#233B57",        // navy
        "primary-hover": "#1A2C42", // deeper navy
        secondary: "#A87C3F",       // brass
        accent: "#AE4E2C",          // rust

        // Backgrounds
        background: "#F6F4EE",      // paper
        surface: "#FFFFFF",
        "surface-alt": "#F1EEE4",
        "surface-hover": "#E7E2D4",

        // Text
        foreground: "#1C2130",      // ink
        muted: "#5B5A52",           // ink soft
        subtle: "#8B8878",          // ink faint
        placeholder: "#ADA997",
        inverse: "#FFFFFF",

        // Borders
        border: "#E7E2D4",
        "border-light": "#EFEBE0",
        divider: "#D8D2C0",

        // States
        success: "#3E6B4E",   // sage
        warning: "#B8862F",   // deep brass/amber
        error: "#AE4E2C",     // rust
        info: "#233B57",      // navy

        // Status backgrounds
        "success-bg": "#EAF1EC",
        "warning-bg": "#FBF3E6",
        "error-bg": "#F8E9E2",
        "info-bg": "#E7ECF1",

        // Status pills
        "success-soft": "#DEEAE0",
        "warning-soft": "#F1E6D2",
        "error-soft": "#F5E1D6",
        "info-soft": "#DCE4EC",

        // Utility
        overlay: "rgba(28, 33, 48, 0.45)",
        modal: "#FFFFFF",

        // Selection / Active
        selected: "#E3E9EF",
        hover: "#F6F4EE",

        // Rating / Highlight
        star: "#D9A94A",
      },
      fontSize: {

        // ─── Display (Fraunces) ───
        "display-xl": ["clamp(1.75rem, 1.1rem + 2.6vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "500" }],
        "display-lg": ["clamp(1.5rem, 1.05rem + 1.8vw, 1.875rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        "display-md": ["clamp(1.25rem, 1rem + 1vw, 1.5rem)", { lineHeight: "1.2", fontWeight: "500" }],
        "display-sm": ["clamp(1.125rem, 1rem + 0.5vw, 1.25rem)", { lineHeight: "1.25", fontWeight: "500" }],

        // ─── Heading (Inter) ───
        "heading-lg": ["clamp(1rem, 0.92rem + 0.35vw, 1.125rem)", { lineHeight: "1.35", fontWeight: "600" }],
        "heading-md": ["clamp(0.9375rem, 0.88rem + 0.25vw, 1rem)", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-sm": ["0.875rem", { lineHeight: "1.4", fontWeight: "600" }],

        // ─── Body (Inter) — stays fixed, body copy doesn't need to scale ───
        "body-lg": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["0.875rem", { lineHeight: "1.55", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],

        // ─── Caption / meta / mono — fixed, these are small and already tight ───
        caption: ["0.75rem", { lineHeight: "1.45", fontWeight: "500" }],
        captionLight: ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }],
        overline: ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.12em", fontWeight: "600" }],
        "mono-lg": ["clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", { lineHeight: "1.1", fontWeight: "500" }],
        "mono-md": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "mono-sm": ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.1em", fontWeight: "500" }],
      },

      height: {
        screen: "100dvh",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      boxShadow: {
        xs: "0 1px 2px rgba(28,33,48,.05)",
        sm: "0 1px 3px rgba(28,33,48,.08)",
        md: "0 4px 12px rgba(28,33,48,.10)",
        lg: "0 12px 32px rgba(28,33,48,.12)",
        xl: "0 24px 48px rgba(28,33,48,.14)",
      },

      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      screens: {
        mobile: "280px",
        xs: "480px",
        desk: "1600px",
        twok: "2000px",
        threek: "3000px",
        "3xl": "1920px",
      },
    },

  },
}