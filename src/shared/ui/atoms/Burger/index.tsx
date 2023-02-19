import React, { FC } from "react";
import { BurgerProps } from "./types";
import * as S from "./style";

export const Burger: FC<BurgerProps> = ({ onCLick, isActive, size = "small" }) => {
  return (
    <S.Burger onClick={onCLick} isActive={isActive} size={size}>
      <S.MiddleLine isActive={isActive} />
    </S.Burger>
  );
};
