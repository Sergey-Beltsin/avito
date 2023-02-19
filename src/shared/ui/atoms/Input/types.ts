import { ReactNode } from "react";

export interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  name: string;
  type: "text" | "tel" | "password";
  onChange?: () => void;
  disabled?: boolean;
  size?: "large" | "medium" | "small";
  theme?: "gray" | "whiteBlue";
}
