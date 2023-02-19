import { styled } from "@stitches/react";

export const InputWrapper = styled("label", {
  transition: "$default",
  display: "flex",
  alignItems: "center",
  width: "100%",
  fontFamily: "$mulish",

  variants: {
    theme: {
      gray: {
        backgroundColor: "$gray",
        borderRadius: "6px",
      },
      whiteBlue: {
        backgroundColor: "inherit",
        border: "1px solid $accent",
        borderRadius: "3px",
      },
    },
    size: {
      large: {
        height: "40px",
        padding: "0 6px",
      },
      medium: {
        height: "36px",
        padding: "0 4px",
      },
      small: {
        height: "30px",
        padding: "0 4px",
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: ".5",
        disabled: true,
        readonly: true,
      },
    },
  },
});

export const Input = styled("input", {
  width: "100%",
  border: "none",
  background: "inherit",
  font: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  cursor: "inherit",
  outline: "none",
});
