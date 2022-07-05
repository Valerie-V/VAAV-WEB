import React, {useState} from 'react'
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Video from '../../assests/videos/video.mp4';
import  {FilterTextbox}  from '../Searchbar/searchbar.jsx';
import { Button } from '../Button/ButtonElements';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Arrow
 } from './HeroElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> VAAV Innovative Solutions</HeroH1>
        {/* <HeroP>
          Why travel when you can have access to 
          HEALTH CENTERS within the twinkle of an eye. You are never out of reach
        </HeroP> */}
        <HeroP>
          With just a click, you can have access to clean and affordable power. Let us help you meet your energy needs, Today!!!.
        </HeroP>
        {/* <FilterTextbox /> */}
        <HeroBtnWrapper>
          <Button to='about' onMouseEnter={onHover}
            onMouseLeave={onHover}>
            Get Started {hover ? <Arrow><FontAwesomeIcon icon={faArrowRight} /></Arrow> : <Arrow><FontAwesomeIcon icon={faChevronRight} /></Arrow>}
          </Button>
        </HeroBtnWrapper>
        
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
