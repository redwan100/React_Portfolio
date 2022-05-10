import { Campaign, Email, LocationOn, Phone,SupportAgent } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle'
import SocialIcons from '../components/SocialIcons';

const ContactStyle = styled.div`
background-color: white;
padding: 1rem .75rem 1rem 1.25rem;
border-radius: 8px;
display: flex;
gap: 1rem;

.details{
  padding-left: 1rem;
  p{
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: .5rem;
    margin-bottom: 1rem;
  

    svg{
      font-size: 22px;
      color: #222;
    }

    span{
      font-size: 14px;
      color: #555;
    }
  }
}


.sectionTitle{
  margin-bottom: 2rem;
}

.btns{
  display: none;
}

.socialIcons{
  padding: 1.5rem 0 2rem 0rem;

  li{
    margin: .25rem;
    transition: all .3s;

    svg{
    transition: all .3s;
    opacity: .8;
    }
    &:hover svg{
      transform: scale(1.3);
      opacity: 1;
    }
  }

  svg{
    font-size: 17px;
  }
}

.contactForm{
  flex: 1;
}

@media screen and (max-width: 786px){
  flex-direction: column;
}
`
const Contact = () => {
  return (
      <ContactStyle>
          <div>
          <SectionTitle title='Contact information'/>

        <div className="details">
          <p><LocationOn /> <span>Boalmari,faridpur, Dhaka, Bangaldesh</span></p>

          <p><Email /> <span>redwanislam2760@gmail.com</span></p>

          <p><Phone /> <span>+880 1965-182760</span></p>

          <p><Campaign /> <span>freelancer</span></p>

          <p><SupportAgent /> <span><a href="#">Start chat</a></span></p>

        <SocialIcons />
      </div>
          </div>

         
         <ContactForm />

    </ContactStyle>

  )
}

export default Contact