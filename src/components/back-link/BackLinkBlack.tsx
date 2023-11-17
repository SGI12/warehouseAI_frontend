import { useRouter } from "next/navigation"
import { BackLinkArrow } from "../icons/icons"
import { BackLinkBlackContainer } from "../containers/containers"
import { BackLinkText } from "../paragraphs/Paragraphs"
import { useState } from "react"


const BackLinkBlack = () => {
    const router = useRouter()
    const [active, setActive] = useState(false)
    return(
        <BackLinkBlackContainer 
        onClick={() => {   
            setActive(true)
            router.back()}
        }
        className={active ? 'active' : undefined}>
            <BackLinkArrow src={'/arrow-back-black.svg'} alt="backarrow" width={24} height={24} />
            <BackLinkText color="#000000">Назад</BackLinkText>
        </BackLinkBlackContainer>
    )
}

export default BackLinkBlack