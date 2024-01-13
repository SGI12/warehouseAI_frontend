    

import {  useEffect, useState, useRef } from "react";
import { FormStyled, LinksContainer } from "../auth-card/styled";
import { ButtonStyled } from "../buttons/button";
import { InputErrorText, TextDefaultStyled } from "../paragraphs/Paragraphs";
import {  H2StyledRegister, RegistrationCardStyled } from "./styled"
import { InputStyled, LoadFileInput } from "../inputs/TextInputs";
import { LinkNoStyles, LinkStyled } from "../links/link";
import { useRouter } from 'next/router'
import { registration } from "@/http/AuthAPI";
import { usePassRepeatCheck, useValidation} from '@/validation/validation'
import RegistrationSuccessPopup from "../popup-screens/RegistrationSuccess";




const RegistrationCard = () => {
    
    const router = useRouter()
    const RegUser = async (data:any) => {
    // JSON.stringify(data)
    try {
        await registration(data)
        await setPopup(true)
        
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
        email:string,
        pictureSize: number,
    }
    const [popup, setPopup] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [registerAnimation, setRegAnimation] = useState('none')
    const [userData, setUserData] = useState<IUserData>({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        picture: '',
        pictureSize: 0,
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
    const pictureSizeValid = useValidation(userData.pictureSize, {isPictureSizeInvalid: true})
    const [isFormValid, setFormValid] = useState(false)
    useEffect(() => {
        if (!(usernameValid.isUserNameEmpty || 
            firstnameValid.isFirstnameEmpty || 
            lastnameValid.isLastnameEmpty || 
            emailValid.isEmailInvalid || 
            passwordValid.isPasswordInvalid || 
            pictureSizeValid.isPictureSizeInvalid ||
            !passRepeatValid.isChecked))
            setFormValid(true)
        else setFormValid(false)
            
    }, [usernameValid.isUserNameEmpty, 
        firstnameValid.isFirstnameEmpty, 
        lastnameValid.isLastnameEmpty, 
        emailValid.isEmailInvalid, 
        passwordValid.isPasswordInvalid,
        passRepeatValid.isChecked, 
        pictureSizeValid.isPictureSizeInvalid])

    const ClickLoadhandler = () => {
        if (inputFile.current?.files) {
            inputFile.current.click()
        }
        
    }
    
    return (
        
        <RegistrationCardStyled>
            {popup && <RegistrationSuccessPopup email={userData.email}/>}
            <H2StyledRegister>Регистрация</H2StyledRegister>
            
            {/* <InputsContainer>
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
            
            </InputsContainer> */}
            <FormStyled noValidate autoComplete="off" onSubmit={handleSubmit}>
                <InputStyled 
               
                name="username"
                autoComplete="new-password"
                placeholder="Введите имя пользователя" 
                type="text" 
                onChange={handleChange}
                onBlur={handleBlur}/>
                {usernameValid.isUserNameEmpty && dirtyInputs.username && <InputErrorText className={usernameValid.animation}>{usernameValid.errors.usernameError}</InputErrorText>}
                <InputStyled 
                autoComplete="new-password"
                name='firstname'
                placeholder="Введите имя"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {firstnameValid.isFirstnameEmpty && dirtyInputs.firstname && <InputErrorText className={firstnameValid.animation}>{firstnameValid.errors.firstnameError}</InputErrorText>}
               
             
                <InputStyled 
                autoComplete="new-password"
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
                autoComplete='new-password'
                placeholder="Создайте пароль" 
                type="password"
                onChange={handleChange}/>
                {passwordValid.isPasswordInvalid && dirtyInputs.password && <InputErrorText className={passwordValid.animation}>{passwordValid.errors.passwordInvalidError}</InputErrorText>}
                <InputStyled 
                onBlur={handleBlur}
                onChange={newPasswordHandle}
                name="new_password"
                autoComplete="new-password"
                placeholder="Повторите пароль" 
                type="password"/>
                {!passRepeatValid.isChecked && dirtyInputs.new_password && <InputErrorText className={passRepeatValid.animation}>Пароли не совпадают</InputErrorText>}
                {isRegister && <InputErrorText className={registerAnimation}>Пользователь с таким именем пользователя/e-mail уже зарегистрирован</InputErrorText>}
                
                <LinkStyled onClick={ClickLoadhandler}><LoadFileInput 
                onChange={(e:any) => 
                    {
                    
                    setPictureName(e.target.files[0]?.name || 'Загрузить аватарку');
                    setUserData({
                        ...userData,
                        picture: e.target.files[0],
                        pictureSize: e.target.files[0]?.size,
                    })
                }} 
                ref={inputFile} 
                type="file"></LoadFileInput>{pictureName}</LinkStyled>
                {pictureSizeValid.isPictureSizeInvalid && <InputErrorText className={pictureSizeValid.animation}>{pictureSizeValid.errors.pictureSizeError}</InputErrorText>}

                
                <ButtonStyled disabled={!isFormValid} type="submit">Зарегистрироваться</ButtonStyled>
                <TextDefaultStyled>Регистрируясь на платформе, я соглашаюсь с <LinkStyled download href="/docs/WarehouseAI_Согласие_на_обработку_персональных_данных.pdf">политикой обработки персональных данных.</LinkStyled></TextDefaultStyled>
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