'use client'
import styled from 'styled-components'

import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})


export const LinkNoStyles = styled(Link)`

text-decoration: none;

`

export const LinkStyled = styled.div.attrs({

    className: opensans.className,
})`

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 24px */
color: var(--accent, #E64C8F);
display: block;
text-decoration: none;

&:hover {
    text-decoration: underline;
    color: #F467A4;
}

&:active {
    color: #C83575;
}
`