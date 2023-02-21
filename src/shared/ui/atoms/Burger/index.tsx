import React, { FC } from "react";
import { BurgerProps } from "./types";
import * as S from "./style";

export const Burger: FC<BurgerProps> = ({ onCLick, isActive, size = "small", theme = "dark" }) => (
  <S.Burger onClick={onCLick} isActive={isActive} size={size} theme={theme}>
    <S.MiddleLine isActive={isActive} theme={theme} size={size} />
  </S.Burger>
);
