'use client'
import styled from "styled-components";
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({subsets: ['cyrillic']})

export const ButtonStyled = styled.button.attrs({
    className: opensans.className
})`
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

