import { Search } from "@/features";
import React, { FC } from "react";
import { useMedia } from "react-use";
import { media } from "@/shared/lib/styles";
import useTranslation from "next-translate/useTranslation";
import { Logo } from "@/shared/ui";
import * as S from "./style";

export const HomeHeader: FC = () => {
  const isTablet = useMedia(media.fromWideTablet, false);
  const { t } = useTranslation("common");

  return (
    <div>
      {isTablet ? (
        <S.Wrapper>
          <S.LeftContainer>
            <S.WrapperLogo>
              <Logo size="large" />
            </S.WrapperLogo>
            <S.WrapperButton>
              <S.ButtonAllCategories type="button" size="medium" theme="blue" radius="medium">
                <S.BurgerAllCategories size="medium" theme="dark" isActive />
                {t("AllCategories")}
              </S.ButtonAllCategories>
            </S.WrapperButton>
          </S.LeftContainer>
          <Search />
        </S.Wrapper>
      ) : null}
    </div>
  );
};
