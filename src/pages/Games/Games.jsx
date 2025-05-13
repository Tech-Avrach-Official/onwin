import Header from './components/Header'
import GamesGrid from './components/Games'
import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import Carousel from '@/component/Carousel'

const Games = () => {
  return (
    <div className=''>
      <Navbar />
      <SubNavbar />
      <Carousel />
      <div className=''>
      <Header />
      <GamesGrid />
      </div>
    </div>
  )
}

export default Games