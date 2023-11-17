import Loader from "@/components/Loader/Loader";
import AiCard from "@/components/ai-card/AiCard";
import { FilterButton } from "@/components/buttons/button";
import { FavoritesAiGridContainer, FavoritesPageMainContainer, FilterContainer, FilterMenuContainer, SearchAndFilterContainer } from "@/components/containers/containers"
import { FilterElement } from "@/components/filter-menu/FilterElement";
import Footer from "@/components/footer/footer";

import Header from "@/components/header/header"
import { H1WithPadding, H2Styled } from "@/components/headers-text/HeaderText";
import FilterIcon from "@/components/icons/FilterIcon";
import { TextDefaultStyled } from "@/components/paragraphs/Paragraphs";

import {  SearchFieldFavorites } from "@/components/search-field/styled";
import { useUserContext } from "@/context/context";
import { check } from "@/http/AuthAPI";
import { getUserFavoriteAI } from "@/http/UserApi";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";


const FavoritesPage = () => {
    const router = useRouter()
    const filterValues:Array<string> = ['По популярности', 'По оценкам',]
    const [isFilterOpen, setFilterOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [FavoriteAIData, setAIData] = useState<Array<any>>([])
    const filterHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilterOpen(!isFilterOpen)
    }
    
    const getAIData = async () => {
        getUserFavoriteAI()
        .then((res) => {
           setAIData(res.data?.favorite_ai)
           
        })
        .catch((e) => {
            console.log(e.response?.status)
        })
    }

    const checkSession = async () => {
        try {
            await check()
            user.setIsAuth(true)
        }
            catch(err:any)  {
            if (err.response.status === 404 || err.response.status === 401) {
                user.setIsAuth(false)
                router.push('/authpage')
            }
            setTimeout(() => setLoading(false), 1000)
            console.log(err.response?.data.message)
        };
    }
    useEffect(() => {
        checkSession();
        getAIData();

        setTimeout(() => setLoading(false), 1000)
        },[user]);
    if (isLoading) {
        return <Loader/>
    }
    else 
    return (
        <FavoritesPageMainContainer onClick={() => setFilterOpen(false)}>
            <Header/>
            <H1WithPadding color="#ffffff">Избранное</H1WithPadding>
            <SearchAndFilterContainer>
                <SearchFieldFavorites placeholder="Искать в избранном"/>
                <FilterContainer>
                    <FilterButton onClick={e => {filterHandler(e)}}  className={isFilterOpen ? 'pressed' : 'none'}><FilterIcon isOpen={isFilterOpen}/>
                    Фильтр
                    </FilterButton>
                    {isFilterOpen && 
                        <FilterMenuContainer className={isFilterOpen ? 'open' : 'close'}>
                             {filterValues.map((value,index) => <FilterElement onClick={() => setActiveIndex(index)} className={activeIndex==index ? 'active' : ''} key={index}>{value}</FilterElement>)}
                        </FilterMenuContainer>
                    }
                </FilterContainer>
            </SearchAndFilterContainer>
            {FavoriteAIData.length==0 && <H2Styled color="#ffffff">Вы пока не добавили ни одной нейросети в избранное.</H2Styled>}
            <FavoritesAiGridContainer>
                {FavoriteAIData.map((props, index) => <AiCard key={index} props={...props}/>)}
               
            </FavoritesAiGridContainer>
            <Footer/>
        </FavoritesPageMainContainer>
    )
}

export default FavoritesPage