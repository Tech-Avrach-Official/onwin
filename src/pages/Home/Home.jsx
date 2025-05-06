import React from 'react'
import TabCards from './components/TabCards'
import SocialIcons from './components/SocialIcons'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'
import Footer from '@/component/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar />
    <SubNavbar />
  <Carousel /> */}
      <TabCards />
      <SocialIcons />
      {/* <Footer /> */}
    </div>
  )
}

export default Home