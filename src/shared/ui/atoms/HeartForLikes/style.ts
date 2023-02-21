import { styled } from "@/shared/lib/styles";

export const HeartIcons = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const SvgHeart = styled("svg", {
  variants: {
    size: {
      medium: {
        width: "21px",
        height: "24px",
      },
      small: {
        width: "18px",
        height: "16px",
      },
    },
  },
});
