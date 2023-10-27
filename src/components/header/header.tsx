
import { useUserContext } from "@/context";
import { AuthButtonHomePage } from "../buttons/button";
import { LinkNoStyles } from "../links/link";
import NavBar from "../navbar/NavBar";
import { SearchFieldMainPage } from "../search-field/styled";
import { HeaderContainer, LogoSmall, SearchAndButtonContainer } from "./styled";

import Image from "next/image";


const Header = () => {
    
    const {isUser} = useUserContext()
   
    return (
        <HeaderContainer>
            <LogoSmall>
                <Image src="/logo_small.svg" alt="logo_small" width={80} height={80}/>
            </LogoSmall>
            <NavBar/>
            <SearchAndButtonContainer>
            <SearchFieldMainPage/>
            {!isUser &&
            <LinkNoStyles href={'/authpage'}>
                <AuthButtonHomePage> Войти </AuthButtonHomePage>
            </LinkNoStyles>
            }
            </SearchAndButtonContainer>
        </HeaderContainer>
    );
};

export default Header;