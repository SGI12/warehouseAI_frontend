import Image from "next/image"
import { AiBriefCard, AiBriefCardImage } from "./styled"
import { AiCardHeader, TextDefaultStyled } from "../paragraphs/Paragraphs"
import { StarsContainer, TagsContainer } from "../containers/containers"
import React, { ReactElement } from "react"
import { AiCardButton } from "../buttons/button"
import { Arrow } from "../arrows/arrows"
import { LinkNoStyles } from "../links/link"
import { useUserContext } from "@/context"


interface AiCardProps {
    id?: number,
    img?: string,
    title?: string,
    rate?: number,
    tags?: Array<string>,
    aiPageUrl?: string
}
const AiCard = ({...props}:AiCardProps)  => {
    const {isUser} = useUserContext()
    props.id = 1
    //Временная залупа 
    const tags:Array<string> = ['code', 'php', 'apiplatform'];
    
     //Временная залупа 
    const rating = props.rate=5

    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < rating; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }

    return (
        <AiBriefCard>
            <Image src={props.img='/ai-card-img.jpg'} style={{borderRadius: "16px"}} alt="ai_card_image" width={353} height={200}/>
            <AiCardHeader>{props.title='ChatGPT'}</AiCardHeader>
            <StarsContainer>
               {starArray}
            </StarsContainer>
            <TagsContainer>
                {tags.map((tag) =>{
                    return <TextDefaultStyled key={tag}>{`#`+ tag}</TextDefaultStyled>
                })}
            </TagsContainer>
            <LinkNoStyles href={ isUser ? `/ai_description/${props.id}` : `/authpage`}>
            <AiCardButton>Подробнее <Arrow/></AiCardButton>
            </LinkNoStyles>
        </AiBriefCard>
    )
}

export default AiCard