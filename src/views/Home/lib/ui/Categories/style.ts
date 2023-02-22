import { styled } from "@/shared/lib/styles";
import Link from "next/link";

export const SwiperContainer = styled("div", {
  width: "100%",

  "&.swiper-slide": {
    display: "flex",
    width: "auto",
    height: "auto",
    padding: "10px",
  },
});
export const CategoryItem = styled(Link, {
  fontFamily: "$mulish",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "13px",
  lineHeight: "16px",
  fontWeight: "$regular",

  "@fromTablet": {
    fontSize: "15px",
    lineHeight: "20px",
  },
});

export const Title = styled("h3", {
  textAlign: "center",
  fonSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  color: "$text",
  display: "block",
  marginTop: "10px",
});
