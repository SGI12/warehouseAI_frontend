import {  useState } from "react"
import { DefaultPopUp } from "../Popup/Popup"
import { PopupMainContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { TextSmallStyled } from "../paragraphs/Paragraphs"

import { ButtonStyled } from "../buttons/button"


import { useRouter } from "next/navigation"


const RegistrationSuccessPopup = ({setActive, email}:any) => {
    const router = useRouter()
   
    const [animation, setAnimation] = useState('open')
    
    

    

    return (
        
        <PopupMainContainer>
            <DefaultPopUp className={animation}>
            <H2Styled>Подтверждение</H2Styled>
            <TextSmallStyled>
                На электронный адрес <br/>{email}<br/> было выслано письмо с ссылкой на подтверждение. Пожалуйста, проверьте ваш почтовый ящик.
            </TextSmallStyled>
            
            <ButtonStyled onClick={(() => {
                
                router.push('/authpage')
            })}>Бегу проверять!</ButtonStyled>
            </DefaultPopUp>
            
            
        </PopupMainContainer>
    )

}

export default RegistrationSuccessPopup