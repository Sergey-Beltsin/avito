import React, { FC } from "react";
import { InputProps } from "./types";
import * as S from "./style";

export const Input: FC<InputProps> = ({ children, name, type, placeholder, size, theme, disabled }) => (
  <S.InputWrapper disabled={disabled} size={size} theme={theme}>
    {children}
    <S.Input name={name} placeholder={placeholder} type={type} />
  </S.InputWrapper>
);
