import { Open_Sans } from "next/font/google";
import styled from "styled-components";

const opensans = Open_Sans({
    subsets: ['cyrillic'],
})

export const FilterElement = styled.div.attrs({
    className: opensans.className
})`

border-radius: 8px;
text-transform: lowercase;
padding: 8px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
cursor: pointer;
&:hover {
    border-radius: 8px;
    color: #E64C8F

}
&.active {
    
    background: var(--pale-pink, #FFB8D7);
    
}
`