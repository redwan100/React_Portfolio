import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import Button from './Button'
import styled from 'styled-components';

const SocialStyle = styled.div`
    ul{
        display: flex;
        align-items: center;

        li a{
            display: flex;
            align-self: center;
            justify-content: center;

            svg{
                font-size: 18px;
            }
        }
    }

    .btns{
        padding: .5rem .5rem .5rem 1rem;
        gap: 1rem;
    }
`

const SocialIcons = () => {
  return (
    <SocialStyle className='socialIcons'>
        <ul>
            <li>
                <a href="#">
                    <Facebook />
                </a>
            </li>
            <li>
                <a href="#">
                    <Twitter />
                </a>
            </li>
            <li>
                <a href="#">
                    <Instagram />
                </a>
            </li>
            <li>
                <a href="#">
                    <LinkedIn />
                </a>
            </li>
            <li>
                <a href="#">
                    <GitHub />
                </a>
            </li>
            <li>
               <Button btnText='Hire Me' />
            </li>
        </ul>
    </SocialStyle>
  )
}

export default SocialIcons