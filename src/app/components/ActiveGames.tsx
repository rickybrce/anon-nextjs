"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Image from "next/image";
import ButtonMenu from './buttons/ButtonMenu';
import Link from 'next/link';
import ButtonSeeAll from './buttons/ButtonSeeAll';


const games = [
    {
        title: "Game 1 ",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        active: true
    },
    {
        title: "Game 2",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Hard limit",
        active: true
    },
    {
        title: "Game 3",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        active: false
    },
    {
        title: "Game 4",
        short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
        position: "23",
        remaining: "18h : 13m : 20s",
        limittype: "Soft limit",
        active: false
    }
]

type Props = {

}

const ActiveGames = ({ }: Props) => {

    return (
        <div className="w-full mt-[24px] pl-[19px]">
            <div className="flex justify-between items-center">
                <div className="font-w-700 text-[32px] leading-[40px] text-gray-100">{content.general.activeGames}</div>
                <ButtonSeeAll type="normal">{content.general.butSeeAllLabel}</ButtonSeeAll>
            </div>
        </div>
    )
}

export default ActiveGames