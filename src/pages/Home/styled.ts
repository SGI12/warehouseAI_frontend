'use client'
import styled from "styled-components";

export const HomePageMainContainer = styled.div`

width: 100vw;
height: 100vw;
max-width: 1920px;
max-height: 1080px;

`

export const DragonBluredBlock = styled.div`

`
export const DragonImg = styled.div`

position: absolute;
right: 0;
z-index: 2;
width: 880px;
height: 650px;
background: url('dragon-img.png');
background-repeat: no-repeat;
`

export const BlurImg = styled.div`
position: absolute;
z-index: 1;
right: 15vw;
width: 719.746px;
height: 449.343px;
background: url('dragon-blur-circle.png');
border-radius: 2px;
filter: blur(133px);
background-repeat: no-repeat;


`