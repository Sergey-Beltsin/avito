import { styled } from "@/shared/lib/styles";
import { Swiper } from "swiper/react";
import Link from "next/link";

export const SwiperCategories = styled(Swiper, {});
export const CategoryItem = styled(Link, {
  fontFamily: "$mulish",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "13px",
  lineHeight: "16px",
  fontWeight: "$regular",
  height: "55px",

  "@fromTablet": {
    fontSize: "15px",
    lineHeight: "20px",
    height: "60px",
  },
});

export const Title = styled("h3", {
  textAlign: "center",
  fonSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  color: "$text",
});
