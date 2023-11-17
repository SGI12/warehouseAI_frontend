import Loader from "@/components/Loader/Loader";
import AiCard from "@/components/ai-card/AiCard";
import { FilterButton } from "@/components/buttons/button";
import { FavoritesAIContainer, FavoritesAiGrid, FavoritesPageMainContainer, FilterContainer, FilterMenuContainer, SearchAndFilterContainer } from "@/components/containers/containers"
import { FilterElement } from "@/components/filter-menu/FilterElement";
import Footer from "@/components/footer/footer";

import Header from "@/components/header/header"
import { H1WithPadding, H2Styled } from "@/components/headers-text/HeaderText";
import FilterIcon from "@/components/icons/FilterIcon";

import {  SearchFieldFavorites } from "@/components/search-field/styled";
import { useUserContext } from "@/context/context";
import { check } from "@/http/AuthAPI";
import { getUserFavoriteAI } from "@/http/UserApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const FavoritesPage = () => {
    const router = useRouter()
    const filterValues:Array<string> = ['По популярности',]
    const [isFilterOpen, setFilterOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [searchParams, setSearchParams] = useState('');
    const [FavoriteAIData, setAIData] = useState<Array<any>>([])
    const [isSearchEmpty, setSearchEmpty] = useState(false)
    
  
    const filterHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilterOpen(!isFilterOpen)
    }
    const SortHandler = (e:any) => { 

        if (activeIndex !== -1) {
            getUserFavoriteAI().then((res) => {
                setAIData(res.data?.favorite_ai)
            })
            
        }
        else {
            
            if (e.target.id === 'По популярности') {
                FavoriteAIData.sort((a, b) => b.used - a.used)
             }
        }    
    }

    const SearchHandler = (e:any) => {
        
        setSearchParams(e.target.value)
        const SearchAIData = FavoriteAIData.filter((word) => {
            console.log(word.name)
            return `${word.name}`.toLowerCase().includes((e.target.value).toLowerCase())
            
        })
        if (!e.target.value) {
            setActiveIndex(-1)
            getUserFavoriteAI().then((res) => {
            setAIData(res.data?.favorite_ai)
            })
        }
        if (SearchAIData.length !== 0) {
            setSearchEmpty(false)
            setAIData(SearchAIData)
        }
            
        else {
            setActiveIndex(-1)
            setSearchEmpty(true)
        }

    }
    useEffect(() => {
    const fetchData = () => {
        
        const getAIData = () => {
            getUserFavoriteAI()
           .then((res) => {
              setAIData(res.data?.favorite_ai)
              setTimeout(() => setLoading(false), 1000)
           })
           .catch((e) => {
               console.log(e.response?.status)
           })
       }
        
            check()
            .then(() =>{
                user.setIsAuth(true)
                getAIData()
                
            })
            .catch((err) => {
                {
                    if (err.response.status === 401 || err.response.status === 404) {
                        user.setIsAuth(false)
                        router.push('/authpage')
                    }
                    setTimeout(() => setLoading(false), 1000)
                    console.log(err.response?.data.message)
                };
            })  
    }
    fetchData();
  
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
                <SearchFieldFavorites onChange={(e:any) => SearchHandler(e)} value={searchParams} placeholder="Искать в избранном"/>
                <FilterContainer>
                    <FilterButton onClick={e => {filterHandler(e)}}  className={isFilterOpen ? 'pressed' : 'none'}><FilterIcon isOpen={isFilterOpen}/>
                    Фильтр
                    </FilterButton>
                    {isFilterOpen && 
                        <FilterMenuContainer className={isFilterOpen ? 'open' : 'close'}>
                             {filterValues.map((value,index) => <FilterElement onClick={(e) => {
                                activeIndex == index ? setActiveIndex(-1) : setActiveIndex(index)
                                SortHandler(e)
                            }} id={value} className={activeIndex==index ? 'active' : ''} key={index}>{value}</FilterElement>)}
                        </FilterMenuContainer>
                    }
                </FilterContainer>
            </SearchAndFilterContainer>
            {(FavoriteAIData.length==0 || isSearchEmpty) && <H2Styled color="#ffffff">Ничего не найдено.</H2Styled>}
            <FavoritesAIContainer>
            {!isSearchEmpty && <FavoritesAiGrid>  
            {FavoriteAIData.map((props, index) => <AiCard key={index} props={...props}/>)}
            
            </FavoritesAiGrid>}
            </FavoritesAIContainer>
            <Footer/>
        </FavoritesPageMainContainer>
    )
}

export default FavoritesPage