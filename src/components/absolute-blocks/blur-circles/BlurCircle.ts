'use client'
import styled from "styled-components";
import Image from "next/image";

export const BlurDragonImg = styled(Image)`

position: absolute;
z-index: 1;
right: 150px;

border-radius: 2px;
filter: blur(153px);

`

export const BluredOrangeCircleMainPageLeft=styled(Image)`

position: absolute;
top: 1100px;
right: 75%;
z-index: 0;


border-radius: 2px;
border-radius: 504px;
transform: rotate(-39.577deg);

filter: blur(150px);
`


export const BluredOrangeCircleMainPageRight=styled(Image)`

position: absolute;
top: 1900px;
right: 0;
z-index: 0;

border-radius: 2px;

border-radius: 504px;
transform: rotate(-39.577deg);

filter: blur(200px);
`

export const AiRequestCircle = styled.div`

z-index: -1;

position: absolute;
width: 1044.585px;
height: 486.109px;
border-radius: 504px;
transform: rotate(9.577deg);
background: url('/wave.jpg'), no-repeat lightgray 50% / cover  ;
background-position: center;
background-size: 100% auto;
transform: scaleX(-1);
filter: blur(150px);
`