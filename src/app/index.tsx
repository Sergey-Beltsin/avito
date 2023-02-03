import { FC } from "react";

import { setupGlobalStyles } from "@/shared/lib/styles";
import * as S from "./style";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return <S.Main>{children}</S.Main>;
};
