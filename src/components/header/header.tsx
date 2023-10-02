import NavBar from "../navbar/NavBar";
import { HeaderContainer, LogoSmall } from "./styled";


const Header = () => {
    return (
        <HeaderContainer>
            <LogoSmall>
                <img src="/logo_small.svg" alt="logo_small"/>
            </LogoSmall>
            <NavBar/>
        </HeaderContainer>
    );
};

export default Header;