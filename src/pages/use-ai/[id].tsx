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
import {  SuccessText } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context";
import { getAIById, getAIRating, sendAIRequest, setAIRating } from "@/http/AIAPI";
import { check } from "@/http/AuthAPI";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/footer/footer";
import { LoadingRing } from "@/components/loading-ring/LoadingRing";
import { Rating } from "@mui/material/";

const UseAiPage = () => {
    const {id}:any = useParams()
    const ref = useRef<HTMLHeadingElement>(null);
    interface IAIProps {
        background: string,
        name: string,
        description: string,
    }
    const [AIData, setAIData] = useState<IAIProps>({
        background: '',
        name: '',
        description: '',
    })
    const starArray:Array<React.ReactElement> = [];
    for (let i = 0; i < 5; i++) {
        starArray.push(<Image key={i} src={'/star-rate.svg'} alt="star" width={32} height={32}/>)
    }
    const [rating, setRating] = useState<number | null>(0);
    console.log(rating)
    const [reqText, setText] = useState('')
    const router = useRouter()
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [answer, setAnwser] = useState('')
    const [requestLoading, setRequestLoading] = useState(false)
    const [copied, setCopied] = useState(false)
    const [isReadable, setReadable] = useState(false)
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
    const keyPressHandler = (e:any) => {
        
        if (e.key === "Enter") {
            e.preventDefault()
            sendRequsetHandler()
        }
    }
    const copyClickHandler = () => {

        navigator.clipboard.writeText(answer)
        setAnimated(true)
        setCopied(true)
        setTimeout(() => setAnimated(false), 500)
    }

    
    
    const fetchData =  () => {
        
            check()
            .then(() => { 
                getAIData()
               
            })
            .then(() => getRating())

            .then(() =>  user.setIsAuth(true))
            .catch((err) => {
                if (err.response?.status === 401 || err.response?.status === 404)
                    router.push('/')
                console.log(err.response?.data.message)
            })  
    }

    const getAIData = () => {
        getAIById(id)
        .then((AIres) => {
        console.log(AIres.data)
        setAIData({
            ...AIData,
            background: AIres.data.background_url,
            name: AIres.data.name,
            description: AIres.data.description,
        })
        setTimeout(() => setLoading(false), 1000)
    })
}
    const getRating = () => {
        getAIRating(id)
        .then((res) => {
            setRating(res.data.avg_rating)
        })

        .catch((err) => {console.log(err.response?.status)})
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
            <UseAiPageBg background={AIData.background}/>
            <Header/>
            <BackLinkWhite/>
            <H1WithPadding color="#ffffff">{AIData.name}</H1WithPadding>
            {isReadable && <SuccessText>Спасибо за оценку!</SuccessText>}
            {/* <UseAiTagsHorizontalContainer>
                <AIDescTag><TextLargeStyled color="#ffffff">#code</TextLargeStyled></AIDescTag>
                <AIDescTag><TextLargeStyled color="#ffffff"> #php</TextLargeStyled></AIDescTag>
                <AIDescTag><TextLargeStyled color="#ffffff"> #apiplaform</TextLargeStyled></AIDescTag>
            </UseAiTagsHorizontalContainer> */}
            <StarsContainer>
                <Rating 
                onChange={(e, newValue) => {
                    console.log(newValue)
                    setAIRating(id, newValue || rating).then((res) => console.log(res.data))
                    setRating(newValue || rating);
                    setReadable(true)
                    }} 
                readOnly={isReadable}
                size="large" 
                
                value={rating}/>
                
            </StarsContainer>
            
            <UseAiRequestContainer>
                <AiRequestCircle/>
                <H2Styled color="#ffffff">Введите запрос</H2Styled>
                <div onKeyDown={keyPressHandler}><UseAIInput type="text" text={reqText} setText={setText}/></div>
                {!requestLoading && <ShadowButton onClick={sendRequsetHandler}>Отправить запрос</ShadowButton>}
                {requestLoading && <LoadingRing/>}
            </UseAiRequestContainer>
            <UseAiRequestContainer>
                <H2Styled ref={ref} color="#ffffff">Примите результат</H2Styled>
            
                <UseAIInput type="text"  text={answer} readonly />
               
                {copied && <SuccessText className={animatedText ? 'animated' : ''}>Текст скопирован в буфер обмена.</SuccessText>}
                <ShadowButton onClick={copyClickHandler}>Скопировать текст</ShadowButton>
            </UseAiRequestContainer>
            <Footer/>
        </UseAiPageMainContainer>
        
        </>
    )
}

export default UseAiPage