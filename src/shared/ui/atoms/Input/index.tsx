import React, { FC } from "react";
import { InputProps } from "./types";
import * as S from "./style";

export const Input: FC<InputProps> = ({ children, name, type, placeholder, onChange, size, theme, disabled }) => (
  <S.InputWrapper disabled={disabled} size={size} theme={theme}>
    {children}
    <S.Input name={name} onChange={onChange} placeholder={placeholder} type={type} />
  </S.InputWrapper>
);
