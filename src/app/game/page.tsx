"use client"; // This is a client component
import Image from 'next/image'
import LeftMenu from '../components/LeftMenu'
import LeftAvatarSection from '../components/LeftAvatarSection'
import TopNavigation from '../components/TopNavigation'
import BreadCrumb from '../components/BreadCrumb'
import Title from '../components/Title'
import content from '../../../public/static/locales/en/common.json'
import InputCheckbox from '../components/form/InputCheckbox'

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

const breadcrumb = [
  {
    link:"/",
    title:"All Games",
    active: false
  },
  {
    link:"#gameone",
    title:"Game 1",
    active: true
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
        <BreadCrumb 
        items={breadcrumb}
        />
        <Title title={content.general.select_category} classList='mb-4' />
        <div className='flex flex-wrap items-center mb-[57px]'>
        <InputCheckbox 
        label="Blue Chip" 
        className="mr-6" 
        onChange={() => console.log('changed')}
        active={true}
        checked={true}
        /> 
        <InputCheckbox 
        label="Blue Chip" 
        className="mr-6" 
        onChange={() => console.log('changed')}
        active={true}
        /> 
        </div>

        <Title title={content.general.select_coin} classList='mb-4' />

        <Title title={content.general.select_leverage} classList='mb-4' />

        <Title title={content.general.your_position} classList='mb-4' />

        <Title title={content.general.bet} classList='mb-4' />

       </div>
      </div>
    </main>
  )
}
