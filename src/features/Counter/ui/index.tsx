import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import { Button } from "@/shared/ui";

import { handleDecrement, handleIncrement, useCounterStore } from "../model";

import * as S from "./style";

export const Counter: FC = () => {
  const counter = useCounterStore();
  const { t } = useTranslation("common");

  return (
    <S.Root>
      <Button onClick={handleDecrement}>{t("decrement")}</Button>
      {counter}
      <Button onClick={handleIncrement}>{t("increment")}</Button>
    </S.Root>
  );
};
