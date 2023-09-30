import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})



export const InputStyled = styled.input.attrs(({ placeholder, type }) => ({
    placeholder:  placeholder || "E-mail",
    className: opensans.className,
    type: type || 'email',
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

