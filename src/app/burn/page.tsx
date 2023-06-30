"use client"; // This is a client component
import Image from 'next/image'
import LeftMenu from '../components/LeftMenu'
import LeftAvatarSection from '../components/LeftAvatarSection'
import TopNavigation from '../components/TopNavigation'
import Title from '../components/Title'
import content from '../../../public/static/locales/en/common.json'
import { useState } from 'react';
import ActiveGames from '../components/ActiveGames';
import Balance from '../components/Balance';
import BalanceSecond from '../components/BalanceSecond';
import ButtonPlaceBet from '../components/buttons/ButtonPlaceBet';
import BalanceSecondProgress from '../components/BalanceSecondProgress';

const breadcrumb = [
  {
    link: "/",
    title: "All Games",
    active: false
  },
  {
    link: "#gameone",
    title: "Game 1",
    active: true
  }
]
const category = [
  {
    title: "Blue Chip",
    active: true,
    selected: true
  },
  {
    title: "Nukes",
    active: true,
    selected: false
  },
  {
    title: "Derivatives",
    active: false,
    selected: false
  },
  {
    title: "Microcaps",
    active: false,
    selected: false
  }
]

const coins = [
  {
    title: "Ethereum<br>ETH",
    active: true,
    selected: true
  },
  {
    title: "Arbitrum<br>ARB",
    active: true,
    selected: false
  },
  {
    title: "Bitcoin<br>BTC",
    active: false,
    selected: false
  },
  {
    title: "Dogecoin<br>DOGE",
    active: false,
    selected: false
  },
  {
    title: "Cardano<br>ADA",
    active: false,
    selected: false
  }
]

const leverage = [
  {
    title: "5x",
    active: true,
    selected: true
  },
  {
    title: "10x",
    active: true,
    selected: false
  },
  {
    title: "15x",
    active: false,
    selected: false
  },
  {
    title: "20x",
    active: false,
    selected: false
  }
]

