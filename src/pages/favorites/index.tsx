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
import { useEffect, useRef, useState } from "react";


const FavoritesPage = () => {
    const router = useRouter()
    const filterValues:Array<string> = ['По популярности',]
    const [isFilterOpen, setFilterOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [searchParams, setSearchParams] = useState('');
    const [filterText, setFilterText] = useState('')
    const [FavoriteAIData, setAIData] = useState<Array<any>>([])
    const [isSearchEmpty, setSearchEmpty] = useState(false)
    const [initialData, setInitialData] = useState<Array<any>>([])
    const filterHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilterOpen(!isFilterOpen)
    }

    
    const SearchHandler = (e:any) => {
       
        setSearchParams(e.target.value)
        const SearchAIData = initialData.filter((word) => {
            return `${word.name}`.toLowerCase().includes((e.target.value).toLowerCase())
        })
        if (!e.target.value) { 
           
            setAIData(initialData)
        }
        else if (SearchAIData.length != 0) {
            setSearchEmpty(false)
            setAIData(SearchAIData)
        }
            
        else {
            
            setSearchEmpty(true)
        }

    }
   
    useEffect(() => {
    const fetchData = () => {
        
        const getAIData = () => {
            getUserFavoriteAI()
           .then((res) => {
           
              setAIData(res.data?.favorite_ai)
              setInitialData(res.data?.favorite_ai)
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
   
    useEffect(() => {
        const isFiltered = activeIndex!=-1
        if (filterText == 'По популярности' && isFiltered) {
                
                const SortedArray = FavoriteAIData.slice()
                SortedArray.sort((a, b) => b.used - a.used)      
                setAIData(SortedArray)
        }
        if (!isFiltered) {
            setAIData(initialData)
        }
        
    }, [activeIndex, FavoriteAIData])
   
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
                    <FilterButton onClick={e => {
                        filterHandler(e)
                        }}  className={isFilterOpen ? 'pressed' : 'none'}><FilterIcon isOpen={isFilterOpen}/>
                    Фильтр
                    </FilterButton>
                    
                        <FilterMenuContainer className={isFilterOpen ? 'open' : 'close'}>
                             {filterValues.map((value,index) => <FilterElement onClick={() => {
                                activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)
                                setFilterText(value)

                            }} id={value} className={activeIndex==index ? 'active' : ''} key={index}>{value}</FilterElement>)}
                        </FilterMenuContainer>
                    
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