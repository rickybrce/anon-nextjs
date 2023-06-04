"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import ButtonSeeAll from './buttons/ButtonSeeAll';
import SingleStatistic from './SIngleStatistic';


const games = [
    {
        title: "Weekly prize",
        value: "11,000$",
        image: "/images/ic-pie.svg"
    },
    {
        title: "Num. of all games",
        value: "323",
        image: "/images/ic-num.svg"
    },
    {
        title: "ETH spent",
        value: "0.5 eth",
        image: "/images/ic-eth.svg"
    },
    {
        title: "% of KIN locked",
        value: "21%",
        image: "/images/ic-kin.svg"
    },
    {
        title: "% of KIN burned",
        value: "15%",
        image: "/images/ic-glass.svg"
    },
    {
        title: "# of boosts purchased",
        value: "0.5 eth",
        image: "/images/ic-cart.svg"
    }
]

type Props = {

}

const Statistic = ({ }: Props) => {

    return (
        <div className="w-full mt-[60px] pl-[19px]">
            <div className="flex justify-between items-center">
                <div className="font-w-700 text-[32px] leading-[40px] text-gray-100">{content.general.statistic}</div>
                <ButtonSeeAll type="normal">{content.general.butSeeAllLabel}</ButtonSeeAll>
            </div>
            <div className="grid grid-cols-3">
                {games && (
                    games.map((game, index) => (
                        <SingleStatistic
                            key={index}
                            title={game.title}
                            value={game.value}
                            image={game.image}
                            index={index}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Statistic