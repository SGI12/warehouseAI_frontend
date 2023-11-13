import { ReactElement, useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer, VerificationCodeContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { TextSmallStyled } from "../paragraphs/Paragraphs"
import { InputStyled, VerificationCodeInput } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"
import { passResetVerify } from "@/http/AuthAPI"
import { useRouter } from "next/navigation"
import Footer from "../footer/footer"


const BeDevScreen = ({setActive}:any) => {
    const router = useRouter();
    const [code, setCode] = useState('')
    const [animation, setAnimation] = useState('open')
    console.log(code)
    const hide = () => {
        setAnimation('close')
        setTimeout(() => setActive(false), 400)
    }


    return (
        
        <PopupMainContainer>
            <DefaultPopUp className={animation}>
            <H2Styled>Хотите стать разработчиком?</H2Styled>
            <TextSmallStyled>
                Залупу тебе на воротник, а не разработчиком. 
                Но ты можешь указать свою почту, нам придет письмо и, возможно, мы подумаем, чтобы дать тебе 
                возможности разработчика.
            </TextSmallStyled>
            <InputStyled
                onChange={e => setCode(e.target.value)}
                placeholder="E-mail"
                >
            </InputStyled>
            <ButtonContainer>
                <ButtonShortStyled onClick={() => hide()}>Назад</ButtonShortStyled>
                <ButtonShortStyled onClick={() => hide()} className="active">Подтвердить</ButtonShortStyled>
            </ButtonContainer>
            </DefaultPopUp>
            
            
        </PopupMainContainer>
    )

}

export default BeDevScreen