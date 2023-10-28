import axios from "axios";
import { useState } from 'react'
import { ButtonStyled } from '../buttons/button'
import { InputStyled } from '../inputs/TextInputs'
import { LinkNoStyles, LinkStyled } from '../links/link'
import { TextDefaultStyled } from '../paragraphs/Paragraphs'
import { AuthCardStyled, FormStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'
import { useRouter } from 'next/router'
import { useUserContext } from "@/context/context";
import { observer } from 'mobx-react-lite';
import { auth } from "@/http/UserAPI";



const AuthCard = observer (() => {
const {user} = useUserContext()
const router = useRouter()
// const AuthUser = async (data:any) => {
//     await JSON.stringify(data)
//     await axios.post('https://api.warehousai.com/api/auth/login', data, {
//         withCredentials: true,
//         headers: {
//             'Content-Type': 'application/json',
            
//           }
//     }).then((res) => {
//         if (res.status === 200)  {
//             user.setIsAuth(true)
//             console.log(user.isAuth)
//             router.push('/')
//         }
//     })
//     .catch((err) => {
//         console.log(err.response?.data)
//     })
// }

const AuthUser = async (data:any) => {
    
   try {

    await auth(data)
    user.setIsAuth(true)
    
    router.push('/')
    
    } catch (e:any) {

        alert (e.response?.data.message)
    }
    
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
    console.log(toJson(userData));
    AuthUser(userData);

}
console.log(user)
return (

    <AuthCardStyled>
        <H1StyledAuth>Вход</H1StyledAuth>
        <FormStyled onSubmit={LoginUserOnSubmit}>
            <InputStyled 
            autoComplete="true"
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}/>
            <InputStyled 
            autoComplete="true"
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

});

export default AuthCard