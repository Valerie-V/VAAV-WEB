import React from 'react'
import Video from '../../assests/videos/video.mp4';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, HeroBg, Icon, ImgBg, Text } from './SignupElements';
import { Dropdown, Option } from '../../components/Dropdown'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {

  constructor(){
    super();

    this.state = {
      companyName: '',
      address: '',
      category: '',
      specialization: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { companyName, address, category, specialization, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {companyName, address, category, specialization});

      this.setState({
        companyName: '',
        address: '',
        category: '',
        specialization: '',
        email: '',
        password: '',
        confirmPassword: '',
        hasError: false,     
      });

      alert("Thank you for signing up");


    } catch (error){
      console.error(error);
    }
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSelect(event) {
    this.setState({category: event.target.value});
    if(this.state.category === "" || this.state.category === "Click to see Categories"){
      this.setState(state => ({ 
        hasError: true
      }))
    }
  }
  // handleClick() {
  //   if(this.state.category === "" || this.state.category === "Click to see Categories"){
  //     this.setState(state => ({ 
  //       hasError: true
  //     }));
  //   }
  // }

  render(){

    const { companyName, address, category, specialization, email, password, confirmPassword } = this.state;
  
    return (
      <>
         <Container>
          <HeroBg>
            <ImgBg autoPlay loop muted src={ Video } type="video/mp4" />
          </HeroBg>
          <FormWrap>
            <Icon to='/'>VAAV</Icon>
            <FormContent>
            
              <Form action='/' method='post' onSubmit={this.handleSubmit}>
                <FormH1>Sign up</FormH1>
                <FormLabel htmlFor='for'>Name of Company</FormLabel>
                <FormInput type='text' name='companyName' value={companyName} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput type='text' name='address' value={address} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Category</FormLabel>
                <Dropdown type='text' name='category' value={category} onChange={this.handleSelect} required>
                  <Option value="Click to see Categories" />
                  <Option value="Personal" />
                  <Option value="Household" />
                  <Option value="Campus" />
                  <Option value="Rural Community" />
                  <Option value="Education" />                 
                </Dropdown>
                {/* <FormInput type='text' name='category' value={category} onChange={this.handleChange} required /> */}
                <FormLabel htmlFor='for'>Specialization</FormLabel>
                <FormInput type='text' name='specialization' value={specialization} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' name='email' value={email} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' name='password' value={password} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Comfirm Password</FormLabel>
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} required />
                <FormButton type='submit'>Continue</FormButton>
              </Form>
              <Text>Forgot password</Text>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    )
  }

  
}

export default SignUp;
