import Carousel from '@/component/Carousel'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import React from 'react'
import LivePageUi from './components/LivePageUi'
import LiveMobUi from './components/MobileView/LiveMobUi'

const Live = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar />
      <SubNavbar  />
      <Carousel />
      <LivePageUi />
      </div>
      <div className='md:hidden'>
        <Navbar />
        <Carousel />
        <LiveMobUi/>
        {/* <SportsBattingUi /> */}
      </div>
    </div>
  )
}

export default Live