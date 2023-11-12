'use client'
import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
import { Andika } from "next/font/google";
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})





export const InputStyled = styled.input.attrs(({ placeholder, type }) => ({
    placeholder:  placeholder || "E-mail",
    className: opensans.className,
    type: type || 'text',
    
  }))`

width: 408px;
height: 55px;
border-radius: 30px;
background: var(--inputs, #EDEDED);
border: none;
padding-left: 24px;

&::placeholder {
    color: var(--input-text, #AEAEAE);
}

&:focus {
    outline: none;
}

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%;

`

export const TaskSolveInput = styled(InputStyled)`

    width: 630px;
    height: 58px;
    border-radius: 100px;
    border: 1px solid var(--accent, #E64C8F);
    background: rgba(255, 184, 215, 0.08);
    backdrop-filter: blur(5px);
    caret-color: #ffffff;
    color: #ffffff;
    margin-bottom: 20px;
    &:focus {
        box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
    }

`
export const TypeChooseInput = styled.div`

width: 100%;
border-radius: 30px;
border: 1px solid var(--accent, #E64C8F);
height: 100%;
`

export const VerificationCodeInput = styled(InputStyled)`

height: 138px;
width: 415px;
font-size: 40px;
text-align: center;
padding-left: 0px;

`

export const LoadFileInput = styled.input`


display: none;
`