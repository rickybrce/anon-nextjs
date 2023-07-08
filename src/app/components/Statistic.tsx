"use client"; // This is a client component
import React, { ReactNode, useEffect } from "react";
import content from "../../../public/static/locales/en/common.json";
import ButtonSeeAll from "./buttons/ButtonSeeAll";
import SingleStatistic from "./SIngleStatistic";
import Title from "./Title";
import { getGames } from "../api/games";
import Link from "next/link";

const games = [
  {
    title: "Weekly prize",
    value: "11,000$",
    image: "/images/ic-pie.svg",
  },
  {
    title: "Num. of all games",
    value: "323",
    image: "/images/ic-num.svg",
  },
  {
    title: "Active users",
    value: "0.5 eth",
    image: "/images/ic-eth.svg",
  },
  {
    title: "% KIN ...",
    value: "21%",
    image: "/images/ic-kin.svg",
  },
  {
    title: "% of KIN burned",
    value: "15%",
    image: "/images/ic-glass.svg",
  },
  {
    title: "KIN price",
    value: "0.5 eth",
    image: "/images/ic-cart.svg",
  },
];

type Props = {};

const Statistic = ({}: Props) => {
  const [gamesNum, setGamesNum] = React.useState([]);
  useEffect(() => {
    //Get games
    (async () => {
      const games = await getGames(0, 1000);
      //Set total games
      games && setGamesNum(games.length);
      //console.log(games)
    })();
  }, []);

  return (
    <div className="w-full mt-[60px] pl-[19px]">
      <div className="flex justify-between items-center">
        <Title title={content.general.statistic} />
        <Link href="/games">
          <ButtonSeeAll type="normal">
            {content.general.butSeeAllLabel}
          </ButtonSeeAll>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-3">
        <SingleStatistic
          title="Weekly prize"
          value="11,000$"
          image="/images/ic-pie.svg"
          index={0}
        />
        <SingleStatistic
          title="Num. of all games"
          value={gamesNum ? gamesNum.toString() : "0"}
          image="/images/ic-num.svg"
          index={1}
        />
        <SingleStatistic
          title="Active users"
          value="0.5 eth"
          image="/images/ic-eth.svg"
          index={2}
        />
        <SingleStatistic
          title="% KIN ..."
          value="21%"
          image="/images/ic-kin.svg"
        />
        <SingleStatistic
          title="% of KIN burned"
          value="15%"
          image="/images/ic-glass.svg"
        />
        <SingleStatistic
          title="KIN price"
          value="0.5 eth"
          image="/images/ic-cart.svg"
        />
      </div>
    </div>
  );
};

export default Statistic;
