import React, { useState } from 'react'
import {Close, GridView, Home} from '@mui/icons-material';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import SocialIcons from './SocialIcons';


const NavStyle = styled.div`
display: flex;
/* justify-content: space-between; */
align-items: center;
background-color: white;
width: 100%;
position: sticky;
top: 0;
left: 0;
border-radius: 8px;
overflow: hidden;
padding-right: 1rem;
margin-bottom: 2rem;
z-index: 50;
box-shadow: 0 5px 20px rgba(0,0, 0, 0.1);
ul{
    display: flex;
    align-items: center;
    gap: .75rem;

    li{
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
        transition: .3s ease;
        a{
            transition: all .3s;
        }
        a:hover{
            color: var(--primary-clr);
        }
    }
    li:hover{
        color: var(--primary-clr);
    }

   .active{
       color: var(--primary-clr);
       position: relative;

       &::before{
           content: '';
           width: 4px;
           height: 4px;
           background-color: var(--primary-clr);
           border-radius: 50%;
           position: absolute;
           bottom: -6px;
           left: 50%;
           transform: translate(-50%, -50%);
           animation: scale 1s linear infinite;
       }
   }

   @keyframes scale {
       0%{
           transform: scale(0);
       } 50%{
           transform: scale(1.2);
       }100%{
           transform: scale(0);
       }
          
   }

}
.home{
        padding: 1rem 1.25rem;
        background-color: var(--primary-clr);
        display: block;
        margin-right: 1rem;
        cursor: pointer;
        transition: .3s;
        
    }
    .home:hover{
        background-color: #f4a930;
    }
    .home a:hover{
        color: black
    }
.menuBar{
    cursor: pointer;
    display: none;
    color: var(--primary-clr-alt);

}
.close{
    display: none;
}

.socialIcons{
    margin-left: auto;
}



@media screen and (max-width: 968px){
    .menuBar{
        display: block;
        margin-left: auto;
    }
    .socialIcons{
        display: none;
    }

    .hide-navItems{
        transform: translateY(-130%);
        transition: all .3s;
        opacity: 0;
    }

    ul{
        position: fixed;
        width: 230px;
        background-color: #ffffff84;
        backdrop-filter: blur(15px);
        top: 1rem;
        right: 2rem;
        flex-direction: column;
        padding:3rem 01rem;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0, 0, 0.1);
        transition: all .3s;

        a{
            font-size: 18px;
        }

        .close{
            display: block;
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
            opacity: .5;
            color: #f03147;
            transition: all .3s;
        }
    }

    ul:hover .close{
        opacity: 1;
        transform: rotate(90deg);
    }
}
`
const Nav = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <NavStyle className='nav'>
              <li className='home'>
                  <NavLink to='/home'>
                      <Home />
                  </NavLink>
              </li>
          <ul className={!showNav ? 'navItems hide-navItems': 'navItems'}>
              {/* Close icon------------- */}
              <Close className='close' onClick={()=> setShowNav(!showNav)}/>

              <li>
                  <NavLink to='/resume'
                  onClick={() => setShowNav(!showNav)}
                
                  >Resume</NavLink>
              </li>
              <li>
                  <NavLink to='/portfolio'
                  onClick={() => setShowNav(!showNav)}
                  > Portfolio </NavLink>
              </li>
              <li>
                  <NavLink to='/blog'
                  onClick={() => setShowNav(!showNav)}
                  >Blog</NavLink>
              </li>
              <li>
                  <NavLink to='/event'
                  onClick={() => setShowNav(!showNav)}
                  >Event</NavLink>
              </li>
              <li>
                  <NavLink to='/contact'
    
                  onClick={() => setShowNav(!showNav)}
                  >Contact</NavLink>
              </li>
          </ul>

          <SocialIcons />

          <GridView className='menuBar' onClick={()=>setShowNav(!showNav)}/>
    </NavStyle>
  )
}

export default Nav