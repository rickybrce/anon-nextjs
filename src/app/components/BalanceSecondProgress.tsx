"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import Link from 'next/link';

type Props = {
    title?: string
    type?: string
    value?: string
    width?: string
}

const BalanceSecondProgress = ({ type, title, value, width }: Props) => {

    return (
        <div className='px-6 mt-6 inline-block min-w-[320px]'>
            <div className="font-w-700 text-[20px] leading-[28px] lg:text-[32px] lg:leading-[40px] mb-[9px]">{title}</div>
            <div className='w-full border-[2px] border-blue-800 rounded-[16px] p-4 flex justify-between items-center h-[64px]'>
                <div className='flex w-full items-center justify-between'>
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
                    <div className='relative ml-[36px] bg-blue-700 rounded-full h-[8px] shrink-0 grow'>
                        <div className={`gradient-page absolute top-0 left-0 h-full rounded-full`} style={{width: width ? width : "0"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceSecondProgress