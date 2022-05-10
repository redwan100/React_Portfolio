import React from 'react'
import styled from 'styled-components';

const BlogStyle = styled.div`
background-color: white;
padding: 1rem;
border-radius: 7px;
text-align: center;
height: 80vh;

.blog{
  padding: 5rem 0 8rem 0;
  position: relative;
  h2{
    font-size: 7rem;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: #d28c14;
    font-style: italic;
    font-weight: 700;
  }

  p{
    font-size: 3rem;
    color: #605656;
    margin-top: -10px;
    transform: translateY(-20px) rotate(-3deg);
    font-family: 'Pacifico', cursive
  }

}
`
const Blog = () => {
  return (
      <BlogStyle>
         <div className="blog">
          <h2 className='font-effect-fire-animation'>blog</h2>
            <p className='font-effect-fire-animation'> Comming soon </p>
         </div>
    </BlogStyle>
  )
}

export default Blog