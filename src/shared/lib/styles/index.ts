import { createStitches } from "@stitches/react";
import { setupStyles } from "./global";

export const media = {
  fromWideMobile: "only screen and (min-width: 560px)",
  fromTablet: "only screen and (min-width: 768px)",
  fromWideTablet: "only screen and (min-width: 960px)",
  fromLaptop: "only screen and (min-width: 1200px)",
};

export const { styled, getCssText, keyframes, createTheme, css } = createStitches({
  theme: {
    colors: {
      background: "#F2F4F7",
      headerBackground: "#292929",
      block: "#FFFFFF",
      blockLight: "#FFFFFF",
      white: "#FFFFFF",
      textWhite: "#FFFFFF",
      text: "#000000",
      textOpacity: "#AAAAAA",
      textSecondary: "#9CA2AF",
      accent: "#0A84FF",
      accentLight: "#009CF0",
      imageGradient:
        "linear-gradient(90deg, rgba(0, 120, 209, 0.2) 0%, rgba(169, 101, 245, 0.2) 100%), linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);",
      overlay: "rgba(0, 0, 0, 0.4)",
      gray: "#cccccc",
      green: "#32D74B",
      violet: "#AB58FF",
      red: "#FF616A",
    },
    shadows: {
      default: "0px 20px 10px 0px rgba(0, 0, 0, 0.5)",
    },
    fonts: {
      mulish: "Mulish, sans-serif",
    },
    fontSizes: {
      little: "11px",
      small: "12px",
      smallMedium: "13px",
      smallLarge: "14px",
      defaultSmall: "15px",
      default: "16px",
      medium: "18px",
      large: "20px",
      largeMedium: "22px",
      titleSmall: "24px",
      titleMediumSmall: "26px",
      titleMedium: "28px",
      titleLarge: "32px",
      big: "42px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    letterSpacings: {
      default: 0,
      defaultLarge: "0.01em",
      small: "0.02em",
    },
    transitions: {
      default: "0.2s ease-in-out",
      long: "0.3s ease-in-out",
    },
    radii: {
      little: "2px",
      small: "4px",
      defaultSmall: "8px",
      default: "12px",
      medium: "16px",
    },
    zIndices: {
      modal: 150,
      sidebarMobile: 102,
      sidebarCategories: 100,
      secondaryModal: 90,
      dropdown: 80,
    },
  },
  media,
});

export const darkTheme = createTheme({
  colors: {
    block: "#141E33",
    headerBackground: "#FFFFFF",
    blockLight: "#202B42",
    background: "#0F121F",
    text: "#FFFFFF",
    textSecondary: "#6D8CB6",
    border: "#26324D",
    borderSecondary: "#6D8CB6",
    textWhite: "#000000",
  },
});

export const setupGlobalStyles = () => {
  setupStyles();
};
