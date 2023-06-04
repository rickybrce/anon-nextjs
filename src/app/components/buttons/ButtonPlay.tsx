import React, { ReactNode } from 'react'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    className?: string
}

const ButtonPlay = ({ disabled = false, onClick, children, className }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className={`
        ${className}
        px-[20px] 
        py-[8px]
        text-[14px]
        leading-[20px]
        font-700
        rounded-[10px]
        uppercase
         text-white transition duration-300 buttpn-play-bg border-[2px] border-cyan-500 hover:opacity-80 whitespace-nowrap focus:outline-none relative`}
    >
        <span className='relative'>{children}</span>
    </button>
)

export default ButtonPlay
