
import { useState } from 'react'
import { ButtonStyled } from '../buttons/Button'
import { InputStyled } from '../inputs/Input'
import { LinkNoStyles, LinkStyled } from '../links/Link'
import { TextDefaultStyled } from '../paragraphs/P'
import { AuthCardStyled, FormStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'
import { AuthUser } from '@/api/login/login'



const AuthCard = () => {
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
    toJson(userData);
    AuthUser(userData)


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