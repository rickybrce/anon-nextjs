"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import ButtonSeeAll from './buttons/ButtonSeeAll';
import Image from "next/image";

const game =
{
    title: "Game 3",
    short_description: "ETH Long x10, ARB Short x20 ETH Long x10, ARB Short x20",
    position: "23",
    remaining: "18h : 13m : 20s",
    limittype: "Hard limit",
    active: true
}



type Props = {

}

const LeftHotGame = ({ }: Props) => {

    return (
        <div className="px-6 pt-[28px]">
            <div className='flex items-center justify-between mb-[18px]'>
                <div className='font-w-700 text-[20px] leading-[28px] flex items-center'>{content.general.hot_game}<Image
                        src="/images/ic-fire.svg"
                        alt={""}
                        width={21}
                        height={21}
                        className="
                        w-full
                        max-w-[21px]
                        ml-1
                        "
                    /></div>
                <ButtonSeeAll>{content.general.butSeeAllLabel}</ButtonSeeAll>
            </div>
            <div>
                <div className='bg-green-500 rounded-[16px] mb-[19px] py-[13px] px-[32px]'>
                    <div className='text-[16px] leading-[18px] font-w-600'>{game.title}</div>
                    <div className='text-[14px] leading-[20px] font-w-500 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-purple-100'>{game.short_description.substring(0, 27) + '...'}</div>
                    <div className='text-[12px] leading-[20px] font-w-500 text-green-200 relative pl-[20px]'><Image
                        src="/images/ic-time.svg"
                        alt={""}
                        width={47}
                        height={51}
                        className="
                        w-full
                        max-w-[40px]
                        absolute left-[-12px] top-[0px]
                        "
                    />{game.remaining} {content.general.remaining} / <span className='uppercase'>{game.limittype}</span></div>
                </div>

            </div>
        </div>
    )
}

export default LeftHotGame