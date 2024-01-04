import Image from "next/image";
import { AiRequestInputContainer } from "../containers/containers";
import {  ImageInput, InputGray } from "../inputs/TextInputs";
import { CharCounterText, TextDefaultStyled } from "../paragraphs/Paragraphs"
import {useState} from 'react'
import { AIImageResponse } from "../images/styled";

interface IInputProps {
    withCounter?: boolean,
    readonly?: boolean,
    setText?: any
    overFilled?: boolean,
    text?: string
    type: string,
    res?: any

    
}
const UseAIInput = ({withCounter, text, readonly, setText, type, res}:IInputProps) => {
    
    const [RemainCount, setRemains] = useState(100)
    const charMaxCount = 100;
    const inputChangeHandler = (e:any) => {
        let currentCount = String((e.target.value).length)
        setText(e.target.value)
        setRemains(charMaxCount-Number(currentCount))
    }
    return (
    <AiRequestInputContainer>
        {type === 'Text' && <InputGray value={text} readOnly={readonly} onChange={inputChangeHandler}/>  }
        {type === 'Text' && withCounter && <CharCounterText className={(RemainCount <= 0) ? 'empty' : ''} color="#ffffff">{RemainCount}/{charMaxCount}</CharCounterText>}
        {type === 'Image' && <ImageInput>
                <AIImageResponse src={res} alt="response_image" />
                
            </ImageInput>}
    </AiRequestInputContainer>
    )
}

export default UseAIInput