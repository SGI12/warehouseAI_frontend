import { useRouter } from "next/navigation"
import { BackLinkArrow } from "../arrows/arrows"
import { BackLinkontainer } from "../containers/containers"
import { BackLinkText } from "../paragraphs/Paragraphs"
import { useState } from "react"


const BackLink = () => {
    const router = useRouter()
    const [active, setActive] = useState(false)
    return(
        <BackLinkontainer 
        onClick={() => {   
            setActive(true)
            router.back()}
        }
        className={active ? 'active' : undefined}>
            <BackLinkArrow src={'/arrow-back.svg'} alt="backarrow" width={24} height={24} />
            <BackLinkText >Назад</BackLinkText>
        </BackLinkontainer>
    )
}

export default BackLink