import BackLink from "../back-link/BackLink"
import { AiBriefInfoContainer, ButtonAndStatsContainer, StarsContainer } from "../containers/containers"
import { AiDescriptionH1 } from "../headers-text/HeaderText"
import { AiCardProps } from "../ai-card/AiCard"
import { ReactElement } from "react"
import Image from "next/image"
import { ButtonStyled, UseAIButton } from "../buttons/button"
import { UserCountList } from "../lists/styled"

const AiBriefInfo = () => {
    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < 5; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }
    return(
        <AiBriefInfoContainer>
            <AiDescriptionH1>Chat GPT<Image src={'/favorite-icon.svg'} alt="bookmark" width={32} height={32}/></AiDescriptionH1>
            <StarsContainer>
            {starArray}
            </StarsContainer>
            <ButtonAndStatsContainer>
                <UseAIButton>Воспользоваться</UseAIButton>
                <UserCountList>127K пользователей</UserCountList>
            </ButtonAndStatsContainer>
        </AiBriefInfoContainer>
    )
}

export default AiBriefInfo