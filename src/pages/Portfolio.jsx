import React, { useState } from 'react'
import Menu from "../assets/Data/PortfolioData";
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
      background: none;
      cursor: pointer;
      transition: all .2s;
      margin: 0 .5rem;

      &:hover{
          color: #f5c529;
      }
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

  .pBtns{
    margin: 0 .5rem;
  }

.modal{
  background-color: #3333331c;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalItem{
    max-width: 400px;
    height: auto;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

    p{
      a{
        color: #f5c529;
        font-size: 700;
        text-transform: capitalize;
      }
    }
  }

  img{
    max-width: 250px;
    height: 250px;
    margin: 1rem auto;
    display: block;
  }
}
`

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [showModal, setShowModal] = useState(false)

 const filteredItem = (categoItem)=>{
  const updatedItem = Menu.filter((curEle)=>{
    if(categoItem === 'all'){
      setItems(Menu)
    }
    return curEle.gategory === categoItem 
  })

  setItems(updatedItem);

 }


  return (
    <PortfolioStyle>
      <SectionTitle title='portfolio'/>
      <div className="btnGroup">
        <button onClick={()=>setItems(Menu)}>All</button>
        <button onClick={()=>filteredItem("reactjs")}>ReactJs</button>
        <button onClick={()=>filteredItem("html")}>Html</button>
        <button onClick={()=>filteredItem("javascript")}>JavaScript</button>
        <button onClick={()=>filteredItem("html css")}>Html Css</button>
      </div>

      <div className="portfolioItems">
         {
           items.map((item)=>(
            <div>
               <div className="card" key={item.id} onClick={()=>setShowModal(true)}>
               <img src={item.img} alt="" />

               <div className="portfolioData">
                 <h3 className="title">{item.title}</h3>
                 <p className="desc">{item.desc}</p>
               </div>
             </div>
             {
               showModal && <div className="modal" onClick={()=>setShowModal(false)}>
               <div className="modalItem">
                 <h2>{item.title}</h2>
                 <img src={item.img} alt="" />

                 <p>
                   {item.mdesc} <span> <a href={item.link}>live demo</a> </span>
                 </p>
               </div>
             </div>
             }

            </div>
           ))
         }
      </div>
    </PortfolioStyle>
  )
}

export default Portfolio

