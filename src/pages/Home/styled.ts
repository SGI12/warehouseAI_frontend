'use client'
import { BriefCard } from "@/components/brief-card/styled";
import { ButtonStyled } from "@/components/buttons/Button";
import { H1Styled } from "@/components/headers-text/HeaderText";
import { InputStyled } from "@/components/inputs/Input";
import { TextDefaultStyled } from "@/components/paragraphs/P";
import styled from "styled-components";

export const HomePageMainContainer = styled.div`

width: 100vw;
height: 100vw;
max-width: 100vw;
max-height: 100vh;
padding: 0px 80px;

`

export const DragonBluredBlock = styled.div`

`
export const DragonImg = styled.div`

position: absolute;
right: 0;
z-index: 2;
width: 880px;
height: 650px;
background: url('dragon-img.png');
background-repeat: no-repeat;
`

export const BlurImg = styled.div`
position: absolute;
z-index: 1;
right: 150px;
width: 819.746px;
height: 340.343px;
background: url('dragon-blur-circle.png');
border-radius: 2px;
filter: blur(153px);
background-repeat: no-repeat;


`

export const SubHeaderPink = styled(TextDefaultStyled)`

font-size: 18px;
color: var(--pale-pink, #FFB8D7);
font-style: normal;
font-weight: 400;
line-height: 120%; /* 21.6px */
margin-bottom: 10px;
`

export const HeadersMainPageContainer = styled.div`

max-width: 630px;
display: flex;
padding-top: 238px;
flex-direction: column;

`

export const H1MainPage = styled(H1Styled)`

margin-bottom: 42px;

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

export const GetNeuralButton = styled(ButtonStyled)`

box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
width: 286px;
height: 53px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 140%;
padding: 0px 0px;
display: flex;
align-items: center;
justify-content: center;
gap: 14px;
`

export const Arrow = styled.div`

background-image: url('/arrow-button.svg');
width: 16px;
height: 16px;

`

export const BriefCardMainPage = styled(BriefCard)`
    z-index: 3;
    right: 80px;
    top: 485px;
    bottom: 0;

`