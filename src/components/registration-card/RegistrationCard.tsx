
import { useState } from "react";
import { FormStyled, InputsContainer, LinksContainer } from "../auth-card/styled";
import { ButtonShortStyled, ButtonStyled } from "../buttons/Button";
import { SubHeaderStyled, TextDefaultStyled } from "../paragraphs/P";
import { ButtonContainer, H2StyledAuth, RegistrationCardStyled, SubHeaderStyledRegistration } from "./styled"
import { InputStyled } from "../inputs/Input";
import { LinkNoStyles, LinkStyled } from "../links/Link";
import type { GetStaticProps } from "next";





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

    
    const RegUser = async (data:any) => {
        const response = await fetch('http://51.250.98.26:8010/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        });
        
        let result = await response.json();
        console.log(result.message)
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const userData = {
            username,
            email,
            password,         
        };
        console.log(userData);
        toJson(userData);
        console.log(toJson(userData));
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