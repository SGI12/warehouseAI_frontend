import { PasswordRecoveryMainContainer } from "@/components/containers/containers"
import {  LogoResetPass, LogoResetPassContainer } from "@/components/logo/logo"
import PassResetBlock from "@/components/password-reset-block/PassResetBlock"

import Image from "next/image"


const PasswordRecovery = () => {
    return (
        <PasswordRecoveryMainContainer>
            <LogoResetPassContainer>
            <LogoResetPass>
                <Image src={'/logo_big.svg'} width={120} height={120} alt="logo"/>
            </LogoResetPass>
            </LogoResetPassContainer>
            <PassResetBlock/>
            
        </PasswordRecoveryMainContainer>
    )
}

export default PasswordRecovery