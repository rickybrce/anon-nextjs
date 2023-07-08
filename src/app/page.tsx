
//"use client"; // This is a client component
import LeftMenu from './components/LeftMenu'
import LeftAvatarSection from './components/LeftAvatarSection'
import TopNavigation from './components/TopNavigation'
import ActiveGames from './components/ActiveGames'
import Statistic from './components/Statistic'
import TopPlayers from './components/TopPlayers'

export default function Home() {
  
  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
       <LeftMenu 
       activeItem={0}
       />
       <LeftAvatarSection />
       <div className='grow overflow-hidden mt-4 lg:mt-0'>
        <TopNavigation />
        <ActiveGames />
        <Statistic />
        <TopPlayers />
       </div>
      </div>
    </main>
  )
}
