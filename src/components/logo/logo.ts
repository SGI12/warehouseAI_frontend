'use client'

import styled, { keyframes } from "styled-components"


const rotate360 = keyframes`

from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const LogoBig = styled.div`
    width: 197px;
    height: 197px;
    padding-top: 100px;
    padding-right: 25%;


`


export const LogoResetPassContainer = styled.div`

padding-top: 100px;

`
export const LogoResetPass = styled.div`


width: 120px;
height: 120px;
animation: ${rotate360} 5s linear infinite;

`
