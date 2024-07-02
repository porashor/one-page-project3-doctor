import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[80%] mx-auto py-5'>
      {children}
    </div>
  )
}

export default Container
