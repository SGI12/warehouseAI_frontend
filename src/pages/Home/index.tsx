'use client'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer"; 
import { Arrow, BlurImg, BriefCardMainPage, DragonBluredBlock, DragonImg, GetNeuralButton, H1MainPage, HeadersMainPageContainer, HomePageMainContainer, SubHeaderPink, TaskSolveInput } from "./styled";
import { ListWithStars } from "@/components/stars-list/styled";
import { isUser } from "@/http";






const HomePage = () => {
    
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
            <BlurImg/>
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
            <Footer/>
        </HomePageMainContainer>
        
    );
};

export default HomePage;