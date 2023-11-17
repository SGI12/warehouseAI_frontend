import BackLink from "../back-link/BackLinkWhite"
import { AiBriefInfoContainer, ButtonAndStatsContainer, StarsContainer } from "../containers/containers"
import { AiDescriptionH1 } from "../headers-text/HeaderText"
import { ReactElement } from "react"
import Image from "next/image"
import {  ShadowButton } from "../buttons/button"
import { UserCountList } from "../lists/styled"
import { useParams } from "next/navigation"
import { LinkNoStyles } from "../links/link"
import FavoriteIcon from "../icons/FavoriteIcon"
import {useState} from 'react'
import { addAIToFavorites, removeAIFromFavorites } from "@/http/UserApi"
import { SuccessText } from "../paragraphs/Paragraphs"
const AiBriefInfo = ({AIData}:any) => {
    const {id}:any = useParams()
    const starArray:Array<ReactElement> = [];
        for (let i = 0; i < 5; i++) {
            starArray.push(<Image src={'/star-rate.svg'} alt="star" width={16} height={16}/>)
        }
    const [activeIcon, setActiveIcon] = useState(false)
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
                console.log(err.response.status)
            })
        }
        
    }
    return(
        <AiBriefInfoContainer>
            <SuccessText >{reqText}</SuccessText>
            <AiDescriptionH1>{AIData.name}<span onClick={iconClickHandler}><FavoriteIcon isOpen={activeIcon}/> </span></AiDescriptionH1>
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