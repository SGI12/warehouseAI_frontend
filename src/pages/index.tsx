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







const HomePage = ()  => {
    console.log(checkCookies())
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const checkSession = async () => {
        try {
            await check()
            user.setIsAuth(true)
            setTimeout(() => setLoading(false), 1000)
        }
            catch(err:any)  {
            setTimeout(() => setLoading(false), 1000)
            console.log(err.response?.data.message)
        };
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
            <DragonImg src={'/dragon-img.png'} alt="dragonimg" width={880} height={650}/>
            <BriefCardMainPage>
                <ListWithStars>
                    <li>Быстрый поиск инструмента под нужную задачу</li>
                    <li>Простая монетизация проектов</li>
                    <li>Удобный интерфейс для любого пользователя</li>
                </ListWithStars>
            </BriefCardMainPage>
            <BlurDragonImg/>
            </DragonBluredBlock>
            
            <HeadersMainPageContainer>
                <SubHeaderPink>Всего лишь в два клика</SubHeaderPink>
                <H1MainPage color="#ffffff">Оживите свои идеи с помощью нейросетей</H1MainPage>
                <TaskSolveInput placeholder="Какую задачу хотите решить?"/>
                <GetNeuralButton>
                    Подобрать нейросеть
                    <Arrow/>
                </GetNeuralButton>
                
            </HeadersMainPageContainer> 
            <TopAIHeader color="#ffffff">
            <BluredOrangeCircleMainPageLeft/>
                Топ нейронок этой недели
            </TopAIHeader>
            <AiSlider/>

            <TopAIHeader color="#ffffff">
            <BluredOrangeCircleMainPageRight/>
                Топ нейронок этого месяца
            </TopAIHeader>
            <AiSlider/>

            <Footer/>
        </HomePageMainContainer>
        
    );
};

export default HomePage;