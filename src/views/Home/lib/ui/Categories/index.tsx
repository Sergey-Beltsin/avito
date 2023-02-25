import React, { FC } from "react";

import { media } from "@/shared/lib/styles";
import { useMedia } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import * as S from "./style";
import "swiper/css";
import { dataCategories } from "./data";

export const Categories: FC = () => {
  const isTablet = useMedia(media.fromWideTablet, false);

  return (
    <div>
      {isTablet ? null : (
        <S.SwiperContainer>
          <Swiper slidesPerView={2} className="mySwiper" effect="slide" breakpoints={{
            560: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 5
            }
          }}>
            {dataCategories.map((item) => (
              <SwiperSlide key={item.id}>
                <S.CategoryItem href={item.href}>
                  <Image src={item.img} width="30" height="30" alt={item.title} />
                  <S.Title>{item.title}</S.Title>
                </S.CategoryItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperContainer>
      )}
    </div>
  );
};
