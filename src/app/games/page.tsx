"use client"; // This is a client component
import Image from "next/image";
import LeftMenu from "../components/LeftMenu";
import LeftAvatarSection from "../components/LeftAvatarSection";
import TopNavigation from "../components/TopNavigation";
import BreadCrumb from "../components/BreadCrumb";
import Title from "../components/Title";
import content from "../../../public/static/locales/en/common.json";
import InputCheckbox from "../components/form/InputCheckbox";
import ButtonBet from "../components/buttons/ButtonBet";
import ButtonPlaceBet from "../components/buttons/ButtonPlaceBet";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import ButtonDefault from "../components/buttons/ButtonDefault";
import { useState } from "react";
import GamesTabMenu from "../components/GamesTabMenu";

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

          <div className="">
            <div className="">
              <div className=" mb-[20px] lg:mb-[57px]">
                <GamesTabMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
