import React from 'react';


const BoxContent = ({children}) => {
  return (
    <div className='size-full bg-white rounded-lg drop-shadow-lg transition hover:drop-shadow-sm'>
      {children}
    </div>
  )
}

export default BoxContent