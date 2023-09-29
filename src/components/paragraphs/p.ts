import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})

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