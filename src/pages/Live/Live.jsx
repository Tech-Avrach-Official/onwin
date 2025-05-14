import Carousel from '@/component/Carousel'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import React from 'react'
import LivePageUi from './components/LivePageUi'

const Live = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>
      <Carousel/>
      <LivePageUi/>
    </div>
  )
}

export default Live