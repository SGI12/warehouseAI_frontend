import axios from "axios";
import { useRef, useState } from 'react'
import { ButtonStyled } from '../buttons/button'
import { InputStyled } from '../inputs/TextInputs'
import { LinkNoStyles, LinkStyled } from '../links/link'
import { InputErrorText, TextDefaultStyled } from '../paragraphs/Paragraphs'
import { AuthCardStyled, FormStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'
import { useRouter } from 'next/router'
import { useUserContext } from "@/context/context";
import { observer } from 'mobx-react-lite';
import { auth } from "@/http/AuthAPI";




const AuthCard = observer(() => {
    const { user } = useUserContext()
    const router = useRouter()
    const AuthUser = async (data: any) => {

        try {

            await auth(data)
            user.setIsAuth(true)

            router.push('/')

        } catch (e: any) {
            if (e.response.status === 400) {
                setError(true)
                setErrorText('Неверный пароль')
                setAnimation('animated')
                setTimeout(() => setAnimation('none'), 500)
            }
            if (e.response.status === 404) {
                setError(true)
                setErrorText('Неверный e-mail')
                setAnimation('animated')
                setTimeout(() => setAnimation('none'), 500)
            }

            console.log(e.response?.data.message)
        }

    }
    const [isError, setError] = useState(false)
    const [animation, setAnimation] = useState('none')
    const [errorText, setErrorText] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const LoginUserOnSubmit = (event: any) => {
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
                {isError && <InputErrorText className={animation}>{errorText}</InputErrorText>}
                <InputStyled
                    autoComplete="on"
                    placeholder='E-mail'
                    onChange={e => setEmail(e.target.value)} 
                    id='1'
                    
                    />
                    
                <InputStyled
                    autoComplete="on"
                    type='password'
                    placeholder='Пароль'
                    onChange={e => setPassword(e.target.value)} 
                    
               
                    />
                <ButtonStyled  type='submit'>Войти</ButtonStyled>
            </FormStyled>
            <LinksContainer>
                <LinksContainer className='with-margin'>
                    <TextDefaultStyled>или</TextDefaultStyled>
                    <LinkNoStyles href={'/register'}>
                        <LinkStyled >Зарегистрироваться</LinkStyled>
                    </LinkNoStyles>
                </LinksContainer>
                <LinkNoStyles href={'/password-recovery'}>
                    <LinkStyled >Забыли пароль?</LinkStyled>
                </LinkNoStyles>
            </LinksContainer>
        </AuthCardStyled>


    )

});

export default AuthCard