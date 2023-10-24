import Image from "next/image"
import { AiBriefCard, AiBriefCardImage } from "./styled"
import { AiCardHeader, TextDefaultStyled } from "../paragraphs/P"
import { StarsContainer, TagsContainer } from "../containers/containers"
import React, { ReactElement } from "react"
import { AiCardButton } from "../buttons/button"
import { Arrow } from "../arrows/arrows"


interface AiCardProps {
  
    img?: string,
    title?: string,
    rate?: number,
    tags?: Array<string>,
    aiPageUrl?: string
}
const AiSliderCard = ({...props}:AiCardProps)  => {
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
                {tags.map((tag, index) =>{
                    return <TextDefaultStyled key={index}>{`#`+ tag}</TextDefaultStyled>
                })}
            </TagsContainer>
            <AiCardButton>Подробнее <Arrow/></AiCardButton>
        </AiBriefCard>
    )
}

export default AiSliderCard