import Loader from "@/components/Loader/Loader";
import { AiDescriptionBg } from "@/components/absolute-blocks/ai-description/AiDesciptionBg";
import AiBriefInfo from "@/components/ai-brief-info-block/AiBriefInfoBlock";
import BackLinkWhite from "@/components/back-link/BackLinkWhite";

import { AIDescTag, AIDescTagsContainer, AiBriefInfoContainer, AiDescriptionContainer, AiInfo, AiInfoAndDeveloperContaner, UseAiContainer } from "@/components/containers/containers";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header"
import { H2Styled } from "@/components/headers-text/HeaderText";
import { TextDefaultStyled, TextLargeStyled } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context"
import { check } from "@/http/AuthAPI";
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
            if (err.response?.status === 401)
                 router.push('/authpage')
            
            else console.log(err.response?.data.message)
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
            <BackLinkWhite/>
            <UseAiContainer>
                <AiBriefInfo/>  
                <AIDescTagsContainer>
                    <AIDescTag><TextLargeStyled color="#ffffff">#code</TextLargeStyled></AIDescTag>
                    <AIDescTag><TextLargeStyled color="#ffffff"> #php</TextLargeStyled></AIDescTag>
                    <AIDescTag><TextLargeStyled color="#ffffff"> #apiplaform</TextLargeStyled></AIDescTag>
                </AIDescTagsContainer>
            </UseAiContainer>
            <AiInfoAndDeveloperContaner>
                <AiInfo>
                    <H2Styled color="#ffffff">Описание</H2Styled>
                    <TextDefaultStyled color="#ffffff">
                    ChatGPT — чат-бот с искусственным интеллектом, 
                    разработанный компанией OpenAI и способный работать в диалоговом режиме, 
                    поддерживающий запросы на естественных языках. Система способна отвечать на вопросы,
                    генерировать тексты на разных языках, включая русский, относящиеся к различным предметным областям.
                    </TextDefaultStyled>
                </AiInfo>
            </AiInfoAndDeveloperContaner>
            <Footer/>
            
        </AiDescriptionContainer>
    )
}

export default AiDescriptionPage