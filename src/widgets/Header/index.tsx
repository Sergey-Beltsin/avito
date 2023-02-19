import React, { FC } from "react";
import { useMedia } from "react-use";
import { media } from "@/shared/lib/styles";
import { HeaderDesktop, HeaderMobile } from "./media";

export const Header: FC = () => {
  const isDesktop = useMedia(media.fromWideTablet, false);

  return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
};
