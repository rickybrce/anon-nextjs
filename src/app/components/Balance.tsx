"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import content from '../../../public/static/locales/en/common.json'
import ButtonAdd from './buttons/ButtonAdd';
import Link from 'next/link';

type Props = {
    title?: string
    ctaLabel?: string
    ctaLink?: string
    type?: string
    value?: string
}

const Balance = ({ type, title, value, ctaLabel, ctaLink }: Props) => {

    return (
        <div className='w-full px-6 mt-6'>
            <div className="font-w-700 text-[20px] leading-[28px] mb-[9px]">{content.general.dollarino_balance}</div>
            <div className='border-[2px] border-blue-800 rounded-[16px] p-4 flex justify-between items-center'>
                <div className='flex items-center'>
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
                <div>
                    <Link href={ctaLink ? ctaLink : ""}>
                        <ButtonAdd>{ctaLabel}</ButtonAdd>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Balance