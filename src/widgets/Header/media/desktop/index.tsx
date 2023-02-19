import React, { FC } from "react";
import { HeartForLikes } from "@/shared/ui/atoms/HeartForLikes";
import * as S from "./style";
import { Button } from "@/shared/ui";
import { ButtonAction, UserActionLink } from "./style";

export const HeaderDesktop: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Navigation>
          <S.HeaderItem href="/">Для бизнеса</S.HeaderItem>
          <S.HeaderItem href="/">Помощь</S.HeaderItem>
          <S.HeaderItem href="/">Каталоги</S.HeaderItem>
        </S.Navigation>
        <S.UserActions>
          <HeartForLikes size="medium" />
          <S.UserActionLink href="/">Вход и регистрация</S.UserActionLink>
          <S.WrapperActionButton>
            <ButtonAction type="button" size="medium" form="oval" theme="blue">
              Разместите Объявление
            </ButtonAction>
          </S.WrapperActionButton>
        </S.UserActions>
      </S.Container>
    </S.HeaderWrapper>
  );
};
