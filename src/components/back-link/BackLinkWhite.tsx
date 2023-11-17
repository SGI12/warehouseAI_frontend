import { useRouter } from "next/navigation"

import { BackLinkWhiteContainer } from "../containers/containers"
import { BackLinkText } from "../paragraphs/Paragraphs"
import { useState } from "react"
import { BackLinkArrow } from "../icons/icons"


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