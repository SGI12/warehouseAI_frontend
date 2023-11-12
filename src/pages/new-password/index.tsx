import BackLinkBlack from "@/components/back-link/BackLinkBlack"
import { PasswordRecoveryMainContainer } from "@/components/containers/containers"
import {  LogoResetPass, LogoResetPassContainer } from "@/components/logo/logo"
import ChangePassBlock from "@/components/new-password-block/new-password"

import Image from "next/image"


const PasswordRecovery  = () => {
    
    return (
        <PasswordRecoveryMainContainer>
            <BackLinkBlack/>
            <LogoResetPassContainer>
            <LogoResetPass>
                <Image src={'/logo_big.svg'} width={120} height={120} alt="logo"/>
            </LogoResetPass>
            </LogoResetPassContainer>
            <ChangePassBlock/>
            
        </PasswordRecoveryMainContainer>
    )
}

export default PasswordRecovery