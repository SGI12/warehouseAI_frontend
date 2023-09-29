import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})


export const LinkStyled = styled.a.attrs(({href}) => ({

    className: opensans.className,
    href: href || '#'
}))`

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