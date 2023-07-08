"use client"; // This is a client component
import Image from "next/image";
import LeftMenu from "../../components/LeftMenu";
import LeftAvatarSection from "../../components/LeftAvatarSection";
import TopNavigation from "../../components/TopNavigation";
import BreadCrumb from "../../components/BreadCrumb";
import Title from "../../components/Title";
import content from "../../../../public/static/locales/en/common.json";
import InputCheckbox from "../../components/form/InputCheckbox";
import ButtonBet from "../../components/buttons/ButtonBet";
import ButtonPlaceBet from "../../components/buttons/ButtonPlaceBet";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import ButtonDefault from "../../components/buttons/ButtonDefault";
import { useState } from "react";


const breadcrumb = [
  {
    link: "/games",
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
    extra: false
  },
  {
    title: "10x",
    active: true,
    selected: false,
    extra: false
  },
  {
    title: "15x",
    active: false,
    selected: false,
    extra: false
  },
  {
    title: "20x",
    active: false,
    selected: false,
    extra: false
  },
  {
    title: "Extra leverage",
    active: false,
    selected: false,
    extra: true
  }
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
  const [selectedCoins, setSelectedCoins] = useState<any[]>([]);
  const [selectedLeverages, setSelectedLeverages] = useState<any[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<any[]>([]);

  const [showCoins, setShowCoins] = useState(false);
  const [showLeverages, setShowLeverages] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [showBet, setShowBet] = useState(false);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCoins, setActiveCoins] = useState(0);
  const [activeLeverages, setActiveLeverages] = useState(0);
  const [activePositions, setActivePositions] = useState(0);

  const handleCatChange = (e: any) => {
    //Select categories
    if (selectedCategories.some((item) => e === item)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== e));
    } else {
      setSelectedCategories([...selectedCategories, e]);
    }

    //Show next options
    if (showCoins === false) {
      setShowCoins(true);
    } else {
      setShowCoins(false);
    }
  };

  const handleCoinsChange = (e: any) => {
    //Select Coins
    if (selectedCoins.some((item) => e === item)) {
      setSelectedCoins(selectedCoins.filter((item) => item !== e));
    } else {
      setSelectedCoins([...selectedCoins, e]);
    }

    //Show next options
    if (showLeverages === false) {
      setShowLeverages(true);
    } else {
      setShowLeverages(false);
    }
  };

  const handleLeveragesChange = (e: any) => {
    //Select Leverages
    if (selectedLeverages.some((item) => e === item)) {
      setSelectedLeverages(selectedLeverages.filter((item) => item !== e));
    } else {
      setSelectedLeverages([...selectedLeverages, e]);
    }

    //Show next options
    if (showPositions === false) {
      setShowPositions(true);
    } else {
      setShowPositions(false);
    }
  };

  const handlePositionsChange = (e: any) => {
    //Select Positions
    if (selectedPositions.some((item) => e === item)) {
      setSelectedPositions(selectedPositions.filter((item) => item !== e));
    } else {
      setSelectedPositions([...selectedPositions, e]);
    }

    //Show next options
    if (showBet === false) {
      setShowBet(true);
    } else {
      setShowBet(false);
    }
  };

  const handlePlaceBet = () => {
    setShowCoins(false);
    setShowLeverages(false);
    setShowPositions(false);
    setShowBet(false);
    setActiveCategory(
      activeCategory < category.length ? activeCategory + 1 : 0
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length === category.length) {
      console.log("Submit");
    }
  };

  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
        <LeftMenu activeItem={1} />
        <LeftAvatarSection />
        <div className="grow overflow-hidden mt-4 lg:mt-0">
          <TopNavigation />
          <BreadCrumb items={breadcrumb} status="Soft" tootltipText="Some text here" />

          <div className="xl:flex justify-between">
            <div className="">
            <Title title={"1. "+content.general.select_character} tooltipText={content.general.select_character_text} classList="mb-4" />
              <Title title={"2. "+content.general.select_category} classList="mb-4" />
              <div className="flex flex-wrap items-center mb-[20px] lg:mb-[57px]">
                {category.map((item, index) => (
                  <InputCheckbox
                    key={index}
                    label={item.title}
                    className="mr-2 xl:mr-4 lg:mb-4"
                    onChange={() => handleCatChange(item.title)}
                    active={activeCategory === index ? true : false}
                    checked={selectedCategories.some((e) =>
                      item.title === e ? true : false
                    )}
                  />
                ))}
              </div>

              {showCoins && (
                <>
                  <Title title={"3. "+content.general.select_coin} classList="mb-4" />
                  <div className="flex flex-wrap items-center mb-[20px] lg:mb-[57px]">
                    {coins.map((item, index) => (
                      <InputCheckbox
                        key={index}
                        label={item.title}
                        className="mr-2 xl:mr-4 lg:mb-4"
                        onChange={() => handleCoinsChange(item.title)}
                        active={false}
                        checked={selectedCoins.some((e) =>
                          item.title === e ? true : false
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
              {showLeverages && (
                <>
                  <Title
                    title={"4. "+content.general.select_leverage}
                    classList="mb-4"
                  />
                  <div className="flex flex-wrap items-center mb-[20px] lg:mb-[57px]">
                    {leverage.map((item, index) => (
                      <InputCheckbox
                        key={index}
                        label={item.title}
                        className="mr-2 xl:mr-4 lg:mb-4"
                        onChange={() => handleLeveragesChange(item.title)}
                        active={false}
                        checked={selectedLeverages.some((e) =>
                          item.title === e ? true : false
                        )}
                        extra={item.extra}
                      />
                    ))}
                  </div>
                </>
              )}
              {showPositions && (
                <>
                  <Title
                    title={"5. "+content.general.your_position}
                    classList="mb-4"
                  />
                  <div className="flex flex-wrap items-center mb-[20px] lg:mb-[57px]">
                    {position.map((item, index) => (
                      <InputCheckbox
                        key={index}
                        label={item.title}
                        className="mr-2 xl:mr-4 lg:mb-4"
                        onChange={() => handlePositionsChange(item.title)}
                        active={false}
                        checked={selectedPositions.some((e) =>
                          item.title === e ? true : false
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
              {showBet && (
                <>
                  <Title title={"6. "+content.general.bet} classList="mb-4" />
                  <div className="grid grid-cols-2 gap-[42px] pb-[45px] w-full border-b-[3px] border-green-100">
                    <ButtonBet
                      image="/images/ic-ethereum-2.svg"
                      className="grow"
                    >
                      4,668 DOL
                    </ButtonBet>
                    <ButtonPlaceBet onClick={handlePlaceBet} className="grow">
                      Place bet
                    </ButtonPlaceBet>
                  </div>
                </>
              )}
            </div>

            <div className="3xl:pl-[60px] max-w-[510px] 3xl:pt-[70px]">
              <div>
                <div className="mb-[14px] font-w-700 text-[20px] leading-[28px] text-white">
                  Selected Coin chart
                </div>
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

          <div className="xl:flex items-center mt-4 lg:mt-[49px] justify-between">
            <div className="xl:w-6/12 xl:flex xl:justify-center">
              <ButtonSubmit
                disabled={
                  category.length === selectedCategories.length ? false : true
                }
                onClick={handleSubmit}
                className="w-full max-w-[344px] mt-6 xl:mt-0"
              >
                SUBMIT
              </ButtonSubmit>
            </div>
            <div className="xl:flex items-center xl:w-6/12 mt-6 xl:mt-0 justify-between">
              <div className="font-w-700 text-[20px] leading-[25px] xl:pl-[40px] mr-6 xl:mr-[39px] mb-4 xl:mb-0">
                Improve your chance to win
              </div>
              <div>
                <ButtonDefault className="mr-5">Share on social</ButtonDefault>
                <ButtonDefault>Boost</ButtonDefault>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
