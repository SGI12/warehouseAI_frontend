import Loader from "@/components/Loader/Loader";
import { AiDescriptionBg } from "@/components/absolute-blocks/ai-description/AiDesciptionBg";
import AiBriefInfo from "@/components/ai-brief-info-block/AiBriefInfoBlock";
import AiDeveloperBlock from "@/components/ai-description-developer-info/AiDeveloperInfoBlock";
import BackLinkWhite from "@/components/back-link/BackLinkWhite";

import { AIDescTag, AIDescTagsContainer, AiBriefInfoContainer, AiDescriptionContainer, AiInfo, AiInfoAndDeveloperContaner, UseAiContainer } from "@/components/containers/containers";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header"
import { H2Styled } from "@/components/headers-text/HeaderText";
import { TextDefaultStyled, TextLargeStyled } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context"
import { getAIById } from "@/http/AIAPI";
import { check } from "@/http/AuthAPI";
import { getUserById } from "@/http/UserApi";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const AiDescriptionPage = () => {
    const router = useRouter()
    const {user} = useUserContext() 
    const [isLoading, setLoading] = useState(true);

    const {id}:any = useParams()

    interface IAIProps {
        name: string,
        description: string,
        used: number,
        developerId: string,
    }

    interface IDeveloperProps {
        name: string,
        picture: string,
    }


    const [AIData, setAIData] = useState<IAIProps>({
        name: '',
        description: '',
        used: 0,
        developerId: '',
    })

    const [developerData, setDevData] = useState<IDeveloperProps>({
        name: '',
        picture: ''
    })
    useEffect(() => {
    const checkSession = async () => {
        try {
            await check()
            user.setIsAuth(true)

        }
        catch(err:any)  {
            if (err.response?.status === 401)
                router.push('/authpage')

            console.log(err.response?.data.message)
        };
    }
    const getAIData = () => {
                getAIById(id)
                .then((AIres) => {
                setAIData({
                    ...AIData,
                    name: AIres.data.name,
                    description: AIres.data.description,
                    used: AIres.data.used,
                })
                getUserById(AIres.data.owner)
                .then((devRes) => {
                    let pictureUrl = '/mock-avatar.jpg'
                    if (devRes.data.picture != '') {
                        pictureUrl = devRes.data.picture
                    }
                    setDevData({
                        ...developerData,
                        name: devRes.data.username,
                        picture: pictureUrl
                    })
                })
                setTimeout(() => setLoading(false), 1000)
 
            }).catch((err) => {
                console.log(err.response.status)
            })
                            

        }
    checkSession();
    getAIData();
    },[user]);
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
                <AiBriefInfo AIData={AIData}/>  
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
                    {AIData.description}
                    </TextDefaultStyled>
                </AiInfo>
                <AiDeveloperBlock developerData={developerData}/>
            </AiInfoAndDeveloperContaner>
            <Footer/>
            
        </AiDescriptionContainer>
    )
}

export default AiDescriptionPage