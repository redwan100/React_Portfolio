import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe'
import ServiceSection from '../components/Services/ServiceSection';
import Skill from '../components/Skill/Skill';
const HomeStyle = styled.div`
background-color: #ffffff70;
backdrop-filter: blur(20px);
border-radius: 6px;
overflow: hidden;
`
const Home = () => {
  return (
      <>
        <HomeStyle>
          <AboutMe />
          <ServiceSection />
          <Skill />
        </HomeStyle>
      </>
    
  )
}

export default Home