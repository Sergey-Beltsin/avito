import React, { FC } from "react";
import { Burger, Button, Logo } from "@/shared/ui";
import { Input } from "@/shared/ui/atoms/Input";
import Image from "next/image";
import * as S from "./style";

export const HeaderMobile: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.NavigationWrapper>
          <S.WrapperBurger>
            <Burger size="small" />
          </S.WrapperBurger>
          <Input type="text" name="search" size="medium" placeholder="Поиск во всех регионах" theme="gray">
            <S.WrapperLogo>
              <Logo size="small" />
            </S.WrapperLogo>
          </Input>
          <S.ButtonWrapper>
            <Button>
              <Image src="/image/icons/filter.png" alt="Фильтры" width="16" height="16" />
            </Button>
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <Image src="/image/icons/cart.png" alt="Фильтры" width="16" height="16" />
          </S.ButtonWrapper>
        </S.NavigationWrapper>
        <S.Categories></S.Categories>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};
