import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';


export const ContactContainer = styled.div`
  color: #fff;
  background: '#f9f9f9';

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 5px;
  justify-content: content;

  @media screen and (max-width: 768px) {
    height: 750px;
  }
  @media screen and (max-width: 580px) {
    height: 1200px;
  }
`

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: jcenter;
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
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
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
  max-width: 100%;
  height: 70%;

  @media screen and (max-width: 780px) {
    height: 64%;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const FormWrap = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;


  @media screen and (max-width: 980px) {
    width: 420px;
  }

  @media screen and (max-width: 480px) {
    width: 380px;
    height: 110%;
    margin-left: 0px
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  z-index: 2;
  color: #034B03;
  font-weight: 700;
  font-size: 32px;
  
  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #266041;
  max-width: 100%;
  height: 90%;
  width: 100%;
  z-index: 2;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    width: 90%;
    padding: auto;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormInputMessage = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  height: 120px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border:1px solid black;
    ...
 }
`;

export const FormButton = styled.button`
  background: #002600;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 20px;
  background: #e9efea;
  align-items: left;

  @media screen and (max-width: 780px) {
    height: 35%;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {
    height: 35%;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  color: #266041;
  margin-top: 5px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #266041;

  @media screen and (max-width: 780px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 22px;
  color: #266041;
  @media screen and (max-width: 780px) {
    font-size: 14px;
  }
`;

export const Text = styled.span`
  text-align: center;
  color: #266041;
  font-size: 14px; 
`;