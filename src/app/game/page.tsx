"use client"; // This is a client component
import Image from 'next/image'
import LeftMenu from '../components/LeftMenu'
import LeftAvatarSection from '../components/LeftAvatarSection'
import TopNavigation from '../components/TopNavigation'
import BreadCrumb from '../components/BreadCrumb'
import Title from '../components/Title'
import content from '../../../public/static/locales/en/common.json'
import InputCheckbox from '../components/form/InputCheckbox'
import ButtonBet from '../components/buttons/ButtonBet';
import ButtonPlaceBet from '../components/buttons/ButtonPlaceBet';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import ButtonDefault from '../components/buttons/ButtonDefault';

const leftMenu = [
  {
    link: "/",
    title: "Dashboard",
    iconUrl: "ic-home.svg",
    active: true
  },
  {
    link: "#games",
    title: "Games",
    iconUrl: "ic-message.svg",
    active: false
  },
  {
    link: "#burn",
    title: "Burn",
    iconUrl: "ic-buy.svg",
    active: false
  },
  {
    link: "#scoreboard",
    title: "Scoreboard",
    iconUrl: "ic-activity.svg",
    active: false
  },
  {
    link: "#how2play",
    title: "How 2 Play",
    iconUrl: "ic-wallet.svg",
    active: false
  }
]

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

          <div className='flex'>

            <div className=''>

              <Title title={content.general.select_category} classList='mb-4' />
              <div className='flex flex-wrap items-center mb-[57px]'>
                {category.map((item, index) => (
                  <InputCheckbox
                    key={index}
                    label={item.title}
                    className="mr-6"
                    onChange={() => console.log('changed')}
                    active={item.active}
                    checked={item.selected}
                  />
                ))}
              </div>

              <Title title={content.general.select_coin} classList='mb-4' />
              <div className='flex flex-wrap items-center mb-[57px]'>
                {coins.map((item, index) => (
                  <InputCheckbox
                    key={index}
                    label={item.title}
                    className="mr-6"
                    onChange={() => console.log('changed')}
                    active={item.active}
                    checked={item.selected}
                  />
                ))}
              </div>

              <Title title={content.general.select_leverage} classList='mb-4' />
              <div className='flex flex-wrap items-center mb-[57px]'>
                {leverage.map((item, index) => (
                  <InputCheckbox
                    key={index}
                    label={item.title}
                    className="mr-6"
                    onChange={() => console.log('changed')}
                    active={item.active}
                    checked={item.selected}
                  />
                ))}
              </div>

              <Title title={content.general.your_position} classList='mb-4' />
              <div className='flex flex-wrap items-center mb-[57px]'>
                {position.map((item, index) => (
                  <InputCheckbox
                    key={index}
                    label={item.title}
                    className="mr-6"
                    onChange={() => console.log('changed')}
                    active={item.active}
                    checked={item.selected}
                  />
                ))}
              </div>

              <Title title={content.general.bet} classList='mb-4' />
              <div className='grid grid-cols-2 gap-[42px] pb-[45px] mb-[49px] w-full border-b-[3px] border-green-100'>
                <ButtonBet image="/images/ic-ethereum-2.svg" className='grow'>4,668 DOL</ButtonBet>
                <ButtonPlaceBet className='grow'>Place bet</ButtonPlaceBet>
              </div>

            </div>

            <div className=' pl-[60px] max-w-[510px] pt-[70px]'>
              <div>
                <div className='mb-[14px] font-700 text-[20px] leading-[28px] text-white'>Selected Coin chart</div>
                <div className="p-6 border border-green-100 rounded-[16px]">
                  <Image
                    src={"/images/chart-sample.png"}
                    alt={""}
                    width={472}
                    height={545}
                    className="w-full"
                  />
                </div>
              </div>

            </div>

          </div>

          <div className='flex items-center'>
            <div className='w-6/12 flex justify-center'>
              <ButtonSubmit className='w-full max-w-[344px]'>SUBMIT</ButtonSubmit>
            </div>
            <div className='flex items-center w-6/12'>
              <div className='font-700 text-[20px] leading-[25px] lg:pl-[40px] mr-[39px]'>Improve your chance to win</div>
              <ButtonDefault className='mr-5'>Share on social</ButtonDefault>
              <ButtonDefault>Boost</ButtonDefault>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
