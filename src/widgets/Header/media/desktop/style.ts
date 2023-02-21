import { Button } from "@/shared/ui/atoms/Button/style";
import { styled } from "@/shared/lib/styles";

import Link from "next/link";

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
  fontSize: "14px",
  lineHeight: "20px",

  "&:first-child": {
    marginLeft: "0",
  },

  "&:hover": {
    color: "$red",
  },
});

export const UserActionLink = styled(HeaderItem, {
  display: "block",
  marginLeft: "0",
  padding: "0 20px",
  margin: "auto",

  "&:hover": {
    color: "$textWhite",
  },
});

export const WrapperActionButton = styled("div", {
  minWidth: "186px",
});

export const ButtonAction = styled(Button, {
  padding: "0 14px",
  fontSize: "14px",
  lineHeight: "20px",

  "&:hover": {
    opacity: "0.9",
  },
});
