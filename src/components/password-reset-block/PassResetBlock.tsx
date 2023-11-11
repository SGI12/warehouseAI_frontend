import { useState } from "react"
import { ButtonStyled } from "../buttons/button"
import { PassResetInputContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { InputStyled } from "../inputs/TextInputs"
import { TextSmallStyled } from "../paragraphs/Paragraphs"
import BackLink from "../back-link/BackLinkWhite"
import {  checkCookies, passResetReq } from "@/http/UserAPI"
import { FormStyled } from "../auth-card/styled"


const PassResetBlock = ({setShowPopUp}:any) => {
    checkCookies()
    const [email, setEmail] = useState('')
    const PassResetRequest = async (data:any) => {
    
        try {
         
         await passResetReq(data)
         setShowPopUp(true)
         } catch (e:any) {
             console.log (e.response?.data)
             if (e.response.status === 404)
                alert('E-mail не найден')
             if (e.response.status === 409)
                setShowPopUp(true)

         }
         
     }
    const ResetPasswordOnClick =  (event:any) => {
        event.preventDefault();
        const data = {
            email      
        };
        PassResetRequest(data);
        
    }
    return (
        <PassResetInputContainer>
            
            <H2Styled>Восстановление пароля</H2Styled>
            <TextSmallStyled>
                Введите адрес электронной почты, 
                указанной Вами при регистрации. 
                Мы отправим на него код для восстановления доступа к аккаунту.
            </TextSmallStyled>
            <FormStyled onSubmit={ResetPasswordOnClick}>
            <InputStyled
            
            onChange={e => setEmail(e.target.value)} 
            placeholder="E-mail"/>
            <ButtonStyled

            type="submit">Восстановить пароль
            </ButtonStyled>
            </FormStyled>
        </PassResetInputContainer>
    )
}

export default PassResetBlock