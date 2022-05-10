
import { EmojiEmotions, Favorite, ThumbUpSharp } from '@mui/icons-material';
import React,{useState} from 'react'
import styled from 'styled-components';

const ReactStyle = styled.div`
border-radius: 30px;
border: 1px solid #bdbdbd99;
overflow: hidden;
display: inline-block;
background-color: white;
padding: 0 .25rem;
box-shadow: 0 0 20px rgba(0,0,0,0.1);



&:hover .likeBtn{
  transform: translateY(0);
  transition-delay: 200ms;
}
&:hover .emojiBtn{
  transform: translateY(0);
  transition-delay: 300ms;
}
&:hover .loveBtn{
  transform: translateY(0);
  transition-delay: 400ms;
}

button{
  outline: none;
  background-color: #fcfcfc;
  border: none;
  padding: .25rem .5rem;
  cursor: pointer;
  svg{
    font-size: 20px;
    opacity: .7;
  }
}

.likeBtn{

  animation: animate 1.5s linear infinite;
}
.emojiBtn{

  animation: animate 1.5s linear infinite;
}
.loveBtn{

  animation: animate 1.5s linear infinite;
}


.like{
  svg{
    opacity: 1;
    border-radius: 50%;
    background-color: #048be6;
    color: white;
    width: 20px;
    height: 20px;
    padding: .25rem;
  }
}

@keyframes animate {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(.7);
  }
  100%{
    transform: scale(1);
  }
}

.emoji{
  svg{
    opacity: 1;
    border-radius: 50%;
    background-color: #e2ea09;
    color: white;
    width: 20px;
    height: 20px;
    padding: .25rem;
  }
}

.loves{
  svg{
    color: #e70e16;
    background: white;
    opacity: 1;
    border-radius: 50%;
    background-color: #e70e16;
    color: white;
    width: 20px;
    height: 20px;
    padding: .25rem;
  }
}

.likeBtn{
  transform: translateY(5px);
  transition: .1s;
  background: white;
}
.emojiBtn{
  transform: translateY(5px);
  transition: .1s;
  background: transparent;
}
.loveBtn{
  transform: translateY(5px);
  transition: .1s;
  background: white;
}


`
const Reacting = () => {
    const [like, setLike] = useState(null)
    const [good, setGood] = useState(null)
    const [love, setLove] = useState(null)
  return (
    <ReactStyle className='reaction'>
      
        <button 
        onClick={()=>setLike(!like)}
        className = {like ? 'like':'likeBtn'} ><ThumbUpSharp /></button>

        <button onClick={()=>setGood(!good)}
        className={good ? 'emoji':'emojiBtn '}
        >
         <EmojiEmotions />
        </button>

        <button onClick={()=>setLove(!love)}
        className={love ? 'loves':'loveBtn'}
        >
         <Favorite />
        </button>

        
    </ReactStyle>
  )
}

export default Reacting