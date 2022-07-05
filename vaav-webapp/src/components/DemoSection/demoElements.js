import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';


export const DemoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#266041')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const DemoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: content;

  @media screen and (max-width: 768px) {
    height: 750px;
  }
`

export const DemoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:
  `'col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'`:
  `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 16px;
  @media screen and (max-width: 780px) {
    font-size: 12px;
    line-height: 12px;
    font-weight: 250;
  }
`;

export const Heading = styled.h1`
  color: #266041;
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#266041')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#266041' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#102f10' : '#266041')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#266041' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#266041')};
    color: ${({dark}) => (dark ? '#fff' : '#266041')};

  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 5%;
`;

export const Text = styled.span`
  text-align: center;
  color: #266041;
  font-size: 14px; 
`;