'use client'
import styled from "styled-components"
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({
    subsets: ['cyrillic'],
    weight: '300'
})
export const FooterContainer = styled.div.attrs({

    className: opensans.className,

})`
z-index: 99;
width: auto;
height: 284px;
background: linear-gradient(0deg, rgba(230, 76, 143, 0.38) 0%, rgba(230, 104, 76, 0.15) 44.79%, rgba(230, 76, 143, 0.00) 100%);
display: flex;
justify-content: space-between;
margin:0 -80px;
padding: 0 80px;

font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
flex-direction: column;
`


export const MenuFooter = styled.div`
display: flex;
width: 602px;
z-index: 99;
gap: 130px;
flex: 1;
`
export const Logo = styled.div`

margin-right: 107px;
`
export const SociaL = styled.div`
display: flex;
z-index: 99;
`
export const ChildBlok = styled.div`
margin-right: 20px;
`
export const FooterPoint = styled.div`
margin-bottom:15px;

`
export const UpBlock = styled.div`
display: flex;
justify-content: space-between;
`
export const DownBlock = styled.div`
z-index: 99;
color: white;
display: flex;
justify-content: space-between;
margin-bottom: 50px;
`
export const PrivacyPolicy = styled.div`

`
export const PrivacyOPD = styled.div`

`

export const Block = styled.div`
color: white;
display: flex;
flex-direction: column;
`