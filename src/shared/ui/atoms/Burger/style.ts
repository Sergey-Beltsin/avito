import { styled } from "@stitches/react";
import { BurgerProps } from "./types";

export const Burger = styled<BurgerProps>("button", {
  display: "block",
  position: "relative",
  backgroundColor: "inherit",
  transition: "$default",
  border: "none",
  outline: "none",

  "&::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "$headerBackground",
    top: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
  },

  "&::after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "$headerBackground",
    bottom: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
  },

  variants: {
    size: {
      small: {
        width: "16px",
        height: "16px",
      },
      medium: {
        width: "20px",
        height: "20px",
      },
    },
    isActive: {
      true: {
        "&::before": {
          width: "110%",
          transform: "rotate(45deg)",
          top: "45%",
        },
        "&::after": {
          width: "110%",
          top: "45%",
          transform: "rotate(-45deg)",
        },
      },
    },
  },
});

export const MiddleLine = styled<BurgerProps>("div", {
  width: "100%",
  height: "2px",
  backgroundColor: "$headerBackground",
  borderRadius: "9999px",
  transition: "$default",

  variants: {
    isActive: {
      true: {
        display: "none",
      },
    },
  },
});
