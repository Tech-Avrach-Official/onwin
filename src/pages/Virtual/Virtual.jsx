import React from 'react'
import Header from './components/Header'
import Games from './components/Games'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'

const Virtual = () => {
  return (
    <div className=' '>
      <Navbar/>
      <SubNavbar/>
      <Carousel/>
      <div className=''>
      <Header />
      <Games />
      </div>
    </div>
  )
}

export default Virtual