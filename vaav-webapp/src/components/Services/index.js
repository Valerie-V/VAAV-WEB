import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesHeaderContainer, ServicesIcon, ServicesIconNum, ServicesP, ServicesP1, ServicesWrapper, VerticalMargin } from './ServicesElements';
import Icon1 from '../../assests/icons/img-ten.jpg';
import Icon3 from '../../assests/icons/img-twelve.jpg';
import Icon2 from '../../assests/icons/img-eleven.jpg';
import Icon01 from '../../assests/icons/img-01.svg';
import Icon02 from '../../assests/icons/img-02.svg';
import Icon03 from '../../assests/icons/img-03.svg';



const Services= () => {
  return (
    <ServicesContainer id="about">
      <ServicesHeaderContainer>
        <ServicesH1>Who we are</ServicesH1>
        <ServicesP1>VAAV is on a journey to engineer a better future for Africa with resilient 
          and self-sustaining Innovations that meets your energy needs!</ServicesP1>
      </ServicesHeaderContainer>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIconNum src={Icon01} /> 
          <ServicesH2>Renewable Energy</ServicesH2>
          <ServicesP>Clean and Affordable</ServicesP>        
          <ServicesIcon src={Icon1} />          
        </ServicesCard>
        <ServicesCard>
        <VerticalMargin margin={350} />
          <ServicesIconNum src={Icon02} /> 
           <ServicesH2>PowerCube</ServicesH2>
          <ServicesP>Designed to meet your Enery Needs</ServicesP>        
          <ServicesIcon src={Icon2} />
        </ServicesCard>
        <ServicesCard>
          <ServicesIconNum src={Icon03} /> 
          <ServicesH2>STEM Education!</ServicesH2>
          <ServicesP>Empowering young minds in STEMs</ServicesP>
          <ServicesIcon src={Icon3} />          
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

  )
}

export default Services;
