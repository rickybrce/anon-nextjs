"use client"; // This is a client component
import React, { ReactNode, useEffect } from "react";
import content from "../../../public/static/locales/en/common.json";
import Image from "next/image";
import ButtonMenu from "./buttons/ButtonMenu";
import Link from "next/link";
import ButtonSeeAll from "./buttons/ButtonSeeAll";
import SingleGame from "./SIngleGame";
import Title from "./Title";
import { getActiveGames } from "../api/games";

/*const games = [
    {
        title: "Game 1 ",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        url: "#",
        active: true,
        image: "/images/game-image-sample@2x.png"
    },
    {
        title: "Game 2",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Hard limit",
        url: "#",
        active: true,
        image: "/images/game-image-sample@2x.png"
    },
    {
        title: "Game 3",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        url: "#",
        active: false,
        image: "/images/game-image-sample@2x.png"
    },
    {
        title: "Game 4",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        url: "#",
        active: false,
        image: "/images/game-image-sample@2x.png"
    }
]*/

type Props = {};

const ActiveGames = ({}: Props) => {
  const [games, setGames] = React.useState([]);

  useEffect(() => {
    //Get games
    (async () => {
      const activegames = await getActiveGames(0, 100);
      setGames(activegames);
    })();
  }, []);

  return (
    <div className="w-full mt-[24px] pl-[19px]">
      <div className="flex justify-between items-center mb-[33px]">
        <Title title={content.general.activeGames} />
        <Link href="/games">
          <ButtonSeeAll type="normal">
            {content.general.butSeeAllLabel}
          </ButtonSeeAll>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-[27px]">
        {games &&
          games.map((game: any, index) => (
            <SingleGame
              key={index}
              title={game.name}
              description={game.name} //TODO: need description
              url={"/game/" + game.id}
              remaining={game.remaining} //TODO: calculate remaining time
              limittype={game.limittype} //TODO: calculate limit type
              active={true}
              image={game.image ? game.image : "/images/game-image-sample.png"} //TODO: need image
            />
          ))}
      </div>
    </div>
  );
};

export default ActiveGames;
