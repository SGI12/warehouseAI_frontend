
import { ButtonStyled } from '../buttons/button'
import { InputStyled } from '../inputs/input'
import { LinkStyled } from '../links/link'
import { AuthCardStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'



const AuthCard = () => {

return (

    <AuthCardStyled>
        <H1StyledAuth>Вход</H1StyledAuth>
        <InputsContainer>
            <InputStyled placeholder='E-mail'/>
            <InputStyled type='password' placeholder='Пароль'/>
            <ButtonStyled>Войти</ButtonStyled>
        </InputsContainer>
        <LinksContainer>
               <LinksContainer className='with-margin'>
                <div>или</div>
                <LinkStyled>Зарегистрироваться</LinkStyled>
               </LinksContainer> 
               <LinkStyled>Забыли пароль?</LinkStyled>
        </LinksContainer>
    </AuthCardStyled>


)

}

export default AuthCard