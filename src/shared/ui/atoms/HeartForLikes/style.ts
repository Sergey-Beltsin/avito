import { styled } from "@stitches/react";
import { HeartForLikesProps } from "./types";

export const HeartIcons = styled<HeartForLikesProps>("div", {
  display: "flex",
  alignItems: "center",
});

export const SvgHeart = styled<HeartForLikesProps>("svg", {
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
