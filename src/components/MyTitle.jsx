import { Contactless } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';
const MyTitleStyle= styled.div`
    position: relative;
    padding: 1rem;

    .contact{
        background-color: var(--primary-clr);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        padding: .5rem;
        z-index: 20;
        position: absolute;
        left: 4px;
        top: -15px;
        box-shadow: 0 0 15px rgba(0, 0 ,0, 0.3);
    }

    ul{
        padding-left: 1rem;
        margin-top: 1.6rem;
        li{
            display: flex;
            gap: .5rem;
            position: relative;
            margin-bottom: .75rem;
            
            .line{
                width: 1.8px;
                height: 65px;
                background-color: #dddddd;
                display: block;
                position: absolute;
                top: -1rem;
                left: -.5rem;
            }

            .circle{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                border: 2px solid var(--primary-clr-alt);
                display: block;
                position: absolute;
                top: 7px;
                left: -11px;
                box-shadow: 0 0 0 5px white;
                background-color: white;
            }


            .title{
                strong{
                    font-weight: 500;
                    font-size: 15px;
                }
                span{
                    font-size: 14px;
                    color: var(--title-clr-alt2);
                    font-weight: 400;
                    a{
                        color: var(--title-clr-alt2);
                    }
                }
            }
        }
    }

`
const MyTitle = () => {
  return (
    <MyTitleStyle>
        <Contactless className='contact' />
        <ul>
            <li>
                <div>
                    <span className="line"></span>
                    <span className="circle"></span>
                </div>

                <span className="title">
                    <strong>Name: </strong> <span>Redwan Islam</span>
                </span>
            </li>
            <li>
                <div>
                    <span className="line"></span>
                    <span className="circle"></span>
                </div>

                <span className="title">
                    <strong>Title: </strong> <span> Front-End Developer</span>
                </span>
            </li>
            <li>
                <div>
                    <span className="line"></span>
                    <span className="circle"></span>
                </div>

                <span className="title">
                    <strong>Email: </strong> <span> redwanislam987@gamil.com</span>
                </span>
            </li>
            <li>
                <div>
                    <span className="line"></span>
                    <span className="circle"></span>
                </div>

                <span className="title">
                    <strong>Phone: </strong> <span> +880 1965-82760</span>
                </span>
            </li>
            <li>
                <div>
                    {/* <span className="line"></span> */}
                    <span className="circle"></span>
                </div>

                <span className="title">
                    <strong>Skype: </strong> <span><a href="#">Start Chat</a></span>
                </span>
            </li>
        </ul>
    </MyTitleStyle>
  )
}

export default MyTitle