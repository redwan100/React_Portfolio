import React from 'react'
import styled from 'styled-components';
const PtextStyle = styled.p`
    font-size: 13px;
    color: #555;
    font-weight: 400;
`
const PText = ({children}) => {
  return (
    <PtextStyle className='para'>
      {children}
    </PtextStyle>
  )
}

export default PText