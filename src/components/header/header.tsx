
import { AuthButtonHomePage } from "../buttons/button";
import { LinkNoStyles } from "../links/link";
import NavBar from "../navbar/NavBar";
import { SearchFieldMainPage } from "../search-field/styled";
import { HeaderContainer, LogoSmall, SearchAndButtonContainer } from "./styled";

import Image from "next/image";


const Header = ({...props}) => {

    return (
        <HeaderContainer>
            <LogoSmall>
                <Image src="/logo_small.svg" alt="logo_small" width={80} height={80}/>
            </LogoSmall>
            <NavBar loggedIn = {props.loggedIn}/>
            <SearchAndButtonContainer>
            <SearchFieldMainPage/>
            {!props.loggedIn &&
            <LinkNoStyles href={'/Auth'}>
                <AuthButtonHomePage> Войти </AuthButtonHomePage>
            </LinkNoStyles>
            }
            </SearchAndButtonContainer>
        </HeaderContainer>
    );
};

export default Header;