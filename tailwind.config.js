module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Poppins", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        primary: withOpacityValue("--color-primary"),
        "primary-accent": withOpacityValue("--color-primary-accent"),
        "primary-muted": withOpacityValue("--color-primary-muted"),
        neutral: withOpacityValue("--color-text-neutral"),
        foreground: withOpacityValue("--color-foreground"),
        background: withOpacityValue("--color-background"),
      },
    },
  },
  plugins: [],
};

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}
