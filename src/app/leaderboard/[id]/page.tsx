"use client"; // This is a client component
import LeftMenu from "../../components/LeftMenu";
import LeftAvatarSection from "../../components/LeftAvatarSection";
import TopNavigation from "../../components/TopNavigation";
import { useState } from "react";
import GamesTabMenu from "../../components/GamesTabMenu";
import SingleGameList from "../../components/SingleGameList";
import Link from "next/link";
import ButtonMenu from "../../components/buttons/ButtonMenu";
import GamePopup from "../../components/GamePopup";
import Title from "../../components/Title";
import Image from "next/image";
import TopNavigationSecond from "../../components/TopNavigationSecond";
import Pagination from "../../components/Pagination";

const pages = [1,2,3,4,5,6,7,8,9,10]

const gamesMenu = [
  {
    title: "Game 1",
  },
  {
    title: "Game 2",
  },
  {
    title: "Game 3",
  },
  {
    title: "Game 4",
  },
];

const mypositions = [
  {
    id: 1,
    position: "23",
    nft_name: "Name",
    game: "Game1",
    image: "/images/avatar.png",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 3,
        category: "Category 3",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
  {
    id: 2,
    position: "24",
    nft_name: "Name",
    game: "Game1",
    image: "/images/avatar.png",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
];

const games = [
  {
    id: 1,
    position: "23",
    game: "Game 1",
    nft_name: "Name",
    image: "/images/avatar.png",
    player: "wallet adress",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
  {
    id: 2,
    position: "24",
    game: "Game 1",
    nft_name: "Name",
    image: "/images/avatar.png",
    player: "wallet adress",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
  {
    id: 1,
    position: "23",
    game: "Game 2",
    nft_name: "Name",
    image: "/images/avatar.png",
    player: "wallet adress",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
  {
    id: 1,
    position: "23",
    game: "Game 3",
    nft_name: "Name",
    image: "/images/avatar.png",
    player: "wallet adress",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
  {
    id: 1,
    position: "23",
    game: "Game 4",
    nft_name: "Name",
    image: "/images/avatar.png",
    player: "wallet adress",
    history: [
      {
        id: 1,
        category: "Category 1",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
      {
        id: 2,
        category: "Category 2",
        coin: "BTC",
        leverage: "x10",
        position: "Long",
        bet: "10,000",
      },
    ],
  },
];



export default function Leaderboard() {
  const [activeItem, setActiveItem] = useState(0);
  const [activeItemName, setActiveItemName] = useState(games ? games[0].game : "");
  const [displayPopup, setDisplayPopup] = useState(-1);
  const [displayPopupAll, setDisplayPopupAll] = useState(-1);

  const handleActive = (e: any) => {
    setActiveItem(e);
  };
  const handleActiveName = (e: any) => {
    setActiveItemName(e);
  };

  const gamesMap = games.filter(
    (game) => game.game ===  activeItemName
  );;

  const handlePopup = (index: any, activeItem: any) => {
    if (displayPopup === -1) {
      setDisplayPopup(index);
    } else {
      setDisplayPopup(-1);
    }
  };

  const handlePopupAll = (index: any, activeItem: any) => {
    if (displayPopupAll === -1) {
      setDisplayPopupAll(index);
    } else {
      setDisplayPopupAll(-1);
    }
  };

  //TO DO:
  const handlePagination = () => {
    console.log("pagination");
  };

  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
        <LeftMenu activeItem={3} />
        <LeftAvatarSection />
        <div className="grow overflow-hidden mt-4 lg:mt-0">
          <TopNavigationSecond />

          <div className="">
            <div className="mt-[20px] lg:mt-[57px] mb-[16px] lg:mt-[24px]">
              <Title title="Leaderboard - your position" />
              <div className="hidden lg:flex items-center justify-between pt-3 lg:pt-0 pr-4 lg:pr-0 -mb-[20px] mt-6">
                <div className="text-[12px] lg:pl-[19px] lg:w-[20%] text-left leading-[26px]">
                  Position
                </div>
                <div className="text-[12px] lg:w-[20%] text-left leading-[25px]">
                  NFT name
                </div>
                <div className="text-[12px] lg:w-[40%] text-left leading-[25px]">
                  Game name
                </div>
                <div className="text-[12px] lg:w-[10%] text-left  leading-[28px]">
                  History
                </div>
                <div className="text-[12px] lg:w-[10%] text-left leading-[25px] whitespace-nowrap lg:whitespace-wrap">
                  Share
                </div>
              </div>
              {mypositions.map((game, index) => (
                <div key={index} className="mt-[27px] flex lg:block relative">
                  <div className="px-4 lg:px-0 w-full lg:flex items-center justify-between border-blue-800 border-[2px] lg:mt-3 game-list-bg relative transition-all duration-500 border-green-100 mx-auto rounded-[16px] py-[7px] relative">
                    <SingleGameList
                      className="text-[20px] font-w-700 leading-[28px] text-green-200 lg:pl-[20px] lg:w-[20%] text-left mb-2 lg:mb-0"
                      title={game.position + "#"}
                    />
                    <div className="text-[20px] font-w-700 leading-[28px] lg:w-[20%] text-left flex items-center justify-start mb-2 lg:mb-0">
                      <Image
                        src={game.image}
                        alt={""}
                        width={72}
                        height={72}
                        className="
                    w-[40px]
                    h-[40px]
                    rounded-full
                    "
                      />
                      <span className="ml-[9px]">{game.nft_name}</span>
                    </div>
                    <SingleGameList
                      className="uppercase text-[20px] font-w-700 leading-[28px] lg:w-[40%] text-left leading-[25px] mb-2 lg:mb-0"
                      title={game.game}
                    />
                    <div className="lg:w-[10%]">
                      <button
                        onClick={() =>
                          handlePopup ? handlePopup(index, activeItem) : ""
                        }
                        className="text-sm font-w-600 leading-[12px]  text-left leading-[26px] inline-flex items-center mb-2 lg:mb-0"
                      >
                        Show
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.5041 8.69604C15.278 8.49101 15.278 8.1586 15.5041 7.95357C15.7301 7.74855 16.0966 7.74855 16.3226 7.95357L20.3744 11.6286C20.6005 11.8336 20.6005 12.166 20.3744 12.371L16.3226 16.046C16.0966 16.2511 15.7301 16.2511 15.5041 16.046C15.278 15.841 15.278 15.5086 15.5041 15.3036L18.5677 12.5248L5.79612 12.5248C5.47644 12.5248 5.21729 12.2898 5.21729 11.9998C5.21729 11.7099 5.47644 11.4748 5.79612 11.4748L18.5677 11.4748L15.5041 8.69604Z"
                            fill="#F9FAFB"
                          />
                        </svg>
                      </button>
                      {displayPopup === index && (
                        <GamePopup
                          items={game.history ? game.history : null}
                          onClick={() => setDisplayPopup(-1)}
                        />
                      )}
                    </div>
                    <div className="lg:w-[10%]">
                      <Link
                        className="text-[14px] leading-[20px] font-w-700 inline-flex items-center  lg:justify-center leading-[26px]"
                        href="/§twitter"
                      >
                        <Image
                          src="/images/twitter-ison@2x.png"
                          alt={""}
                          width={46}
                          height={46}
                          className="
                            w-[23px]
                            h-[23px]
                            relative
                            mx-auto
                            lg:ml-2
                            "
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[20px] lg:mt-[57px] mb-[16px] lg:mt-[24px]">
              <Title title="Leaderboard - all positions" />
              <GamesTabMenu active={handleActive} activeName={handleActiveName}  items={gamesMenu} />
            </div>
            <div className="hidden lg:flex items-center justify-between pt-3 lg:pt-0 pr-4 lg:pr-0 -mb-[20px] mt-6">
                <div className="text-[12px] lg:pl-[19px] lg:w-[20%] text-left leading-[26px]">
                  Position
                </div>
                <div className="text-[12px] lg:w-[30%] text-left leading-[25px]">
                Player
                </div>
                <div className="text-[12px] lg:w-[30%] text-left leading-[25px]">
                NFT name
                </div>
                <div className="text-[12px] lg:w-[10%] text-left  leading-[28px]">
                Reveal bets
                </div>
                <div className="text-[12px] lg:w-[10%] text-left leading-[25px] whitespace-nowrap lg:whitespace-wrap">
                  Share
                </div>
              </div>
            {gamesMap.map((game, index) => (
              <div key={index} className="mt-[27px] flex lg:block relative">
                <div className="px-4 lg:px-0 w-full lg:flex items-center justify-between border-blue-800 border-[2px] lg:mt-3 game-list-bg relative transition-all duration-500 border-green-100 mx-auto rounded-[16px] py-[7px] relative">
                  <SingleGameList
                    className="text-[20px] font-w-700 leading-[28px] text-green-200 lg:pl-[20px] lg:w-[20%] text-left mb-2 lg:mb-0"
                    title={game.position + "#"}
                  />
                  <SingleGameList
                    className="text-[20px] font-w-700 leading-[28px] lg:w-[30%] text-left leading-[25px] mb-2 lg:mb-0"
                    title={game.player}
                  />
                  <div className="text-[20px] font-w-700 leading-[28px] lg:w-[30%] text-left flex items-center justify-start mb-2 lg:mb-0">
                    <Image
                      src={game.image}
                      alt={""}
                      width={72}
                      height={72}
                      className="
                w-[40px]
                h-[40px]
                rounded-full
                "
                    />
                    <span className="ml-[9px]">{game.nft_name}</span>
                  </div>
                  <div className="lg:w-[10%]">
                    <button
                      onClick={() =>
                        handlePopupAll ? handlePopupAll(index, activeItem) : ""
                      }
                      className="text-sm font-w-600 leading-[12px]  text-left leading-[26px] inline-flex items-center mb-2 lg:mb-0"
                    >
                      Show
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5041 8.69604C15.278 8.49101 15.278 8.1586 15.5041 7.95357C15.7301 7.74855 16.0966 7.74855 16.3226 7.95357L20.3744 11.6286C20.6005 11.8336 20.6005 12.166 20.3744 12.371L16.3226 16.046C16.0966 16.2511 15.7301 16.2511 15.5041 16.046C15.278 15.841 15.278 15.5086 15.5041 15.3036L18.5677 12.5248L5.79612 12.5248C5.47644 12.5248 5.21729 12.2898 5.21729 11.9998C5.21729 11.7099 5.47644 11.4748 5.79612 11.4748L18.5677 11.4748L15.5041 8.69604Z"
                          fill="#F9FAFB"
                        />
                      </svg>
                    </button>
                    {displayPopupAll === index && (
                      <GamePopup
                        items={game.history ? game.history : null}
                        onClick={() => setDisplayPopupAll(-1)}
                      />
                    )}
                  </div>
                  <div className="lg:w-[10%]">
                    <Link
                      className="text-[14px] leading-[20px] font-w-700 inline-flex items-center  lg:justify-center leading-[26px]"
                      href="/§twitter"
                    >
                      <Image
                        src="/images/twitter-ison@2x.png"
                        alt={""}
                        width={46}
                        height={46}
                        className="
                        w-[23px]
                        h-[23px]
                        relative
                        mx-auto
                        lg:ml-2
                        "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination pages={pages} onClick={() => handlePagination ? handlePagination() : ""} />
        </div>
      </div>
    </main>
  );
}
