import { FC } from "react";
import { Counter } from "@/features/Counter";

import * as S from "./style";

export const HomePage: FC = () => (
  <S.Root>
    <S.Counter>
      <Counter />
    </S.Counter>
  </S.Root>
);
