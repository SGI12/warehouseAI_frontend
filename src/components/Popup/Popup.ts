'use client'

import styled from "styled-components"
import { slideInUp, slideOutDown } from "../animations/animations"


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


width: 630px;
padding: 100px 108px;

`