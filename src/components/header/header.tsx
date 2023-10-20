import { isUser } from "@/http";
import { AuthButtonHomePage } from "../buttons/button";
import { LinkNoStyles } from "../links/link";
import NavBar from "../navbar/NavBar";
import { SearchFieldMainPage } from "../search-field/styled";
import { HeaderContainer, LogoSmall, SearchAndButtonContainer } from "./styled";
import { usePathname } from "next/navigation";
import Image from "next/image";


const Header = () => {
    console.log(isUser())
    const pathname = usePathname();
    return (
        <HeaderContainer>
            <LogoSmall>
                <Image src="/logo_small.svg" alt="logo_small" width={80} height={80}/>
            </LogoSmall>
            <NavBar/>
            <SearchAndButtonContainer>
            <SearchFieldMainPage/>
            
            <LinkNoStyles href={'/auth'}>
                <AuthButtonHomePage hidden={isUser()}> Войти </AuthButtonHomePage>
            </LinkNoStyles>
            </SearchAndButtonContainer>
        </HeaderContainer>
    );
};

export default Header;