import { PasswordRecoveryMainContainer } from "@/components/containers/containers"
import EmailCodeScreen from "@/components/email-code-screen/EmailCodeScreen"
import {  LogoResetPass, LogoResetPassContainer } from "@/components/logo/logo"
import PassResetBlock from "@/components/password-reset-block/PassResetBlock"
import Image from "next/image"
import {useState} from 'react'

const PasswordRecovery  = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    console.log(showPopUp)
    return (
        <PasswordRecoveryMainContainer>
            {showPopUp && <EmailCodeScreen setShowPopUp={setShowPopUp}/>}
            <LogoResetPassContainer>
            <LogoResetPass>
                <Image src={'/logo_big.svg'} width={120} height={120} alt="logo"/>
            </LogoResetPass>
            </LogoResetPassContainer>
            <PassResetBlock setShowPopUp={setShowPopUp}/>
        </PasswordRecoveryMainContainer>
    )
}

export default PasswordRecovery