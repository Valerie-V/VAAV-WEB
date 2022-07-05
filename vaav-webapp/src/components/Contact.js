import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e6edea',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
    .map(
    (key) => encodeURIComponent(key) + "=" +
    encodeURIComponent(data[key])
    )
    .join("&");
    }
    
    function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-formurlencoded" },
    body: encode({ "form-name": "contact", name, email, message }),
  })
  .then(() => alert("Message sent!"))
  .catch((error) => alert(error));
  }

  return (
        <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} align='center'>
    <Grid item xs={12}>
    </Grid>
    </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item elevation={0}>
          <div >
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
<div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
<div className="lg:w-1/2 px-6">
<h2 className="title-font font-semibold text-white tracking-widest text-xs">
ADDRESS
</h2>
<p className="mt-1">
Ibadan <br />
Oyo  State, Nigeria, 200283
</p>
</div>
<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
<h2 className="title-font font-semibold text-white tracking-widest text-xs">
EMAIL
</h2>
<p className="text-indigo-400 leading-relaxed">
contact.vaav@gmail.com
</p>
<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
PHONE
</h2>
<p className="leading-relaxed">+234 (0) 806-765-5195</p>
</div>
</div>
</div>
            </Item>
        </Grid>
        <Grid item xs={6}>
        <Item elevation={0}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form
netlify
name="contact"
onSubmit={handleSubmit}
className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
Contact Us
</h2>
<p className="leading-relaxed mb-5">
For enquiries. please fill the form below.
</p>
<div className="relative mb-4">
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
Name
</label>
          <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
Email
</label>
          <TextField 
            type="email" 
            id="email" 
            label="Email" 
            variant="outlined"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="message" className="leading-7 text-sm text-gray-400"> 
          Message </label>
        <TextField 
          htmlFor="message" 
          id="message"
          name='message'
          label="Message" 
          variant="outlined" 
          multiline
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
                    </Grid>
                    </Grid>
</div>

<button
type="submit"
className="text-white bg-indigo-500 border-0 py-2
px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
Submit
</button>
</form>
</Box>
          </Item>
        </Grid>
        </Grid>
</div>
</section>
  );
}