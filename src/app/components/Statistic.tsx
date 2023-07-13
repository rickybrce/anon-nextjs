"use client"; // This is a client component
import React, { ReactNode, useEffect } from "react";
import content from "../../../public/static/locales/en/common.json";
import ButtonSeeAll from "./buttons/ButtonSeeAll";
import SingleStatistic from "./SIngleStatistic";
import Title from "./Title";
import Link from "next/link";
import { getBurTokenDlrRatio, getNumUserGames, getTokenPrice, getUserPlacedBetsActiveGames, getUserSumPrizePool } from "../api/stats";

/*const games = [
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
];*/

type Props = {};

const Statistic = ({}: Props) => {
  const [weeklyPrize, setWeeklyPrize] = React.useState(0);
  const [gamesNum, setGamesNum] = React.useState(0);
  const [activeUsers, setActiveUsers] = React.useState(0);
  const [kinPercentage, setKinPercentage] = React.useState(0);
  const [kinBurned, setKinBurned] = React.useState(0);
  const [kinPrice, setKinyPrice] = React.useState(0);

  useEffect(() => {
    //Get games num
    (async () => {
      const items = await getNumUserGames();
      //Set total games
      items && setGamesNum(items);
    })();
    //Get UserSumPrizePool TODO : Server Error
    /*(async () => {
      const items = await getUserSumPrizePool();
      //Set price pool
      items && setWeeklyPrize(items);
    })();*/
    //Get active useers
    (async () => {
      const items = await getUserPlacedBetsActiveGames();
      //Set active useers
      items && setActiveUsers(items);
    })();
    //Get kin percentage TODO : Server Error
    /*(async () => {
      const items = await getBurTokenDlrRatio();
      //Set kin percentage
      items && setKinPercentage(items);
    })();*/
    //Get kin burned TODO : Server Error
    /*(async () => {
      const items = await getTokenPrice();
      //Set kin percentage
      items && setKinyPrice(items);
    })();*/
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
          value={weeklyPrize ? weeklyPrize.toString() + "$" : "0$"}
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
          value={activeUsers ? activeUsers.toString() : "0"}
          image="/images/ic-eth.svg"
          index={2}
        />
        <SingleStatistic
          title="% KIN ..."
          value={kinPercentage ? kinPercentage.toString() + "%" : "0%"}
          image="/images/ic-kin.svg"
        />
        <SingleStatistic
          title="% of KIN burned"
          value={kinBurned ? kinBurned.toString() + "%" : "0%"}
          image="/images/ic-glass.svg"
        />
        <SingleStatistic
          title="KIN price"
          value={kinPrice ? kinPrice.toString() + "$" : "0$"}
          image="/images/ic-cart.svg"
        />
      </div>
    </div>
  );
};

export default Statistic;
