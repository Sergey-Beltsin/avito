import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  padding: "6px 12px",

  backgroundColor: "$accent",
  border: "1px solid transparent",
  borderRadius: "$default",
  cursor: "pointer",

  color: "$white",

  transition: "$default",

  variants: {
    theme: {
      default: {},
      outline: {
        backgroundColor: "transparent",
        borderColor: "$border",

        color: "$text",
      },
    },
  },
});
