import React from 'react'
import styled from 'styled-components';

const BtnStyle = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        color: #f5c529;
    }
`
const PortBtn = ({
    btnText = "btn text"
}) => {
  return (
    <BtnStyle className='pBtns'>
        {
            btnText
        }
    </BtnStyle>
  )
}

export default PortBtn