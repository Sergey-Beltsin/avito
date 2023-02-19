import React, { FC } from "react";
import Image from "next/image";
import { LogoProps } from "./types";

export const Logo: FC<LogoProps> = ({ size }) => (
  <>
    {size === "large" ? (
      <Image src="/image/Logo/largeLogo.png" width="109" height="30" alt="Логотип Авито" />
    ) : (
      <Image src="/image/Logo/smallLogo.png" width="16" height="16" alt="Логотип Авито" />
    )}
  </>
);
