import { styled } from "@stitches/react";
import Link from "next/link";

export const HeaderWrapper = styled("header", {
  width: "100vw",
  backgroundColor: "$headerBackground",
});

export const Navigation = styled("nav", {});

export const UserActions = styled("div", {});

export const HeaderItem = styled(Link, {});
