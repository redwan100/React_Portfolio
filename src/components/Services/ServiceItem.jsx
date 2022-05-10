import React from 'react'
import styled from 'styled-components';

const ItemStyle = styled.div`
  background-color: white;
  padding: 1rem 1.5rem 3rem 1rem;
  border-radius: 7px;
  box-shadow: 0 0 30px rgba(0,0,0,0.1);
  position: relative;
  z-index: 5;
  transition: all .3s;


  &::before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 7px;
    z-index: -2;
    transition: all .3s;
  }
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    /* background-color: #ee5e5e; */
    background: linear-gradient(to right, #ec3232be, #f314d2bb);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 7px;
    z-index: -3;
    transition: all .3s;

  }
  &:hover{
    transform: translate(-10px, -10px);
  }
  /* &:hover::before{
    transform: translate(10px, 10px);
  } */
  &:hover::after{
    transform: translate(10px, 10px);
  }

  span{
    margin-bottom: .5rem;
    display: inline-block;
    svg{
      font-size: 3rem;
      color: #3f3f3f;
    }
  }

  h3{
    font-size: 16px;
    font-weight: 600;
    color: #111;
    margin-bottom: .25rem;
  }

p{
  font-size: 12px;
  color: #777;
}

@media screen and (max-width: 768px){
  span{
    svg{
      font-size: 2rem;
    }
  }
}
`
const ServiceItem = ({names,desc,icon}) => {

  return (
    <ItemStyle>
        <span>{icon}</span>
        <h3>{names}</h3>
        <p>{desc}</p>
    </ItemStyle>
  )
}

export default ServiceItem