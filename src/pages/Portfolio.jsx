import React, { useState } from 'react'
import datas from '../assets/Data/PortfolioData'
// import PortfolioItems from '../components/PortfolioItems'
import btnData from '../assets/Data/BtnData'
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle'

const PortfolioStyle = styled.div`
background-color: white;
  padding: 1rem;

  .btnGroup{
    margin: 1rem 0;
    button{
      border: none;
      outline: none;
      margin: .5rem;
      background: none;
      text-transform: capitalize;
      font-weight: 500;
      color: #222;
      cursor: pointer;
    }
  }

  .portfolioItems{
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;

    .card{
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
      border-radius: 7px;
      overflow: hidden;


      .portfolioData{
        padding: 1rem;
        transition: all .3s;

        .title{
          font-size: 14px;
          font-weight: 600;
          color: #333;
          text-transform: capitalize;
        }

        .desc{
          color: #777;
          font-size: 13px;
        }
      }

          
    &:hover .portfolioData{
      background-color: #fafae3;
    }
    }

  }

`

const Portfolio = () => {
  const [data, setData] = useState(datas)

  const handleClick =()=>{
    
  }

  const filteredItem = ((item)=>{
    const filtered = data.map((data)=>data.gategory === item);
    setData(filtered)
  })

  return (
    <PortfolioStyle>
      <SectionTitle title='portfolio'/>
      <div className="btnGroup">
        {
          btnData.map((text)=>(
            <button onClick={()=> filteredItem('html')}>{text}</button>
          ))
        }
      </div>

      <div className="portfolioItems">
         {
           data.map((item)=>(
             <div className="card" key={item.id} 
             onClick={()=>handleClick()}
             >
               <img src={item.img} alt="" />

               <div className="portfolioData">
                 <h3 className="title">{item.title}</h3>
                 <p className="desc">{item.desc}</p>
               </div>
             </div>
           ))
         }
      </div>
    </PortfolioStyle>
  )
}

export default Portfolio

