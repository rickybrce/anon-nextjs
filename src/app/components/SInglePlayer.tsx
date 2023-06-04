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
    top?: boolean
    url?: string
}

const SinglePlayer = ({ index, title, value, image, top, url }: Props) => {

    return (
        <Link href={url ? url: ""} className={`relative flex items-center mr-[65px] mb-[16px] shrink-0`}>
            <div className='shrink-0 grow-0'>
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
            <div className='grow pl-[12px]'>
                <div className="flex items-center font-w-700 text-[16px] leading-[24px]">{title} {top && (<svg className='ml-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2688 4.62142C13.0724 3.23883 10.9281 3.23882 9.7317 4.62142L9.19903 5.23699L8.3871 5.17837C6.56348 5.04671 5.0472 6.56299 5.17886 8.38661L5.23748 9.19854L4.6219 9.73122C3.23931 10.9276 3.23931 13.072 4.6219 14.2684L5.23748 14.801L5.17886 15.613C5.0472 17.4366 6.56348 18.9529 8.3871 18.8212L9.19903 18.7626L9.7317 19.3782C10.9281 20.7607 13.0724 20.7607 14.2688 19.3782L14.8015 18.7626L15.6134 18.8212C17.4371 18.9529 18.9534 17.4366 18.8217 15.613L18.7631 14.801L19.3786 14.2684C20.7612 13.072 20.7612 10.9276 19.3786 9.73122L18.7631 9.19854L18.8217 8.38661C18.9534 6.56299 17.4371 5.04671 15.6134 5.17837L14.8015 5.23699L14.2688 4.62142ZM15.6964 10.7177C16.0929 10.3332 16.1026 9.70013 15.7182 9.30364C15.3337 8.90716 14.7006 8.89742 14.3041 9.28189L10.8753 12.6068L9.69642 11.4637C9.29993 11.0792 8.66684 11.089 8.28237 11.4855C7.8979 11.8819 7.90764 12.515 8.30413 12.8995L10.1791 14.7177C10.567 15.0938 11.1835 15.0938 11.5714 14.7177L15.6964 10.7177Z" fill="url(#paint0_linear_707_3897)" />
                    <defs>
                        <linearGradient id="paint0_linear_707_3897" x1="3.58496" y1="11.9998" x2="20.4156" y2="11.9998" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EC008C" />
                            <stop offset="1" stopColor="#FC6767" />
                        </linearGradient>
                    </defs>
                </svg>)}</div>
                <div className="text-green-200">{value}</div>
            </div>
        </Link>
    )
}

export default SinglePlayer