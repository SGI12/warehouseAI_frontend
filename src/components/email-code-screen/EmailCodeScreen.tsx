import { ReactElement, useState } from "react"
import { PassResetPopUp } from "../pass-reset-popup/PassResetPopUp"
import { EmailCodeScreenMainContainer, VerificationCodeContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { TextSmallStyled } from "../paragraphs/Paragraphs"
import { VerificationCodeInput } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"


const EmailCodeScreen = ({setShowPopUp}:any) => {
    const [code, setCode] = useState('')
    const [animation, setAnimation] = useState('open')

    const hide = async () => {
        setAnimation('close')
        setTimeout(() => setShowPopUp(false), 500)
    }
    return (
        <EmailCodeScreenMainContainer>
            <PassResetPopUp className={animation}>
            <H2Styled>Введите код</H2Styled>
            <TextSmallStyled>
                Мы отправили код для восстановления доступа на Ваш email. 
                Если письмо все ещё не пришло, проверьте папку «Спам» и «Промоакции».
            </TextSmallStyled>
            <VerificationCodeInput 
                onChange={e => setCode(e.target.value)}
                placeholder="Проверочный код"
                >
            </VerificationCodeInput>
            <ButtonContainer>
                <ButtonShortStyled onClick={() => hide()}>Отмена</ButtonShortStyled>
                <ButtonShortStyled className="active">Подтвердить</ButtonShortStyled>
            </ButtonContainer>
            </PassResetPopUp>
            
        </EmailCodeScreenMainContainer>
    )

}

export default EmailCodeScreen