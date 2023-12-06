import { useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { TextSmallStyled } from "../paragraphs/Paragraphs"
import { InputStyled } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"



const BeDevScreen = ({setActive}:any) => {
    
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
            <H2Styled>Хотите добавить свою нейронку?</H2Styled>
            <TextSmallStyled>
                Для того, чтобы вы добавили свою нейронную сеть, 
                вам необходимо получить роль "разработчика" на платформе. 
                Пожалуйста, оставьте свою почту, чтобы мы могли выдать вам данный статус!
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