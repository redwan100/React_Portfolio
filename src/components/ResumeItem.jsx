import React from 'react'
import styled from 'styled-components';

const ResumeStyle = styled.div`
    ul{
       
        position: relative;
        padding-left: 1.2rem;
        li{
            display: flex;
            gap: 1.2rem;
            position: relative;

            .line{
                width: 2px;
                height: 130%;
                background-color: #eae6e6;
                transform: translateY(-20px);
            }
            .dot{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                border: 2px solid var(--primary-clr);
                position: absolute;
                top: 8px;
                left: -3px;
                background-color: white;
                box-shadow: 0 0 0 6px white;
            }
        }

        .content{
            margin-bottom: 2rem;
            h4{
                font-size: 16px;
                margin-bottom: .2rem;
                font-weight: 600;
            }

            span{
                font-size: 12px;
                font-weight: 500;
                color: #555;
            }
            p{
                font-size: 13px;
                color: #888;
                line-height: 1.3;
            }
        }
    }
`
const ResumeItem = ({title,time, desc}) => {
  return (
    <ResumeStyle>
        <ul>
            <li>
                <div className="circle">
                    <div className="line"></div>
                    <div className="dot"></div>
                </div>

                <div className="content">
                    
                    <h4>{title}</h4>
                    <span>{time}</span>
                    <p>{desc}</p>
                </div>
            </li>
        </ul>
    </ResumeStyle>
  )
}

export default ResumeItem