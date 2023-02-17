import React, { FC } from "react";
import { HeartForLikes } from "@/shared/ui/atoms/HeartForLikes";
import * as S from "./style";

export const HeaderDesktop: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Navigation>
        <S.HeaderItem href={"/"}>Для бизнеса</S.HeaderItem>
        <S.HeaderItem href={"/"}>Помощь</S.HeaderItem>
        <S.HeaderItem href={"/"}>Каталоги</S.HeaderItem>
      </S.Navigation>
      <S.UserActions>
        <HeartForLikes />
      </S.UserActions>
    </S.HeaderWrapper>
  );
};
