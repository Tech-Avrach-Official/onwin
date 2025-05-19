import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import React from 'react'
import EsportsUi from './components/EsportsUi'
import EsportsMobUi from './components/MobileView/EsportsMobUi'

const Esports = () => {
  return (
     <div>
      <div className='hidden md:block'>
        <Navbar />
      <SubNavbar  />
      {/* <Carousel /> */}
      <EsportsUi />
      </div>
      <div className='md:hidden'>
        <Navbar />
        {/* <Carousel /> */}
        <EsportsMobUi/>
        {/* <SportsBattingUi /> */}
      </div>
    </div>
  )
}

export default Esports