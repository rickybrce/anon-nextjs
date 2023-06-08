import React, { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    className?: string
}

const ButtonSubmit = ({ disabled = false, onClick, children, className }: Props) => (
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
        2xl:text-[16px]
        leading-[24px]
        font-400
        text-center
        rounded-[16px] mb-4 lg:mb-0
         text-white transition duration-300 button-gradient-two border-none hover:opacity-80 whitespace-nowrap focus:outline-none relative`}
    ><div className='rounded-[16px] absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] button-bg-submit'></div>
        <span className='relative'>{children}</span>
    </button>
)

export default ButtonSubmit
