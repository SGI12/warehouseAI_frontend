'use client'
import styled from "styled-components";

export const BriefCard = styled.div`

width: 413px;
height: 241px;
border-radius: 10px;
background: rgba(95, 95, 95, 0.46);
backdrop-filter: blur(5px);
position: absolute;

`

export const BriefCardMainPage = styled(BriefCard)`
    z-index: 3;
    right: 80px;
    top: 550px;
    bottom: 0;

`