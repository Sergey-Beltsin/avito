import React, { FC } from "react";
import Image from "next/image";
import { LogoProps } from "./types";
import * as S from "./style";

export const Logo: FC<LogoProps> = ({ size }) => (
  <S.WrapperLogo>
    {size === "large" ? (
      <Image src="/image/Logo/largeLogo.png" width="109" height="30" alt="Логотип Авито" />
    ) : (
      <Image src="/image/Logo/smallLogo.png" width="16" height="16" alt="Логотип Авито" />
    )}
  </S.WrapperLogo>
);
