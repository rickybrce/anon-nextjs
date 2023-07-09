"use client"; // This is a client component
import React, { ReactNode, useEffect } from "react";
import content from "../../../public/static/locales/en/common.json";
import ButtonSeeAll from "./buttons/ButtonSeeAll";
import Image from "next/image";
import { getActiveGames, getGames, getUserActiveGames } from "../api/games";
import Link from "next/link";

/*const games = [
  {
    title: "Game 1 ",
    short_description:
      "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
    position: "23",
    remaining: "18h : 13m : 20s",
    limittype: "Soft limit",
    active: true,
  },
  {
    title: "Game 2",
    short_description:
      "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
    position: "23",
    remaining: "18h : 13m : 20s",
    limittype: "Hard limit",
    active: true,
  },
  {
    title: "Game 3",
    short_description:
      "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
    position: "23",
    remaining: "18h : 13m : 20s",
    limittype: "Soft limit",
    active: false,
  },
];*/

type Props = {};

const LeftGames = ({}: Props) => {
  const [userActiveGames, setUserActiveGames] = React.useState([]);

  useEffect(() => {
    //Get games
    (async () => {
      const activegames = await getActiveGames(0, 3);
      console.log(activegames);
      setUserActiveGames(activegames);
    })();
    //Get user games
    /*(async () => {
            const useractivegames = await getUserActiveGames(0, 3); //TO DO: Get user active games when fixed from api
          })();*/
  }, []);

  return (
    <div className="px-6 pt-[28px]">
      <div className="flex items-center justify-between mb-[18px]">
        <div className="font-w-700 text-[20px] leading-[28px]">
          {content.general.your_games}
        </div>
        <Link href="/games">
          <ButtonSeeAll>{content.general.butSeeAllLabel}</ButtonSeeAll>
        </Link>
      </div>
      <div>
        {userActiveGames &&
          userActiveGames.map((game: any, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-[16px] mb-[19px] py-[13px] px-[32px]"
            >
              <div className="text-[16px] leading-[18px] font-w-600">
                {game.name}
              </div>
              <div className="text-[14px] leading-[20px] font-w-500 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-purple-100">
                {game.short_description
                  ? game.short_description.substring(0, 27) + "..."
                  : ""}
              </div>{" "}
              {/*TO DO: Get descriptin from api*/}
              <div className="text-[14px] leading-[20px] font-w-500 text-green-200">
                {content.general.position} {game.position}#
              </div>{" "}
              {/*TO DO: Get descriptin from api*/}
              <div className="text-[12px] leading-[20px] font-w-500 text-green-200 relative pl-[20px]">
                <Image
                  src="/images/ic-time.svg"
                  alt={""}
                  width={47}
                  height={51}
                  className="
                                    w-full
                                    max-w-[40px]
                                    absolute left-[-12px] top-[0px]
                                    "
                />
                {game.remaining} {content.general.remaining} /{" "}
                <span className="uppercase">{game.limittype}</span>
              </div>{" "}
              {/*TO DO: Get from api*/}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftGames;
