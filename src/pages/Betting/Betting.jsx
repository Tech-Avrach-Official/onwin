import React from 'react'
import SportsBattingUi from './components/SportsBattingUi'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'
import SportsMobBattingUi from './components/MobileView/SportsMobBattingUi'

const Betting = () => {

  return (
    <div>
      <div className='hidden md:block'>
        <Navbar />
      <SubNavbar  />
      <Carousel />
      <SportsBattingUi />
      </div>
      <div className='md:hidden'>
        <Navbar />
        <Carousel />
        <SportsMobBattingUi/>
        {/* <SportsBattingUi /> */}
      </div>
    </div>
  )
}

export default Betting