
import { useState } from "react";
import { FormStyled, InputsContainer, LinksContainer } from "../auth-card/styled";
import { ButtonShortStyled, ButtonStyled } from "../buttons/Button";
import { SubHeaderStyled, TextDefaultStyled } from "../paragraphs/P";
import { ButtonContainer, H2StyledAuth, RegistrationCardStyled, SubHeaderStyledRegistration } from "./styled"
import { InputStyled } from "../inputs/Input";
import { LinkNoStyles, LinkStyled } from "../links/Link";
import { RegUser } from "@/api/registration/registration";





const RegistrationCard = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState("1");
    const handleClick = (event:any) => {
        setActive(event.target.id);
    }
    const toJson = (obj:object) => {
        return JSON.stringify(obj)
    }

    


    const handleSubmit = (event:any) => {
        event.preventDefault();
        const userData = {
            username,
            email,
            password,         
        };
        toJson(userData);
        RegUser(userData)

    }
    return (
        <RegistrationCardStyled>
            <H2StyledAuth>Регистрация</H2StyledAuth>
            <InputsContainer>
            <SubHeaderStyledRegistration>Выберите свой статус</SubHeaderStyledRegistration> 
                    <ButtonContainer>
                    <ButtonShortStyled 
                    key={"1"}
                    className={active === "1" ? "active" : undefined}
                    id ={"1"}
                    onClick={handleClick}
                    >
                        Пользователь
                    </ButtonShortStyled>

                    <ButtonShortStyled 
                    key={"2"}
                    className={active === "2" ? "active" : undefined}
                    id ={"2"}
                    onClick={handleClick}>
                        Разработчик
                    </ButtonShortStyled>
                </ButtonContainer>
            </InputsContainer>
            <FormStyled onSubmit={handleSubmit}>
                <InputStyled 
                placeholder="Введите имя пользователя" 
                type="text" 
                onChange={e => setUsername(e.target.value)}/>
                <InputStyled 
                placeholder="E-mail"
                type="email"
                onChange={e => setEmail(e.target.value)}/>
                <InputStyled 
                placeholder="Создайте пароль" 
                type="password"
                onChange={e => setPassword(e.target.value)}/>
                <InputStyled placeholder="Повторите пароль" type="password"/>
                <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
            </FormStyled>
            <LinksContainer>
                <TextDefaultStyled>или</TextDefaultStyled>
                <LinkNoStyles prefetch href={'/Auth'} passHref>
                <LinkStyled >Войти</LinkStyled>
                </LinkNoStyles>
            </LinksContainer>


        </RegistrationCardStyled>
    );
};

export default RegistrationCard;