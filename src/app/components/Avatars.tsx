"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import Link from 'next/link';

type Props = {
    items?: any
}

const Avatars = ({ items }: Props) => {

    return (
        <div className='w-full max-w-[240px] text-center mt-[14px] mx-auto overflow-x-auto overflow-y-hidden px-[100px] scroll-custom pb-[14px]'>
            {items && (
                <div className='flex items-center justify-center '>
                    {items.map((item: any, index: number) => (
                        <Link href={item.url ? item.url : ""} key={index} className={`${index === 0 && "ml-[50px]"} mx-[10px] flex items-center justify-center flex-none relative rounded-full w-[40px] h-[40px] bg-gradient-to-b from-blue-400 to-blue-500`}>
                            <div className='absolute left-[2px] top-[2px] w-[36px] h-[36px] rounded-full bg-blue-600'></div>
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={""}
                                    width={72}
                                    height={72}
                                    className="
                                    w-[36px]
                                    h-[36px]
                                    mx-auto
                                    relative
                                    rounded-full
                                    "
                                />
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Avatars