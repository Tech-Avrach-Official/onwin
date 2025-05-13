import React from 'react'
import TopStripImg from './components/TopStripImg'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'

const Casino = () => {
  return (
    <div className=" bg-[#f2f2f2]">
      <Navbar />
      <SubNavbar/>
      <Carousel/>
       <div className="px-3">
         <TopStripImg />
        <Header />
        <Main />
       </div>
    </div>
  )
}

export default Casino