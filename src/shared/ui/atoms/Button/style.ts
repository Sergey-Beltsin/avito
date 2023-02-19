import { styled } from "@stitches/react";
import { ButtonProps } from "./types";

export const Button = styled<ButtonProps>("button", {
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
      cursor: "not-allowed",
      opacity: "0.5",
    },
    isLoading: {},
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
    form: {
      oval: {
        borderRadius: "6px",
      },
      rectangle: {
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
