import { styled } from "@stitches/react";

export const Button = styled("button", {
  fontFamily: "$mulish",
  width: "100%",
  border: "none",
  outline: "none",
  display: "flex",
  backgroundColor: "inherit",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
    isLoading: {
      true: {},
    },
    size: {
      large: {
        height: "66px",
      },
      medium: {
        height: "40px",
      },
      small: {
        height: "30px",
      },
    },
    radius: {
      medium: {
        borderRadius: "6px",
      },
      none: {
        borderRadius: "0",
      },
    },
    theme: {
      blue: {
        backgroundColor: "$accent",
        color: "$textWhite",
      },
      green: {
        backgroundColor: "$green",
      },
      gray: {
        border: "1px solid $gray",
        backgroundColor: "inherit",
      },
      violet: {
        backgroundColor: "$violet",
      },
    },
  },
});
