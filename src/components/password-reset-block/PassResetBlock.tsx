import { useState } from "react"
import { ButtonStyled } from "../buttons/button"
import { PassResetInputContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { InputStyled } from "../inputs/TextInputs"
import { InputErrorText, TextSmallStyled } from "../paragraphs/Paragraphs"
import BackLink from "../back-link/BackLinkWhite"
import {  checkCookies, passResetReq } from "@/http/UserAPI"
import { FormStyled } from "../auth-card/styled"


const PassResetBlock = ({setShowPopUp}:any) => {
    checkCookies()
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [animation, setAnimation] = useState('none')
    const PassResetRequest = async (data:any) => {
    
        try {
         
         await passResetReq(data)
         setShowPopUp(true)
         } catch (e:any) {
             console.log (e.response?.data)
             if (e.response.status === 404) {
                setAnimation('animated')
                setErrorMessage('E-mail не зарегистрирован.')
                setIsError(true)
                setTimeout(() => setAnimation('none'), 500)
             }
                
             if (e.response.status === 409) {
                setShowPopUp(true)
             }

             if (e.response.status === 500) {
                setAnimation('animated')
                setErrorMessage('Введите адрес электронной почты.')
                setIsError(true)
                setTimeout(() => setAnimation('none'), 500)
             }
                
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
            {isError && <InputErrorText className={animation}>{errorMessage}</InputErrorText>}
            {}
            <ButtonStyled

            type="submit">Восстановить пароль
            </ButtonStyled>
            </FormStyled>
        </PassResetInputContainer>
    )
}

export default PassResetBlock