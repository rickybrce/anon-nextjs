import React, { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    className?: string
}

const ButtonDefault = ({ disabled = false, onClick, children, className }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className={` ${className ? className : ""}
        px-[16px] 
        3xl:px-8
        py-2
        lg:py-4
        text-[12px]
        2xl:text-[14px]
        leading-[20px]
        font-w-700
        text-center
        rounded-[16px] mb-4 lg:mb-0
         text-white transition duration-300 bg-checkbox-but-gradient border-none hover:opacity-80 whitespace-nowrap focus:outline-none relative`}
    ><div className='rounded-[16px] absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] button-bg'></div>
        <span className='relative'>{children}</span>
    </button>
)

export default ButtonDefault
