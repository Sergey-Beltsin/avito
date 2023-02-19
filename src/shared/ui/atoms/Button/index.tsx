import React, { FC } from "react";
import { ButtonProps } from "./types";
import * as S from "./style";

export const Button: FC<ButtonProps> = ({ children, type, size, disabled, onClick, radius, isLoading, theme }) => (
  <S.Button
    type={type}
    isLoading={isLoading}
    size={size}
    theme={theme}
    disabled={disabled}
    radius={radius}
    onClick={onClick}
  >
    {children}
  </S.Button>
);
