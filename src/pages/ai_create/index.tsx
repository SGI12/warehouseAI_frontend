
import Header from "@/components/header/header"
import { AiCreateContainer, AiCreateHeader, TypeChooseContainer, TypeChooseInput } from "./styled"
import Footer from "@/components/footer/footer"
import { AddAiButton } from "@/components/buttons/button"


const AiCreatePage = () => {
    return (
        <AiCreateContainer>  
        <Header/>
        <AiCreateHeader color="#ffffff">Выберите тип нейросети</AiCreateHeader>
        <TypeChooseContainer>
            <TypeChooseInput>

            </TypeChooseInput>
        </TypeChooseContainer>
        <AddAiButton>Подключить нейронную сеть</AddAiButton>
        </AiCreateContainer>
    )
}

export default AiCreatePage