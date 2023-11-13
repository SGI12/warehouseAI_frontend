import { useState } from "react"
import { ButtonStyled } from "../buttons/button"
import { PassResetInputContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { InputStyled } from "../inputs/TextInputs"
import { InputErrorText, TextSmallStyled } from "../paragraphs/Paragraphs"
import {  checkCookies, passResetConfirm, passResetReq } from "@/http/AuthAPI"
import { FormStyled } from "../auth-card/styled"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { useUserContext } from "@/context/context"
import { usePassRepeatCheck, useValidation } from "@/validation/validation"



const ChangePassBlock = () => {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [animation, setAnimation] = useState('none')

    // const PassValidate = () => {
    //     let isValid:boolean = false
    //     if (password != repeatPassword) {
    //         setErrorMessage('Пароли не совпадают')
    //         setAnimation('animated')
    //         setIsError(true)
    //         setTimeout(() => setAnimation('none'), 500)
    //     }

    //     else if ((password=='') || (repeatPassword =='')) {
    //         setErrorMessage('Поля не должны быть пустыми')
    //         setAnimation('animated')
    //         setIsError(true)
    //         setTimeout(() => setAnimation('none'), 500)
    //     }

    //     else isValid = true

    //     return isValid
    // }
    const passwordCheck = usePassRepeatCheck(password, repeatPassword)
    const passwordValid = useValidation(password, {isPasswordInvalid: true})
    const PassUpdate = async (data:any) => {

            if (passwordCheck.isChecked) {
                try {
         
                    await passResetConfirm(data)
                    router.push('/authpage')
                    
                    
                    } catch (e:any) {
                        console.log (e.response?.data)
                        if (e.response?.status === 404) {
                           setAnimation('animated')
                           setErrorMessage('Время на восстановление пароля закончилось. Пожалуйста, отправьте запрос на восстановление еще раз')
                           setIsError(true)
                           setTimeout(() => setAnimation('none'), 500)
                        }
                   }
            }   
         
     }


    const ResetPasswordOnClick =  (event:any) => {
        event.preventDefault();
        const data = {
            userId: getCookie('userId'),
            password,
                  
        };
        PassUpdate(data);
        
    }
    return (
        <PassResetInputContainer>
            
            <H2Styled>Смена пароля</H2Styled>
            <TextSmallStyled>
            Придумайте новый пароль от аккаунта, 
            содержащий не менее 8 символов, а также заглавные буквы и спецсимволы.
            </TextSmallStyled>
            <FormStyled onSubmit={ResetPasswordOnClick}>
            <InputStyled
            onChange={e => {
                
                setPassword(e.target.value)
            }} 
            type="password"
            placeholder="Новый пароль"
            autoComplete="disabled"
            />
            {passwordValid.isPasswordInvalid && <InputErrorText className={passwordValid.animation}>{passwordValid.errors.passwordInvalidError}</InputErrorText>}
            <InputStyled
            onChange={e => {
              
                setRepeatPassword(e.target.value)
            }} 
            type="password"
            autoComplete="disabled"
            placeholder="Повторите пароль"/>
            {!passwordCheck.isChecked && <InputErrorText className={passwordCheck.animation}>{passwordCheck.error}</InputErrorText>}
            {isError && <InputErrorText className={animation}>{errorMessage}</InputErrorText>}
            <ButtonStyled

            type="submit">
                Подтвердить
            </ButtonStyled>
            </FormStyled>
        </PassResetInputContainer>
    )
}

export default ChangePassBlock