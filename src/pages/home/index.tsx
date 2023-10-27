'use client'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer"; 
import { ListWithStars } from "@/components/stars-list/styled";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetNeuralButton } from "@/components/buttons/button";
import { HeadersMainPageContainer, HomePageMainContainer } from "@/components/containers/containers";
import { DragonBluredBlock } from "@/components/absolute-blocks/DragonBluredBlock";
import { DragonImg } from "@/components/absolute-blocks/DragonImg";
import { BlurDragonImg, BluredOrangeCircleMainPageLeft, BluredOrangeCircleMainPageRight } from "@/components/absolute-blocks/blur-circles/BlurCircle";
import { SubHeaderPink } from "@/components/paragraphs/Paragraphs";
import { H1MainPage, TopAIHeader } from "@/components/headers-text/HeaderText";
import { TaskSolveInput } from "@/components/inputs/TextInputs";
import { Arrow } from "@/components/arrows/arrows";
import { BriefCardMainPage } from "@/components/brief-card/styled";
import AiSlider from "@/components/ai-slider/AiSlider";
import { useUserContext } from "@/context";







const HomePage = ()  => {
    
    const {isUser, setIsUser} = useUserContext()
    
    useEffect(() => {
    const apiUrl = 'https://api.warehousai.com/api/auth/whoami';
      axios.get(apiUrl, {withCredentials: true})
      .then((res) => {
        if (res.status === 200) {
            setIsUser(true);
        }
      })
      .catch((err) => {
        console.log(err.response?.data)
    });
    });

    return (
       
        <HomePageMainContainer>
            <Header/>

            <DragonBluredBlock>
            <DragonImg/>
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