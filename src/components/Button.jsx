import { Telegram } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.button`
border: none;
outline: none;
background-color: var(--primary-clr);
display: flex;
align-items: center;
justify-content: space-between;
padding: .45rem .65rem;
gap: .5rem;
border-radius: 50px;

span{
    font-size: 14px;
    font-weight: 600;
}

.down{
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    
    svg{
        font-size: 18px;
    }
}

`
const Button = ({
    btnText='Btn Text',
    btnLink = 'www.google.com',
    icon = <Telegram />
}) => {
  return (
    <ButtonStyle className='btns'><span>{btnText}</span>  <span className='down'> {icon}</span> </ButtonStyle>
  )
}

export default Button