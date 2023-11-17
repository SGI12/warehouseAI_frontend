'use client'
import styled from "styled-components"
import { Open_Sans } from "next/font/google";
import { TextDefaultStyled } from "../paragraphs/Paragraphs";
const opensans = Open_Sans({
    subsets: ['cyrillic'],
    weight: '300'
})
export const FooterContainer = styled.div.attrs({

    className: opensans.className,

})`

width: 100%;
background: linear-gradient(0deg, rgba(230, 76, 143, 0.38) 0%, rgba(230, 104, 76, 0.15) 44.79%, rgba(230, 76, 143, 0.00) 62%);
display: flex;
justify-content: space-between;
flex-direction: column;
padding-top: 168px;
box-sizing: content-box;
height: 284px;
`


export const MenuFooter = styled.div`
display: flex;
width: 602px;
gap: 130px;
flex: 1;
`
export const Logo = styled.div`

margin-right: 197px;
`
export const SociaL = styled.div`
display: flex;

`
export const ChildBlok = styled.div`
margin-right: 20px;
`
export const FooterPoint = styled.div`
margin-bottom:15px;

`

export const BorderFooter = styled.div`
width: calc(100vw - 165px);
box-sizing: border-box;
border-top: 2px solid #E64C8F;
height: 1px;
align-self: center;
`
export const UpBlock = styled.div`

display: flex;
justify-content: space-between;
padding: 50px 80px;

`
export const DownBlock = styled.div`
padding: 0px 80px;
display: flex;
justify-content: space-between;
margin-bottom: 50px;
`

export const Block = styled.div`
color: white;
display: flex;
gap: 15px;
flex-direction: column;
`

export const Policy = styled(TextDefaultStyled)`

&.inactive {
    opacity: 0.5;
    cursor: not-allowed;
}
cursor: pointer;
color: var(--pale-pink, #FFB8D7);
&:hover {
    text-decoration: underline;
}

`