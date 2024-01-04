'use client'
import styled from 'styled-components'
import { Open_Sans } from 'next/font/google'
import { Andika } from "next/font/google";
const opensans = Open_Sans({subsets: ['cyrillic', 'latin']})
const andika = Andika({
    subsets: ['cyrillic'],
    weight: '400'
})




export const InputStyled = styled.input.attrs(({ placeholder, type, name }) => ({
    placeholder:  placeholder || "E-mail",
    className: opensans.className,
    type: type || 'text',
    name:  name || 'input'
    
  }))`

width: 408px;
height: 55px;
border-radius: 30px;
background: var(--inputs, #EDEDED);
border: none;
padding-left: 24px;

&::placeholder {
    color: var(--input-text, #AEAEAE);
}

&:focus {
    outline: none;
}

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%;

`

export const TaskSolveInput = styled(InputStyled)`

    width: 630px;
    height: 58px;
    border-radius: 100px;
    border: 1px solid var(--accent, #E64C8F);
    background: rgba(255, 184, 215, 0.08);
    backdrop-filter: blur(5px);
    caret-color: #ffffff;
    color: #ffffff;
    margin-bottom: 20px;
    &:focus {
        box-shadow: 0px 0px 56px 0px rgba(251, 157, 198, 0.20);
    }

`
export const TypeChooseInput = styled.div`

width: 100%;
border-radius: 30px;
border: 1px solid var(--accent, #E64C8F);
height: 100%;
`

export const VerificationCodeInput = styled(InputStyled)`

height: 138px;
width: 415px;
font-size: 40px;
text-align: center;
padding-left: 0px;

`

export const LoadFileInput = styled.input`


display: none;
`

export const InputGray = styled.textarea.attrs({
    className: opensans.className,
    spellCheck: false,
})`

width: 846px;
height: 270px;
border-radius: 20px;
border: 1px solid #5F5F5F;
background:  rgba(95, 95, 95, 0.46);
&:focus {
    outline: none;
}
padding: 32px;
color: #ffffff;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 27px */
backdrop-filter: blur(5px);
resize: none;

&::-webkit-scrollbar {
    border-radius: 50%;
    width: 5px;

}
&::-webkit-scrollbar-track {
    background: rgba(95, 95, 95, 0.46);
    border-radius: 20px; 
    margin: 12px;
}
&::-webkit-scrollbar-thumb {
  background-color: #E64C8F;
  border-radius: 20px; 
  
}


`


export const ImageInput = styled.div`

display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
border: 1px solid #5F5F5F;
background: rgba(95, 95, 95, 0.46);
width: 693px;
height: 462px;


`
export const ProfileInput = styled(InputStyled)`


box-sizing: content-box;
width: 100%;
padding-inline: 0px;
background-color: transparent;
margin: 0px;
padding: 0px;
border-radius: 0px;
&.editable {
    border: 1px solid var(--accent, #E64C8F);
}
`

export const UserNameProfileInput = styled(ProfileInput)`


color: #FFB8D7;
font-size: 16px;
font-style: normal;
font-weight: 400;

`

export const NamesInput = styled(ProfileInput).attrs({
    className: andika.className
})`



color: #ffffff;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 120%;
height: 100%;
`




