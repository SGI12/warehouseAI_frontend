'use client'

import { Andika } from "next/font/google"
import styled from "styled-components"
const andika = Andika ({
    subsets: ['latin'],
    weight: "400"
})

export const CodeCell = styled.div.attrs({
    className: andika.className
})`

display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
height: 65px;
width: 55px;
border-radius: 15px;
border: 1px solid var(--inputs, #EDEDED);
background: var(--inputs, #EDEDED);


`