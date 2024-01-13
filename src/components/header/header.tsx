
import { useUserContext } from "@/context/context";
import { AuthButtonHomePage, ButtonShortStyled } from "../buttons/button";
import { LinkNoStyles } from "../links/link";
import NavBar from "../navbar/NavBar";
import { SearchField } from "../search-field/styled";
import { HeaderContainer, LogoSmall, SearchAndButtonContainer } from "./styled";

import Image from "next/image";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Header = observer((activeModal: any) => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState('')
    const searchByNameHandler = (e:any) => {
        if (e.key === 'Enter') {
            router.push(`/search?field=name&value=${searchValue}`)
            
        }
    }
    const {user} = useUserContext()
    
    return (
        <HeaderContainer>
            <LogoSmall>
                <Image src="/logo_small.svg" alt="logo_small" width={80} height={80}/>
            </LogoSmall>
            <NavBar activeModal={activeModal}/>
            <SearchAndButtonContainer>
            <SearchField onChange={(e:any) => setSearchValue(e.target.value)} onKeyDown={searchByNameHandler}/>
            {!user.isAuth &&
            <LinkNoStyles href={'/authpage'}>
                <AuthButtonHomePage> Войти </AuthButtonHomePage>

            </LinkNoStyles>
            }
            </SearchAndButtonContainer>
        </HeaderContainer>
    );
});

export default Header;