
import { ButtonStyled } from '../buttons/Button'
import { InputStyled } from '../inputs/Input'
import { LinkNoStyles, LinkStyled } from '../links/Link'
import { TextDefaultStyled } from '../paragraphs/P'
import { AuthCardStyled, FormStyled, H1StyledAuth, InputsContainer, LinksContainer } from './styled'



const AuthCard = () => {

return (

    <AuthCardStyled>
        <H1StyledAuth>Вход</H1StyledAuth>
        <FormStyled>
            <InputStyled placeholder='E-mail'/>
            <InputStyled type='password' placeholder='Пароль'/>
            <ButtonStyled>Войти</ButtonStyled>
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