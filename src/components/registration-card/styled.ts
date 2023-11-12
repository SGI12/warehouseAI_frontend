'use client'
import styled from "styled-components"
import { AuthCardStyled } from "../auth-card/styled"
import { H2Styled } from "../headers-text/HeaderText"
import { SubHeaderStyled } from "../paragraphs/Paragraphs"

export const RegistrationCardStyled = styled(AuthCardStyled)``


export const H2StyledRegister= styled(H2Styled)`
    padding: 52px 0px 64px 0px;
`

export const SubHeaderStyledRegistration = styled(SubHeaderStyled)`
    align-self: flex-start;

`

export const ButtonContainer = styled.div`

    display: flex;
    max-width: 408px;
    gap: 40px;
    justify-content: center;
    
`