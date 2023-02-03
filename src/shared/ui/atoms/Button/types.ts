import { HTMLAttributes } from "react";

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> & {
  theme?: "default" | "outline";
  onClick?: () => void;
};
