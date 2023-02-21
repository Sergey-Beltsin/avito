import React, { FC, useState } from "react";
import { Burger, Button, Logo, SidebarMobile } from "@/shared/ui";
import { Input } from "@/shared/ui/atoms/Input";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import * as S from "./style";

export const HeaderMobile: FC = () => {
  const { t } = useTranslation("common");

  const [openSidebar, setOpenSidebar] = useState(false);

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.NavigationWrapper>
          <S.WrapperBurger>
            <Burger size="small" theme="light" onCLick={() => setOpenSidebar((prev) => !prev)} isActive={openSidebar} />
          </S.WrapperBurger>
          <Input type="text" name="search" size="medium" placeholder={t("SearchInAllRegions")} theme="gray">
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
        <S.Categories />
      </S.HeaderContainer>
      <SidebarMobile isOpened={openSidebar} handleClose={closeSidebar} />
    </S.HeaderWrapper>
  );
};
