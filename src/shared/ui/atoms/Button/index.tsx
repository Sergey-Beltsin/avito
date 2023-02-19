import React, { FC } from "react";
import { ButtonProps } from "./types";
import * as S from "./style";

export const Button: FC<ButtonProps> = ({ children, type, size, disabled, onClick, form, isLoading, theme }) => {
  return (
    <S.Button
      type={type}
      isLoading={isLoading}
      size={size}
      theme={theme}
      disabled={disabled}
      form={form}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
