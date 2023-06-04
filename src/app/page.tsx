import Image from 'next/image'
import LeftMenu from './components/LeftMenu'
import LeftAvatarSection from './components/LeftAvatarSection'
import TopNavigation from './components/TopNavigation'
import ActiveGames from './components/ActiveGames'
import Statistic from './components/Statistic'
import TopPlayers from './components/TopPlayers'

const leftMenu = [
  {
    link:"/",
    title:"Dashboard",
    iconUrl:"ic-home.svg",
    active: true
  },
  {
    link:"#games",
    title:"Games",
    iconUrl:"ic-message.svg",
    active: false
  },
  {
    link:"#burn",
    title:"Burn",
    iconUrl:"ic-buy.svg",
    active: false
  },
  {
    link:"#scoreboard",
    title:"Scoreboard",
    iconUrl:"ic-activity.svg",
    active: false
  },
  {
    link:"#how2play",
    title:"How 2 Play",
    iconUrl:"ic-wallet.svg",
    active: false
  }
]

export default function Home() {
  
  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
       <LeftMenu 
       items={leftMenu}
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
