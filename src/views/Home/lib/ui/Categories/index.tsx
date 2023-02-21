import React, { FC } from "react";

import { media } from "@/shared/lib/styles";
import { useMedia } from "react-use";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import * as S from "./style";
import "swiper/css";
import { dataCategories } from "./data";

export const Categories: FC = () => {
  const isTablet = useMedia(media.fromWideTablet, false);

  return (
    <div>
      {isTablet ? null : (
        <S.SwiperCategories className="mySwiper" slidesPerView={4}>
          {dataCategories.map((item) => (
            <SwiperSlide key={item.id}>
              <S.CategoryItem href={item.href}>
                <Image src={item.img} width="30" height="30" alt={item.title} />
                <S.Title>{item.title}</S.Title>
              </S.CategoryItem>
            </SwiperSlide>
          ))}
        </S.SwiperCategories>
      )}
    </div>
  );
};
