"use client"; // This is a client component
import Link from 'next/link'
import Image from "next/image";
import React, { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    link?: string
    target?: string
    title?: string
    iconUrl?: string
    active?: boolean
}

const LeftMenuSIngleItem = ({ active, link, title, target, iconUrl }: Props) => {
    const [activeMenu, seActiveMenu] = useState(active ? active : false);

    return (
        <Link
            onMouseEnter={() => {
                seActiveMenu(true);
            }}
            onMouseLeave={() => {
                seActiveMenu(active ? active : false);
            }}
            href={link ? link : ""}
            target={target}
            className={`block text-green-200  text-center rounded-[6px] mb-[30px] py-[6px] relative
        `}>
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        animate={{ opacity: 1 }}
                        className='transition duration-500'>
                        <div className="absolute top-0 left-[-3px] w-[calc(100%+6px)] h-full bg-blue-200 rounded-[6px] z-0"></div>
                        <div className="absolute top-[2px] right-[-3px] w-[4px] h-[calc(100%-4px)] bg-active-nav-link rounded-[20px] z-0"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {iconUrl && (
                <Image
                    src={iconUrl ? "/images/" + iconUrl : ""}
                    alt={title ? title : ""}
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
            )}
            <span className='text-[13px] leading-[20px] font-w-700 text-center block relative'>{title}</span>
        </Link>
    )
}

export default LeftMenuSIngleItem