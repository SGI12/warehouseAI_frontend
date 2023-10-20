import { H1Styled } from "@/components/headers-text/HeaderText";
import styled from "styled-components";

export const AiCreateContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const AiCreateHeader = styled(H1Styled)`

padding-top: 100px;

`
export const TypeChooseContainer = styled.div`

padding: 64px 80px 0px 80px;
width: 70%;
height: 472px;
margin-bottom: 64px;
`

export const TypeChooseInput = styled.div`

width: 100%;
border-radius: 30px;
border: 1px solid var(--accent, #E64C8F);
height: 100%;
`