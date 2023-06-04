"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import SinglePlayer from './SInglePlayer';
import Image from "next/image";


const players = [
    {
        title: "@dicar",
        value: "$232,102",
        image: "/images/player-1.png",
        top: true
    },
    {
        title: "@astroo2",
        value: "$172,023",
        image: "/images/player-2.png",
        top: true
    },
    {
        title: "@micle",
        value: "$92,002",
        image: "/images/player-3.png",
    },
    {
        title: "@11 eror D.",
        value: "$88,024",
        image: "/images/player-4.png",
        top: true
    },
    {
        title: "@astroo2",
        value: "$172,023",
        image: "/images/player-5.png",
    },
    {
        title: "@astroo2",
        value: "$172,023",
        image: "/images/player-6.png",
    },
    {
        title: "@dicar",
        value: "$232,102",
        image: "/images/player-1.png",
        top: true
    },
    {
        title: "@astroo2",
        value: "$172,023",
        image: "/images/player-2.png",
        top: true
    },
]

type Props = {

}

const TopPlayers = ({ }: Props) => {

    return (
        <div className="w-full mt-[60px] pl-[19px]">
            <div className="flex items-center mb-[21px]">
                <Image
                    src="/images/ic-star.svg"
                    alt={content.general.top_players}
                    width={28}
                    height={28}
                    className="w-full max-w-[28px] mr-1"
                />
                <div className="font-w-700 text-[24px] leading-[32px] text-green-600">{content.general.top_players}</div>
            </div>
            <div className='w-full max-w-full overflow-x-auto overflow-y-hidden scroll-custom'>
                <div className="flex items-center">
                    {players && (
                        players.map((game, index) => (
                            <SinglePlayer
                                key={index}
                                title={game.title}
                                value={game.value}
                                image={game.image}
                                index={index}
                                top={game.top}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopPlayers