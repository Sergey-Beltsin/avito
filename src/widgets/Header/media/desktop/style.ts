import { Button } from "@/shared/ui/atoms/Button/style";
import { styled } from "@stitches/react";
import Link from "next/link";
import { ButtonProps } from "@storybook/components";

export const Container = styled("div", {
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 16px",
  margin: "0 auto",
  alignItems: "center",
});
export const HeaderWrapper = styled("header", {
  width: "100vw",
  backgroundColor: "$headerBackground",
});

export const Navigation = styled("nav", {
  padding: "12px 0",
  display: "flex",
});

export const UserActions = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const HeaderItem = styled(Link, {
  color: "$textWhite",
  marginLeft: "22px",

  "&:first-child": {
    marginLeft: "0",
  },
});

export const UserActionLink = styled(HeaderItem, {
  display: "block",
  marginLeft: "0",
  padding: "0 20px",
  margin: "auto",
});

export const WrapperActionButton = styled("div", {
  minWidth: "186px",
});

export const ButtonAction = styled(Button, {
  padding: "0 14px",
});
