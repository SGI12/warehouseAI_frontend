'use client'
import { ResetCSSGlobalStyle } from "@/styles/reset"
import { ButtonStyled } from "@/components/buttons/button"
import { H1Styled, H4Styled } from "@/components/headers/header"



export default function Home() {
  return (
    <div>
      <ResetCSSGlobalStyle/>
      <ButtonStyled>Зарегистрироваться</ButtonStyled>
      <H1Styled >Вход</H1Styled>
      <H4Styled>Вход</H4Styled>
    </div>
  )
}
