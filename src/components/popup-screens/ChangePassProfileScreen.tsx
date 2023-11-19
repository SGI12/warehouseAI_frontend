import { useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { InputErrorText, TextSmallStyled } from "../paragraphs/Paragraphs"
import { InputStyled } from "../inputs/TextInputs"
import { ButtonContainer } from "../registration-card/styled"
import { ButtonShortStyled } from "../buttons/button"
import { useValidation } from "@/validation/validation"
import { updateUserPassword } from "@/http/UserApi"



const ChangePassScreen = ({setActive}:any) => {
  
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [animation, setAnimation] = useState('open')
    const [errorAnimate, setErrorAnimate] = useState('none')
    const [isError, setError] = useState(false)
    const hide = () => {
        setAnimation('close')
        setTimeout(() => setActive(false), 400)
    }
    const passwordValid = useValidation(newPassword, {isPasswordInvalid: true})
    const AcceptHandler = () => {
        updateUserPassword(oldPassword, newPassword)
        .then((res) => {
            hide()
            console.log(res.data)
        })
        .catch ((err) => {
            if (err.response?.status === 400) {
                setError(true)
                setErrorAnimate('animated')
                setTimeout(() => setErrorAnimate('none'), 500)
            }   
        })
       
    } 

    return (
        
        <PopupMainContainer>
            <DefaultPopUp className={animation}>
            <H2Styled>Cмена пароля</H2Styled>
            <TextSmallStyled>
                Чтобы сменить пароль, заполните поля ниже:
            </TextSmallStyled>
            <InputStyled
                autoComplete="new-password"
                onChange={e => setOldPassword(e.target.value)}
                placeholder="Текущий пароль"
                type="password"
                />
                {isError && <InputErrorText className={errorAnimate}>Пароль неверен.</InputErrorText>}
           
             <InputStyled
                autoComplete="new-password"
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Новый пароль"
                type="password"
                />
                {passwordValid.isPasswordInvalid && <InputErrorText className={passwordValid.animation}>{passwordValid.errors.passwordInvalidError}</InputErrorText>}
            <ButtonContainer>
                <ButtonShortStyled onClick={() => hide()}>Назад</ButtonShortStyled>
                <ButtonShortStyled disabled={passwordValid.isPasswordInvalid} onClick={AcceptHandler} className="active">Подтвердить</ButtonShortStyled>
            </ButtonContainer>
            </DefaultPopUp>
            
            
        </PopupMainContainer>
    )

}

export default ChangePassScreen