'use client'

import styled from "styled-components"

interface IBgProps {
    background: string
}
export const AiDescriptionBg = styled.div<IBgProps>`

position: absolute;
z-index: 0;
width: 100vw;
height: 100%;
background: ${props => `linear-gradient(0deg, #242424 15.54%, rgba(36, 36, 36, 0.00) 100%), url(${props.background}) `};
background-repeat: no-repeat;
background-size: 100%;

`

export const UseAiPageBg = styled(AiDescriptionBg)`
background: ${props => `linear-gradient(0deg, #1A1A1A 15.54%, rgba(26, 26, 26, 0.00) 100%), url(${props.background})`};
background-position: center;
height: 637px;
background-size: 100%;
z-index: 0;



`