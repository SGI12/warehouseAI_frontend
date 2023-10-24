import { useEffect, useRef, useState } from "react";
import AiSliderCard from "../ai-slider-card/AiSliderCard";
import { AiSliderContainer } from "../containers/containers";
import { LeftScrollBlock, RightScrollBlock } from "../absolute-blocks/ScrollBlocks";


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
    const stopScrolling = () => {
  
    }
    

    const handleScrollRight = () => {
       
      };
    return(
        <AiSliderContainer ref={scrollRef} >
            <RightScrollBlock onMouseEnter={() => { setMove(true); moveRight();}}   onMouseLeave={() => setMove(false)}/>
            <LeftScrollBlock onMouseEnter={() => { setMove(true); moveLeft();}}   onMouseLeave={() => setMove(false)}/>
            <AiSliderCard ></AiSliderCard>
            <AiSliderCard ></AiSliderCard>
            <AiSliderCard ></AiSliderCard>
            <AiSliderCard ></AiSliderCard>
            <AiSliderCard ></AiSliderCard>
            <AiSliderCard ></AiSliderCard>

        </AiSliderContainer>
    );
}

export default AiSlider