import React from 'react'
import PreviewCard from './PreviewCard'
import Follows from './Follows'


const Left: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <PreviewCard title="What's happening"/>
        <Follows title="Who to follow"/>
            
           
    </div>
  )
}

export default Left