'use client'
import styled from "styled-components";
import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({
    subsets: ['cyrillic'],
})

export const ButtonStyled = styled.button.attrs({
    className: opensans.className
})` 
    overflow: hidden;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    width: 408px;
    padding: 14px 110px;
    background: var(--accent, #E64C8F);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: var(--white, #FFF);
    border-radius: 30px;
    border: none;
    cursor: pointer;
    &:hover {
        background: #F467A4;

    }

    &:active {
        background: #C83575;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const ButtonShortStyled = styled(ButtonStyled)`
    padding: 10px 30px;
    width: 100%;
    min-width: 190px;
    background-color: #ffffff;
    color: var(--accent, #E64C8F);
    border: 1px solid var(--accent, #E64C8F);
    &:hover {
            background: #FFE1EE;
        }
    &.active {
        background: var(--accent, #E64C8F);
        border: none;
        color: #ffffff      
    }

    &:active {
        color: #ffffff;
        background: #C83575;
    }
`

export const AuthButtonHomePage = styled(ButtonStyled)`

padding: 10px 28px;
border-radius: 30px;
background: var(--accent, #E64C8F);
box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
width: 113px;
height: 45px;

`

export const AddAiButton = styled(ButtonStyled)`

box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
padding: 14px 30px;

`
export const GetNeuralButton = styled(ButtonStyled)`

box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
width: 286px;
height: 53px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 140%;
padding: 0px 0px;
display: flex;
align-items: center;
justify-content: center;
gap: 14px;
`

export const AiCardButton = styled(GetNeuralButton)`



font-weight: 400;
width: 353px;
height: 49px;
padding: 12px 91px;

`
export const ShadowButton = styled(ButtonStyled)`

box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
width: 218px;

`

export const ProfileBigButton = styled.button.attrs({
    className: opensans.className
})`

width: 413px;
height: 170px;
border-radius: 20px;
border: 1px solid var(--accent, #E64C8F);
color: var(--accent, #E64C8F);
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 130%;
background-color: transparent;
cursor: pointer;

&:hover {
    background: #2E2227;
}

&:active {
    background: var(--accent, #E64C8F);
    color: #ffffff;
}

&:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
` 



export const FilterButton = styled(ButtonStyled)`

max-width: 141px;
padding: 14px 20px;
background-color: transparent;
border: 1px solid  #E64C8F;
color: #E64C8F;

&:hover {
    background: #2E2227;
}

&.pressed {
    background: #E64C8F;
    color: #ffffff
}
`

export const AiRemoveButton = styled(ButtonShortStyled)`

align-self: center;
margin-top: 12px;

`

export const ProfileButtonStyled = styled(GetNeuralButton)`

padding: 0;

`

export const ButtonDarkStyled = styled(ButtonStyled)`

background-color: transparent;
border: 1px solid var(--accent, #E64C8F);
color: #E64C8F;

&:hover {
    background: #2E2227;
}

&.active {
    color: #ffffff;
    background: var(--accent, #E64C8F);
}
`