import { FC } from "react";
import { ButtonProps } from "./types";
import * as S from "./style";

export const Button: FC<ButtonProps> = ({ children, theme = "default", ...props }) => (
  <S.Button theme={theme} {...props}>
    {children}
  </S.Button>
);
