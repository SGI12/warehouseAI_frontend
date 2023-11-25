
import { AiBriefInfoContainer, ButtonAndStatsContainer, StarsContainer } from "../containers/containers"
import { AiDescriptionH1 } from "../headers-text/HeaderText"
import { ReactElement, useEffect } from "react"
import Image from "next/image"
import {  ShadowButton } from "../buttons/button"
import { UserCountList } from "../lists/styled"
import { useParams } from "next/navigation"
import { LinkNoStyles } from "../links/link"
import FavoriteIcon from "../icons/FavoriteIcon"
import {useState} from 'react'
import { addAIToFavorites, removeAIFromFavorites } from "@/http/UserApi"
import { SuccessText } from "../paragraphs/Paragraphs"
import { Rating } from "@mui/material/";
const AiBriefInfo = ({AIData}:any) => {
    const {id}:any = useParams()
    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < 5; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }
    const [activeIcon, setActiveIcon] = useState(AIData.isFavorite)
    const [reqText, setReqText] = useState('')
        
    const iconClickHandler = () => {

        if (!activeIcon) {
            addAIToFavorites(id)
            .then((res) =>{
                console.log(res)
                setActiveIcon(true)
                setReqText('Нейросеть добавлена в избранное')
                
            })
            .catch((err) => {
                console.log(err.response.status)
            })
        } 
        else {
            removeAIFromFavorites(id)
            .then((res) => {
                console.log(res)
                setActiveIcon(false)
                setReqText('Нейросеть удалена из избранного')
            })
            .catch((err) => {
                console.log(err.response?.status)
            })
        }
        
    }
    const [ending, setEnding] = useState('')
    useEffect (() => {
        if (AIData.used%10 == 1) setEnding('запрос')
        else if (AIData.used%10 == 2 || AIData.used%10 == 4 || AIData.used%10 == 3) setEnding('запроса')
        else setEnding('запросов')
    }, [AIData.used])
    return(
        <AiBriefInfoContainer>
            <SuccessText >{reqText}</SuccessText>
            <AiDescriptionH1>{AIData.name}<span onClick={iconClickHandler}><FavoriteIcon isActive={activeIcon}/> </span></AiDescriptionH1>
            <StarsContainer>
            <Rating defaultValue={5} readOnly/>
            </StarsContainer>
            <ButtonAndStatsContainer>
                <LinkNoStyles href={`/use-ai/${id}`}>
                <ShadowButton>Воспользоваться</ShadowButton>
                </LinkNoStyles>
                <UserCountList>{AIData.used} {ending}</UserCountList>
            </ButtonAndStatsContainer>
        </AiBriefInfoContainer>
    )
}

export default AiBriefInfo