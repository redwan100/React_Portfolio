import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
    position: relative;

    h3{
        position: relative;
        display: inline-block;
        color: #484545;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 22px;
        z-index: 2;
    }

    h3:before{
        content: '';
        width: 100%;
        height: 6px;
        background-color: #f4da18c9;
        display: block;
        position: absolute;
        bottom: 6px;
        left: 0;
        transform: skew(20deg);
        z-index: -1;
    }
`

const SectionTitle = ({
    title = 'section title'
}) => {
  return (
    <TitleStyle className='sectionTitle'>
        <h3> {title} </h3>
    </TitleStyle>
  )
}

export default SectionTitle