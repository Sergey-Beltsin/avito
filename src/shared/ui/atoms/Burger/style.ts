import { styled } from "@/shared/lib/styles";

export const Burger = styled("span", {
  display: "flex",
  alignItems: "center",
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
    top: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  "&::after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  variants: {
    theme: {
      dark: {
        "&::after": {
          backgroundColor: "$white",
        },
        "&::before": {
          backgroundColor: "$white",
        },
      },
      light: {
        "&::after": {
          backgroundColor: "$headerBackground",
        },
        "&::before": {
          backgroundColor: "$headerBackground",
        },
      },
    },
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

export const MiddleLine = styled("span", {
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: "$headerBackground",
  borderRadius: "9999px",
  transition: "$default",

  variants: {
    theme: {
      light: {
        backgroundColor: "$headerBackground",
      },
      dark: {
        backgroundColor: "$white",
      },
    },
    size: {
      small: {
        width: "16px",
      },
      medium: {
        width: "20px",
      },
    },
    isActive: {
      true: {
        display: "none",
      },
    },
  },
});
