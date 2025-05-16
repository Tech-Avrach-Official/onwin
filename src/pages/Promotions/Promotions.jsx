import React from 'react'
import BonusCarousel from './components/BonusCarousel'
import BonusCard from './components/BonusCard'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'

const Promptions = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar/>
        <BonusCarousel />
        <BonusCard />
    </div>
  )
}

export default Promptions