    

import {  useEffect, useState, useRef } from "react";
import { FormStyled, InputsContainer, LinksContainer } from "../auth-card/styled";
import { ButtonShortStyled, ButtonStyled } from "../buttons/button";
import { InputErrorText, TextDefaultStyled } from "../paragraphs/Paragraphs";
import { ButtonContainer, H2StyledRegister, RegistrationCardStyled, SubHeaderStyledRegistration } from "./styled"
import { InputStyled, LoadFileInput } from "../inputs/TextInputs";
import { LinkNoStyles, LinkStyled } from "../links/link";
import { useRouter } from 'next/router'
import { registration } from "@/http/UserAPI";
import {usePassRepeatCheck, useValidation} from '@/validation/validation'




const RegistrationCard = () => {
    
    const router = useRouter()
    const RegUser = async (data:any) => {
    // JSON.stringify(data)
    try {
        await registration(data)
        console.log('УСПЕХ')
        router.push('/')
    } catch (e:any) {
        if (e.response.status == 409) {
            setIsRegister(true)
            setRegAnimation('animated')
            setTimeout(() => setRegAnimation('none'), 500)
        }
        console.log (e.response?.data.message)
    }
}
    interface IUserData {
        username:string,
        firstname:string,
        lastname:string,
        password:string,
        picture?:File | string,
        email:string
    }
    const [isRegister, setIsRegister] = useState(false)
    const [registerAnimation, setRegAnimation] = useState('none')
    const [userData, setUserData] = useState<IUserData>({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        picture: '',
        email: '',

    })
    const [pictureName, setPictureName] = useState('Загрузить аватарку')
    const [newPassword, setNewPassword] = useState('')
    const [dirtyInputs, setDirtyInputs] = useState({
        username: false,
        firstname: false,
        lastname: false,
        password: false,
        picture: false,
        new_password: false,
        email: false
    })
    console.log((userData))
    const [active, setActive] = useState("1");
    const handleActiveClick = (event:any) => {
        setActive(event.target.id);
    }

    const handleChange = (event:any) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleBlur = (event: any) => {
        
        setDirtyInputs({
            ...dirtyInputs, [event.target.name]: true
        })
    }
    const handleSubmit = (event:any) => {
        event.preventDefault();
        RegUser(userData);

    }
    
    const newPasswordHandle = (e: any) => {
        setNewPassword(e.target.value)
    }

    const inputFile = useRef<HTMLInputElement | null>(null);

    const usernameValid = useValidation(userData.username, {isUserNameEmpty: true})
    const firstnameValid = useValidation(userData.firstname, {isFirstnameEmpty: true})
    const lastnameValid  = useValidation(userData.lastname, {isLastnameEmpty: true})
    const emailValid  = useValidation(userData.email, {isEmailInvalid: true})
    const passwordValid = useValidation(userData.password, {isPasswordInvalid: true})
    const passRepeatValid = usePassRepeatCheck(userData.password, newPassword)

    const [isFormValid, setFormValid] = useState(false)
    useEffect(() => {
        if (!(usernameValid.isUserNameEmpty || 
            firstnameValid.isFirstnameEmpty || 
            lastnameValid.isLastnameEmpty || 
            emailValid.isEmailInvalid || 
            passwordValid.isPasswordInvalid ||
            !passRepeatValid.isChecked))
            setFormValid(true)
        else setFormValid(false)
            
    }, [usernameValid.isUserNameEmpty, 
        firstnameValid.isFirstnameEmpty, 
        lastnameValid.isLastnameEmpty, 
        emailValid.isEmailInvalid, 
        passwordValid.isPasswordInvalid,
        passRepeatValid.isChecked])
    console.log(isFormValid)

    const ClickLoadhandler = () => {
        if (inputFile.current?.files) {
            inputFile.current.click()
            setUserData({
                ...userData,
                picture: inputFile.current.files[0]
            })


        }
        
    }
    console.log(userData.picture)
    return (
        <RegistrationCardStyled>
            <H2StyledRegister>Регистрация</H2StyledRegister>
            
            <InputsContainer>
            <SubHeaderStyledRegistration>Выберите свой статус</SubHeaderStyledRegistration> 
                <ButtonContainer>
                    <ButtonShortStyled 
                    key={"1"}
                    className={active === "1" ? "active" : undefined}
                    id ={"1"}
                    onClick={handleActiveClick}
                    >
                        Пользователь
                    </ButtonShortStyled>

                    <ButtonShortStyled 
                    key={"2"}
                    className={active === "2" ? "active" : undefined}
                    id ={"2"}
                    onClick={handleActiveClick}>
                        Разработчик
                    </ButtonShortStyled>
                </ButtonContainer>
            
            </InputsContainer>
            <FormStyled noValidate onSubmit={handleSubmit}>
                <InputStyled 
               
                name="username"
                autoComplete="off"
                placeholder="Введите имя пользователя" 
                type="text" 
                onChange={handleChange}
                onBlur={handleBlur}/>
                {usernameValid.isUserNameEmpty && dirtyInputs.username && <InputErrorText className={usernameValid.animation}>{usernameValid.errors.usernameError}</InputErrorText>}
                <InputStyled 
                autoComplete="off"
                name='firstname'
                placeholder="Введите имя"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {firstnameValid.isFirstnameEmpty && dirtyInputs.firstname && <InputErrorText className={firstnameValid.animation}>{firstnameValid.errors.firstnameError}</InputErrorText>}
               
             
                <InputStyled 
                autoComplete="off"
                onBlur={handleBlur}
                name="lastname"
                placeholder="Введите фамилию"
                onChange={handleChange}/>
                {lastnameValid.isLastnameEmpty && dirtyInputs.lastname && <InputErrorText className={lastnameValid.animation}>{lastnameValid.errors.lastnameError}</InputErrorText>}
                <InputStyled 
                onBlur={handleBlur}
                name="email"
                autoComplete="on"
                placeholder="E-mail"
                type="email"
                onChange={handleChange}/>
                {emailValid.isEmailInvalid && dirtyInputs.email && <InputErrorText className={emailValid.animation}>{emailValid.errors.emailInvalidError}</InputErrorText>}
                
                <InputStyled 
                onBlur={handleBlur}
                name="password"
                autoComplete='off'
                placeholder="Создайте пароль" 
                type="password"
                onChange={handleChange}/>
                {passwordValid.isPasswordInvalid && dirtyInputs.password && <InputErrorText className={passwordValid.animation}>{passwordValid.errors.passwordInvalidError}</InputErrorText>}
                <InputStyled 
                onBlur={handleBlur}
                onChange={newPasswordHandle}
                name="new_password"
                autoComplete="off"
                placeholder="Повторите пароль" 
                type="password"/>
                {!passRepeatValid.isChecked && dirtyInputs.new_password && <InputErrorText className={passRepeatValid.animation}>Пароли не совпадают</InputErrorText>}
                {isRegister && <InputErrorText className={registerAnimation}>Пользователь с таким именем пользователя/e-mail уже зарегистрирован</InputErrorText>}
                
                <LinkStyled onClick={ClickLoadhandler}><LoadFileInput 
                onChange={(e:any) => 
                    {
                    setPictureName(e.target.files[0]?.name || 'Загрузить аватарку')
                }} 
                ref={inputFile} 
                type="file"></LoadFileInput>{pictureName}</LinkStyled>

                
                <ButtonStyled disabled={!isFormValid} type="submit">Зарегистрироваться</ButtonStyled>
                
            </FormStyled>
            <LinksContainer>
                <TextDefaultStyled>или</TextDefaultStyled>
                <LinkNoStyles prefetch href={'/authpage'} passHref>
                <LinkStyled >Войти</LinkStyled>
                </LinkNoStyles>
            </LinksContainer>


        </RegistrationCardStyled>
    );
};

export default RegistrationCard;