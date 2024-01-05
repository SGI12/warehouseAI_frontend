import { useRef } from "react";
import AiCard from "../ai-card/AiCard";
import { AiSliderContainer } from "../containers/containers";
import { LeftScrollBlock, RightScrollBlock } from "../absolute-blocks/home/ScrollBlocks";
import IconSliderArrow from "../icons/SliderArrow";
import { MockSliderData } from "@/utils/MockSliderData";


const AiSlider = () => {
    
    const step = 10;
    const isScrollRef = useRef();
    const scrollRef = useRef<HTMLDivElement>(null);
    const setMove = (state:any) => isScrollRef.current = state;
    const moveRight = () => {
        if (isScrollRef.current) {
          scrollRef.current!.scrollLeft = scrollRef.current!.scrollLeft + step;
          requestAnimationFrame(moveRight);
        }    
      };

      const moveLeft = () => {
        if (isScrollRef.current) {
          scrollRef.current!.scrollLeft = scrollRef.current!.scrollLeft - step;
          requestAnimationFrame(moveLeft);
        }    
      };
    return(
        <AiSliderContainer ref={scrollRef} >
            <RightScrollBlock onMouseUp={() => setMove(false)} onMouseDown={() => { setMove(true); moveRight();}} onMouseEnter={() => { setMove(true); moveRight();}}   onMouseLeave={() => setMove(false)}>
              <IconSliderArrow props={{transform: 'rotate(180deg)',}}/>
            </RightScrollBlock>
            <LeftScrollBlock onMouseUp={() => setMove(false)} onMouseDown={() => { setMove(true); moveLeft();}}  onMouseEnter={() => { setMove(true); moveLeft();}}   onMouseLeave={() => setMove(false)}>
              <IconSliderArrow/>
            </LeftScrollBlock>
            {MockSliderData.map((props, index) => <AiCard key={index} props={props}/>)}
           

        </AiSliderContainer>
    );
}

export default AiSlider