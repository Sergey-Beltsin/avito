import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode | string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button";
  size?: "large" | "medium" | "small";
  radius?: "none" | "medium";
  theme?: "blue" | "green" | "gray" | "violet";
  onClick?: () => void;
}
