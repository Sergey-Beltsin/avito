import React, {FC, useEffect} from "react";
import useTranslation from "next-translate/useTranslation";
import * as S from "./style";
import { SidebarMobileProps } from "./types";
import { UserActions, UserHelperActions } from "./data";

export const SidebarMobile: FC<SidebarMobileProps> = ({ isOpened, handleClose }) => {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden")
  }, [isOpened])

  return (
    <S.SidebarOverlay isOpened={isOpened} onClick={handleClose}>
      <S.Sidebar isActive={isOpened} onClick={(e) => e.stopPropagation()}>
        <S.SidebarInnerWrapper>
          <S.UserWrapper>
            <S.UserPhotoWrapper>
              <S.UserPhoto src="/image/icons/NotUserImage.png" width="30" height="35" alt="Фото пользователя" />
            </S.UserPhotoWrapper>
            <S.LinkAuth href="/">{t("LoginOrRegister")}</S.LinkAuth>
          </S.UserWrapper>
          <S.UserActions>
            {UserActions.map((item) => (
              <S.UserActionsItem href={item.href} key={item.id}>
                <S.ImageIcons src={item.icon} alt={item.title} width="16" height="16" />
                {item.title}
              </S.UserActionsItem>
            ))}
          </S.UserActions>
          <S.UserHelperActions>
            {UserHelperActions.map((item) => (
              <S.UserHelperActionsItem href={item.href} key={item.id}>
                <S.ImageIcons src={item.icon} alt={item.title} width="16" height="16" />
                {item.title}
              </S.UserHelperActionsItem>
            ))}
          </S.UserHelperActions>
        </S.SidebarInnerWrapper>
      </S.Sidebar>
    </S.SidebarOverlay>
  );
};
