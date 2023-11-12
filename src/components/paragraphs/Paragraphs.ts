'use client'
import styled, { keyframes } from 'styled-components'
import { Andika, Open_Sans } from 'next/font/google'
const opensans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: '400'
})

const andika = Andika({
    subsets:['latin'],
    weight: '400'
})


const horizontalShaking = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
` 
export const TextDefaultStyled = styled.p.attrs({

    className: opensans.className,

})`

color: ${props => props.color  ?  props.color : '#242424' };
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 

`

export const SubHeaderStyled = styled.p.attrs({
    className: opensans.className
})`
    color: ${props => props.color  ?  props.color : '#242424' };
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    

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

export const BackLinkText = styled(TextDefaultStyled)`

color: ${props => props.color  ?  props.color : '#ffffff' };
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 120%;

&:hover {
    text-decoration: underline;
}


&:active {
    color: var(--accent, #E64C8F);
}
`

export const TextLargeStyled = styled(TextDefaultStyled)`


font-size: 16px;

`

export const TextSmallStyled = styled(TextDefaultStyled)`

font-size: 14px;
`

export const InputErrorText = styled.p.attrs({
    className: opensans.className
})`

&.animated {
    animation: ${horizontalShaking} 0.5s infinite;
}
align-self: flex-start;
color: #DB0F0F;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */

`