import BackLink from "../back-link/BackLinkWhite"
import { AiBriefInfoContainer, ButtonAndStatsContainer, StarsContainer } from "../containers/containers"
import { AiDescriptionH1 } from "../headers-text/HeaderText"
import { AiCardProps } from "../ai-card/AiCard"
import { ReactElement } from "react"
import Image from "next/image"
import { ButtonStyled, ShadowButton } from "../buttons/button"
import { UserCountList } from "../lists/styled"
import { useParams } from "next/navigation"
import { LinkNoStyles } from "../links/link"

const AiBriefInfo = ({AIData}:any) => {
    const {id}:any = useParams()
    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < 5; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }
    return(
        <AiBriefInfoContainer>
            <AiDescriptionH1>{AIData.name}<Image style={{cursor: 'pointer'}} src={'/favorite-icon.svg'} alt="bookmark" width={32} height={32}/></AiDescriptionH1>
            <StarsContainer>
            {starArray}
            </StarsContainer>
            <ButtonAndStatsContainer>
                <LinkNoStyles href={`/use-ai/${id}`}>
                <ShadowButton>Воспользоваться</ShadowButton>
                </LinkNoStyles>
                <UserCountList>{AIData.used} запросов</UserCountList>
            </ButtonAndStatsContainer>
        </AiBriefInfoContainer>
    )
}

export default AiBriefInfo