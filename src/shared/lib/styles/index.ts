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
      whiteOpacity: "rgba(255, 255, 255, 0.8)",
      text: "#141E33",
      textOpacity: "#AAAAAA",
      textGray: "#6F6F6F",
      textSecondary: "#9CA2AF",
      accent: "#0A84FF",
      accentLight: "rgb(100, 162, 206)",
      accentDark: "#004A80",
      gradient: "linear-gradient(90.5deg, #A965F5 0.43%, #0079D1 99.6%)",
      footer: "#141E33",
      footerLogo: "#17233B",
      imageGradient:
        "linear-gradient(90deg, rgba(0, 120, 209, 0.2) 0%, rgba(169, 101, 245, 0.2) 100%), linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);",
      overlay: "rgba(0, 0, 0, 0.4)",
      red: "#FF3B30",
      green: "#32D74B",
      turquoise: "#6DE5BE",
      border: "#E0E2E6",
      borderSecondary: "#9CA2AF",
      purple: "#AB58FF",
      notify: "rgba(10, 37, 64, 0.8)",
    },
    shadows: {
      default: "0px 8px 16px rgba(229, 229, 231, 0.6)",
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
      headerSearch: 102,
      header: 100,
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
  },
});

export const setupGlobalStyles = () => {
  setupStyles();
};
