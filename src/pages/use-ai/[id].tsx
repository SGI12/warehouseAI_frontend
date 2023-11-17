import Loader from "@/components/Loader/Loader";
import { UseAiPageBg } from "@/components/absolute-blocks/ai/AiDesciptionBg";
import { AiRequestCircle } from "@/components/absolute-blocks/blur-circles/BlurCircle";
import BackLinkWhite from "@/components/back-link/BackLinkWhite";
import { ShadowButton } from "@/components/buttons/button";
import UseAIInput from "@/components/ai-input/AiInput";
import CharCounter from "@/components/ai-input/AiInput";
import { AIDescTag, StarsContainer, UseAiPageMainContainer, UseAiRequestContainer, UseAiTagsHorizontalContainer } from "@/components/containers/containers"
import Header from "@/components/header/header"
import { H1WithPadding, H2Styled } from "@/components/headers-text/HeaderText";
import {  SuccessText, TextLargeStyled } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context";
import { getAIById, sendAIRequest } from "@/http/AIAPI";
import { check } from "@/http/AuthAPI";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/footer/footer";
import { LoadingRing } from "@/components/loading-ring/LoadingRing";

const UseAiPage = () => {
    const {id}:any = useParams()
    const ref = useRef<HTMLHeadingElement>(null);
    interface IAIProps {
        name: string,
        description: string,
    }
    const [AIData, setAIData] = useState<IAIProps>({
        name: '',
        description: '',
    })
    const starArray:Array<React.ReactElement> = [];
    for (let i = 0; i < 5; i++) {
        starArray.push(<Image key={i} src={'/star-rate.svg'} alt="star" width={32} height={32}/>)
    }
    const [reqText, setText] = useState('')
    const router = useRouter()
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [answer, setAnwser] = useState('')
    const [requestLoading, setRequestLoading] = useState(false)
    const [copied, setCopied] = useState(false)
    const [animatedText, setAnimated] = useState(false)
    const sendRequsetHandler = () => {
        if (reqText != '' && reqText != 'Запрос не может быть пустым.') {
        setRequestLoading(true)
        sendAIRequest(id, reqText)
        .then((res) => {
            setAnwser(res.data.choices[0].message.content)
            setRequestLoading(false)
            if (ref.current)
            ref.current.scrollIntoView({ behavior: 'smooth' });
        })
        .catch((e:any) => {
            console.log(e.response?.data)
            setRequestLoading(false)
        })
        }
        else {
            setText('Запрос не может быть пустым.')
        }
        
    }

    const copyClickHandler = () => {

        navigator.clipboard.writeText(answer)
        setAnimated(true)
        setCopied(true)
        setTimeout(() => setAnimated(false), 500)
    }
    const fetchData =  () => {
        
            check().then(() => { 
                getAIData()
                user.setIsAuth(true)
            })
            .catch((err) => {
                if (err.response?.status === 401 || err.response?.status === 404)
                    router.push('/')
                console.log(err.response?.data.message)
            })  
    }

    const getAIData = () => {
        getAIById(id)
        .then((AIres) => {
        setAIData({
            ...AIData,
            name: AIres.data.name,
            description: AIres.data.description,
        })
        setTimeout(() => setLoading(false), 1000)
    })
}
    useEffect(() => {
        fetchData();
        },[user]);

    if (isLoading) {
        return <Loader/>
    }
    else 
    return (
        <>
        <style global jsx>{`
        html,
        body {
          background: #1A1A1A;
        }
        `}</style>
        <UseAiPageMainContainer>
            <UseAiPageBg background="/use-ai-bg.jpg"/>
            <Header/>
            <BackLinkWhite/>
            <H1WithPadding color="#ffffff">{AIData.name}</H1WithPadding>
            <UseAiTagsHorizontalContainer>
                <AIDescTag><TextLargeStyled color="#ffffff">#code</TextLargeStyled></AIDescTag>
                <AIDescTag><TextLargeStyled color="#ffffff"> #php</TextLargeStyled></AIDescTag>
                <AIDescTag><TextLargeStyled color="#ffffff"> #apiplaform</TextLargeStyled></AIDescTag>
            </UseAiTagsHorizontalContainer>
            <StarsContainer>
                {starArray}
            </StarsContainer>
            
            <UseAiRequestContainer>
                <AiRequestCircle/>
                <H2Styled color="#ffffff">Введите текст запроса</H2Styled>
                <UseAIInput text={reqText} setText={setText}/>
                {!requestLoading && <ShadowButton onClick={sendRequsetHandler}>Отправить запрос</ShadowButton>}
                {requestLoading && <LoadingRing/>}
            </UseAiRequestContainer>
            <UseAiRequestContainer>
                <H2Styled ref={ref} color="#ffffff">Примите результат</H2Styled>
            
                <UseAIInput  text={answer} readonly />
               
                {copied && <SuccessText className={animatedText ? 'animated' : ''}>Текст скопирован в буфер обмена.</SuccessText>}
                <ShadowButton onClick={copyClickHandler}>Скопировать текст</ShadowButton>
            </UseAiRequestContainer>
            <Footer/>
        </UseAiPageMainContainer>
        
        </>
    )
}

export default UseAiPage