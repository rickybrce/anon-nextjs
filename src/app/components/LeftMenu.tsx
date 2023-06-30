"use client"; // This is a client component
import React, { ReactNode } from 'react'
import LeftMenuSIngleItem from './LeftMenuSIngleItem'
import Image from "next/image";

const leftMenu = [
    {
        link: "/",
        title: "Dashboard",
        iconUrl: "ic-home.svg",
    },
    {
        link: "/games",
        title: "Games",
        iconUrl: "ic-message.svg",
    },
    {
        link: "/burn",
        title: "Burn",
        iconUrl: "ic-buy.svg",
    },
    {
        link: "#scoreboard",
        title: "Scoreboard",
        iconUrl: "ic-activity.svg",
    },
    {
        link: "#how2play",
        title: "How 2 Play",
        iconUrl: "ic-wallet.svg",
    }
]

type Props = {
    activeItem?: any
}

const LeftMenu = ({ activeItem }: Props) => {
    const [active, setActive] = React.useState(false)
    const handlelogout = () => {
        console.log("logout")
    }
    const handlemenu = () => {
        setActive(!active)
    }

    return (
        <div>
            {<button onClick={() => handlemenu ? handlemenu() : ""} className={`absolute top-4 xl:hidden z-50 transition-all duration-500 left-4 ${active ? "" : ""}`}>
                {active ? (
                    <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px">
                        <path fill='#fff' d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                    </svg>
                )}
            </button>}
            <div className={`z-40 fixed ${active ? "left-0" : "left-[-100%]"} transition-all duration-500 top-0 xl:relative xl:left-auto xl:top-auto xl:flex shrink-0 flex-wrap items-stretch bg-blue-600 xl:bg-sidebar min-h-full xl:min-h-[calc(100vh-32px)] border-[3px] border-green-100 w-full xl:w-[94px] rounded-[16px] mr-[17px]`}>
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
                    {leftMenu && (
                        leftMenu.map((item: any, index: number) => (
                            <div key={index} className='relative'>
                                {leftMenu.length === index + 1 ? (
                                    <>
                                        <div className='w-full px-[19px] mb-[22px]'> <div className="bg-blue-300 h-[2px] w-full"></div></div>
                                        <LeftMenuSIngleItem
                                            key={index}
                                            link={item.link}
                                            title={item.title}
                                            iconUrl={item.iconUrl}
                                            active={activeItem === index ? true : false}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <LeftMenuSIngleItem
                                            key={index}
                                            link={item.link}
                                            title={item.title}
                                            iconUrl={item.iconUrl}
                                            active={activeItem === index ? true : false}
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
        </div>
    )
}

export default LeftMenu