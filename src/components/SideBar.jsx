import React, { useState } from 'react'
import image from '../assets/pictures/pic.jpeg'
import MyTitle from './MyTitle'
import styled from 'styled-components';
import Button from './Button';
import { Download, ThumbUpSharp } from '@mui/icons-material';
import Reacting from './Reacting';
const Sidebar = styled.div`
padding-bottom: 2rem;
.desc{
    padding: 1rem;

    h3{
        text-transform: uppercase;
        font-size: 20px;
        margin-bottom: -8px;
    }
    span{
        color: var(--title-clr-alt2);
        font-size: 14px;
    }
}

.imgBox{
    width: 100%;
    height: 250px;
    clip-path: polygon(0 5%, 100% 0, 99% 95%, 0 100%);
   
}

.btns{
    margin: 10px auto;
}

.reactBox{
    margin: 0rem 0 .75rem 0;
    position: relative;
    padding: 1rem;
}

.likeBtns{
    margin-top: 2rem;
}

`
const SideBar = () => {
    
  return (
    <Sidebar>
        <div className="desc">
            <h3>redwan islam</h3>
            <span>Front-End Developer</span>
        </div>

        <div className="imgBox">
            <img src={image} alt="" />
        </div>

        <div className="reactBox">
            
            <Reacting />
        </div>

        <MyTitle />

        <Button
         btnText='Download CV'
         icon={<Download />}
         />
    </Sidebar>
  )
}

export default SideBar