const position = [
  {
    title: "Short",
    active: true,
    selected: true
  },
  {
    title: "Long",
    active: true,
    selected: false
  }
]

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<any[]>([])
  const [selectedCoins, setSelectedCoins] = useState<any[]>([])
  const [selectedLeverages, setSelectedLeverages] = useState<any[]>([])
  const [selectedPositions, setSelectedPositions] = useState<any[]>([])

  const [showCoins, setShowCoins] = useState(false)
  const [showLeverages, setShowLeverages] = useState(false)
  const [showPositions, setShowPositions] = useState(false)
  const [showBet, setShowBet] = useState(false)

  const [activeCategory, setActiveCategory] = useState(0)
  const [activeCoins, setActiveCoins] = useState(0)
  const [activeLeverages, setActiveLeverages] = useState(0)
  const [activePositions, setActivePositions] = useState(0)

  const handleCatChange = (e: any) => {
    //Select categories
    if ((selectedCategories.some(item => e === item))) {
      setSelectedCategories(selectedCategories.filter(item => item !== e));
    }
    else {
      setSelectedCategories([...selectedCategories, e])
    }

    //Show next options
    if (showCoins === false) {
      setShowCoins(true)
    } else {
      setShowCoins(false)
    }
  }

  const handleCoinsChange = (e: any) => {
    //Select Coins
    if ((selectedCoins.some(item => e === item))) {
      setSelectedCoins(selectedCoins.filter(item => item !== e));
    }
    else {
      setSelectedCoins([...selectedCoins, e])
    }

    //Show next options
    if (showLeverages === false) {
      setShowLeverages(true)
    } else {
      setShowLeverages(false)
    }

  }

  const handleLeveragesChange = (e: any) => {
    //Select Leverages
    if ((selectedLeverages.some(item => e === item))) {
      setSelectedLeverages(selectedLeverages.filter(item => item !== e));
    }
    else {
      setSelectedLeverages([...selectedLeverages, e])
    }

    //Show next options
    if (showPositions === false) {
      setShowPositions(true)
    } else {
      setShowPositions(false)
    }

  }

  const handlePositionsChange = (e: any) => {
    //Select Positions
    if ((selectedPositions.some(item => e === item))) {
      setSelectedPositions(selectedPositions.filter(item => item !== e));
    }
    else {
      setSelectedPositions([...selectedPositions, e])
    }

    //Show next options
    if (showBet === false) {
      setShowBet(true)
    } else {
      setShowBet(false)
    }

  }

  const handlePlaceBet = () => {
    setShowCoins(false)
    setShowLeverages(false)
    setShowPositions(false)
    setShowBet(false)
    setActiveCategory((activeCategory < category.length) ? activeCategory + 1 : 0)
  }

  const handleSubmit = () => {
    if (selectedCategories.length === category.length) {
      console.log("Submit")
    }
  }

  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
        <LeftMenu
          activeItem={2}
        />
        <LeftAvatarSection />
        <div className='grow overflow-hidden mt-4 lg:mt-0'>
          <TopNavigation />

          <div className='xl:flex justify-between'>

            <div className=''>
              <div className='relative'>
                <Title title={content.general.burn} classList='mb-4 lg:mb-10 mt-4 lg:mt-8' />
                <button className='absolute right-[-30px] top-[0px]'>
                  <svg className='w-5 h-5' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_745_1078)">
                      <path d="M17.0754 2.93327C13.1726 -0.974358 6.84096 -0.978243 2.93328 2.92454C-0.974346 6.82743 -0.978279 13.1591 2.9246 17.0667C6.82739 20.9744 13.1591 20.9783 17.0668 17.0754C20.9743 13.1726 20.9783 6.8409 17.0754 2.93327ZM11.3963 16.3455C11.3963 16.4998 11.2712 16.6247 11.117 16.6247H8.88303C8.72883 16.6247 8.60379 16.4998 8.60379 16.3455V8.05243C8.60379 7.89813 8.72883 7.77318 8.88303 7.77318H11.117C11.2712 7.77318 11.3963 7.89808 11.3963 8.05243V16.3455ZM10 6.61427C9.10703 6.61427 8.38047 5.88781 8.38047 4.99477C8.38047 4.10182 9.10698 3.37521 10 3.37521C10.8931 3.37521 11.6196 4.10177 11.6196 4.99477C11.6196 5.88781 10.893 6.61427 10 6.61427Z" fill="#E2E4E9" />
                    </g>
                    <defs>
                      <clipPath id="clip0_745_1078">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <BalanceSecond
              title={content.general.your_current_balance}
              value="5.000 KIN"
              type="eth"
            />
          </div>

          <div className='flex flex-wrap justify-center items-center mb-4 lg:mb-[27px]'>
            <BalanceSecondProgress
              title={content.general.burn_kin}
              value="5.000 KIN"
              type="eth"
              width='40%'
            />
            <svg className='mt-8 lg:mt-[70px] shrink-0 w-full lg:w-auto' width="77" height="23" viewBox="0 0 77 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M76.0607 12.5607C76.6464 11.9749 76.6464 11.0251 76.0607 10.4393L66.5147 0.893404C65.9289 0.307617 64.9792 0.307617 64.3934 0.893404C63.8076 1.47919 63.8076 2.42894 64.3934 3.01472L72.8787 11.5L64.3934 19.9853C63.8076 20.5711 63.8076 21.5208 64.3934 22.1066C64.9792 22.6924 65.9289 22.6924 66.5147 22.1066L76.0607 12.5607ZM-1.31134e-07 13L75 13L75 10L1.31134e-07 10L-1.31134e-07 13Z" fill="#075985" />
            </svg>
            <BalanceSecond
              title={content.general.you_will_get}
              value="5.000 DOL"
              type="eth"
            />
          </div>

          <div className='flex justify-center mt-10 px-6 max-w-[320px] mx-auto'>
            <div>
              <ButtonPlaceBet onClick={handlePlaceBet} className='grow min-w-[270px] lg:min-w-[305px]'>Burn</ButtonPlaceBet>
            </div>
          </div>


          <div className='flex justify-center lg:mt-10'>
            <BalanceSecond
              title={content.general.new_balance}
              value="5.000 KIN"
              type="eth"
            />
          </div>

          <div className="-ml-[20px]">
            <ActiveGames />
          </div>

        </div>
      </div>
    </main>
  )
}
