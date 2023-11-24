import Image from "next/image"
import { AiBriefCard, AiBriefCardImage } from "./styled"
import { AiCardHeader, TextDefaultStyled } from "../paragraphs/Paragraphs"
import { StarsContainer, TagsContainer } from "../containers/containers"
import React, { ReactElement } from "react"
import { AiCardButton, AiRemoveButton, ButtonShortStyled } from "../buttons/button"
import { Arrow } from "../icons/icons"
import { LinkNoStyles } from "../links/link"
import { removeAIFromFavorites } from "@/http/UserApi"
import {useState} from 'react'
import { usePathname } from "next/navigation"
import { Rating } from "@mui/material/";

export interface AiCardProps {
    id?: string,
    img?: string,
    name?: string,
    rate?: number,
    // tags?: Array<string>,

}
const AiCard = ({props}:any)  => {
    const AICardProps = {...props}
    const [rating, setRating] = useState(5)
    const [isRemoved, setRemoved] = useState(false)
    const name = "ChatGPT"
    const id = '0487b43e-b7cf-4a13-996e-315d2debf105'
    //Временная залупа 
    // const tags:Array<string> = ['code', 'php', 'apiplatform'];
    const pathname = usePathname()
     //Временная залупа 
   const rate=5

    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < rate; i++) {
            starArray.push(<Image key={i} src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }
    const removeAIClickHandler = () => {
        removeAIFromFavorites(props.id || id).then((res) => {
            console.log(res.data)
            setRemoved(true)
        })
        .catch((err) => {
            console.log(err.response.status)
        })
    }
    if (isRemoved) return (null)
    else
    return (
        
        <AiBriefCard>
            <Image src={props?.background_url || '/ai-card-img.jpg'} style={{borderRadius: "16px"}} alt="ai_card_image" width={353} height={200}/>
            <AiCardHeader>{AICardProps.name || name}</AiCardHeader>
            <StarsContainer>
               <Rating readOnly defaultValue={rate}/>
            </StarsContainer>
            <TagsContainer>
                {/* {tags.map((value:string, index:number) =>  <TextDefaultStyled key={index}>{`#`+ value}</TextDefaultStyled>)} */}
            </TagsContainer>
            <LinkNoStyles href={`/ai_description/${AICardProps.id || id}`}>
            <AiCardButton>Подробнее <Arrow/></AiCardButton>
            </LinkNoStyles>
            {pathname==='/favorites' && <AiRemoveButton onClick={removeAIClickHandler}>Удалить</AiRemoveButton>}
        </AiBriefCard>
    )
}

export default AiCard