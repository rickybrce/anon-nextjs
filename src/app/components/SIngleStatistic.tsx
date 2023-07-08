"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import content from '../../../public/static/locales/en/common.json'
import Link from 'next/link';

type Props = {
    title?: string
    value?: string
    image?: string
    index?: number
}

const SingleStatistic = ({ index, title, value, image }: Props) => {

    return (
        <div className={`relative border-green-100 ${(index === 0 || index === 1 || index === 2) ? "border-b-[3px]" : "border-b-[3px] lg:border-none"}`}>
            <div className={`relative flex flex-wrap justify-between border-green-100 my-[30px] py-[20px] px-[50px] ${(index !== 2 && index !== 5 && index !== 8) && "sm:border-r-[3px]"}`}>
                <div className=''>
                    <div className='font-w-700 text-[20px] leading-[28px] text-white mb-1 min-w-[full]'>{title}</div>
                    <div className='font-w-500 text-[40px] leading-[40px] tracking-[0.02em] text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-400'>{value}</div>
                </div>
                <div className=''>
                    {image && (
                        <Image
                            src={image}
                            alt={title ? title : ""}
                            width={90}
                            height={90}
                            className="w-full max-w-[90px]"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleStatistic