import React from 'react'
import Header from './components/Header'
import Games from './components/Games'

const Virtual = () => {
  return (
    <div className=' bg-[#f2f2f2] px-3 flex flex-col items-center'>
      <div className='w-full md:w-[80%]'>
      <Header />
      <Games />
      </div>
    </div>
  )
}

export default Virtual