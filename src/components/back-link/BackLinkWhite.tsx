import { useRouter } from "next/navigation"
import { BackLinkArrow } from "../arrows/arrows"
import { BackLinkWhiteContainer } from "../containers/containers"
import { BackLinkText } from "../paragraphs/Paragraphs"
import { useState } from "react"


const BackLinkWhite = () => {
    const router = useRouter()
    return(
        <BackLinkWhiteContainer 
        onClick={() => {   
            
            router.back()}
        }
        >
            <BackLinkArrow src={'/arrow-back-white.svg'} alt="backarrow" width={24} height={24} />
            <BackLinkText >Назад</BackLinkText>
        </BackLinkWhiteContainer>
    )
}

export default BackLinkWhite