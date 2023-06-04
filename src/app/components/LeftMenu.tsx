"use client"; // This is a client component
import React, { ReactNode } from 'react'
import LeftMenuSIngleItem from './LeftMenuSIngleItem'
import Image from "next/image";

type Props = {
    items?: any
}

const LeftMenu = ({ items }: Props) => {
    const handlelogout = () => {
        console.log("logout")
    }

    return (
        <div className="flex shrink-0 flex-wrap items-stretch bg-sidebar min-h-[calc(100vh-88px)] border-[3px] border-green-100 w-[94px] rounded-[16px] mr-[17px]">
            <div className='w-full'>
                <div className='mb-[11px] mt-[13px]'>
                    <Image
                        src={"/images/menu-avatar@2x.png"}
                        alt={""}
                        width={124}
                        height={124}
                        className="
                    w-full
                    h-auto
                    max-w-[62px]
                    mx-auto
                    relative
                    "
                    />
                </div>
                {items && (
                    items.map((item: any, index: number) => (
                        <div key={index}>
                            {items.length === index + 1 ? (
                                <>
                                    <div className='w-full px-[19px] mb-[22px]'> <div className="bg-blue-300 h-[2px] w-full"></div></div>
                                    <LeftMenuSIngleItem
                                        key={index}
                                        link={item.link}
                                        title={item.title}
                                        iconUrl={item.iconUrl}
                                        active={item.active}
                                    />
                                </>
                            ) : (
                                <>
                                    <LeftMenuSIngleItem
                                        key={index}
                                        link={item.link}
                                        title={item.title}
                                        iconUrl={item.iconUrl}
                                        active={item.active}
                                    />
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
            <button onClick={() => handlelogout ? handlelogout() : ""} className='w-full mb-[78px] mt-[38px] flex items-end'>
                <Image
                    src={"/images/ic-log-out.svg"}
                    alt={""}
                    width={54}
                    height={54}
                    className="
                    w-full
                    h-auto
                    max-w-[30px]
                    mx-auto
                    relative
                    "
                />
            </button>

        </div>
    )
}

export default LeftMenu