import Loader from "@/components/Loader/Loader";
import { AiDescriptionBg } from "@/components/absolute-blocks/ai-description/AiDesciptionBg";
import AiBriefInfo from "@/components/ai-brief-info-block/AiBriefInfoBlock";

import { AIDescTag, AIDescTagsContainer, AiBriefInfoContainer, AiDescriptionContainer, UseAiContainer } from "@/components/containers/containers";
import Header from "@/components/header/header"
import { TextLargeStyled } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context"
import { check } from "@/http/UserAPI";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const AiDescriptionPage = () => {
    const router = useRouter()
    const {user} = useUserContext() 
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        check()
          .then((res) => {
            user.setIsAuth(true)
            setTimeout(() => setLoading(false), 1000)
            
            
          })
          .catch((err) => {
            if (err.response.status === 401)
                 router.push('/authpage')
            
            else console.log(err.message)
        });
        });
    if (isLoading) {
        return <Loader/>
    }
    else 
    return (
        <AiDescriptionContainer>
            <AiDescriptionBg/>
            <Header/>
            <UseAiContainer>
                <AiBriefInfo/>  
                <AIDescTagsContainer>
                    <AIDescTag><TextLargeStyled color="#ffffff">#code</TextLargeStyled></AIDescTag>
                    <AIDescTag><TextLargeStyled color="#ffffff"> #php</TextLargeStyled></AIDescTag>
                    <AIDescTag><TextLargeStyled color="#ffffff"> #apiplaform</TextLargeStyled></AIDescTag>
                </AIDescTagsContainer>
            </UseAiContainer>
          
            
        </AiDescriptionContainer>
    )
}

export default AiDescriptionPage