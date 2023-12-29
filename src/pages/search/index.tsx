import Loader from '@/components/Loader/Loader';
import AiCard from '@/components/ai-card/AiCard';
import { FilterButton } from '@/components/buttons/button';
import { AICardsGrid, AIGridContainer, FilterContainer, FilterMenuContainer, SearchAndFilterContainer, SearchPageMainContainer } from '@/components/containers/containers';
import { FilterElement } from '@/components/filter-menu/FilterElement';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { H1WithPadding, H2Styled } from '@/components/headers-text/HeaderText';
import FilterIcon from '@/components/icons/FilterIcon';
import { useUserContext } from '@/context/context';
import { getAIRating, searchAI } from '@/http/AIAPI';
import { check, checkCookies } from '@/http/AuthAPI';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import {useState, useEffect} from 'react'

const Searchpage = () => {
     interface IAICardProps {
        
        id: string,
        img: string,
        name: string,
        rate: number,
        used: number
    }
    const searchPageParams = useSearchParams()
    const router = useRouter()
    const [filterText, setFilterText] = useState('')
    const [activeIndex, setActiveIndex] = useState(-1)
    const [searchResults, setSearchResults] = useState<Array<IAICardProps>>([])
    const [initialData, setInitialData] = useState<Array<IAICardProps>>([])
    const filterValues:Array<string> = ['По популярности', 'По оценкам']
    const [isFilterOpen, setFilterOpen] = useState(false)
    const [error, setError] = useState('Ничего не найдено')
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const filterHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilterOpen(!isFilterOpen)
    }
    const field = searchPageParams?.get('field')
    const value = searchPageParams?.get('value')
    useEffect(() => {
        const fetchData =  () => {
            setLoading(true)
            let ratingArray: any[] = []
            setActiveIndex(-1)
            
            const getAIData = () => {
                
                searchAI(field, value)
                
               .then((AIres) => {
                    setError('Ничего не найдено')
                     
                    
                    
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
                            setSearchResults(prev => [...prev, newAI])
                            setInitialData(prev => [...prev, newAI])
                            
                            
                            
                           
                        }) 
                    
                    });

                    
               })
               

               


            
               .catch((e) => {
                    if (e.response?.status === 400) {
                        
                        
                        setError('В строке поиска должно быть минимум 3 символа.')
                        setSearchResults([])
                    }
                    
                   console.log(e.response?.status)
               })

              
           }

            
                check()
                .then(() =>{
                    user.setIsAuth(true)
                    getAIData()
                    
                    
                })
                

                
                
                .then(() => {
                    setTimeout(() => setLoading(false), 1000)
                })
                .catch((err) => {
                    {
                        if (err.response.status === 401 || err.response.status === 404) {
                            user.setIsAuth(false)
                            router.push('/authpage')
                        }
                        
                        console.log(err.response?.data.message)
                    };
                })  
                
        }


        fetchData();
        
      
        },[user]);
        
    useEffect(() => {
        
        const isFiltered = activeIndex!=-1
        if (filterText == 'По популярности' && isFiltered) {
                setSearchResults(initialData)
                const SortedArray = searchResults.slice()
                SortedArray.sort((a, b) => b.used - a.used)      
                setSearchResults(SortedArray)
        }
        if (filterText == 'По оценкам' && isFiltered) {
            setSearchResults(initialData)
            const SortedArray = searchResults.slice()
            SortedArray.sort((a, b) => b.rate - a.rate)      
            setSearchResults(SortedArray)
    }
        if (!isFiltered) {
            setSearchResults(initialData)
        }
        
    }, [activeIndex])
    
    if (isLoading) {
        return <Loader/>
    }
    else
    return (
        <SearchPageMainContainer onClick={() => setFilterOpen(false)}>
            <Header/>
            <H1WithPadding color="#ffffff">Результаты поиска по запросу “{searchPageParams?.get('value')}”</H1WithPadding>
           
            <SearchAndFilterContainer>
                
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
            {(searchResults.length==0) && <H2Styled color="#ffffff">{error}</H2Styled>}
            <AIGridContainer>
           <AICardsGrid>  
                {searchResults.map((props, index) => <AiCard key={index} props={props}/>)}
                
            </AICardsGrid>
            </AIGridContainer>
            <Footer/>
           
        </SearchPageMainContainer>
    );
};

export default Searchpage;