import React from 'react'
import styled from 'styled-components';

const SkillStyle = styled.div`
background-color: white;
border-radius: 8px;
padding: 1.5rem 1rem 3rem 1rem;
box-shadow: 0 0 20px rgba(0,0,0,0.1);

h3{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: .5rem;
    color: #444;
    text-transform: uppercase;
}
    .list{
        padding-left: 1rem;
        li{
            list-style: none;
            display: flex;
            align-items: center;
            gap: .35rem;

            .circle{
                width: 7px;
                height: 7px;
                border: 2px solid var(--primary-clr);
                border-radius: 50%;

            }

            span{
                font-size: 14px;
                color: #777;
                font-weight: 400;
            }
        }
    }
`
const SkillItem = ({
    title = 'skill title',
    skills =['html', 'css', 'javaScript']
}) => {
  return (
    <SkillStyle>
        <h3>{title}</h3>
        <div className="list">
            {
                skills.map((skill)=>(
                    <li>
                        <div className="circle"></div>
                        <span>{skill}</span>
                    </li>
                ))
            }
        </div>
    </SkillStyle>
  )
}

export default SkillItem