'use client'
import styled from "styled-components";
import { H1Styled } from "../headers-text/HeaderText";


export const AuthCardStyled = styled.div`

width: 522px;
min-height: 100vh;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;

`

export const H1StyledAuth = styled(H1Styled)`

padding: 172px 0px 64px 0px;

`

export const InputsContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
margin-bottom: 32px;

`

export const LinksContainer = styled.div`

    display: flex;
    gap: 16px;

    &.with-margin {
        margin-right: 45px;
    }

`