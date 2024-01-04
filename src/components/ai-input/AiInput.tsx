import Image from "next/image";
import { AiRequestInputContainer } from "../containers/containers";
import {  ImageInput, InputGray } from "../inputs/TextInputs";
import { CharCounterText, TextDefaultStyled } from "../paragraphs/Paragraphs"
import {useState} from 'react'
import { AIImageResponse } from "../images/styled";
import { AIResponsePlayer } from "../audio-player/styled";

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
    console.log(res)
    return (
    <AiRequestInputContainer>
        {type === 'Text' && <InputGray value={text} readOnly={readonly} onChange={inputChangeHandler}/>  }
        {type === 'Text' && withCounter && <CharCounterText className={(RemainCount <= 0) ? 'empty' : ''} color="#ffffff">{RemainCount}/{charMaxCount}</CharCounterText>}
        {type === 'Image' && <ImageInput>
                {res != '' && <AIImageResponse src={res} alt="response_image" />}
                
            </ImageInput>}
        {type === "Audio" && <AIResponsePlayer controls src={res}/>}
    </AiRequestInputContainer>
    )
}

export default UseAIInput