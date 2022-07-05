import React from 'react'
import { Column1, 
  Column2,
  ContactContainer,
  ContactRow,
  ContactWrapper,
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormInputMessage,
  FormLabel,
  FormWrap,
  Heading,
  ImgWrap,
  Subtitle,
  Text
} from './contactElements';

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    
    // const { name, email } = this.state;

    try {
      //await auth.signInWithEmailAndPassword(email, name)
      this.setState({ name: '', email: ''});
    } catch (error){
      console.log(error);
    }
     

    this.setState({name: '', email: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      
      <>
        <ContactContainer id="contact">
          <ContactWrapper>
            <ContactRow>
              <Column1>
                <ImgWrap>
                  <iframe
                  width="100%"
                  height="100%"
                  title="map"
                  className="absolute inset-0"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  style={{ filter: "opacity(0.7)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3877817449143!2d3.8957098143196305!3d7.422265214122394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f3e7fa751ded%3A0xeea2fc7dd41fca0a!2sBuildCodeTogether!5e0!3m2!1sen!2sng!4v1655664715139!5m2!1sen!2sng"
                  />
                </ImgWrap>
                <Container>
                  <Heading>Address</Heading>
                  <Subtitle>Ibadan</Subtitle>
                  <Text>Oyo  State, Nigeria, 200283</Text>
                  <Heading>Email</Heading>
                  <Subtitle>contact.vaav@gmail.com</Subtitle>
                  <Heading>Phone</Heading>
                  <Subtitle>+234 (0) 806-765-5195</Subtitle>
                </Container>
              </Column1>
              <Column2>
                <FormWrap>
                  <FormContent>
                    <Form action='#' onSubmit={this.handleSubmit}>
                      <FormH1>Contact us today</FormH1>
                      <FormLabel htmlFor='for'>Name</FormLabel>
                      <FormInput type='email' name='name' value={this.state.name} onChange={this.handleChange} required />
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                      <FormLabel htmlFor='for'>Message</FormLabel>
                      <FormInputMessage type='email' name='message' value={this.state.message} onChange={this.handleChange} required />
                      <FormButton type='submit'>Submit</FormButton>
                      
                    </Form>
                  </FormContent>
                </FormWrap>
              </Column2>
            </ContactRow>
          </ContactWrapper>
        </ContactContainer>
      </>
    )
  }
}

export default ContactSection;