import React from 'react'

const PortfolioItems = ({data}) => {
  return (
    <div>
        {
            data.map((item)=>(
                <h1>item</h1>
            ))
        }
    </div>
  )
}

export default PortfolioItems