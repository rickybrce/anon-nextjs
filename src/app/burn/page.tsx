"use client"; // This is a client component
import Image from "next/image";
import LeftMenu from "../components/LeftMenu";
import LeftAvatarSection from "../components/LeftAvatarSection";
import TopNavigation from "../components/TopNavigation";
import Title from "../components/Title";
import content from "../../../public/static/locales/en/common.json";
import { useState } from "react";
import ActiveGames from "../components/ActiveGames";
import Balance from "../components/Balance";
import BalanceSecond from "../components/BalanceSecond";
import ButtonPlaceBet from "../components/buttons/ButtonPlaceBet";
import BalanceSecondProgress from "../components/BalanceSecondProgress";
import Tooltip from "../components/Tooltip";
import { createBet } from "../api/bets";

const breadcrumb = [
  {
    link: "/",
    title: "All Games",
    active: false,
  },
  {
    link: "#gameone",
    title: "Game 1",
    active: true,
  },
];
const category = [
  {
    title: "Blue Chip",
    active: true,
    selected: true,
  },
  {
    title: "Nukes",
    active: true,
    selected: false,
  },
  {
    title: "Derivatives",
    active: false,
    selected: false,
  },
  {
    title: "Microcaps",
    active: false,
    selected: false,
  },
];

const coins = [
  {
    title: "Ethereum<br>ETH",
    active: true,
    selected: true,
  },
  {
    title: "Arbitrum<br>ARB",
    active: true,
    selected: false,
  },
  {
    title: "Bitcoin<br>BTC",
    active: false,
    selected: false,
  },
  {
    title: "Dogecoin<br>DOGE",
    active: false,
    selected: false,
  },
  {
    title: "Cardano<br>ADA",
    active: false,
    selected: false,
  },
];

const leverage = [
  {
    title: "5x",
    active: true,
    selected: true,
  },
  {
    title: "10x",
    active: true,
    selected: false,
  },
  {
    title: "15x",
    active: false,
    selected: false,
  },
  {
    title: "20x",
    active: false,
    selected: false,
  },
];

const position = [
  {
    title: "Short",
    active: true,
    selected: true,
  },
  {
    title: "Long",
    active: true,
    selected: false,
  },
];

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);

  const [showCoins, setShowCoins] = useState(false);
  const [showLeverages, setShowLeverages] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [showBet, setShowBet] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);

  const [activeCategory, setActiveCategory] = useState(0);


  const handlePlaceBet = () => {
    setShowCoins(false);
    setShowLeverages(false);
    setShowPositions(false);
    setShowBet(false);
    setActiveCategory(
      activeCategory < category.length ? activeCategory + 1 : 0
    );
    
      const user_game_id = ""
      const coin_id  = ""
      const is_payed  = ""
      const submition_date  = ""
      const category_id = ""
      const leverage = ""
      const position_type =""
      const amount = ""
      const coin_price = ""

    createBet(
      user_game_id,
      coin_id,
      is_payed,
      submition_date,
      category_id,
      leverage,
      position_type,
      amount,
      coin_price
  )
      .then(async (response : any) => {
         //console.log(response)

      })
      .catch((error: any) => {
          console.log(error.response.message)
          setErrors(error.response.errors);
      });

  };


  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
        <LeftMenu activeItem={2} />
        <LeftAvatarSection />
        <div className="grow overflow-hidden mt-4 lg:mt-0">
          <TopNavigation />
          <div className="xl:flex justify-between">
            <div className="">
              <div className="relative inline-block">
                <Title
                  title={content.general.burn}
                  classList="mb-4 lg:mb-10 mt-4 lg:mt-8"
                />
                <div className="absolute right-[-30px] top-[15px] lg:top-[30px]">
                  <Tooltip text={content.general.burn_tooltip_text} cta_label="Agree"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <BalanceSecond
              title={content.general.your_current_balance}
              value="5.000 KIN"
              type="eth"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center mb-4 lg:mb-[27px]">
            <BalanceSecondProgress
              title={content.general.burn_kin}
              value="5.000 KIN"
              type="eth"
              width="40%"
            />
            <svg
              className="mt-8 lg:mt-[70px] shrink-0 w-full lg:w-auto"
              width="77"
              height="23"
              viewBox="0 0 77 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.0607 12.5607C76.6464 11.9749 76.6464 11.0251 76.0607 10.4393L66.5147 0.893404C65.9289 0.307617 64.9792 0.307617 64.3934 0.893404C63.8076 1.47919 63.8076 2.42894 64.3934 3.01472L72.8787 11.5L64.3934 19.9853C63.8076 20.5711 63.8076 21.5208 64.3934 22.1066C64.9792 22.6924 65.9289 22.6924 66.5147 22.1066L76.0607 12.5607ZM-1.31134e-07 13L75 13L75 10L1.31134e-07 10L-1.31134e-07 13Z"
                fill="#075985"
              />
            </svg>
            <BalanceSecond
              title={content.general.you_will_get}
              value="5.000 DOL"
              type="eth"
            />
          </div>

          <div className="flex justify-center mt-10 px-6 max-w-[320px] mx-auto">
            <div>
              <ButtonPlaceBet
                onClick={handlePlaceBet}
                className="grow min-w-[270px] lg:min-w-[305px]"
              >
                Burn
              </ButtonPlaceBet>
            </div>
          </div>

          <div className="flex justify-center lg:mt-10">
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
  );
}
