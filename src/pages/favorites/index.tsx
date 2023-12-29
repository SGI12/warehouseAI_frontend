import Loader from "@/components/Loader/Loader";
import AiCard from "@/components/ai-card/AiCard";
import { FilterButton } from "@/components/buttons/button";
import { AICardsGrid, AIGridContainer, FavoritesPageMainContainer, FilterContainer, FilterMenuContainer, SearchAndFilterContainer } from "@/components/containers/containers"
import { FilterElement } from "@/components/filter-menu/FilterElement";
import Footer from "@/components/footer/footer";

import Header from "@/components/header/header"
import { H1WithPadding, H2Styled } from "@/components/headers-text/HeaderText";
import FilterIcon from "@/components/icons/FilterIcon";

import {  SearchFieldFavorites } from "@/components/search-field/styled";
import { useUserContext } from "@/context/context";
import { getAIById, getAIRating, getSeveralAIs } from "@/http/AIAPI";
import { check } from "@/http/AuthAPI";
import { getUserFavoriteAI } from "@/http/UserApi";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";


const FavoritesPage = () => {
    interface IAICardProps {
        
        id: string,
        img: string,
        name: string,
        rate: number,
        used: number
    }
    const router = useRouter()
    const filterValues:Array<string> = ['По популярности', 'По оценкам']
    const [isFilterOpen, setFilterOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [searchParams, setSearchParams] = useState('');
    const [filterText, setFilterText] = useState('')
    const [FavoriteAIData, setAIData] = useState<Array<IAICardProps>>([])
    const [isSearchEmpty, setSearchEmpty] = useState(false)
    const [initialData, setInitialData] = useState<Array<IAICardProps>>([])
   
    const filterHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilterOpen(!isFilterOpen)
    }

    
    const SearchHandler = (e:any) => {
       
        setSearchParams(e.target.value)
        const SearchAIData = initialData.filter((word) => {
            return `${word.name}`.toLowerCase().includes((e.target.value).toLowerCase())
        })
        console.log(SearchAIData)
       
        if (SearchAIData.length > 0) {
            setSearchEmpty(false)
            setAIData(SearchAIData)
        }
            
        else {
            setSearchEmpty(true)
        }

    }
   
    useEffect(() => {
    let ratingArray: any[] = []
    const fetchData = () => {
        
        const getAIData = () => {
            let queryParams:string
            getUserFavoriteAI()
           .then((res) => {
               queryParams = res.data.map((item:any) => {
                return item['ai_id']
              }).toString()
              
              getSeveralAIs(queryParams)
              

              .then( (AIres) => {
                AIres.data.forEach((element: {id: string}, index: number) => {
                      
                    getAIRating(element.id)
                    .then((response) => {
                        const newAI = {
                            id: AIres.data[index].id,
                            img: AIres.data[index].background_url,
                            name: AIres.data[index].name,
                            rate: response.data.avg_rating,
                            used: AIres.data[index].used

                        }
                        setAIData(prev => [...prev, newAI])
                        setInitialData(prev => [...prev, newAI])
                        
                        
                        
                       
                    }) 
                
                });
               
              })
              .catch((e) => {
                console.log(e.response?.status)
              })
              
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
        
        console.log('bimbimbambam')
        const isFiltered = activeIndex!=-1
        if (filterText == 'По популярности' && isFiltered) {
                const SortedArray = FavoriteAIData.slice()
                SortedArray.sort((a, b) => b.used - a.used)      
                setAIData(SortedArray)
        }
        if (filterText == 'По оценкам' && isFiltered) {
            const SortedArray = FavoriteAIData.slice()
            SortedArray.sort((a, b) => b.rate - a.rate)      
            setAIData(SortedArray)
    }
        if (!isFiltered && !(searchParams.length > 0)) {
            setAIData(initialData)
        }
        
    }, [activeIndex, searchParams])
   
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
                                setFilterOpen(false)
                            }} id={value} className={activeIndex==index ? 'active' : ''} key={index}>{value}</FilterElement>)}
                        </FilterMenuContainer>
                    
                </FilterContainer>
            </SearchAndFilterContainer>
            {(FavoriteAIData.length==0 || isSearchEmpty) && <H2Styled color="#ffffff">Ничего не найдено.</H2Styled>}
            <AIGridContainer>
            {!isSearchEmpty && <AICardsGrid>  
                {FavoriteAIData.map((props, index) => <AiCard key={index} props={props}/>)}
            </AICardsGrid>}
            </AIGridContainer>
            <Footer/>
        </FavoritesPageMainContainer>
    )
}

export default FavoritesPage