import { isUser } from "@/http";
import { AuthButtonHomePage } from "../buttons/Button";
import { LinkNoStyles } from "../links/Link";
import NavBar from "../navbar/NavBar";
import { SearchFieldMainPage } from "../search-field/styled";
import { HeaderContainer, LogoSmall, SearchAndButtonContainer } from "./styled";


const Header = () => {

    return (
        <HeaderContainer>
            <LogoSmall>
                <img src="/logo_small.svg" alt="logo_small"/>
            </LogoSmall>
            <NavBar/>
            <SearchAndButtonContainer>
            <SearchFieldMainPage/>
            <LinkNoStyles href={'/auth'}>
                <AuthButtonHomePage hidden={!isUser()}>Войти</AuthButtonHomePage>
            </LinkNoStyles>
            </SearchAndButtonContainer>
        </HeaderContainer>
    );
};

export default Header;