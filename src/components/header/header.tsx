import { AuthButtonHomePage } from "../buttons/Button";
import { LinkNoStyles } from "../links/Link";
import NavBar from "../navbar/NavBar";
import { SearchFieldMainPage } from "../search-field/styled";
import { HeaderContainer, LogoSmall } from "./styled";


const Header = () => {
    return (
        <HeaderContainer>
            <LogoSmall>
                <img src="/logo_small.svg" alt="logo_small"/>
            </LogoSmall>
            <NavBar/>
            <SearchFieldMainPage/>
            <LinkNoStyles href={'/Auth'}>
            <AuthButtonHomePage>Войти</AuthButtonHomePage>
            </LinkNoStyles>
        </HeaderContainer>
    );
};

export default Header;