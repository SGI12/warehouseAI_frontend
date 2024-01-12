'use client'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer"; 
import { ListWithStars } from "@/components/lists/styled";
import { useEffect, useState } from "react";
import { GetNeuralButton } from "@/components/buttons/button";
import { HeadersMainPageContainer, HomePageMainContainer } from "@/components/containers/containers";
import { DragonBluredBlock } from "@/components/absolute-blocks/home/DragonBluredBlock";
import { DragonImg } from "@/components/absolute-blocks/home/DragonImg";
import { BlurDragonImg, BluredOrangeCircleMainPageLeft, BluredOrangeCircleMainPageRight } from "@/components/absolute-blocks/blur-circles/BlurCircle";
import { SubHeaderPink } from "@/components/paragraphs/Paragraphs";
import { H1MainPage, TopAIHeader } from "@/components/headers-text/HeaderText";
import { TaskSolveInput } from "@/components/inputs/TextInputs";
import { Arrow } from "@/components/icons/icons";
import { BriefCardMainPage } from "@/components/brief-card/styled";
import AiSlider from "@/components/ai-slider/AiSlider";
import { useUserContext } from "@/context/context";
import { check, checkCookies } from "@/http/AuthAPI";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";







const HomePage = ()  => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState('')
    const searchByNameHandler = (e:any) => {
        if (e.key === 'Enter') {
            router.push(`/search?field=description&value=${searchValue}`)
        }
    }

    const searchAIClickHandler = () => {
        router.push(`/search?field=description&value=${searchValue}`)
    }
    checkCookies()
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const checkSession =  () => {
        check()
        .then((res) => {
            if (user.isAuth == false) {
                console.log('asdasdad')
                user.setIsAuth(true)
            }
            setLoading(false)
            
        })
        .catch((err) => {
            setLoading(false)
            console.log(err.response?.data.message)
        })
       
    }
    
    useEffect(() => {
    checkSession();
    },[user]);
        if (isLoading) {
        return <Loader/>
    }
    else 
    return (
       
        <HomePageMainContainer>
            <Header/>
            <DragonBluredBlock>
            <DragonImg src={'/dragon-img.png'} alt="dragonimg" width={880}  height={650} blurDataURL="data:..." placeholder="blur"/>
            <BriefCardMainPage>
                <ListWithStars>
                    <li>Быстрый поиск инструмента под нужную задачу</li>
                    <li>Простая монетизация проектов</li>
                    <li>Удобный интерфейс для любого пользователя</li>
                </ListWithStars>
            </BriefCardMainPage>
            <BlurDragonImg src={'/dragon-blur-circle.png'} alt="bluredCircle" blurDataURL="data:..." placeholder="blur" loading="lazy" width={820} height={340}/>
            </DragonBluredBlock>
            
            <HeadersMainPageContainer>
                <SubHeaderPink>Всего лишь в два клика</SubHeaderPink>
                <H1MainPage color="#ffffff">Оживите свои идеи с помощью нейросетей</H1MainPage>
                <TaskSolveInput autoComplete="on" onChange={(e:any) => setSearchValue(e.target.value)} onKeyDown={searchByNameHandler} placeholder="Какую задачу хотите решить?"/>
                <GetNeuralButton onClick={searchAIClickHandler}>
                    Подобрать нейросеть
                    <Arrow/>
                </GetNeuralButton>
                
            </HeadersMainPageContainer> 
            <TopAIHeader color="#ffffff"> 
            <BluredOrangeCircleMainPageLeft src={'/wave.jpg'} blurDataURL="data:..." placeholder="blur" alt="waveCircle" width={544} height={506} loading="lazy"/>
                Топ нейронок этой недели
            </TopAIHeader>
            <AiSlider/>

            <TopAIHeader color="#ffffff">
            <BluredOrangeCircleMainPageRight src={'/top-ai-main-page-right.jpg'} blurDataURL="data:..." placeholder="blur" alt="rightCircle" width={401} height={354} loading="lazy"/>
                Топ нейронок этого месяца
            </TopAIHeader>
            <AiSlider/>

            <Footer/>
        </HomePageMainContainer>
        
    );
};

export default HomePage;