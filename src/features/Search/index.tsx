import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Input } from "@/shared/ui";
import { SearchTypes } from "./types";
import * as S from "./style";

export const Search: FC = () => {
  const { t } = useTranslation("common");

  const { register, handleSubmit } = useForm<SearchTypes>();
  const onSubmit: SubmitHandler<SearchTypes> = () => {};

  return (
    <S.FormSearch onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register("userSearch")}
        theme="whiteBlue"
        placeholder={t("SearchInAllRegions")}
        size="large"
      />
      <S.SearchButton type="submit" size="medium" theme="blue" radius="medium">
        {t("Search")}
      </S.SearchButton>
    </S.FormSearch>
  );
};
