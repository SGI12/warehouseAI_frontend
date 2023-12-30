import { AiRequestInputContainer } from "../containers/containers";
import {  InputGray } from "../inputs/TextInputs";
import { CharCounterText, TextDefaultStyled } from "../paragraphs/Paragraphs"
import {useState} from 'react'

interface IInputProps {
    withCounter?: boolean,
    readonly?: boolean,
    setText?: any
    overFilled?: boolean,
    text?: string
    type: string,

    
}
const UseAIInput = ({withCounter, text, readonly, setText, type}:IInputProps) => {
    
    const [RemainCount, setRemains] = useState(100)
    const charMaxCount = 100;
    const inputChangeHandler = (e:any) => {
        let currentCount = String((e.target.value).length)
        setText(e.target.value)
        setRemains(charMaxCount-Number(currentCount))
    }
    return (
    <AiRequestInputContainer>
        {type === 'text' && <InputGray value={text} readOnly={readonly} onChange={inputChangeHandler}/>}
        {type === 'text' && withCounter && <CharCounterText className={(RemainCount <= 0) ? 'empty' : ''} color="#ffffff">{RemainCount}/{charMaxCount}</CharCounterText>}
       
    </AiRequestInputContainer>
    )
}

export default UseAIInput