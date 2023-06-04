"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Image from "next/image";
import ButtonMenu from './buttons/ButtonMenu';
import Link from 'next/link';
import ButtonSeeAll from './buttons/ButtonSeeAll';
import SingleGame from './SIngleGame';


const games = [
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
]

type Props = {

}

const ActiveGames = ({ }: Props) => {

    return (
        <div className="w-full mt-[24px] pl-[19px]">
            <div className="flex justify-between items-center mb-[33px]">
                <div className="font-w-700 text-[32px] leading-[40px] text-gray-100">{content.general.activeGames}</div>
                <ButtonSeeAll type="normal">{content.general.butSeeAllLabel}</ButtonSeeAll>
            </div>
            <div className="grid grid-cols-4 gap-[27px]">
                {games && (
                    games.map((game, index) => (
                        <SingleGame
                            key={index}
                            title={game.title}
                            description={game.short_description}
                            url={game.url}
                            remaining={game.remaining}
                            limittype={game.limittype}
                            active={game.active}
                            image={game.image}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ActiveGames