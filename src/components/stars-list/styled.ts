'use client'
import styled from "styled-components";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({
    subsets: ['cyrillic'],
    weight: '300'
})
export const ListWithStars = styled.ul.attrs({

    className: opensans.className,

})`

position: absolute;
left: 20%;
top: 40px;
max-width: 292px;
color: #ffffff;
font-size: 16px;
font-style: normal;
line-height: 150%;


&>li {
    margin-bottom: 20px;

}

`

export const ListStarMarker = styled.span`
display: inline-block;
background-image: url('/list-stars-bullet.svg');
width: 21px;
height: 25px;
background-repeat: no-repeat;

`

