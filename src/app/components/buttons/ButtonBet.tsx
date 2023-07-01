import React, { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    image?: string
    className?: string
}

const ButtonBet = ({ disabled = false, onClick, children, image, className }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className={` ${className ? className : ""}
        px-[8px] 
        lg:px-[16px] 
        3xl:px-[38px] 
        py-2
        lg:py-4
        text-[12px]
        2xl:text-[20px]
        leading-[28px]
        font-w-700
        rounded-[16px] mb-4 lg:mb-0
        inline-flex items-center
         text-white transition duration-300 button-gradient border-none hover:opacity-80 whitespace-nowrap focus:outline-none relative`}
    ><div className='rounded-[16px] absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] button-bg'></div>
        <Image
            src={image ? image : ""}
            alt={""}
            width={32}
            height={26}
            className="w-[32px] relative mr-3"
        />
        <span className='relative'>{children}</span>
    </button>
)

export default ButtonBet
