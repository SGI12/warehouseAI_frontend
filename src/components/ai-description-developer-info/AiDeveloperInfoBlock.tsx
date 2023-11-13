import Image from "next/image"
import { AiDeveloperInfoMainContainer, DeveloperPictureAndNickNameContainer } from "../containers/containers"
import { H2Styled } from "../headers-text/HeaderText"
import { SubHeaderStyled } from "../paragraphs/Paragraphs"


const AiDeveloperBlock = ({developerData}:any) => {
    return (
        <AiDeveloperInfoMainContainer>
            <H2Styled color="#ffffff">Разработчик</H2Styled>
            <DeveloperPictureAndNickNameContainer>
                <Image width={92} height={92} style={{borderRadius: '50%'}} alt="dev_avatar" src={developerData.picture}/>
                <SubHeaderStyled color="#ffffff">{developerData.name}</SubHeaderStyled>
            </DeveloperPictureAndNickNameContainer>
        </AiDeveloperInfoMainContainer>
    )
}

export default AiDeveloperBlock