'use client'
import { Open_Sans } from "next/font/google"
const opensans = Open_Sans({subsets: ['cyrillic']})
import styled from "styled-components"

interface Attrs {
    placeholder?: string
  }


  
export const SearchField = styled.input.attrs(({ placeholder = 'Поиск' }: Attrs) => ({
    type: 'search',
    placeholder,
    name: 'searchfield',
    className: opensans.className
  }))`

width: 413px;
height: 44px;
border-radius: 100px;
background: rgba(95, 95, 95, 0.46);
backdrop-filter: blur(5px);
margin-right: 20px;
border: none;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%;
padding-left: 45px;
caret-color: var(--inputs, #EDEDED);
color: var(--inputs, #EDEDED);
background-image: url('/search-icon.svg');
background-position: 15px 12px; 
background-repeat: no-repeat;

&::-webkit-search-cancel-button {
    appearance: none;
}

&::placeholder {
    color: var(--inputs, #EDEDED);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
   
    
}

&:focus {
    outline: none;
}
`

export const SearchFieldFavorites = styled(SearchField)`

width: 528px;

`