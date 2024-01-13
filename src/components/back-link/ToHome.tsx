import { useRouter } from "next/navigation"

import { BackLinkWhiteContainer } from "../containers/containers"
import { BackLinkText } from "../paragraphs/Paragraphs"



const ToHomePage = () => {
    const router = useRouter()
    return(
        <BackLinkWhiteContainer 
        onClick={() => {   
            
            router.push('/')}
        }
        >
            
            <BackLinkText >На главную</BackLinkText>
        </BackLinkWhiteContainer>
    )
}

export default ToHomePage