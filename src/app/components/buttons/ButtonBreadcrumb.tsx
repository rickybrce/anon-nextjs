import React, { ReactNode } from 'react'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    active?: boolean
}

const ButtonBreadcrumb = ({ disabled = false, onClick, children, active }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className={`
        px-[8px] 
        lg:px-[16px] 
        3xl:px-[38px] 
        py-1
        text-[16px]
        2xl:text-[20px]
        leading-[20px]
        font-w-500
        rounded-[16px] mb-0
          transition duration-300 bg-sidebar border-[3px] border-green-100 whitespace-nowrap focus:outline-none relative
         ${active ? 'text-green-200' : 'text-green-700 hover:opacity-80'}
         `}
    >
        <span className='relative'>{children}</span>
    </button>
)

export default ButtonBreadcrumb
