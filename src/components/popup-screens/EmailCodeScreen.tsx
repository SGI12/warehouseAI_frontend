import { ReactElement, useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer, VerificationCodeContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { TextSmallStyled } from "../paragraphs/Paragraphs"
import { VerificationCodeInput } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"
import { passResetVerify } from "@/http/AuthAPI"
import { useRouter } from "next/navigation"


const EmailCodeScreen = ({setShowPopUp}:any) => {
    const router = useRouter();
    const [code, setCode] = useState('')
    const [animation, setAnimation] = useState('open')
    console.log(code)
    const hide = async () => {
        setAnimation('close')
        setTimeout(() => setShowPopUp(false), 400)
    }

    const sendCodeOnClick = async () => {
        try {
            await passResetVerify(code)
            router.push('/new-password')

        } catch(e:any) {
            
            console.log (e.response?.data)
        }
    }
    return (
        <PopupMainContainer>
            <DefaultPopUp className={animation}>
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
                <ButtonShortStyled onClick={() => sendCodeOnClick()} className="active">Подтвердить</ButtonShortStyled>
            </ButtonContainer>
            </DefaultPopUp>
            
        </PopupMainContainer>
    )

}

export default EmailCodeScreen