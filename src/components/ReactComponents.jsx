import React,{useState} from 'react';
import styled from 'styled-components';

const ReactStyle = styled.div`
ul{
    
    li{
        cursor: pointer;
    }
}

.active{
    color: red;
}
`

const reactItems = [
    {
        id: 1,
        type:'like'
    },
    {
        id: 2,
        type:'good'
    },
    {
        id: 3,
        type:'love'
    },
]

const Reaction =()=>{
    const [reacts, setReacts] = useState(reactItems);
    const [selectReact, setSelectReact] = useState()

    const filteredItem = (item)=>{
        const filter_item = reacts.filter((t)=> t.type === item)
        setSelectReact(filter_item)
    }
    console.log(selectReact);
    return(
        <ReactStyle>
            
            <ul>
                {
                    reacts.map(item=>(
                        <li className={selectReact === item? "active":''} key={item.id} onClick={()=>filteredItem(item.type)}>{item.type}</li>
                    ))
                }
            </ul>

            <p>
                
            </p>
        </ReactStyle>
    )

}

export default Reaction;