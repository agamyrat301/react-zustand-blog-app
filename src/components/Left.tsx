import React from 'react'

import { useCategoryStore } from '../stores/useCategoryStore'

const Left: React.FC = () => {
    const categories = useCategoryStore((state) => state.categories); 
  return (
    <div className='h-screen flex flex-col'>
        <div>
            <h1 className='text-center p-3'>App</h1>
            {categories.map((category)=>{
                return <div className='p-3 rounded-full hover:bg-gray-200 transition cursor-pointer text-xl'>{
                    category.name
                }</div>

            })}
        </div>
    </div>
  )
}

export default Left