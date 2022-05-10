import React from 'react'
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const ContactStyle = styled.div`
/* background-color: #000000dd; */
background-color: #f5f0f0;
padding: 1rem 1rem 4rem 1rem;
border-radius: 7px;
/* box-shadow: 0 0 10px rgba(0,0,0,0.1); */

.inputBox{
  height: 40px;
  margin-bottom: 2rem;
}

input,
textarea{
  border: none;
  outline: none;
  margin-bottom: 1rem;
  height: 100%;
  width: 100%;
  /* background-color: #3f3a3a; */
}


input{
  padding: 1rem;
  border-radius: 7px;
  color: #313131;
}
label{
  font-size: 14px;
  display: block;
  color: #414141;
  margin-bottom: 7px;
  font-weight: 600;
}

textarea{
  margin-top: 2rem;
  max-height: 300px;
  padding: 1rem;
  height: 200px;
  border-radius: 7px;
  resize: none;
  color: #797979;
}

button{
  border: none;
  outline: none;
  padding: .75rem 3rem;
  background-color: var(--primary-clr);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
  margin-left: auto;
  display: block;

  &:hover{
    background-color: #f0a904;
  }
}



@media screen and (max-width: 768px){
  button{
    display: block;
    width: 100%;
  }
}
`
const ContactForm = () => {
  return (
    <ContactStyle className='contactForm'>

      <SectionTitle title='Get in touch' />
        <div className='inputBox'>
            <label htmlFor="firstName">Your Name</label>
            <input type="text" />
        </div>
        <div className='inputBox'>
            <label htmlFor="email">Your Email</label>
            <input type="email" />
        </div>
        <div>
            <textarea className='textarial' placeholder='Write here...'></textarea>
        </div>

      <button type='submit'>Sent</button>
    </ContactStyle>
  )
}

export default ContactForm