import { useRef } from "react";
import AiCard from "../ai-card/AiCard";
import { AiSliderContainer } from "../containers/containers";
import { LeftScrollBlock, RightScrollBlock } from "../absolute-blocks/home/ScrollBlocks";


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
            <RightScrollBlock  onMouseEnter={() => { setMove(true); moveRight();}}   onMouseLeave={() => setMove(false)}/>
            <LeftScrollBlock onMouseEnter={() => { setMove(true); moveLeft();}}   onMouseLeave={() => setMove(false)}/>
            <AiCard/> <AiCard/><AiCard/><AiCard/><AiCard/><AiCard/>
           

        </AiSliderContainer>
    );
}

export default AiSlider