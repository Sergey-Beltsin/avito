import { FC } from "react";
import { Categories, HomeHeader } from "@/views/Home/lib/ui";
import * as S from "./style";

export const HomePage: FC = () => (
  <S.Root>
    <Categories />
    <HomeHeader />
  </S.Root>
);
