'use client'
import styled from "styled-components";
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({
    subsets: ['cyrillic'],
})

export const ButtonStyled = styled.button.attrs({
    className: opensans.className
})` 
    display: flex;
    justify-content: center;
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
`

export const ButtonShortStyled = styled(ButtonStyled)`
    padding: 10px 30px;
    width: 190px;
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
export const UseAIButton = styled(ButtonStyled)`

box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
width: 218px;

`