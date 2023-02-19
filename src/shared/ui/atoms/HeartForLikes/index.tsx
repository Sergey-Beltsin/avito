import React, { FC } from "react";
import { HeartForLikesProps } from "./types";
import * as S from "./style";

export const HeartForLikes: FC<HeartForLikesProps> = ({ theme = "gray", size = "small", onClick, isClicked }) => {
  return (
    <S.HeartIcons onClick={onClick}>
      {theme === "gray" ? (
        <S.SvgHeart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" size={size}>
          <path
            d="M10.918 5.085a5.256 5.256 0 0 1 7.524 0c2.077 2.114 2.077 5.541 0 7.655l-7.405 7.534a.75.75 0 0 1-1.074 0L2.558 12.74c-2.077-2.114-2.077-5.54 0-7.655a5.256 5.256 0 0 1 7.524 0c.15.152.289.312.418.479.13-.167.269-.327.418-.479z"
            fill="#CCC"
          />
        </S.SvgHeart>
      ) : null}
      {theme === "blue" ? (
        <S.SvgHeart size={size} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isClicked === true ? (
            <path
              d="M9 1.866A4.791 4.791 0 005.2 0C2.348 0 0 2.348 0 5.2c0 1.466.606 2.82 1.493 3.707l6.8 6.8a1 1 0 001.414 0l6.8-6.8a.99.99 0 00.046-.049C17.37 7.924 18 6.7 18 5.2 18 2.348 15.652 0 12.8 0 11.253 0 9.878.73 9 1.866z"
              fill="#F71B47"
            />
          ) : (
            <path
              d="M8.293 15.707a1 1 0 001.414 0l6.8-6.8C17.394 8.02 18 6.666 18 5.2 18 2.348 15.652 0 12.8 0c-1.476 0-2.795.615-3.77 1.612L9 1.581l-.03.031C7.996.615 6.676 0 5.2 0 2.348 0 0 2.348 0 5.2c0 1.466.606 2.82 1.493 3.707l6.8 6.8zM9 4.3a1 1 0 01-.868-.504C7.49 2.672 6.402 2 5.2 2 3.452 2 2 3.452 2 5.2c0 .934.394 1.78.907 2.293L9 13.586l6.093-6.093C15.606 6.98 16 6.134 16 5.2 16 3.452 14.548 2 12.8 2c-1.202 0-2.29.672-2.932 1.796A1 1 0 019 4.3z"
              fill="#0AF"
            />
          )}
        </S.SvgHeart>
      ) : null}
    </S.HeartIcons>
  );
};
