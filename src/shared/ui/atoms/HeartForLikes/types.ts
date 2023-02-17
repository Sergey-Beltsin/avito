import { SVGProps } from "react";

export interface HeartForLikesProps {
  size?: "small" | "medium" | SVGProps<SVGSVGElement>;
  onClick?: () => void;
  isClicked?: boolean;
  theme?: "gray" | "blue";
}
