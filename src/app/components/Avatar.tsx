"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";

type Props = {
    name?: string
    nickname?: string
    image?: string
}

const Avatar = ({ name, nickname, image }: Props) => {

    return (
        <div className='w-full text-center'>
            <div className="relative bg-gradient-to-b from-blue-400 to-blue-500 mx-auto mt-[34px] w-[159px] h-[159px] rounded-full flex items-center justify-center">
                <div className='absolute left-[2px] top-[2px] w-[155px] h-[155px] rounded-full bg-blue-600'></div>
                <button className='absolute left-[-6px] top-[10px]'>
                    <svg className='w-5 h-5' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_745_1078)">
                            <path d="M17.0754 2.93327C13.1726 -0.974358 6.84096 -0.978243 2.93328 2.92454C-0.974346 6.82743 -0.978279 13.1591 2.9246 17.0667C6.82739 20.9744 13.1591 20.9783 17.0668 17.0754C20.9743 13.1726 20.9783 6.8409 17.0754 2.93327ZM11.3963 16.3455C11.3963 16.4998 11.2712 16.6247 11.117 16.6247H8.88303C8.72883 16.6247 8.60379 16.4998 8.60379 16.3455V8.05243C8.60379 7.89813 8.72883 7.77318 8.88303 7.77318H11.117C11.2712 7.77318 11.3963 7.89808 11.3963 8.05243V16.3455ZM10 6.61427C9.10703 6.61427 8.38047 5.88781 8.38047 4.99477C8.38047 4.10182 9.10698 3.37521 10 3.37521C10.8931 3.37521 11.6196 4.10177 11.6196 4.99477C11.6196 5.88781 10.893 6.61427 10 6.61427Z" fill="#E2E4E9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_745_1078">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                {image && (
                    <div className="relative">
                        <Image
                            src={image}
                            alt={""}
                            width={138}
                            height={138}
                            className="
                    w-full
                    h-auto
                    max-w-[138px]
                    mx-auto
                    relative
                    rounded-full
                    "
                        />
                    </div>
                )}
            </div>
            <div className='mt-[18px] font-w-600 text-[24px] leading-[32px]'>{name}</div>
            <div className='relative font-w-600 text-[12px] leading-[32px] inline-block'>{nickname}
                <button className='absolute right-[-16px] top-[3px]'>
                    <svg className='w-[10px] h-[10px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_745_1078)">
                            <path d="M17.0754 2.93327C13.1726 -0.974358 6.84096 -0.978243 2.93328 2.92454C-0.974346 6.82743 -0.978279 13.1591 2.9246 17.0667C6.82739 20.9744 13.1591 20.9783 17.0668 17.0754C20.9743 13.1726 20.9783 6.8409 17.0754 2.93327ZM11.3963 16.3455C11.3963 16.4998 11.2712 16.6247 11.117 16.6247H8.88303C8.72883 16.6247 8.60379 16.4998 8.60379 16.3455V8.05243C8.60379 7.89813 8.72883 7.77318 8.88303 7.77318H11.117C11.2712 7.77318 11.3963 7.89808 11.3963 8.05243V16.3455ZM10 6.61427C9.10703 6.61427 8.38047 5.88781 8.38047 4.99477C8.38047 4.10182 9.10698 3.37521 10 3.37521C10.8931 3.37521 11.6196 4.10177 11.6196 4.99477C11.6196 5.88781 10.893 6.61427 10 6.61427Z" fill="#E2E4E9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_745_1078">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Avatar