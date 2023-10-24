
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import { AddAiButton } from "@/components/buttons/button"
import { AiCreateContainer, TypeChooseContainer } from "@/components/containers/containers"
import { AiCreateHeader } from "@/components/headers-text/HeaderText"
import { TypeChooseInput } from "@/components/inputs/Input"


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