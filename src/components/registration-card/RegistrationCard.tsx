    
import axios from "axios";
import { useState } from "react";
import { FormStyled, InputsContainer, LinksContainer } from "../auth-card/styled";
import { ButtonShortStyled, ButtonStyled } from "../buttons/button";
import { TextDefaultStyled } from "../paragraphs/Paragraphs";
import { ButtonContainer, H2StyledAuth, RegistrationCardStyled, SubHeaderStyledRegistration } from "./styled"
import { InputStyled } from "../inputs/Input";
import { LinkNoStyles, LinkStyled } from "../links/link";
import { useRouter } from 'next/router'




const RegistrationCard = () => {

    const router = useRouter()
    const RegUser = async (data:any) => {
    JSON.stringify(data)
    await axios.post('https://api.warehousai.com/api/auth/register', data, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
          }
    }
    
    )
    .then((res) => {
        if (res.status === 201)
            router.push('/')

    })
    .catch((err) => {
        console.log(err.response?.data)
    })
}
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
        RegUser(userData);

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
                autoComplete="on"
                placeholder="E-mail"
                type="email"
                onChange={e => setEmail(e.target.value)}/>
                <InputStyled 
                autoComplete='off'
                placeholder="Создайте пароль" 
                type="password"
                onChange={e => setPassword(e.target.value)}/>
                <InputStyled autoComplete='off' placeholder="Повторите пароль" type="password"/>
                <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
            </FormStyled>
            <LinksContainer>
                <TextDefaultStyled>или</TextDefaultStyled>
                <LinkNoStyles prefetch href={'/auth'} passHref>
                <LinkStyled >Войти</LinkStyled>
                </LinkNoStyles>
            </LinksContainer>


        </RegistrationCardStyled>
    );
};

export default RegistrationCard;