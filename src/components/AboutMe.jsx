import React from 'react'
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';
import PText from './PText';

const AboutStyle = styled.div`
    background-color: white;
    padding: 1rem 1.5rem 1rem 1.25rem;

    .para{
      margin: 1.75rem 0; 
    }
`
const AboutMe = () => {
  return (
    <AboutStyle>
        <SectionTitle title='about me'/>
        <PText>
        Hello Sir/Madam my name is Minhaz Miah a Front-End Developer. I have been studying web design and development since 2018 when I took my first web development class in high school. I have studied and practiced graphic and web design to further my knowledge of the entire process of building a web app. As a developer and entrepreneur, I believe in passion, quality, ethics, and values that bring success. I love what I do and I'm quite confident in my skillset.
        </PText>

        <PText>
        I'm here to create your new site or landing page. My goal is to create a professional and attractive landing page or site that will beat your competitor's website. As a Front-End Developer I created a lot of different websites for our clients using HTML, CSS, Bootstrap, ReactJS, Material UI, and JavaScript to built the sites. Check my portfolio there i already shared all of projects that done by me. The things I learned by myself became the vast majority of what I know today.
        </PText>
    </AboutStyle>
  )
}

export default AboutMe