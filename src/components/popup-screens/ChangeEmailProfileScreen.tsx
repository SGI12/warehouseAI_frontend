import { ReactElement, useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer, VerificationCodeContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { InputErrorText, TextSmallStyled } from "../paragraphs/Paragraphs"
import { InputStyled, VerificationCodeInput } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"
import { passResetVerify } from "@/http/AuthAPI"
import { useRouter } from "next/navigation"
import Footer from "../footer/footer"
import { updateUserEmail } from "@/http/UserApi"
import { useValidation } from "@/validation/validation"


const ChangeEmailScreen = ({setActive}:any) => {
    
    const [email, setEmail] = useState('')
    const [animation, setAnimation] = useState('open')
    const emailValid = useValidation(email, {isEmailInvalid: true})
    const hide = () => {
        setAnimation('close')
        setTimeout(() => setActive(false), 400)
    }

    const AcceptHandler = () => {
        updateUserEmail(email).then((res) => {
            console.log(res.data)
            setAnimation('close')
            setTimeout(() => setActive(false), 400)
        })
        .catch((err) => {
            console.log(err.response?.statye)
        })
       
    } 

    return (
        
        <PopupMainContainer>
            <DefaultPopUp className={animation}>
            <H2Styled>Смена эл.почты</H2Styled>
            <TextSmallStyled>
                Пожалуйста, введите новый адрес эл.почты ниже:
            </TextSmallStyled>
            <InputStyled
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail"
                />
            {emailValid.isEmailInvalid && <InputErrorText className={emailValid.animation}>{emailValid.errors.emailInvalidError}</InputErrorText>}
            <ButtonContainer>
                <ButtonShortStyled onClick={() => hide()}>Назад</ButtonShortStyled>
                <ButtonShortStyled onClick={AcceptHandler} className="active">Подтвердить</ButtonShortStyled>

            </ButtonContainer>
            </DefaultPopUp>
            
            
        </PopupMainContainer>
    )

}

export default ChangeEmailScreen