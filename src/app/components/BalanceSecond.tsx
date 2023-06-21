"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import content from '../../../public/static/locales/en/common.json'
import ButtonAdd from './buttons/ButtonAdd';
import Link from 'next/link';

type Props = {
    title?: string
    type?: string
    value?: string
}

const BalanceSecond = ({ type, title, value }: Props) => {

    return (
        <div className='px-6 mt-6 inline-block min-w-[320px]'>
            <div className="font-w-700 text-[20px] leading-[28px] lg:text-[32px] lg:leading-[40px] mb-[9px]">{title}</div>
            <div className='border-[2px] border-blue-800 rounded-[16px] p-4 flex justify-between items-center h-[64px]'>
                <div className='inline-flex items-center'>
                    {type === "eth" && (
                        <Image
                            src="/images/ic-ethereum.svg"
                            alt="eth"
                            width={32}
                            height={32}
                            className='mr-[12px]'
                        />
                    )}
                    <div className='font-w-700 text-[20px] leading-[28px]'>{value}</div>
                </div>
            </div>
        </div>
    )
}

export default BalanceSecond