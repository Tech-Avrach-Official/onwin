import React from 'react'
import SportsBattingUi from './components/SportsBattingUi'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'

const Betting = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar  />
      <Carousel />
      <SportsBattingUi />
    </div>
  )
}

export default Betting