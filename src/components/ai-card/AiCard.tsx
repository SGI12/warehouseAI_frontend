import Image from "next/image"
import { AiBriefCard, AiBriefCardImage } from "./styled"
import { AiCardHeader, TextDefaultStyled } from "../paragraphs/Paragraphs"
import { StarsContainer, TagsContainer } from "../containers/containers"
import React, { ReactElement, useEffect } from "react"
import { AiCardButton, AiRemoveButton, ButtonShortStyled } from "../buttons/button"
import { Arrow } from "../icons/icons"
import { LinkNoStyles } from "../links/link"
import { removeAIFromFavorites } from "@/http/UserApi"
import {useState} from 'react'
import { usePathname } from "next/navigation"
import { Rating } from "@mui/material/";
import { getAIRating } from "@/http/AIAPI"

export interface AiCardProps {
    id: string,
    img: string,
    name: string,
    rate: number,
    // tags?: Array<string>,

}
const AiCard = ({props}:any)  => {

    
    const AICardProps = {...props}

    const [rating, setRating] = useState(5)
    const [isRemoved, setRemoved] = useState(false)
    const name = "ChatGPT"
    const id = 'fc67112e-f61f-4bb9-8318-5c4c2b27ac03'
    //Временная залупа 
    // const tags:Array<string> = ['code', 'php', 'apiplatform'];
    const pathname = usePathname()
     //Временная залупа 
   const rate=5
    console.log(AICardProps)
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
    useEffect(() => {
        const getRating = () => {
            getAIRating(AICardProps.id)
            .then((res) => {
                setRating(res.data.avg_rating)
            })
            .catch((err) => {
                if (err.response?.status === 500)
                    setRating(0)
            })
        }
    getRating()
    }, [AICardProps])
    if (isRemoved) return (null)
    else
    return (
        
        <AiBriefCard>
            <Image src={props?.background_url || '/ai-card-img.jpg'} style={{borderRadius: "16px"}} alt="ai_card_image" width={353} height={200}/>
            <AiCardHeader>{AICardProps.name || name}</AiCardHeader>
            <StarsContainer>
               <Rating readOnly value={rating}/>
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