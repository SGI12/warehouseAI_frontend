import Image from "next/image"
import { AiBriefCard, AiBriefCardImage } from "./styled"
import { AiCardHeader, TextDefaultStyled } from "../paragraphs/Paragraphs"
import { StarsContainer, TagsContainer } from "../containers/containers"
import React, { ReactElement } from "react"
import { AiCardButton } from "../buttons/button"
import { Arrow } from "../icons/icons"
import { LinkNoStyles } from "../links/link"



export interface AiCardProps {
    id?: string,
    img?: string,
    name?: string,
    rate?: number,
    tags?: Array<string>,

}
const AiCard = ({props}:any)  => {
    const AICardProps = {...props}
    const name = "ChatGPT"
    const id = '069c6d96-4ccd-4f65-a48b-5d51d39a9cd1'
    //Временная залупа 
    const tags:Array<string> = ['code', 'php', 'apiplatform'];
    
     //Временная залупа 
   const rate=5

    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < rate; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }

    return (
        <AiBriefCard>
            <Image src={'/ai-card-img.jpg'} style={{borderRadius: "16px"}} alt="ai_card_image" width={353} height={200}/>
            <AiCardHeader>{AICardProps.name || name}</AiCardHeader>
            <StarsContainer>
               {starArray}
            </StarsContainer>
            <TagsContainer>
                {tags.map((value:string, index:number) =>  <TextDefaultStyled key={index}>{`#`+ value}</TextDefaultStyled>)}
            </TagsContainer>
            <LinkNoStyles href={`/ai_description/${AICardProps.id || id}`}>
            <AiCardButton>Подробнее <Arrow/></AiCardButton>
            </LinkNoStyles>
        </AiBriefCard>
    )
}

export default AiCard