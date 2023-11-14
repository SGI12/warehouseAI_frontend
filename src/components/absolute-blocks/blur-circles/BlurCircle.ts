'use client'
import styled from "styled-components";


export const BlurDragonImg = styled.div`

position: absolute;
z-index: 1;
right: 150px;
width: 819.746px;
height: 340.343px;
background: url('dragon-blur-circle.png');
border-radius: 2px;
filter: blur(153px);
background-repeat: no-repeat;


`

export const BluredOrangeCircleMainPageLeft=styled.div`

position: absolute;
top: 1100px;
right: 75%;
z-index: 0;
width: 544.585px;
height: 505.707px;
background: url('wave.jpg');
border-radius: 2px;
background-repeat: no-repeat;
border-radius: 504px;
transform: rotate(-39.577deg);
background-position: center;
filter: blur(150px);
`


export const BluredOrangeCircleMainPageRight=styled.div`

position: absolute;
top: 1900px;
right: 0;
z-index: 0;
width: 401px;
height: 354px;
background: url('top-ai-main-page-right.jpg');
border-radius: 2px;
background-repeat: no-repeat;
border-radius: 504px;
transform: rotate(-39.577deg);
background-position: center;
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