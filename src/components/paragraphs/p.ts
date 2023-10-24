'use client'
import styled from 'styled-components'
import { Andika, Open_Sans } from 'next/font/google'
const opensans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: '400'
})

const andika = Andika({
    subsets:['latin'],
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
export const SubHeaderPink = styled(TextDefaultStyled)`

font-size: 18px;
color: var(--pale-pink, #FFB8D7);
font-style: normal;
font-weight: 400;
line-height: 120%; /* 21.6px */
margin-bottom: 10px;
`


export const AiCardHeader = styled(TextDefaultStyled).attrs({
    className: andika.className
})`
padding-top: 20px;
color: var(--text-dark, #242424);
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 42px */

`