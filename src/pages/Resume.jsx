import React from 'react'
import workData from '../assets/Data/WorkData' 
import eduData from '../assets/Data/EducationData' 
import ResumeItem from '../components/ResumeItem'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components';
import { School, Work } from '@mui/icons-material';
const ResumeStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem 3rem 6rem 1rem;
  position: relative;


  .top{
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: .75rem;

    .icon{
      background-color:var(--primary-clr);
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: grid;
      place-items: center;

      svg{
        font-size: 20px;
      }
      
    }

    .working{
      text-transform: capitalize;
      font-weight: 600;
      font-size: 17px;
    }
  }

  .sectionTitle{
    margin-bottom: 2rem;
  }

  .allItems{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 1.5rem;
  }

  .one,
  .two{
    padding-bottom: 2rem;
  }
`
const Resume = () => {
  return (
    <ResumeStyle>
      <SectionTitle title='resume'/>
      <div className="allItems">

          <div className="one">
            <div className='top'>
              <span className='icon'>
                <Work />
              </span>
              <p className='working'>working history</p>
            </div>

            {
              workData.map((work, i)=>(
                <ResumeItem key={i}
                heading={work.heading}
                icon = {work.icon}
                title={work.title}
                time={work.time}
                desc={work.desc}
              />
              ))
            }
          </div>

          <div className="two">
            <div className='top'>
              <span className='icon'>
                <School />
              </span>
              <p className='working'>eduction history</p>
            </div>

            {
              eduData.map((work, i)=>(
                <ResumeItem key={i}
                heading={work.heading}
                icon = {work.icon}
                title={work.title}
                time={work.time}
                desc={work.desc}
              />
              ))
            }
          </div>

      </div>
    </ResumeStyle>
  )
}

export default Resume