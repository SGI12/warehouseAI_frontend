'use client'

import styled, { keyframes } from "styled-components"

const slideInUp = keyframes`

  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`

const slideOutDown = keyframes`

  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 150%, 0);
    visibility: none;
  }

`
export const DefaultPopUp = styled.div`

&.open {
  animation: ${slideInUp} 0.5s;
}

&.close {
  animation: ${slideOutDown} 0.5s;
}

border-radius: 20px;
display: flex;
background-color: #ffffff;
align-items: center;
text-align: center;
flex-direction: column;
gap: 24px;
position: absolute;
left: 50%;
top: 50%;
margin:-257px 0 0 -315px;

width: 630px;
padding: 100px 108px;

`