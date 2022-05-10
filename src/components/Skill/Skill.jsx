import React from 'react'
import SkillItem from './SkillItem'
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';

const SkillStyled = styled.div`
    padding:1rem 1rem 3rem 1rem;
    

    .allItems{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(210px, 1fr));
        gap: 1rem;
    }
    .sectionTitle{
        margin: 2rem 0;
    }
`
const Skill = () => {
  return (
    <SkillStyled>
        <SectionTitle title='Skills' />
        <div className="allItems">
            <SkillItem 
            title='Front-Ent'
            skills={['HTML5/CSS3','SASS/SCSS','Bootstrap 4/5','Gulp','JavaScript','ReactJs','Material UI 4/5']}
            />


            <SkillItem 
            title='Back-end'
            skills={['NodeJS','ExpressJS']}
            />


            <SkillItem 
            title='Database'
            skills={['Firebase','MyQL','MongoDB']}
            />

            <SkillItem 
            title='source control'
            skills={['Git','GitHub']}
            />
        </div>
    </SkillStyled>
  )
}

export default Skill