import React, { ReactNode } from 'react'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
}

const ButtonCookies = ({ disabled = false, onClick, children }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className="
        px-4 
        py-2
        text-sm
        rounded-lg
        lg:px-[clamp(17.07px,1.67vw,32px)] 
        lg:py-[clamp(11.38px,1.11vw,21.33px)]
        lg:text-[clamp(10.67px,1.04vw,20px)]
        lg:leading-[clamp(10.67px,1.04vw,20px)]
        w-full font-590 tracking-widest text-white transition duration-300 bg-blue-500 border-white hover:opacity-80 active:opacity-70 focus:ring-fox-grey-500 whitespace-nowrap focus:ring focus:ring-offset-0 focus:ring-opacity-100 focus:outline-none"
    >
        {children}
    </button>
)

export default ButtonCookies
