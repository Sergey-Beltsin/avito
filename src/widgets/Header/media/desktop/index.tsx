import React, { FC } from "react";
import { HeartForLikes } from "@/shared/ui/atoms/HeartForLikes";
import useTranslation from "next-translate/useTranslation";
import * as S from "./style";

export const HeaderDesktop: FC = () => {
  const { t } = useTranslation("common");

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Navigation>
          <S.HeaderItem href="/">{t("ForBusiness")}</S.HeaderItem>
          <S.HeaderItem href="/">{t("Help")}</S.HeaderItem>
          <S.HeaderItem href="/">{t("Catalogs")}</S.HeaderItem>
        </S.Navigation>
        <S.UserActions>
          <HeartForLikes size="medium" />
          <S.UserActionLink href="/">{t("LoginAndRegistration")}</S.UserActionLink>
          <S.WrapperActionButton>
            <S.ButtonAction type="button" size="small" radius="medium" theme="blue">
              {t("PlaceAnAd")}
            </S.ButtonAction>
          </S.WrapperActionButton>
        </S.UserActions>
      </S.Container>
    </S.HeaderWrapper>
  );
};
