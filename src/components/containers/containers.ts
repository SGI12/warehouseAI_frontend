'use client'
import { Open_Sans } from "next/font/google";
import styled from "styled-components";

const opensans = Open_Sans({
    weight: '300',
    subsets: ['latin']
})
export const HomePageMainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
max-width: 100vw;
`

export const HeadersMainPageContainer = styled.div`
z-index: 3;
align-self: flex-start;
max-width: 630px;
box-sizing: content-box;
display: flex;
padding-top: 238px;
flex-direction: column;
padding-left: 80px;

`


export const AiSliderContainer = styled.div`
padding-top: 64px;
z-index: 1;
display: flex;
gap: 20px;
width: 100%;
overflow-x: hidden;
`

export const StarsContainer = styled.div`

display: flex;
gap: 3px;
padding-top: 14px;
margin-bottom: 14px;
`

export const TagsContainer = styled.div.attrs({

    className: opensans.className

})`

display: flex;
gap: 15px;
margin-bottom: 30px;
`

export const AuthMainContainer = styled.div`
    background: url('./auth_bg.jpg') no-repeat;
    background-size: 100% 100%; 
    display: flex;
    justify-content: space-around;
`


export const RegistrationMainContainer = styled(AuthMainContainer)`

background: url('./register_bg.jpg') no-repeat;
background-size: 100% 100%;
`

export const AiCreateContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const TypeChooseContainer = styled.div`

padding: 64px 80px 0px 80px;
width: 70%;
height: 472px;
margin-bottom: 64px;
`