'use client'
import {styled, css} from "styled-components";
import { Andika } from "next/font/google";
const andika = Andika({
    subsets: ['cyrillic'],
    weight: "400"
})


const globalstyle = css`
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 
    letter-spacing: 2px;
`

export const H1Styled = styled.h1.attrs({
    className: andika.className

})`
color: ${props => props.color  ?  props.color : '#242424' };
${globalstyle}

`

export const H2Styled = styled.h2.attrs({
    className: andika.className

})`
color: ${props => props.color  ?  props.color : '#242424' };

${globalstyle}
font-size: 40px;


`

export const H3Styled = styled.h3.attrs({
    className: andika.className

})`
${props => props.color  ?  props.color : '#242424' };

${globalstyle}
font-size: 30px;
font-weight: 600;
`
export const H4Styled = styled.h4.attrs({
    className: andika.className

})`
${props => props.color  ?  props.color : '#242424' }

${globalstyle}
font-size: 24px;
font-weight: 600;
`
