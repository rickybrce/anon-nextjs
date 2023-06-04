"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Image from "next/image";
import ButtonMenu from './buttons/ButtonMenu';
import Link from 'next/link';




type Props = {

}

const TopNavigation = ({ }: Props) => {

    return (
        <div className="w-full bg-sidebar border-[3px] border-green-100 rounded-[16px] p-[20px] md:flex items-center justify-between">
            <div className='flex items-center mb-4 lg:mb-0'>
                <Image
                    src={"/images/ic-music.svg"}
                    alt={""}
                    width={50}
                    height={55}
                    className="
                    w-full
                    h-auto
                    max-w-[50px]
                    "
                />
                <div className='font-w-500 text-[16px] 2xl:text-[20px] leading-[24px] tracing-[0.02em] ml-[10px]'>{content.general.prize_pool}</div>
                <div className='relative bg-gradient-pool ml-3 font-w-700 text-[16px] 2xl:text-[20px] leading-[28px] py-[8px] lg:py-[14px] px-[28px] rounded-[16px]'>
                    <div className='absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] bg-sidebar z-0 rounded-[16px]'></div>
                    <span className="relative">100,668 $</span>
                </div>
            </div>
            <Link href="#" className='ml-23xl:ml-[28px]'>
                <ButtonMenu>How2play</ButtonMenu>
            </Link>
            <Link href="#" className='ml-2 3xl:ml-[16px]'>
                <ButtonMenu>Games</ButtonMenu>
            </Link>
            <div>
                <Link href="#" className='ml-1 3xl:ml-[16px]'>
                    <ButtonMenu>Burn KIN</ButtonMenu>
                </Link>
                <Link href="#" className='ml-[10px]'>
                    <ButtonMenu>Buy KIN</ButtonMenu>
                </Link>
            </div>

            <Link href="#" className='ml-[10px]'>
                <ButtonMenu>Connect wallet</ButtonMenu>
            </Link>
        </div>
    )
}

export default TopNavigation