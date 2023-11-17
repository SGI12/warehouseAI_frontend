'use client'
import { Open_Sans } from "next/font/google";
import styled from "styled-components";
import { SlideInDown, SlideOutUp } from "../animations/animations";



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
z-index: 0;
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
z-index: 0;
display: flex;
gap: 20px;
width: 100%;
overflow-x: hidden;
`

export const StarsContainer = styled.div`

z-index: 0;
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
export const AiDescriptionContainer = styled.div`


display: flex;
flex-direction: column;

`

export const UseAiContainer = styled.div`
z-index: 0;
display: flex;
padding-top: 118px;
margin-bottom: 154px;
`

export const BackLinkWhiteContainer = styled.div`

left: 10px;
top: 107px;
position: absolute;
z-index: 3;
padding-left: 80px;
padding-top: 47px;
cursor: pointer;
display: flex;
gap: 14px;

&:hover {
    filter: invert(37%) sepia(71%) saturate(1243%) hue-rotate(300deg) brightness(97%) contrast(85%);
}
`

export const BackLinkBlackContainer = styled.div`

left: 10px;
top: 107px;
position: absolute;
z-index: 3;
padding-left: 80px;
padding-top: 47px;
cursor: pointer;
display: flex;
gap: 14px;

&:active {
    filter: invert(37%) sepia(71%) saturate(1243%) hue-rotate(300deg) brightness(97%) contrast(85%);
}
`

export const AiBriefInfoContainer = styled.div`

padding-left: 80px;
display: flex;
flex-direction: column;

`

export const ButtonAndStatsContainer = styled.div`

padding-top: 28px;
gap: 32px;
display: flex;

`

export const AITagsContainer = styled.div`


align-items: flex-end;
padding-right: 80px;
margin-left: auto;
display: flex;
flex-direction: column;
gap: 14px;

`

export const AIDescTag = styled.div`


display: inline-block;
padding: 8px 14px;
border-radius: 30px;
border: 1px solid var(--white, #FFF);


`


export const LoaderContainer = styled.div`


background: var(--background, #242424) ;
position: absolute;
z-index: 3;
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
`

export const AiInfoAndDeveloperContaner = styled.div`

z-index: 0;
display: flex;
justify-content: space-between;
padding: 30px 80px;

`

export const AiInfo = styled.div`

max-width: 630px;
display: flex;
flex-direction: column;
gap: 40px;

`

export const PasswordRecoveryMainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #ffffff;

`

export const PassResetInputContainer = styled.div`

padding-top: 152px;
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
max-width: 510px;
text-align: center;

`

export const PopupMainContainer = styled.div`

z-index: 6;
background: rgba(0, 0, 0, 0.20);
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;

`

export const VerificationCodeContainer = styled.div`


display: flex;
gap: 20px;

`

export const UserProfileMainContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
`

export const UserProfileDataContainer = styled.div`
padding-left: 80px;
padding-right: 80px;
padding-top: 100px;
display: flex;
justify-content: flex-start;
`

export const UserNameAndButtonContainer = styled.div`

align-self: center;
padding-left: 128px;
display: flex;
flex-direction: column;
gap: 60px;

`

export const ProfileButtonsContainer = styled.div`

display: flex;
justify-content: space-between;
padding-left: 80px;
padding-right: 80px;
padding-top: 100px;

`

export const AiDeveloperInfoMainContainer = styled.div`

width: 413px;
border-radius: 20px;
border: 1px solid var(--accent, #E64C8F);
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
`

export const DeveloperPictureAndNickNameContainer = styled.div`

padding-top: 20px;
display: flex;
align-items: center;

gap: 38px;

`

export const UseAiPageMainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #1A1A1A;
`

export const UseAiTagsHorizontalContainer = styled.div`

margin-bottom: 32px;
gap: 14px;
display: flex;
justify-content: center;
margin-left: 0;
padding-top: 48px;
z-index: 0;
`

export const UseAiRequestContainer = styled.div`

justify-content: center;
align-items: center;
padding-top: 142px;
display: flex;
flex-direction: column;
gap: 48px;
z-index: 0;

`

export const AiRequestInputContainer = styled.div`

display: flex;
flex-direction: column;


`

export const FavoritesPageMainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`

export const SearchAndFilterContainer = styled.div`

width: 100%;
display: flex;
justify-content: space-between;
padding: 80px;
`

export const FilterMenuContainer = styled.div`

border-radius: 16px;
background: var(--white, #FFF);
box-shadow: 0px 6px 30px -8px rgba(255, 255, 255, 0.30);
display: flex;
flex-direction: column;
top: 47%;
z-index: 1;
position: absolute;
margin-top: 6px;
padding: 8px;


&.open {
    animation: ${SlideInDown} .3s ease-in-out;
}




`

export const FilterContainer = styled.div`

display: flex;
flex-direction: column;
`

export const FavoritesAiGrid = styled.div`



display: grid;
grid-template-columns: repeat(auto-fill, 413px);
row-gap: 30px;
column-gap: 20px;

`

export const FavoritesAIContainer = styled.div`

padding: 0px 80px;
width: 100vw;

`