import { FC } from "react";
import { HeaderDesktop } from "@/widgets/Header/media/desktop";

import { setupGlobalStyles } from "@/shared/lib/styles";
import * as S from "./style";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return (
    <>
      <HeaderDesktop />
      <S.Main>{children}</S.Main>
    </>
  );
};
