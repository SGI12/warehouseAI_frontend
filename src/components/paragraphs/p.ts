'use client'
import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: '400'
})

export const TextDefaultStyled = styled.p.attrs({

    className: opensans.className,

})`

color: ${props => props.color  ?  props.color : '#242424' };
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
display: block;

`

export const SubHeaderStyled = styled.p.attrs({
    className: opensans.className
})`
    color: ${props => props.color  ?  props.color : '#242424' };
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    display: block;

`

