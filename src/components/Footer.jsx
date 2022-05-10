import React from 'react'
import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 100%;
    background-color: #1e1e1e;
    margin:1rem 0;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.2rem;

    .name{
        font-size: 16px;
    }
    p{
       color: white;
       font-weight: 400;
       font-size: 13px;
       .dot{
           width: 3px;
           height: 3px;
           border-radius: 50%;
           display: inline-block;
           background-color: var(--primary-clr-alt);

       }

       .color{
           color: var(--primary-clr);
       }
    }
    .bColor{
        color: #888;
    }
`
const Footer = () => {
  return (
    <FooterStyle className="footer">
        <p className='name font-effect-fire-animation'>Redwan Islam <span className="dot"></span></p>
        <p className='bColor'>Design & Developed by <span className='color'>Redwan Islam</span></p>
    </FooterStyle>
  )
}

export default Footer