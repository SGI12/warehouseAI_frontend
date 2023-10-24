import axios from "axios";
import { useState } from 'react'
import { ButtonStyled } from '../buttons/button'
import { InputStyled } from '../inputs/TextInputs'
import { LinkNoStyles, LinkStyled } from '../links/link'
import { TextDefaultStyled } from '../paragraphs/Paragraphs'
import { AuthCardStyled, FormStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'
import { useRouter } from 'next/router'
import {isUser} from "@/http";



const AuthCard = () => {


const router = useRouter()
const AuthUser = async (data:any) => {
    await JSON.stringify(data)
    await axios.post('https://api.warehousai.com/api/auth/login', data, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            
          }
    }).then((res) => {
        if (res.status === 200)  {
            
            console.log(res.status);
            router.push('/')
           
        }
    })
    .catch((err) => {
        console.log(err.response?.data)
    })
    isUser();
}

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const toJson = (obj:object) => {
    return JSON.stringify(obj)
}
const LoginUserOnSubmit = (event:any) => {
    event.preventDefault();
    const userData = {
        email,
        password,         
    };
    AuthUser(userData);

}
return (

    <AuthCardStyled>
        <H1StyledAuth>Вход</H1StyledAuth>
        <FormStyled onSubmit={LoginUserOnSubmit}>
            <InputStyled 
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}/>
            <InputStyled 
            type='password' 
            placeholder='Пароль'
            onChange={e => setPassword(e.target.value)}/>
            <ButtonStyled type='submit'>Войти</ButtonStyled>
        </FormStyled>
        <LinksContainer>
               <LinksContainer className='with-margin'>
                <TextDefaultStyled>или</TextDefaultStyled>
                <LinkNoStyles href={'/Registration'}>
                <LinkStyled >Зарегистрироваться</LinkStyled>
                </LinkNoStyles>
               </LinksContainer> 
               <LinkNoStyles href={'#'}>
                <LinkStyled >Забыли пароль?</LinkStyled>
               </LinkNoStyles>
        </LinksContainer>
    </AuthCardStyled>


)

}

export default AuthCard