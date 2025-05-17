import Carousel from '@/component/Carousel'
import Navbar from '@/component/Navbar'
import { StickLoader } from '@/component/StickLoader'
import SubNavbar from '@/component/SubNavbar'
import React from 'react'

const Parlayboy = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>

      <div className='h-screen bg-black flex justify-center'>
        <StickLoader />
      </div>
    </div>
  )
}

export default Parlayboy