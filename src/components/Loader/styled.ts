'user client'

import Image from "next/image"
import styled from "styled-components"
import { H1Styled } from "../headers-text/HeaderText"



export const LoaderSpinner = styled(Image)`

margin-bottom: 100px;

`

export const LoaderText = styled(H1Styled)`


font-size: 94px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 112.8px */
color: white;

`