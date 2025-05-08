import Header from './components/Header'
import GamesGrid from './components/Games'

const Games = () => {
  return (
    <div className=' bg-[#f2f2f2] px-3 flex flex-col items-center'>
      <div className='w-full md:w-[80%]'>
      <Header />
      <GamesGrid />
      </div>
    </div>
  )
}

export default Games