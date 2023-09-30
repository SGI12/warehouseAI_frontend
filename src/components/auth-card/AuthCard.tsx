
import { ButtonStyled } from '../buttons/Button'
import { InputStyled } from '../inputs/Input'
import { LinkStyled } from '../links/Link'
import { TextDefaultStyled } from '../paragraphs/P'
import { AuthCardStyled, H1StyledAuth, InputsContainer, LinksContainer } from './Styled'



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
                <TextDefaultStyled>или</TextDefaultStyled>
                <LinkStyled>Зарегистрироваться</LinkStyled>
               </LinksContainer> 
               <LinkStyled>Забыли пароль?</LinkStyled>
        </LinksContainer>
    </AuthCardStyled>


)

}

export default AuthCard