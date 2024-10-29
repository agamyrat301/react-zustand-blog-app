import React from 'react'

const Button = ({children}) => {
  return (
    <button className='flex justify-center text-white bg-blue-600 rounded-full
     hover:bg-blue-500 text-sm disabled:cursor-not-allowed px-3 py-2' disabled>
        {children}
    </button>
  )
}

export default Button