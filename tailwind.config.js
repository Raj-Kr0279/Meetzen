/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        secondary: "#14B8A6",
        accent: "#7C3AED",

        // Backgrounds
        background: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-alt": "#F1F5F9",
        "surface-hover": "#E2E8F0",

        // Text
        foreground: "#0F172A",
        muted: "#475569",
        subtle: "#64748B",
        placeholder: "#94A3B8",
        inverse: "#FFFFFF",

        // Borders
        border: "#E2E8F0",
        "border-light": "#F1F5F9",
        divider: "#CBD5E1",

        // States
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",

        // Status backgrounds
        "success-bg": "#F0FDF4",
        "warning-bg": "#FFFBEB",
        "error-bg": "#FEF2F2",
        "info-bg": "#EFF6FF",

        // Status pills
        "success-soft": "#DCFCE7",
        "warning-soft": "#FEF3C7",
        "error-soft": "#FEE2E2",
        "info-soft": "#DBEAFE",

        // Utility
        overlay: "rgba(15, 23, 42, 0.45)",
        modal: "#FFFFFF",

        // Selection / Active
        selected: "#DBEAFE",
        hover: "#F8FAFC",

        // Rating / Highlight
        star: "#FACC15",
      },
      fontSize: {
        xxs: "0.6875rem", //11
        "2xs": "0.75rem", //12
      },

      height: {
        screen: "100dvh",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        xs: "0 1px 2px rgba(15,23,42,.05)",
        sm: "0 1px 3px rgba(15,23,42,.08)",
        md: "0 4px 12px rgba(15,23,42,.10)",
        lg: "0 12px 32px rgba(15,23,42,.12)",
        xl: "0 24px 48px rgba(15,23,42,.14)",
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
