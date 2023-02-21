import { styled } from "@/shared/lib/styles";
import { Button } from "@/shared/ui/atoms/Button/style";
import { Burger } from "@/shared/ui/atoms/Burger/style";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const WrapperLogo = styled("div", {
  marginRight: "24px",
});

export const WrapperButton = styled("div", {
  marginRight: "10px",
});

export const ButtonAllCategories = styled(Button, {
  padding: "8px 16px 10px 12px",
});

export const LeftContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const BurgerAllCategories = styled(Burger, {
  marginRight: "10px",
});
